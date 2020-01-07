// Fill out your copyright notice in the Description page of Project Settings.


#include "DefenseAttributeSet.h"
#include "UnrealNetwork.h"

void UDefenseAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {
    
    DOREPLIFETIME_CONDITION_NOTIFY(UDefenseAttributeSet, CurrentHealth, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UDefenseAttributeSet, BaseHealth, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UDefenseAttributeSet, BonusHealth, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UDefenseAttributeSet, BasePhysicalArmor, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UDefenseAttributeSet, BonusPhysicalArmor, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UDefenseAttributeSet, BaseMagicalArmor, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UDefenseAttributeSet, BonusMagicalArmor, COND_None, REPNOTIFY_Always);
    
}

DEFINE_ATTRIBUTE_FUNCTION(UDefenseAttributeSet, CurrentHealth);
DEFINE_ATTRIBUTE_FUNCTION(UDefenseAttributeSet, BaseHealth);
DEFINE_ATTRIBUTE_FUNCTION(UDefenseAttributeSet, BonusHealth);
DEFINE_ATTRIBUTE_FUNCTION(UDefenseAttributeSet, BasePhysicalArmor);
DEFINE_ATTRIBUTE_FUNCTION(UDefenseAttributeSet, BonusPhysicalArmor);
DEFINE_ATTRIBUTE_FUNCTION(UDefenseAttributeSet, BaseMagicalArmor);
DEFINE_ATTRIBUTE_FUNCTION(UDefenseAttributeSet, BonusMagicalArmor);
