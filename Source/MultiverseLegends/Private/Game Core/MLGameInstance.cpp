// Fill out your copyright notice in the Description page of Project Settings.


#include "MLGameInstance.h"
#include "Runtime/NetworkReplayStreaming/NullNetworkReplayStreaming/Public/NullNetworkReplayStreaming.h"
#include "Misc/NetworkVersion.h"

void UMLGameInstance::Init() {
	Super::Init();
	
	// create a ReplayStreamer for FindReplays() and DeleteReplay(..)
	EnumerateStreamsPtr = FNetworkReplayStreaming::Get().GetFactory().CreateReplayStreamer();
	// Link FindReplays() delegate to function
	OnEnumerateStreamsCallback.BindUObject(this, &UMLGameInstance::OnEnumerateStreamsComplete);
	// Link DeleteReplay() delegate to function
	OnDeleteFinishedStreamCallback.BindUObject(this, &UMLGameInstance::OnDeleteFinishedStreamComplete);
}

void UMLGameInstance::StartRecordingReplayFromBP(FString ReplayName, FString FriendlyName) {
	StartRecordingReplay(ReplayName, FriendlyName);
}

void UMLGameInstance::StopRecordingReplayFromBP() {
	StopRecordingReplay();
}

void UMLGameInstance::PlayReplayFromBP(FString ReplayName) {
	PlayReplay(ReplayName);
}

void UMLGameInstance::FindReplays() {
	if (EnumerateStreamsPtr.Get())
	{
		EnumerateStreamsPtr.Get()->EnumerateStreams(FNetworkReplayVersion(), 0, FString(), TArray<FString>(), OnEnumerateStreamsCallback);
	}
}

void UMLGameInstance::OnEnumerateStreamsComplete(const FEnumerateStreamsResult& EnumeratedStreamInfo) {
	TArray<FS_ReplayInfo> AllReplays;

	for (FNetworkReplayStreamInfo StreamInfo : EnumeratedStreamInfo.FoundStreams) {
		if (!StreamInfo.bIsLive) {
			AllReplays.Add(FS_ReplayInfo(StreamInfo.Name, StreamInfo.FriendlyName, StreamInfo.Timestamp, StreamInfo.LengthInMS));
		}
	}

	BP_OnFindReplaysComplete(AllReplays);
}

void UMLGameInstance::RenameReplay(const FString &ReplayName, const FString &NewFriendlyReplayName) {	
	// Get File Info
	FNullReplayInfo Info;

	const FString DemoPath = FPaths::Combine(*FPaths::ProjectSavedDir(), TEXT("Demos/"));
	const FString StreamDirectory = FPaths::Combine(*DemoPath, *ReplayName);
	const FString StreamFullBaseFilename = FPaths::Combine(*StreamDirectory, *ReplayName);
	const FString InfoFilename = StreamFullBaseFilename + TEXT(".replayinfo");

	TUniquePtr<FArchive> InfoFileArchive(IFileManager::Get().CreateFileReader(*InfoFilename));

	if (InfoFileArchive.IsValid() && InfoFileArchive->TotalSize() != 0) {
		FString JsonString;
		*InfoFileArchive << JsonString;

		Info.FromJson(JsonString);
		Info.bIsValid = true;

		InfoFileArchive->Close();
	}

	// Set FriendlyName
	Info.FriendlyName = NewFriendlyReplayName;

	// Write File Info
	TUniquePtr<FArchive> ReplayInfoFileAr(IFileManager::Get().CreateFileWriter(*InfoFilename));

	if (ReplayInfoFileAr.IsValid()) {
		FString JsonString = Info.ToJson();
		*ReplayInfoFileAr << JsonString;

		ReplayInfoFileAr->Close();
	}
}

void UMLGameInstance::DeleteReplay(const FString &ReplayName) {
	if (EnumerateStreamsPtr.Get()) {
		EnumerateStreamsPtr.Get()->DeleteFinishedStream(ReplayName, OnDeleteFinishedStreamCallback);
	}
}

void UMLGameInstance::OnDeleteFinishedStreamComplete(const FDeleteFinishedStreamResult& DeletedStreamResult) {
	FindReplays();
}
