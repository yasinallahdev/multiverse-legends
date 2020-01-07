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
	void OnRep_BaseAttackDamage() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BaseAttackDamage);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseAttackDamage);

	// Bonus Attack Damage stat, increased by buffs, perks, and items.
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BonusAttackDamage)
	FGameplayAttributeData BonusAttackDamage;
	UFUNCTION()
	void OnRep_BonusAttackDamage() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BonusAttackDamage);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusAttackDamage);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BaseFlatPhysicalArmorPenetration)
	FGameplayAttributeData BaseFlatPhysicalArmorPenetration;
	UFUNCTION()
	void OnRep_BaseFlatPhysicalArmorPenetration() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BaseFlatPhysicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseFlatPhysicalArmorPenetration);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BonusFlatPhysicalArmorPenetration)
	FGameplayAttributeData BonusFlatPhysicalArmorPenetration;
	UFUNCTION()
	void OnRep_BonusFlatPhysicalArmorPenetration() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BonusFlatPhysicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusFlatPhysicalArmorPenetration);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BaseFlatMagicalArmorPenetration)
	FGameplayAttributeData BaseFlatMagicalArmorPenetration;
	UFUNCTION()
	void OnRep_BaseFlatMagicalArmorPenetration() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BaseFlatMagicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseFlatMagicalArmorPenetration);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Offense Attributes", ReplicatedUsing = OnRep_BonusFlatMagicalArmorPenetration)
	FGameplayAttributeData BonusFlatMagicalArmorPenetration;
	UFUNCTION()
	void OnRep_BonusFlatMagicalArmorPenetration() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UOffensiveAttributeSet, BonusFlatMagicalArmorPenetration);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusFlatMagicalArmorPenetration);
	
};
