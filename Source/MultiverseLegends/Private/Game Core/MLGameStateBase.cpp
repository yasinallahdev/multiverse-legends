// Fill out your copyright notice in the Description page of Project Settings.


#include "MLGameStateBase.h"
#include "Player Core/MLMasterPlayerController.h"
#include "Units/AI Types/PlayerChampion.h"
#include "Ability Core/MLAbilitySystemComponent.h"

float AMLGameStateBase::GetPlayerRespawnDelay(AController* Controller) const {

    AMLMasterPlayerController* PC = Cast<AMLMasterPlayerController>(Controller);

    APlayerChampion* PlayerChampion = PC->GetPlayerChampion();

    UMLAbilitySystemComponent* ASC = PlayerChampion->GetMLAbilitySystemComponent();

    float level = ASC->GetLevel();

    return 10 + (3.5 * level);

}
