// Fill out your copyright notice in the Description page of Project Settings.


#include "BasicAttackCooldownEffect.h"
#include "MLBasicAttackCooldownCalculator.h"

UBasicAttackCooldownEffect::UBasicAttackCooldownEffect(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) { 

    FCustomCalculationBasedFloat AttackCooldownCalculator;

    AttackCooldownCalculator.CalculationClassMagnitude = UMLBasicAttackCooldownCalculator::StaticClass();

    DurationMagnitude = FGameplayEffectModifierMagnitude(AttackCooldownCalculator);

}
