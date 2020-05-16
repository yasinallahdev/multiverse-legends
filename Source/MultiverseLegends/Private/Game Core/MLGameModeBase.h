// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameMode.h"
#include "MLGameModeBase.generated.h"

/**
 * 
 */
UCLASS()
class AMLGameModeBase : public AGameMode {

	GENERATED_BODY()

public:

	AMLGameModeBase();

	UFUNCTION()
	float GetBaseGoldGenerationRate() const { return BaseGoldGenerationRate; }

	UFUNCTION()
	float GetStartingGold() const { return StartingGold; }

protected:

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Game Mode")
	float BaseGoldGenerationRate;

	UPROPERTY(EditDefaultsOnly, BlueprintReadWrite, Category = "Game Mode")
	float StartingGold;

};
