// Fill out your copyright notice in the Description page of Project Settings.


#include "CooldownGameplayEffect.h"
#include "AbilityCooldownMMC.h"

UCooldownGameplayEffect::UCooldownGameplayEffect(const FObjectInitializer& ObjectInitializer) {

    FCustomCalculationBasedFloat AbilityCooldownCalculator;

    AbilityCooldownCalculator.CalculationClassMagnitude = UAbilityCooldownMMC::StaticClass();

    DurationMagnitude = FGameplayEffectModifierMagnitude(AbilityCooldownCalculator);
}
