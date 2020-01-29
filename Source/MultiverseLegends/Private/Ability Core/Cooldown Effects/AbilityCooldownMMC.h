// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameplayModMagnitudeCalculation.h"
#include "AbilityCooldownMMC.generated.h"

/**
 * 
 */
UCLASS()
class UAbilityCooldownMMC : public UGameplayModMagnitudeCalculation {

	GENERATED_BODY()

public:

	UAbilityCooldownMMC(const FObjectInitializer& ObjectInitializer);

	float CalculateBaseMagnitude_Implementation(const FGameplayEffectSpec & Spec) const;

private:

	FGameplayEffectAttributeCaptureDefinition CooldownReductionDef;
	
};
