// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Abilities/GameplayAbility.h"
#include "MLGameplayAbility.generated.h"

/**
 * 
 */
UCLASS()
class UMLGameplayAbility : public UGameplayAbility {
	
	GENERATED_BODY()

public:

	UMLGameplayAbility();

	virtual const FGameplayTagContainer* GetCooldownTags() const override;

	virtual void ApplyCooldown(const FGameplayAbilitySpecHandle Handle, const FGameplayAbilityActorInfo * ActorInfo, const FGameplayAbilityActivationInfo ActivationInfo) const override;

	FScalableFloat GetAbilityCost() const { return Cost; }

	FScalableFloat GetAbilityCooldownDuration() const { return CooldownDuration; }

protected:

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Cooldown and Cost")
	FScalableFloat Cost;

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Cooldown and Cost")
	FScalableFloat CooldownDuration;

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Cooldown and Cost")
	FGameplayTagContainer CooldownTags;

	UPROPERTY()
	FGameplayTagContainer TempCooldownTags;

};
