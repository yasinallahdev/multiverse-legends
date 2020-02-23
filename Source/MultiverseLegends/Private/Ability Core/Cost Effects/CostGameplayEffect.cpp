// Fill out your copyright notice in the Description page of Project Settings.


#include "CostGameplayEffect.h"
#include "AbilityCostMMC.h"
#include "Attributes/CasterAttributeSet.h"

UCostGameplayEffect::UCostGameplayEffect(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) {

    FGameplayModifierInfo CostModifier;

    // Current Resource can be Mana, Energy, Rage, etc. Abilities using Health as a Cost will use a subclass of this effect with different rules.
    CostModifier.Attribute = UCasterAttributeSet::CurrentResourceAttribute();

    FCustomCalculationBasedFloat CostCalculationFloat;
    CostCalculationFloat.CalculationClassMagnitude = UAbilityCostMMC::StaticClass();

    CostModifier.ModifierMagnitude = FGameplayEffectModifierMagnitude(CostCalculationFloat);

    Modifiers.Add(CostModifier);

}
