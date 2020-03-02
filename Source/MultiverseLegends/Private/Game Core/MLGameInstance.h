// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "NetworkReplayStreaming.h"
#include "MLGameInstance.generated.h"

USTRUCT(BlueprintType)
struct FS_ReplayInfo {

	GENERATED_USTRUCT_BODY()

	// Name of the replay we're referencing
	UPROPERTY(BlueprintReadOnly)
	FString ReplayName;

	// Human-chosen name of the replay
	UPROPERTY(BlueprintReadOnly)
	FString FriendlyName;

	// Current Replay Timestamp
	UPROPERTY(BlueprintReadOnly)
	FDateTime Timestamp;

	// Replay Length
	UPROPERTY(BlueprintReadOnly)
	int32 LengthInMS;

	// If the replay is valid, this will be true
	UPROPERTY(BlueprintReadOnly)
	bool bIsValid;

	FS_ReplayInfo(FString NewName, FString NewFriendlyName, FDateTime NewTimestamp, int32 NewLengthInMS) {
		ReplayName = NewName;
		FriendlyName = NewFriendlyName;
		Timestamp = NewTimestamp;
		LengthInMS = NewLengthInMS;
		bIsValid = true;
	}

	FS_ReplayInfo() {
		ReplayName = "Replay";
		FriendlyName = "Replay";
		Timestamp = FDateTime::MinValue();
		LengthInMS = 0;
		bIsValid = false;
	}
};

/**
 * The MLGameInstance contains features that allow for the recording
 * of gameplay for the purpose of replay data or kill-cams.
 */
UCLASS()
class UMLGameInstance : public UGameInstance {
	
	GENERATED_BODY()

public:

	/** Start recording a replay from blueprint. ReplayName = Name of file on disk, FriendlyName = Name of replay in UI */
	UFUNCTION(BlueprintCallable, Category = "Replays")
	void StartRecordingReplayFromBP(FString ReplayName, FString FriendlyName);

	/** Start recording a running replay and save it, from blueprint. */
	UFUNCTION(BlueprintCallable, Category = "Replays")
	void StopRecordingReplayFromBP();

	/** Start playback for a previously recorded Replay, from blueprint */
	UFUNCTION(BlueprintCallable, Category = "Replays")
	void PlayReplayFromBP(FString ReplayName);

	/** Start looking for/finding replays on the hard drive */
	UFUNCTION(BlueprintCallable, Category = "Replays")
	void FindReplays();

	/** Apply a new custom name to the replay (for UI only) */
	UFUNCTION(BlueprintCallable, Category = "Replays")
	void RenameReplay(const FString& ReplayName, const FString& NewFriendlyReplayName);

	/** Delete a previously recorded replay */
	UFUNCTION(BlueprintCallable, Category = "Replays")
	void DeleteReplay(const FString& ReplayName);

	virtual void Init() override;

private:

	// for FindReplays() 
	TSharedPtr<INetworkReplayStreamer> EnumerateStreamsPtr;
	FEnumerateStreamsCallback OnEnumerateStreamsCallback;

	void OnEnumerateStreamsComplete(const FEnumerateStreamsResult& EnumeratedStreamInfo);

	// for DeleteReplays(..)
	FDeleteFinishedStreamCallback OnDeleteFinishedStreamCallback;

	void OnDeleteFinishedStreamComplete(const FDeleteFinishedStreamResult& DeletedStreamResult);

protected:

	UFUNCTION(BlueprintImplementableEvent, Category = "Replays")
	void BP_OnFindReplaysComplete(const TArray<FS_ReplayInfo>& AllReplays);
	
};
