// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Units/AI Types/Champion.h"
#include "PlayerChampion.generated.h"

class AMLMasterPlayerController;
class AMLPlayerState;

/**
 * A Champion that is controlled by an active Player. This Class is largely a proxy class, as most behavior
 * will be handled by the base Champion class. 
 */
UCLASS()
class APlayerChampion final : public AChampion {

	GENERATED_BODY()

	friend class AMLMasterPlayerController;
	friend class AMLPlayerState;

public:

	APlayerChampion(const FObjectInitializer& ObjectInitializer);

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

	virtual class UNetConnection* GetNetConnection() const override;

	virtual AMLPlayerState* SetMasterPlayerState(AMLPlayerState* NewMasterPlayerState, bool updateController = false) override;

private:

	void Registered(AMLMasterPlayerController* MasterPlayerController);

	void Unregistered();

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Master Info", meta = (AllowPrivateAccess = "true"))
	AMLMasterPlayerController* MasterPlayerController;

};
