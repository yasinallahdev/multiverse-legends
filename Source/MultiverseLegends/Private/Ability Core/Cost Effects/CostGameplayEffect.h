// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameplayEffect.h"
#include "CostGameplayEffect.generated.h"

/**
 * The reusable Cost Gameplay Effect, designed to prevent duplication of GameplayEffects for Ability Cost.
 */
UCLASS()
class UCostGameplayEffect : public UGameplayEffect {

	GENERATED_BODY()

public:

	UCostGameplayEffect(const FObjectInitializer& ObjectInitializer);
	
};
