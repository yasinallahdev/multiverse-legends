// Fill out your copyright notice in the Description page of Project Settings.


#include "MovementAttributeSet.h"
#include "UnrealNetwork.h"

void UMovementAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {
    
    DOREPLIFETIME_CONDITION_NOTIFY(UMovementAttributeSet, BaseMovementSpeed, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UMovementAttributeSet, BonusMovementSpeed, COND_None, REPNOTIFY_Always);

}

DEFINE_ATTRIBUTE_FUNCTION(UMovementAttributeSet, BaseMovementSpeed)

DEFINE_ATTRIBUTE_FUNCTION(UMovementAttributeSet, BonusMovementSpeed)
