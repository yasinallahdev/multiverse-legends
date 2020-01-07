// Fill out your copyright notice in the Description page of Project Settings.


#include "PlayerChampionAIController.h"
#include "Units\AI Types\PlayerChampion.h"
#include "Ability Core\MLAbilitySystemComponent.h"
#include "Player Core\MLPlayerState.h"
#include "Player Core\MLMasterPlayerController.h"

void APlayerChampionAIController::SetPawn(APawn* InPawn) {

    APlayerChampion* InChampion = Cast<APlayerChampion>(InPawn);

    if(ensureAlways(InPawn == nullptr || InChampion != nullptr)) {

        Super::SetPawn(InPawn);

        PlayerChampion = InChampion;

    }

}

void APlayerChampionAIController::RecieveMasterPlayerStateUpdate(AMLPlayerState* OldMasterPlayerState, AMLPlayerState* NewMasterPlayerState){

    UnhookFromPlayerStateDelegates(OldMasterPlayerState);
    OwningPlayerState = NewMasterPlayerState;
    HookToPlayerStateDelegates(NewMasterPlayerState);

}

void APlayerChampionAIController::RecieveMasterPlayerControllerUpdate(AMLMasterPlayerController* OldMasterPlayerController, AMLMasterPlayerController* NewMasterPlayerController) {
    
    UnhookFromPlayerControllerDelegates(OldMasterPlayerController);
    MasterPlayerController = NewMasterPlayerController;
    HookToPlayerControllerDelegates(NewMasterPlayerController);

}

void APlayerChampionAIController::HookToPlayerControllerDelegates(AMLMasterPlayerController* PlayerControllerToHook) {

}

void APlayerChampionAIController::HookToPlayerStateDelegates(AMLPlayerState* PlayerStateToHook) {

}

void APlayerChampionAIController::UnhookFromPlayerControllerDelegates(AMLMasterPlayerController* PlayerControllerToUnhook) {

}

void APlayerChampionAIController::UnhookFromPlayerStateDelegates(AMLPlayerState* PlayerStateToUnhook) {

}
