// Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.

#include "MultiverseLegendsGameMode.h"
#include "MultiverseLegendsPlayerController.h"
#include "MultiverseLegendsCharacter.h"
#include "UObject/ConstructorHelpers.h"

AMultiverseLegendsGameMode::AMultiverseLegendsGameMode()
{
	// use our custom PlayerController class
	PlayerControllerClass = AMultiverseLegendsPlayerController::StaticClass();

	// set default pawn class to our Blueprinted character
	static ConstructorHelpers::FClassFinder<APawn> PlayerPawnBPClass(TEXT("/Game/TopDownCPP/Blueprints/TopDownCharacter"));
	if (PlayerPawnBPClass.Class != NULL)
	{
		DefaultPawnClass = PlayerPawnBPClass.Class;
	}
}