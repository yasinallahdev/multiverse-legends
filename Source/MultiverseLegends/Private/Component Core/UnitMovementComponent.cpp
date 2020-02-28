// Fill out your copyright notice in the Description page of Project Settings.


#include "UnitMovementComponent.h"
#include "Units/Unit.h"
#include "Ability Core/MLAbilitySystemComponent.h"

void UUnitMovementComponent::PostLoad() {

    Super::PostLoad();

	UnitOwner = Cast<AUnit>(CharacterOwner);

}

void UUnitMovementComponent::SetUpdatedComponent(USceneComponent* NewUpdatedComponent) {

    Super::SetUpdatedComponent(NewUpdatedComponent);

    UnitOwner = Cast<AUnit>(CharacterOwner);

}

float UUnitMovementComponent::GetMaxSpeed() const {

    UMLAbilitySystemComponent* AbilitySystem = UnitOwner->GetMLAbilitySystemComponent();

    if(AbilitySystem) {
        FGameplayTagContainer MovementBlockedTags;
        MovementBlockedTags.AddTag(FGameplayTag::RequestGameplayTag(TEXT("Debuffs.CrowdControl.Root")));
        MovementBlockedTags.AddTag(FGameplayTag::RequestGameplayTag(TEXT("Debuffs.CrowdControl.Stun")));
        MovementBlockedTags.AddTag(FGameplayTag::RequestGameplayTag(TEXT("Debuffs.CrowdControl.Airborne")));
        MovementBlockedTags.AddTag(FGameplayTag::RequestGameplayTag(TEXT("Debuffs.CrowdControl.Suppression")));
        if(AbilitySystem->HasAnyMatchingGameplayTags(MovementBlockedTags)) {
            return 0;
        }
        return AbilitySystem->GetStat(EMLStatType::MovementSpeed);
    } else {
        return 0;
    }

}
