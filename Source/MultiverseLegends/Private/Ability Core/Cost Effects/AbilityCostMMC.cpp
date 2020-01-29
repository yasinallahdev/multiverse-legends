// Fill out your copyright notice in the Description page of Project Settings.


#include "AbilityCostMMC.h"
#include "Ability Core/Ability Types/MLGameplayAbility.h"

float UAbilityCostMMC::CalculateBaseMagnitude_Implementation(const FGameplayEffectSpec & Spec) const {

    const UMLGameplayAbility* Ability = Cast<UMLGameplayAbility>(Spec.GetContext().GetAbilityInstance_NotReplicated());

    if(!Ability) {
        return 0.0f;
    }

    return Ability->GetAbilityCost().GetValueAtLevel(Ability->GetAbilityLevel());

}
