// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "AttributeMacros.h"
#include "OffensiveAttributeSet.generated.h"

/**
 * A stat focusing on offensive attributes, such as Attack Damage & Penetration.
 */
UCLASS()
class UOffensiveAttributeSet : public UAttributeSet {

	GENERATED_BODY()

public:

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

	// Base Attack Damage Stat, increased by unit level and Immortal Fist.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BaseAttackDamage)
	FGameplayAttributeData BaseAttackDamage;
	UFUNCTION()
	void OnRep_BaseAttackDamage(const FGameplayAttributeData& OldBaseAttackDamage) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BaseAttackDamage, OldBaseAttackDamage);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseAttackDamage);

	// Bonus Attack Damage stat, increased by buffs, perks, and items.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BonusAttackDamage)
	FGameplayAttributeData BonusAttackDamage;
	UFUNCTION()
	void OnRep_BonusAttackDamage(const FGameplayAttributeData& OldBonusAttackDamage) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BonusAttackDamage, OldBonusAttackDamage);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusAttackDamage);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BaseFlatPhysicalArmorPenetration)
	FGameplayAttributeData BaseFlatPhysicalArmorPenetration;
	UFUNCTION()
	void OnRep_BaseFlatPhysicalArmorPenetration(const FGameplayAttributeData& OldBaseFlatPhysicalArmorPenetration) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BaseFlatPhysicalArmorPenetration, OldBaseFlatPhysicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseFlatPhysicalArmorPenetration);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BonusFlatPhysicalArmorPenetration)
	FGameplayAttributeData BonusFlatPhysicalArmorPenetration;
	UFUNCTION()
	void OnRep_BonusFlatPhysicalArmorPenetration(const FGameplayAttributeData& OldBonusFlatPhysicalArmorPenetration) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BonusFlatPhysicalArmorPenetration, OldBonusFlatPhysicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusFlatPhysicalArmorPenetration);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BaseFlatMagicalArmorPenetration)
	FGameplayAttributeData BaseFlatMagicalArmorPenetration;
	UFUNCTION()
	void OnRep_BaseFlatMagicalArmorPenetration(const FGameplayAttributeData& OldBaseFlatMagicalArmorPenetration) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BaseFlatMagicalArmorPenetration, OldBaseFlatMagicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseFlatMagicalArmorPenetration);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BonusFlatMagicalArmorPenetration)
	FGameplayAttributeData BonusFlatMagicalArmorPenetration;
	UFUNCTION()
	void OnRep_BonusFlatMagicalArmorPenetration(const FGameplayAttributeData& OldBonusFlatMagicalArmorPenetration) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BonusFlatMagicalArmorPenetration, OldBonusFlatMagicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusFlatMagicalArmorPenetration);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BaseAttackSpeed)
	FGameplayAttributeData BaseAttackSpeed;
	UFUNCTION()
	void OnRep_BaseAttackSpeed(const FGameplayAttributeData& OldBaseAttackSpeed) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BaseAttackSpeed, OldBaseAttackSpeed);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseAttackSpeed);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BonusAttackSpeed)
	FGameplayAttributeData BonusAttackSpeed;
	UFUNCTION()
	void OnRep_BonusAttackSpeed(const FGameplayAttributeData& OldBonusAttackSpeed) {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BonusAttackSpeed, OldBonusAttackSpeed);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusAttackSpeed);
	
};
