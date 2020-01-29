// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Units/Unit.h"
#include "Player Core/CorePlayerDelegates.h"
#include "Champion.generated.h"

class UMLGameplayAbility;

/**
 * 
 */
UCLASS()
class AChampion : public AUnit {

	GENERATED_BODY()

	friend class AMLPlayerState;

public:

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

	AChampion(const FObjectInitializer& ObjectInitializer);

	virtual AMLPlayerState* SetMasterPlayerState(AMLPlayerState* NewMasterPlayerState, bool updateController = false);

	AMLPlayerState* GetMasterPlayerState() { return MasterPlayerState; }

	

protected:

	UPROPERTY()
	TSubclassOf<UMLGameplayAbility> Ability1;

	UPROPERTY()
	TSubclassOf<UMLGameplayAbility> Ability2;

	UPROPERTY()
	TSubclassOf<UMLGameplayAbility> Ability3;

	UPROPERTY()
	TSubclassOf<UMLGameplayAbility> Ability4;

	UPROPERTY(BlueprintAssignable, Category = "Events")
	FOnMasterPlayerStateUpdated OnMasterPlayerStateUpdated;

	// The Master Player State for this Champion. This is shared by Champion Subtypes to figure out the primary PlayerState in control.
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Master Info", ReplicatedUsing = OnRep_MasterPlayerState)
	AMLPlayerState* MasterPlayerState;
	UFUNCTION()
	virtual void OnRep_MasterPlayerState();

};
