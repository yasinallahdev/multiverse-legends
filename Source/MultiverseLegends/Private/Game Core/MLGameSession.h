// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameSession.h"
#include "MLGameSession.generated.h"

/**
 * 
 */
UCLASS()
class AMLGameSession : public AGameSession {
	
	GENERATED_BODY()

public:

	AMLGameSession();

	virtual bool RequiresPushToTalk() const override { return true; }
	
};
