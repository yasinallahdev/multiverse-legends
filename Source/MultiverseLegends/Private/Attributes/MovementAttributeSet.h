// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "AttributeMacros.h"
#include "MovementAttributeSet.generated.h"

/**
 * 
 */
UCLASS()
class UMovementAttributeSet : public UAttributeSet {

	GENERATED_BODY()

public:

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Movement Attributes", ReplicatedUsing = OnRep_BaseMovementSpeed)
	FGameplayAttributeData BaseMovementSpeed;
	UFUNCTION()
	void OnRep_BaseMovementSpeed() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UMovementAttributeSet, BaseMovementSpeed);
	}

    DECLARE_ATTRIBUTE_FUNCTION(BaseMovementSpeed);

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Movement Attributes", ReplicatedUsing = OnRep_BonusMovementSpeed)
	FGameplayAttributeData BonusMovementSpeed;
	UFUNCTION()
	void OnRep_BonusMovementSpeed() {
		GAMEPLAYATTRIBUTE_REPNOTIFY(UMovementAttributeSet, BonusMovementSpeed);
	}

    DECLARE_ATTRIBUTE_FUNCTION(BonusMovementSpeed);
	
};
