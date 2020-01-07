// Fill out your copyright notice in the Description page of Project Settings.


#include "OffensiveAttributeSet.h"
#include "UnrealNetwork.h"

void UOffensiveAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {

    DOREPLIFETIME_CONDITION_NOTIFY(UOffensiveAttributeSet, BaseAttackDamage, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UOffensiveAttributeSet, BonusAttackDamage, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UOffensiveAttributeSet, BaseFlatPhysicalArmorPenetration, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UOffensiveAttributeSet, BonusFlatPhysicalArmorPenetration, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UOffensiveAttributeSet, BaseFlatMagicalArmorPenetration, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UOffensiveAttributeSet, BonusFlatMagicalArmorPenetration, COND_None, REPNOTIFY_Always);

}

DEFINE_ATTRIBUTE_FUNCTION(UOffensiveAttributeSet, BaseAttackDamage);

DEFINE_ATTRIBUTE_FUNCTION(UOffensiveAttributeSet, BonusAttackDamage);

DEFINE_ATTRIBUTE_FUNCTION(UOffensiveAttributeSet, BaseFlatPhysicalArmorPenetration);

DEFINE_ATTRIBUTE_FUNCTION(UOffensiveAttributeSet, BonusFlatPhysicalArmorPenetration);

DEFINE_ATTRIBUTE_FUNCTION(UOffensiveAttributeSet, BaseFlatMagicalArmorPenetration);

DEFINE_ATTRIBUTE_FUNCTION(UOffensiveAttributeSet, BonusFlatMagicalArmorPenetration);
