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

	// Override for the Standard GameplayAbility's cooldown tags; this is the main cooldown tags + the tags in the CooldownTags function
	virtual const FGameplayTagContainer* GetCooldownTags() const override;

	// Applies the cooldown for this ability, adding its cooldown tags to the caster's Ability System Component
	virtual void ApplyCooldown(const FGameplayAbilitySpecHandle Handle, const FGameplayAbilityActorInfo * ActorInfo, const FGameplayAbilityActivationInfo ActivationInfo) const override;

	// Returns the Scalable Float Cost for this ability
	FScalableFloat GetAbilityCost() const { return Cost; }

	// Returns the Cost for this ability at a specific level
	float GetAbilityCostAtLevel(float Level) const { return Cost.GetValueAtLevel(Level); }

	// Returns the Scalable Float Cooldown Duration for this ability
	FScalableFloat GetAbilityCooldownDuration() const { return CooldownDuration; }

	// Returns the Cooldown Duration for this ability at a specific level
	float GetAbilityCooldownDurationAtLevel(float Level) const { return CooldownDuration.GetValueAtLevel(Level); }

protected:

	// The Resource Cost (usually Mana) required to activate this ability
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Cooldown and Cost")
	FScalableFloat Cost;

	// The duration of the cooldown for this ability
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Cooldown and Cost")
	FScalableFloat CooldownDuration;

	// The tags for this ability's cooldown
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Cooldown and Cost")
	FGameplayTagContainer CooldownTags;

	UPROPERTY()
	FGameplayTagContainer TempCooldownTags;

};
