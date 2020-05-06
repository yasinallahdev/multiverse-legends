// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AbilitySystemComponent.h"
#include "MLAbilitySystemComponent.generated.h"

UENUM(BlueprintType)
enum class EMLStatType : uint8 {
	CurrentHealth,
	MaximumHealth,
	AttackDamage,
	AttackSpeed,
	FlatPhysicalArmorPen,
	FlatMagicalArmorPen,
	PhysicalArmor,
	MagicalArmor,
	MovementSpeed,
	AbilityPower,
	CurrentResource,
	MaximumResource,
	CooldownReduction,
};

UENUM(BlueprintType)
enum class EStatGroup : uint8 {
	Base,
	Bonus,
	Total
};

/**
 * The Ability System Component is at the heart of Gameplay Mechanics 
 */
UCLASS()
class UMLAbilitySystemComponent final : public UAbilitySystemComponent {

	GENERATED_BODY()

public:

	UMLAbilitySystemComponent();
 
	UFUNCTION(BlueprintCallable)
	float GetStat(EMLStatType StatType, EStatGroup StatGroup = EStatGroup::Total) const;

	AActor* GetOwnerActor() const;

	// Returns Current Ability System Component Level.
	UFUNCTION(BlueprintCallable)
	float GetLevel() const { return AbilitySystemLevel; }

	// Sets the level for this ability system component. This is directly used to determine stats.
	UFUNCTION(BlueprintCallable)
	float SetLevel(float NewLevel) { return AbilitySystemLevel = FMath::RoundToZero(NewLevel); }

	bool SetGameplayEffectDurationHandle(FActiveGameplayEffectHandle Handle, float NewDuration);

	UFUNCTION(BlueprintCallable, Category = "GameplayCue", Meta = (AutoCreateRefTerm = "GameplayCueParameters", GameplayTagFilter = "GameplayCue"))
	void ExecuteGameplayCueLocal(const FGameplayTag& GameplayCueTag, const FGameplayCueParameters& GameplayCueParameters);

	UFUNCTION(BlueprintCallable, Category = "GameplayCue", Meta = (AutoCreateRefTerm = "GameplayCueParameters", GameplayTagFilter = "GameplayCue"))
	void AddGameplayCueLocal(const FGameplayTag& GameplayCueTag, const FGameplayCueParameters& GameplayCueParameters);

	UFUNCTION(BlueprintCallable, Category = "GameplayCue", Meta = (AutoCreateRefTerm = "GameplayCueParameters", GameplayTagFilter = "GameplayCue"))
	void RemoveGameplayCueLocal(const FGameplayTag& GameplayCueTag, const FGameplayCueParameters& GameplayCueParameters);

protected: 

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Flags")
	uint8 bHasMovementAttributes : 1;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Flags")
	uint8 bHasDefenseAttributes : 1;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Flags")
	uint8 bHasOffenseAttributes : 1; 

private:

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level & Experience", meta = (AllowPrivateAccess = "true"))
	float CurrentExperience;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level & Experience", meta = (AllowPrivateAccess = "true"))
	float AbilitySystemLevel;
	         
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Level & Experience", meta = (AllowPrivateAccess = "true"))
	int32 SkillPoints;

};
