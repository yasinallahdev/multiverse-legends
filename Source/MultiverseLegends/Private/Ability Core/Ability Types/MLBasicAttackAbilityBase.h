// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Abilities/GameplayAbility.h"
#include "MLBasicAttackAbilityBase.generated.h"

/**
 * All Units possess the ability to Basic Attack.
 */
UCLASS()
class UMLBasicAttackAbilityBase : public UGameplayAbility {

	GENERATED_BODY()

public:

	UMLBasicAttackAbilityBase();
	
};
