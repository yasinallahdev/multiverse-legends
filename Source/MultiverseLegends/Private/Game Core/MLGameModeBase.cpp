// Fill out your copyright notice in the Description page of Project Settings.


#include "MLGameModeBase.h"
#include "Player Core/MLMasterPlayerController.h"
#include "Player Core/MLPlayerState.h"
#include "MLGameSession.h"
#include "MLGameStateBase.h"
#include "Camera/CameraPawn.h"

AMLGameModeBase::AMLGameModeBase() {

    PlayerControllerClass = AMLMasterPlayerController::StaticClass();

    DefaultPawnClass = ACameraPawn::StaticClass();

    GameStateClass = AMLGameStateBase::StaticClass();

    GameSessionClass = AMLGameSession::StaticClass();

    PlayerStateClass = AMLPlayerState::StaticClass();

}
