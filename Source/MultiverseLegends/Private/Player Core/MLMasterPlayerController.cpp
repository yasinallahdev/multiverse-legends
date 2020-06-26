// Fill out your copyright notice in the Description page of Project Settings.


#include "MLMasterPlayerController.h"
#include "Engine/Engine.h"
#include "Units/AI Types/PlayerChampion.h"
#include "PlayerChampionAIController.h"
#include "Camera/CameraPawn.h"
#include "UnrealNetwork.h"

#define LOCTEXT_NAMESPACE "MasterPlayerController"

AMLMasterPlayerController::AMLMasterPlayerController(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) {
    bShowMouseCursor = true;
    bEnableClickEvents = true;
    bEnableTouchEvents = true;
}
 
void AMLMasterPlayerController::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {

    Super::GetLifetimeReplicatedProps(OutLifetimeProps);

    DOREPLIFETIME_CONDITION_NOTIFY(AMLMasterPlayerController, RegisteredChampion, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(AMLMasterPlayerController, LinkedAIController, COND_None, REPNOTIFY_Always);

}

void AMLMasterPlayerController::OnRegisterChampion(APlayerChampion* NewPlayerChampion) {
    
    const bool bNewChampion = GetPlayerChampion() != NewPlayerChampion;

    if(NewPlayerChampion != nullptr) {

        if(bNewChampion && GetPlayerChampion()) {
            Unregister();
        }

        if(NewPlayerChampion->MasterPlayerController != nullptr) {
            NewPlayerChampion->MasterPlayerController->Unregister();
        }

        NewPlayerChampion->Registered(this);

    }

}

void AMLMasterPlayerController::OnUnregisterChampion() {
    
    if(RegisteredChampion != nullptr) {
        RegisteredChampion->Unregistered();
        SetRegisteredChampion(nullptr);
    }

}

void AMLMasterPlayerController::SetPawn(APawn* InPawn) {

    Super::SetPawn(InPawn);

    CameraPawn = Cast<ACameraPawn>(InPawn);

}

void AMLMasterPlayerController::SetupInputComponent() {

    Super::SetupInputComponent();
    
	InputComponent->BindAction(TEXT("RightClick"), IE_Pressed, this, &AMLMasterPlayerController::OnRightClickPressed);
	InputComponent->BindAction(TEXT("RightClick"), IE_Released, this, &AMLMasterPlayerController::OnRightClickReleased);
    InputComponent->BindAction(TEXT("RightClick"), IE_Repeat, this, &AMLMasterPlayerController::OnRightClickHeld);

    InputComponent->BindAction(TEXT("MouseScrollUp"), IE_Pressed, this, &AMLMasterPlayerController::MouseScrollUp);
    InputComponent->BindAction(TEXT("MouseScrollDown"), IE_Pressed, this, &AMLMasterPlayerController::MouseScrollDown);

}

void AMLMasterPlayerController::MouseScrollUp() {
    if(!CameraPawn->bInvertAxis) {
        CameraPawn->CameraZoomIn();
    } else {
        CameraPawn->CameraZoomOut();
    }
}

void AMLMasterPlayerController::MouseScrollDown() {
    if(CameraPawn->bInvertAxis) {
        CameraPawn->CameraZoomIn();
    } else {
        CameraPawn->CameraZoomOut();
    }
}

void AMLMasterPlayerController::OnRightClickPressed() {

}

void AMLMasterPlayerController::OnRightClickReleased() {

}

void AMLMasterPlayerController::OnRightClickHeld() {

}

void AMLMasterPlayerController::OnRep_RegisteredChampion() {

    if( OldRegisteredChampion != nullptr && RegisteredChampion != OldRegisteredChampion.Get() 
    && OldRegisteredChampion->MasterPlayerController == this ) {
        OldRegisteredChampion->MasterPlayerController = nullptr;
    }

    OldRegisteredChampion = RegisteredChampion;

    RegisterChampion(RegisteredChampion);

}

void AMLMasterPlayerController::RegisterChampion(APlayerChampion* NewRegisteredChampion) {

    if (!bCanPossessWithoutAuthority && !HasAuthority()) {
		return;
	}

    OnRegisterChampion(NewRegisteredChampion);

    ReceiveChampionRegistered(NewRegisteredChampion);

}

void AMLMasterPlayerController::Unregister() {

    APlayerChampion* PreviousRegisteredChampion = GetPlayerChampion();

    OnUnregisterChampion();

    ReceiveChampionUnregistered(PreviousRegisteredChampion);



}

void AMLMasterPlayerController::SetRegisteredChampion(APlayerChampion* NewRegisteredChampion) {

    RemovePawnTickDependency(RegisteredChampion);

    RegisteredChampion = NewRegisteredChampion;

    AddPawnTickDependency(RegisteredChampion);

}

#undef LOCTEXT_NAMESPACE
