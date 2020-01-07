// Fill out your copyright notice in the Description page of Project Settings.


#include "CasterAttributeSet.h"
#include "UnrealNetwork.h"

void UCasterAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const {

    DOREPLIFETIME_CONDITION_NOTIFY(UCasterAttributeSet, BaseAbilityPower, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UCasterAttributeSet, BonusAbilityPower, COND_None, REPNOTIFY_Always);

    DOREPLIFETIME_CONDITION_NOTIFY(UCasterAttributeSet, CurrentResource, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UCasterAttributeSet, BaseResource, COND_None, REPNOTIFY_Always);
    DOREPLIFETIME_CONDITION_NOTIFY(UCasterAttributeSet, BonusResource, COND_None, REPNOTIFY_Always);

    DOREPLIFETIME_CONDITION_NOTIFY(UCasterAttributeSet, CooldownReduction, COND_None, REPNOTIFY_Always);

}

DEFINE_ATTRIBUTE_FUNCTION(UCasterAttributeSet, BaseAbilityPower);

DEFINE_ATTRIBUTE_FUNCTION(UCasterAttributeSet, BonusAbilityPower);

DEFINE_ATTRIBUTE_FUNCTION(UCasterAttributeSet, CurrentResource);

DEFINE_ATTRIBUTE_FUNCTION(UCasterAttributeSet, BaseResource);

DEFINE_ATTRIBUTE_FUNCTION(UCasterAttributeSet, BonusResource);

DEFINE_ATTRIBUTE_FUNCTION(UCasterAttributeSet, CooldownReduction);
