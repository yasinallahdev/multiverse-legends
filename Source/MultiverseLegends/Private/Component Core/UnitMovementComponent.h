// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "UnitMovementComponent.generated.h"

class AUnit;

/**
 * 
 */
UCLASS()
class UUnitMovementComponent : public UCharacterMovementComponent {

	GENERATED_BODY()

public:

	virtual float GetMaxSpeed() const override;
	virtual void PostLoad() override;
	virtual void SetUpdatedComponent(USceneComponent* NewUpdatedComponent) override;

private:

	UPROPERTY()
	AUnit* UnitOwner;
	
};
