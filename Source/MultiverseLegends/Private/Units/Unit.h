// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "Ability Core/MLAbilitySystemInterface.h"
#include "UnitEvents.h"
#include "Unit.generated.h"

UENUM(BlueprintType)
enum class ETeam : uint8 {
	Neutral,
	Green,
	Purple
};

UCLASS()
class AUnit : public ACharacter, public IMLAbilitySystemInterface {

	GENERATED_BODY()

public:
	// Sets default values for this character's properties
	AUnit(const FObjectInitializer& ObjectInitializer);

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:	
	// Called every frame
	virtual void Tick(float DeltaTime) override;

	// Called to bind functionality to input
	virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

	virtual bool ActorOwnsAbilitySystem() const override { return bOwnsAblitySystem; }

	virtual UAbilitySystemComponent* GetAbilitySystemComponent() const override { return GetMLAbilitySystemComponent(); } 

	virtual UMLAbilitySystemComponent* GetMLAbilitySystemComponent() const override;

	// Determine if a unit should acknowledge that it interacted with a Projectile.
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Projectile Interaction")
	bool ProjectileCross(class AMLProjectileBase* Projectile);

	// Determine how a unit should react to interacting with a projectile.
	UFUNCTION(BlueprintNativeEvent, BlueprintCallable, Category = "Projectile Interaction")
	void ProjectileCrossed(class AMLProjectileBase* Projectile);

protected:

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Unit Attack")
	TSubclassOf<class UMLBasicAttackAbilityBase> UnitBasicAttack;

	virtual void GenerateAbilitySystem();

	bool LinkOutsideActorAbilitySystem(IMLAbilitySystemInterface* LinkActor);

	void UnlinkOutsideActorAbilitySystem();
	
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Ability Info")
	uint8 bSpawnOwnedASCInBeginPlay : 1;

	// Called when something crosses the Unit Component.
	UFUNCTION()
	virtual void OnBeginOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);

	// Called when something stops crossing the Unit Component.
	UFUNCTION()
	virtual void OnEndOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);

	UPROPERTY(BlueprintAssignable, Category = "Unit Events")
	FOnDeath EventOnDeath; 

	UPROPERTY(BlueprintAssignable, Category = "Unit Events")
	FOnTakeDamage EventOnTakeDamage;

	UPROPERTY(BlueprintAssignable, Category = "Unit Events")
	FOnDealDamage EventOnDealtDamage;


private:

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Ability Info", meta = (AllowPrivateAccess = "true"))
	ETeam UnitTeam = ETeam::Neutral;

	UPROPERTY()
	UMLAbilitySystemComponent* AbilitySystem;

	UPROPERTY()
	TWeakObjectPtr<UMLAbilitySystemComponent> PlayerStateAbilitySystem;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Ability Info", meta = (AllowPrivateAccess = "true"))
	uint8 bOwnsAblitySystem : 1;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Ability Info", meta = (AllowPrivateAccess = "true"))
	uint8 bGeneratedAbilitySystem : 1;

	// The Capsule Component that this Unit will use for hitbox-based interactions, such as Projectiles.
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Hitbox", meta = (AllowPrivateAccess = "true"))
	class UUnitCapsuleComponent* UnitCapsuleComponent;

};
