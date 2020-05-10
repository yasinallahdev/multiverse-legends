// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Pawn.h"
#include "CameraPawn.generated.h"

class USceneComponent;
class USpringArmComponent;
class UMLCameraComponent;
class UPawnMovementComponent;
class AUnit;
class APlayerChampion;

UCLASS()
class ACameraPawn : public APawn {

	GENERATED_BODY()

	friend class AMLMasterPlayerController;

public:
	// Sets default values for this pawn's properties
	ACameraPawn();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:

	virtual bool IsNetRelevantFor(const AActor* RealViewer, const AActor* ViewTarget, const FVector& SrcLocation) const override;

	// Called every frame
	virtual void Tick(float DeltaTime) override;

	// Called to bind functionality to input
	virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

	virtual UPawnMovementComponent* GetMovementComponent() const override { return CameraMovement; }

	UFUNCTION(BlueprintCallable)
	void CameraZoomIn();

	UFUNCTION(BlueprintCallable)
	void CameraZoomOut();

protected:

	UPROPERTY()
	USceneComponent* RootScene;

	UPROPERTY()
	USpringArmComponent* SpringArm;

	UPROPERTY()
	UMLCameraComponent* CameraComponent;

	UPROPERTY()
	UPawnMovementComponent* CameraMovement;

	// The Champion controled by this Camera's Player Controller.
	UPROPERTY()
	APlayerChampion* ControlledChampion;

	UPROPERTY()
	AUnit* FollowedUnit;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Camera Settings")
	uint8 bIsCameraLocked : 1;

private:

	UFUNCTION(Client, Reliable)
	void UpdateViewportSize();

	FVector GetCameraPanDirection() const;

	UFUNCTION(Client, Reliable)
	void MoveVectorWithPan(const FVector& PanDirection);

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Camera Settings", meta = (AllowPrivateAccess = "true"))
	int32 ViewportSizeX;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Camera Settings", meta = (AllowPrivateAccess = "true"))
	int32 ViewportSizeY;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Camera Settings", meta = (AllowPrivateAccess = "true"))
	float Margin = 15;

};
