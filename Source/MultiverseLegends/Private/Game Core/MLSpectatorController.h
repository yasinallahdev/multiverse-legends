// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerController.h"
#include "MLSpectatorController.generated.h"

/**
 * 
 */
UCLASS()
class AMLSpectatorController : public APlayerController {

	GENERATED_BODY()

public:

	AMLSpectatorController(const FObjectInitializer& ObjectInitializer);

protected:

	/** For saving Anti Aliasing and Motion Blur settings during Pause State */
	int32 PreviousAASetting;
	int32 PreviousMBSetting;

public:

	/** Set the Paused State of the Running Replay to bDoPause. Return new Pause State */
	UFUNCTION(BlueprintCallable, Category = "Current Replay")
	bool SetCurrentReplayPausedState(bool bDoPause);

	/** Gets the Max Number of Seconds that were recorded in the current Replay */
	UFUNCTION(BlueprintCallable, Category = "Current Replay")
	int32 GetCurrentReplayTotalTimeInSeconds() const;

	/** Gets the second we are currently watching in the replay */
	UFUNCTION(BlueprintCallable, Category = "Current Replay")
	int32 GetCurrentReplayCurrentTimeInSeconds() const;

	/** Jumps to the specified second in the replay we are currently watching */
	UFUNCTION(BlueprintCallable, Category = "Current Replay")
	void SetCurrentReplayTimeToSeconds(int32 seconds);

	/** Changes the PlayRate of the replay we are watching enabling fast-forward or slow-motion. */
	UFUNCTION(BlueprintCallable, Category = "Current Replay")
	void SetCurrentReplayPlayRate(float PlayRate = 1.0f);
	
};
