// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameplayModMagnitudeCalculation.h"
#include "MLBasicAttackCooldownCalculator.generated.h"

/**
 * 
 */
UCLASS()
class UMLBasicAttackCooldownCalculator : public UGameplayModMagnitudeCalculation {

	GENERATED_BODY()

public:

	UMLBasicAttackCooldownCalculator(const FObjectInitializer& ObjectInitializer);

	virtual float CalculateBaseMagnitude_Implementation(const FGameplayEffectSpec& Spec) const override;

private:
	
    FGameplayEffectAttributeCaptureDefinition BaseAttackSpeedDef;
    FGameplayEffectAttributeCaptureDefinition BonusAttackSpeedDef;
	
};
