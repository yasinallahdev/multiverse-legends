// Fill out your copyright notice in the Description page of Project Settings.


#include "Champion.h"
#include "Player Core/MLPlayerState.h"
#include "UnrealNetwork.h"

AChampion::AChampion(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) {
    
}

void AChampion::OnRep_MasterPlayerState() {
    
}

void AChampion::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {
    
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);

    DOREPLIFETIME_CONDITION_NOTIFY(AChampion, MasterPlayerState, COND_None, REPNOTIFY_Always);

}

AMLPlayerState* AChampion::SetMasterPlayerState(AMLPlayerState* NewMasterPlayerState, bool updateController)  {

    if(MasterPlayerState && (MasterPlayerState->GetRegisteredChampion() == this)) {
        FMLRegisterPlayerStateChampion(MasterPlayerState, nullptr);
    }
    AMLPlayerState* OldMasterPlayerState = MasterPlayerState;
    MasterPlayerState = NewMasterPlayerState;
    OnMasterPlayerStateUpdated.Broadcast(OldMasterPlayerState, NewMasterPlayerState);
    if(MasterPlayerState) {
        FMLRegisterPlayerStateChampion(MasterPlayerState, this);
    }

    return MasterPlayerState;

}
