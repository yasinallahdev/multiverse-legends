// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Camera/CameraComponent.h"
#include "MLCameraComponent.generated.h"

/**
 * 
 */
UCLASS()
class UMLCameraComponent : public UCameraComponent {

	GENERATED_BODY()

public:

	float SetCameraSpeed(float NewCameraSpeed) { return CameraSpeed = NewCameraSpeed; }

	float GetCameraSpeed() const { return CameraSpeed; }

private:

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Camera Settings", meta = (AllowPrivateAccess = "true"))
	float CameraSpeed = 50;

};
