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
    return (AbilitySystem)?(AbilitySystem->GetStat(EMLStatType::MovementSpeed)):(0.0f);

}
