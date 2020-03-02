// Fill out your copyright notice in the Description page of Project Settings.


#include "MLSpectatorController.h"
#include "Engine/DemoNetDriver.h"

AMLSpectatorController::AMLSpectatorController(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) {
    bShowMouseCursor = true;
    PrimaryActorTick.bTickEvenWhenPaused = true;
    bShouldPerformFullTickWhenPaused = true;
}

bool AMLSpectatorController::SetCurrentReplayPausedState(bool bDoPause) {
    AWorldSettings* WorldSettings = GetWorldSettings();

    // Set MotionBlur off and Antia Aliasing to FXAA in order to bypass the pause-bug of both
    static const auto CVarAA = IConsoleManager::Get().FindConsoleVariable(TEXT("r.DefaultFeature.AntiAliasing"));
    static const auto CVarMB = IConsoleManager::Get().FindConsoleVariable(TEXT("r.DefaultFeature.MotionBlur"));

    if(bDoPause) {
        PreviousAASetting = CVarAA->GetInt();
        PreviousMBSetting = CVarMB->GetInt();

        // Set MotionBlur to OFF, and Anti-Aliasing to FXAA
        CVarAA->Set(1);
        CVarMB->Set(0);

        WorldSettings->SetPauserPlayerState(PlayerState);
        return true;
    }

    // Reset Motion Blur and Anti Aliasing
    CVarAA->Set(PreviousAASetting);
    CVarMB->Set(PreviousMBSetting);

    WorldSettings->SetPauserPlayerState(nullptr);
    return false;
}

int32 AMLSpectatorController::GetCurrentReplayTotalTimeInSeconds() const {
    if(GetWorld()) {
        if(GetWorld()->DemoNetDriver) {
            return GetWorld()->DemoNetDriver->DemoTotalTime;
        }
    }

    return 0;
}

int32 AMLSpectatorController::GetCurrentReplayCurrentTimeInSeconds() const {
    if(GetWorld()) {
        if(GetWorld()->DemoNetDriver) {
            return GetWorld()->DemoNetDriver->DemoCurrentTime;
        }
    }

    return 0;
}

void AMLSpectatorController::SetCurrentReplayTimeToSeconds(int32 Seconds) {
    if(GetWorld()) {
        if(GetWorld()->DemoNetDriver) {
            GetWorld()->DemoNetDriver->GotoTimeInSeconds(Seconds);
        }
    }
}

void AMLSpectatorController::SetCurrentReplayPlayRate(float PlayRate) {
    if(GetWorld()) {
        if(GetWorld()->DemoNetDriver) {
            GetWorld()->GetWorldSettings()->DemoPlayTimeDilation = PlayRate;
        }
    }
}
