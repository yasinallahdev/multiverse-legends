// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Units/Unit.h"
#include "Player Core/Core Delegates.h"
#include "Champion.generated.h"

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

	virtual void SetMasterPlayerState(AMLPlayerState* NewMasterPlayerState);

	AMLPlayerState* GetMasterPlayerState() { return MasterPlayerState; }

	

protected:

	FOnMasterPlayerStateUpdated OnMasterPlayerStateUpdated;

	// The Master Player State for this Champion. This is shared by Champion Subtypes to figure out the primary PlayerState in control.
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Master Info", ReplicatedUsing = OnRep_MasterPlayerState)
	AMLPlayerState* MasterPlayerState;
	UFUNCTION()
	virtual void OnRep_MasterPlayerState();

};
