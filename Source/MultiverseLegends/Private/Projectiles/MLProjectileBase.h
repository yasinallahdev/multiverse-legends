// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "MLProjectileBase.generated.h"

/**
 * Projectiles Inherit from this as a base class.
 */
UCLASS()
class AMLProjectileBase : public AActor {

	GENERATED_BODY()
	
public:	
	// Sets default values for this actor's properties
	AMLProjectileBase();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:	
	// Called every frame
	virtual void Tick(float DeltaTime) override;

	// Get Projectile Movement Component
	UFUNCTION(BlueprintCallable)
	class UMLProjectileMovementComponent* GetMovementComponent() const { return ProjectileMovement; }

	// Determine if a projectile should acknowledge that it has interacted with a unit.
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Unit Interaction")
	bool UnitCross(class AUnit* Unit);

	// Determine how the projectile should react to interacting with a unit.
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Unit Interaction")
	void UnitCrossed(class AUnit* Unit);

	
protected:

	// Called when something crosses the Projectile Component.
	UFUNCTION()
	virtual void OnBeginOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

	// Called when something stops crossing the Projectile Component.
	UFUNCTION()
	virtual void OnEndOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);


private:

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Projectile Data", meta = (AllowPrivateAccess = "true"))
	class UMLProjectileInteractionComponent* ProjectileInteractionComponent;

	// The Projectile Movement Component, which does all of the travel interactions.
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Projectile Data", meta = (AllowPrivateAccess = "true"))
	class UMLProjectileMovementComponent* ProjectileMovement;

	// The default movement speed for the projectile, measured in units travelled per second.
	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Projectile Data", meta = (AllowPrivateAccess = "true"))
	float DefaultProjectileSpeed;

};
