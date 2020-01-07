// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerState.h"
#include "Ability Core/MLAbilitySystemInterface.h"
#include "MLPlayerState.generated.h"

struct FMLRegisterPlayerStateChampion;
struct FMLRegisterPlayerStateChampionAIController;
class APlayerChampion;
class AChampion;
class APlayerChampionAIController;

DECLARE_MULTICAST_DELEGATE_OneParam(FOnUpdateRegisteredChampion, AChampion*);
DECLARE_MULTICAST_DELEGATE_OneParam(FOnUpdateChampionController, AController*);

USTRUCT(BlueprintType)
struct FScoreStruct {

	GENERATED_BODY()

public:

	// Total Physical Damage Dealt to All Units
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float PhysicalDamageDealt;

	// Total Magical Damage Dealt to All Units
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float MagicalDamageDealt;
	
	// Total True Damage Dealt to All Units
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float TrueDamageDealt;

	// Total Physical Damage Dealt to Champions
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float ChampionPhysicalDamageDealt;

	// Total Magical Damage Dealt to Champions
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float ChampionMagicalDamageDealt;

	// Total True Damage Dealt to Champions
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float ChampionTrueDamageDealt;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float PhysicalDamageTaken;

	UPROPERTY(VIsibleAnywhere, BlueprintReadOnly, Category = "Score")
	float MagicalDamageTaken;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float TrueDamageTaken;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float ChampionPhysicalDamageTaken;

	UPROPERTY(VisibleAnywhere, BlueprintReadONly, Category = "Score")
	float ChampionMagicalDamageTaken;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	float ChampionTrueDamageTaken;

	// Total Champion Kills
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 Kills;

	// Total Times Died
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 Deaths;

	// Total Champion Assists
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 Assists;

	// Enemy Minions Killed
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 MinionKills;

	// Ally Minions Denied from Enemies
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 DenialScore;

	// Monsters Killed in Ally Jungle
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 AllyMonsterKills;

	// Monsters Killed in Enemy Jungle
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 EnemyMonsterKills;

	// Epic Monsters Killed
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score")
	int32 EpicMonsterKills;

};

/**
 * In Multiverse Legends, the ML Master State is the heart of each player's interaction with the world.
 * This is due to the fact that it's where all ability-related information lives
 */
UCLASS()
class AMLPlayerState : public APlayerState, public IMLAbilitySystemInterface {

	GENERATED_BODY()

	friend FMLRegisterPlayerStateChampion;
	friend FMLRegisterPlayerStateChampionAIController;

public:

	AMLPlayerState();

	virtual UAbilitySystemComponent* GetAbilitySystemComponent() const override { return GetMLAbilitySystemComponent(); }

	virtual UMLAbilitySystemComponent* GetMLAbilitySystemComponent() const override { return AbilitySystem; }

	virtual bool ActorOwnsAbilitySystem() const override { return true; }

	AChampion* GetRegisteredChampion() { return RegisteredChampion; }

	template <typename T>
	T* GetRegisteredChampion() { return Cast<T>(RegisteredChampion); }

	UFUNCTION(BlueprintCallable)
	float GetTotalDamageDealt() const { return FMath::RoundHalfFromZero(ScoreStructure.PhysicalDamageDealt + ScoreStructure.MagicalDamageDealt + ScoreStructure.TrueDamageDealt); }

	UFUNCTION(BlueprintCallable)
	float GetTotalDamageTaken() const { return FMath::RoundHalfFromZero(ScoreStructure.PhysicalDamageTaken + ScoreStructure.MagicalDamageTaken + ScoreStructure.TrueDamageTaken); }

	UFUNCTION(BlueprintCallable)
	float GetTotalChampionDamageDealt() const { return FMath::RoundHalfFromZero(ScoreStructure.ChampionPhysicalDamageDealt + ScoreStructure.ChampionMagicalDamageDealt + ScoreStructure.ChampionTrueDamageDealt); }

	UFUNCTION(BlueprintCallable)
	float GetTotalChampionDamageTaken() const { return FMath::RoundHalfFromZero(ScoreStructure.ChampionPhysicalDamageTaken + ScoreStructure.ChampionMagicalDamageTaken + ScoreStructure.ChampionTrueDamageTaken); }

protected:

	virtual void BeginPlay() override;

private:

	FOnUpdateRegisteredChampion OnUpdateRegisteredChampion;

	FOnUpdateChampionController OnUpdateChampionController;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Score", meta = (AllowPrivateAccess = "true"))
	FScoreStruct ScoreStructure;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Ability System", meta = (AllowPrivateAccess = "true"))
	APlayerChampionAIController* RegisteredAIController;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Ability System", meta = (AllowPrivateAccess = "true"))
	AChampion* RegisteredChampion;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Ability System", meta = (AllowPrivateAccess = "true"))
	UMLAbilitySystemComponent* AbilitySystem;
	
};

struct FMLRegisterPlayerStateChampionAIController {
private:

	friend APlayerChampionAIController;

	FMLRegisterPlayerStateChampionAIController(AMLPlayerState* PlayerState, APlayerChampionAIController* PlayerAIController) {
		PlayerState->RegisteredAIController = PlayerAIController;
	}

};

struct FMLRegisterPlayerStateChampion {
private:

	friend AChampion;

	FMLRegisterPlayerStateChampion(AMLPlayerState* PlayerState, AChampion* PlayerChampion) {
		PlayerState->RegisteredChampion = PlayerChampion;
	}

};
