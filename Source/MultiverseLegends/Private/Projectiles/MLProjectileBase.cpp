// Fill out your copyright notice in the Description page of Project Settings.


#include "MLProjectileBase.h"
#include "MLProjectileMovementComponent.h"
#include "Units/Unit.h"
#include "MLProjectileInteractionComponent.h"

// Sets default values
AMLProjectileBase::AMLProjectileBase() {

 	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

	ProjectileMovement = CreateDefaultSubobject<UMLProjectileMovementComponent>(TEXT("ProjectileMovement"));

	ProjectileInteractionComponent = CreateDefaultSubobject<UMLProjectileInteractionComponent>(TEXT("ProjectileSphere"));
	RootComponent = ProjectileInteractionComponent;

    ProjectileInteractionComponent->OnComponentBeginOverlap.AddDynamic(this, &AMLProjectileBase::OnBeginOverlap);
    ProjectileInteractionComponent->OnComponentEndOverlap.AddDynamic(this, &AMLProjectileBase::OnEndOverlap);

}

// Called when the game starts or when spawned
void AMLProjectileBase::BeginPlay() {

	ProjectileMovement->SetProjectileSpeed(DefaultProjectileSpeed);

	Super::BeginPlay();
	
}

bool AMLProjectileBase::UnitCross_Implementation(AUnit* Unit) {
	return true;
}

void AMLProjectileBase::UnitCrossed_Implementation(AUnit* Unit) {

}


void AMLProjectileBase::OnBeginOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult) {

}

void AMLProjectileBase::OnEndOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex) {

}

// Called every frame
void AMLProjectileBase::Tick(float DeltaTime) {

	Super::Tick(DeltaTime);

}

