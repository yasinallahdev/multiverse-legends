// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "AttributeMacros.h"
#include "CasterAttributeSet.generated.h"

/**
 * 
 */
UCLASS()
class UCasterAttributeSet : public UAttributeSet {

	GENERATED_BODY()

public:

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutProps) const override;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Caster Stats", ReplicatedUsing = OnRep_BaseAbilityPower)
	FGameplayAttributeData BaseAbilityPower;
	UFUNCTION()
	void OnRep_BaseAbilityPower() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UCasterAttributeSet, BaseAbilityPower);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseAbilityPower);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Caster Stats", ReplicatedUsing = OnRep_BonusAbilityPower)
	FGameplayAttributeData BonusAbilityPower;
	UFUNCTION()
	void OnRep_BonusAbilityPower() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UCasterAttributeSet, BonusAbilityPower);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusAbilityPower);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Caster Stats", ReplicatedUsing = OnRep_CurrentResource)
	FGameplayAttributeData CurrentResource;
	UFUNCTION()
	void OnRep_CurrentResource() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UCasterAttributeSet, CurrentResource);
	}

	DECLARE_ATTRIBUTE_FUNCTION(CurrentResource);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Caster Stats", ReplicatedUsing = OnRep_BaseResource)
	FGameplayAttributeData BaseResource;
	UFUNCTION()
	void OnRep_BaseResource() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UCasterAttributeSet, BaseResource);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BaseResource);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Caster Stats", ReplicatedUsing = OnRep_BonusResource)
	FGameplayAttributeData BonusResource;
	UFUNCTION()
	void OnRep_BonusResource() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UCasterAttributeSet, BonusResource);
	}

	DECLARE_ATTRIBUTE_FUNCTION(BonusResource);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Caster Stats", ReplicatedUsing = OnRep_CooldownReduction)
	FGameplayAttributeData CooldownReduction;
	UFUNCTION()
	void OnRep_CooldownReduction() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UCasterAttributeSet, CooldownReduction);
	}

	DECLARE_ATTRIBUTE_FUNCTION(CooldownReduction);

};
