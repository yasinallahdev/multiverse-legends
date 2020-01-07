// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerController.h"
#include "MLMasterPlayerController.generated.h"

class APlayerChampion;
class AChampion;
class ACameraPawn;
class APlayerChampionAIController;
class AMLMasterPlayerController;

DECLARE_MULTICAST_DELEGATE_TwoParams(FOnChampionRegistered, AChampion*, AMLMasterPlayerController*);
DECLARE_MULTICAST_DELEGATE_TwoParams(FOnChampionUnregistered, AChampion*, AMLMasterPlayerController*);

/**
 * 
 */
UCLASS()
class AMLMasterPlayerController : public APlayerController {

	GENERATED_BODY()
    
public:

    virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

    // Register a Champion, and in the process establish a link with the AIController and PlayerState.
    void RegisterChampion(APlayerChampion* NewRegisteredChampion);
    
    // Unregister a champion, thereby destroying the link with the AIController and PlayerState.
    void Unregister();

    // Begin PlayerController Interface
	virtual void SetupInputComponent() override;
    // End PlayerController Interface

    virtual void SetPawn(APawn* InPawn) override;

    APlayerChampion* GetPlayerChampion() const { return RegisteredChampion; }

private:

    virtual void OnRightClickPressed();
    virtual void OnRightClickReleased();
    virtual void OnRightClickHeld();

    virtual void OnRegisterChampion(APlayerChampion* NewRegisterCampion);
    virtual void OnUnregisterChampion();

    void SetRegisteredChampion(APlayerChampion* NewRegisteredChampion);

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, meta = (AllowPrivateAccess = "true"))
	APlayerChampionAIController* LinkedAIController;

    TWeakObjectPtr<APlayerChampionAIController> OldLinkedAIController;
    
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, ReplicatedUsing = OnRep_RegisteredChampion, meta = (AllowPrivateAccess = "true"))
    APlayerChampion* RegisteredChampion;

    TWeakObjectPtr<APlayerChampion> OldRegisteredChampion;

    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, meta = (AllowPrivateAccess = "true"))
    ACameraPawn* CameraPawn;

    UFUNCTION()
    virtual void OnRep_RegisteredChampion();

protected:
    
    UFUNCTION(BlueprintImplementableEvent, meta = (DisplayName = "On Champion Registered"))
    void ReceiveChampionRegistered(APlayerChampion* NewRegisteredChampion);

    UFUNCTION(BlueprintImplementableEvent, meta = (DisiplayName = "On Champion Unregistered"))
    void ReceiveChampionUnregistered(APlayerChampion* UnregisteredChampion);
	
};
