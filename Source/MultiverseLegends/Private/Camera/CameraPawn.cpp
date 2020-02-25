// Fill out your copyright notice in the Description page of Project Settings.


#include "CameraPawn.h"
#include "GameFramework/PawnMovementComponent.h"
#include "MLCameraComponent.h"
#include "Player Core/MLMasterPlayerController.h"
#include "GameFramework/SpringArmComponent.h"

// Sets default values
ACameraPawn::ACameraPawn() {

 	// Set this pawn to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

	CameraMovement = CreateDefaultSubobject<UPawnMovementComponent>(TEXT("CameraMovement"));	

	RootScene = CreateDefaultSubobject<USceneComponent>(TEXT("RootScene"));
	RootComponent = RootScene;

	SpringArm = CreateDefaultSubobject<USpringArmComponent>(TEXT("SpringArm"));
	SpringArm->SetupAttachment(RootScene);
	SpringArm->bDoCollisionTest = false;
	SpringArm->SetUsingAbsoluteRotation(true); // Don't want arm to rotate when character does
	SpringArm->TargetArmLength = 800.f;
	SpringArm->SetRelativeRotation(FRotator(-60.f, 0.f, 0.f));

	CameraComponent = CreateDefaultSubobject<UMLCameraComponent>(TEXT("CameraComponent"));
	CameraComponent->SetupAttachment(SpringArm, USpringArmComponent::SocketName);
	CameraComponent->bUsePawnControlRotation = false;

}

// Called when the game starts or when spawned
void ACameraPawn::BeginPlay()
{
	Super::BeginPlay();
	
}

// Called every frame
void ACameraPawn::Tick(float DeltaTime) {

	Super::Tick(DeltaTime);

	UpdateViewportSize();

	MoveVectorWithPan(GetCameraPanDirection() * CameraComponent->GetCameraSpeed());

}

bool ACameraPawn::IsNetRelevantFor(const AActor* RealViewer, const AActor* ViewTarget, const FVector& SrcLocation) const {
	
	AMLMasterPlayerController* PC = GetController<AMLMasterPlayerController>();

	return ((PC != nullptr) && (PC == RealViewer));

}

// Called to bind functionality to input
void ACameraPawn::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);

}

void ACameraPawn::UpdateViewportSize_Implementation() {

	AMLMasterPlayerController* MasterPC = GetController<AMLMasterPlayerController>();

	if(MasterPC && MasterPC->IsLocalController()) {

		MasterPC->GetViewportSize(ViewportSizeX, ViewportSizeY);

	}

}

FVector ACameraPawn::GetCameraPanDirection() const {

	AMLMasterPlayerController* MasterPC = GetController<AMLMasterPlayerController>();

	if(MasterPC && MasterPC->IsLocalController()) {

		float MousePositionX;
		float MousePositionY;
		float CameraDirectionX = 0;
		float CameraDirectionY = 0;

		MasterPC->GetMousePosition(MousePositionX, MousePositionY);

		if(MousePositionX <= Margin) {
			CameraDirectionY = -1;
		}

		if(MousePositionY <= Margin) {
			CameraDirectionX = 1;
		}

		if(MousePositionX >= (ViewportSizeX - Margin)) {
			CameraDirectionY = 1;
		}

		if(MousePositionY >= (ViewportSizeY - Margin)) {
			CameraDirectionX = -1;
		}

		if((CameraDirectionX != 0) || (CameraDirectionY != 0)) {

			return FVector(CameraDirectionX, CameraDirectionY, 0);

		} else {

			return FVector::ZeroVector;

		}

	}

	return FVector::ZeroVector;

}

void ACameraPawn::MoveVectorWithPan_Implementation(const FVector& PanDirection) {

	if(PanDirection == FVector::ZeroVector) {
		return;
	} else {
		SetActorLocation(GetActorLocation() + (GetCameraPanDirection() * CameraComponent->GetCameraSpeed()));
	}

}
