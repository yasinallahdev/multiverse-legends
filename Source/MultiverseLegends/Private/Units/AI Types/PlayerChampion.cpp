// Fill out your copyright notice in the Description page of Project Settings.


#include "PlayerChampion.h"
#include "Player Core/PlayerChampionAIController.h"
#include "Player Core/MLMasterPlayerController.h"
#include "UnrealNetwork.h"
#include "Player Core/MLPlayerState.h"

APlayerChampion::APlayerChampion(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) {
    AIControllerClass = APlayerChampionAIController::StaticClass();
}

void APlayerChampion::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {
    
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);

}

void APlayerChampion::Registered(AMLMasterPlayerController* NewMasterPlayerController) {

    AMLMasterPlayerController* const OldMasterPlayerController = MasterPlayerController;
    APlayerChampionAIController* PCAIController = GetController<APlayerChampionAIController>();

    MasterPlayerController = NewMasterPlayerController;
    if(PCAIController) {
        PCAIController->HookToPlayerControllerDelegates(MasterPlayerController);
    }

    if(MasterPlayerController->PlayerState != nullptr ) {
        SetMasterPlayerState(Cast<AMLPlayerState>(MasterPlayerController->PlayerState));
    }

}

void APlayerChampion::Unregistered() {

    APlayerChampionAIController* PCAIController = GetController<APlayerChampionAIController>();
    if(PCAIController) {
        PCAIController->bShouldIgnoreInput = true;
        PCAIController->UnhookFromPlayerControllerDelegates(MasterPlayerController);
    }

    UMLAbilitySystemComponent* PlayerAbilitySystem = GetMLAbilitySystemComponent();

    if(PlayerAbilitySystem) {
        PlayerAbilitySystem->CancelAllAbilities();
    }

    SetMasterPlayerState(nullptr);

}

AMLPlayerState* APlayerChampion::SetMasterPlayerState(AMLPlayerState* NewMasterPlayerState, bool updateController) {

    APlayerChampionAIController* PCAIController = GetController<APlayerChampionAIController>();

    if(PCAIController) {
        PCAIController->UnhookFromPlayerStateDelegates(MasterPlayerState);
    }

    Super::SetMasterPlayerState(NewMasterPlayerState);


    if(MasterPlayerState && PCAIController) {
        PCAIController->HookToPlayerStateDelegates(MasterPlayerState);
    }

    if(updateController && PCAIController) {

        PCAIController->SetOwningPlayerState(MasterPlayerState);

    }

    return MasterPlayerState;

}

class UNetConnection* APlayerChampion::GetNetConnection() const {\
	// If this Champion has a Master Player Controller, the MPC has the net connection
	if ( MasterPlayerController )
	{
		return MasterPlayerController->GetNetConnection();
	}
	return Super::GetNetConnection();
}
