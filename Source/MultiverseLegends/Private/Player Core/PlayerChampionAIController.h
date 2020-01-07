// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AIController.h"
#include "PlayerChampionAIController.generated.h"

class AUnit;
class AMLPlayerState;
class AMLMasterPlayerController;
class APlayerChampion;

/**
 * An AI Controller that a Master Player Controller will use to funnel
 * commands to a Player-Owned champion. This AI Controller CANNOT funnel
 * commands to a Champion that is considered "Dead".
 */
UCLASS()
class APlayerChampionAIController : public AAIController {
	
	GENERATED_BODY()

	friend class AMLMasterPlayerController;
	friend class APlayerChampion;
	
public:

	FORCEINLINE FVector GetDestination() const { return Destination; }

	virtual void SetPawn(APawn* InPawn) override;

	void HookToPlayerControllerDelegates(AMLMasterPlayerController* PlayerStateLink);
	void HookToPlayerStateDelegates(AMLPlayerState* PlayerStateLink);

	void UnhookFromPlayerControllerDelegates(AMLMasterPlayerController* PlayerControllerLink);
	void UnhookFromPlayerStateDelegates(AMLPlayerState* PlayerControllerLink);

	void SetOwningPlayerState(AMLPlayerState* NewOwningPlayerState);
	AMLPlayerState* GetOwningPlayerState() { return OwningPlayerState; }

private:

	void RecieveMasterPlayerStateUpdate(AMLPlayerState* OldMasterPlayerState, AMLPlayerState* NewMasterPlayerState);
	void RecieveMasterPlayerControllerUpdate(AMLMasterPlayerController* OldMasterPlayerController, AMLMasterPlayerController* NewMasterPlayerController);

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "AI Info", meta = (AllowPrivateAccess = "true"))
	FVector Destination;
	
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "AI Info", meta = (AllowPrivateAccess = "true"))
	AUnit* TargetUnit;
	
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "AI Info", meta = (AllowPrivateAccess = "true"))
	AMLPlayerState* OwningPlayerState;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "AI Info", meta = (AllowPrivateAccess = "true"))
	AMLMasterPlayerController* MasterPlayerController;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "AI Info", meta = (AllowPrivateAccess = "true"))
	APlayerChampion* PlayerChampion;

	TWeakObjectPtr<APlayerChampion> OldPlayerChampion;

	/**
	 * If this variable is set to true, then this AI controller will ignore input from the Master PC.
	 * This will usually happen if the player is in a menu, or if the champion is dead.
	 */
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "AI Settings", meta = (  AllowPrivateAccess = "true"))
	uint8 bShouldIgnoreInput : 1;
};
