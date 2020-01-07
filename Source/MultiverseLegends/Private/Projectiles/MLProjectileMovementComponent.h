// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/ProjectileMovementComponent.h"
#include "MLProjectileMovementComponent.generated.h"

/**
 * 
 */
UCLASS()
class UMLProjectileMovementComponent : public UProjectileMovementComponent {

	GENERATED_BODY()

public:

	virtual float GetMaxSpeed() const override { return GetProjectileSpeed(); }

	FORCEINLINE float SetProjectileSpeed(const float& NewProjectileSpeed) { return ProjectileSpeed = NewProjectileSpeed; }

	FORCEINLINE float GetProjectileSpeed() const { return ProjectileSpeed; }

protected:

	// How fast the projectile we spawn will travel in units per second.
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Projectile Info", meta = (AllowPrivateAccess = "true"))
	float ProjectileSpeed;
	
};
