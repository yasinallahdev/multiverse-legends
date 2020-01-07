// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameState.h"
#include "MLGameStateBase.generated.h"

/**
 * 
 */
UCLASS()
class AMLGameStateBase : public AGameState {

	GENERATED_BODY()

public:

	virtual float GetPlayerRespawnDelay(class AController* Controller) const override;
	
};
