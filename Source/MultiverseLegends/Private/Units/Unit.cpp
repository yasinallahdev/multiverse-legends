// Fill out your copyright notice in the Description page of Project Settings.


#include "Unit.h"
#include "Projectiles/MLProjectileBase.h"
#include "Components/UnitCapsuleComponent.h"
#include "Components/WidgetComponent.h"
#include "Component Core/UnitMovementComponent.h"

// Sets default values
AUnit::AUnit(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer.SetDefaultSubobjectClass<UUnitMovementComponent>(TEXT("UnitMovement")))
{
 	// Set this character to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

	UnitCapsuleComponent = CreateDefaultSubobject<UUnitCapsuleComponent>(TEXT("UnitCapsule"));
	RootComponent = UnitCapsuleComponent;

	HealthBarComponent = CreateDefaultSubobject<UWidgetComponent>(TEXT("HealthBar"));

	UnitCapsuleComponent->OnComponentBeginOverlap.AddDynamic(this, &AUnit::OnBeginOverlap);
	UnitCapsuleComponent->OnComponentEndOverlap.AddDynamic(this, &AUnit::OnEndOverlap);

}

// Called when the game starts or when spawned
void AUnit::BeginPlay() {

	Super::BeginPlay();
	
}

// Called every frame
void AUnit::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

}

// Called to bind functionality to input
void AUnit::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);

}

void AUnit::GenerateAbilitySystem() {

	if((!bGeneratedAbilitySystem) && (bOwnsAblitySystem)) {
		AbilitySystem = NewObject<UMLAbilitySystemComponent>(this, UMLAbilitySystemComponent::StaticClass(), TEXT("AbilitySystem"));
		AbilitySystem->RegisterComponent();
		AbilitySystem->InitAbilityActorInfo(this, this);
		bGeneratedAbilitySystem = true;
	}

}

bool AUnit::LinkOutsideActorAbilitySystem(IMLAbilitySystemInterface* LinkActor) {

	// A Unit that owns its ability system cannot be the Avatar for a different Actor's Ability System.
	if(!bOwnsAblitySystem) {

		// The Linked Actor MUST own its own Ability System.
		if(LinkActor->ActorOwnsAbilitySystem()) {
			UMLAbilitySystemComponent* LinkASC = LinkActor->GetMLAbilitySystemComponent();
			if(LinkASC != nullptr) {
				LinkASC->SetAvatarActor(this);
				PlayerStateAbilitySystem = LinkASC;
				return true;
			} else {
				return false;
			}

		} else {
			return false;
		}

	} else {
		return false;
	}

}

void AUnit::UnlinkOutsideActorAbilitySystem() {

	// A Unit that owns its ability system should never be unlinked from its ability system.
	if(bOwnsAblitySystem) {
		return;
	}

	if(!PlayerStateAbilitySystem.IsValid()) {

		UMLAbilitySystemComponent* CurrentASC = PlayerStateAbilitySystem.Get();
		if(Cast<IMLAbilitySystemInterface>(CurrentASC->GetOwnerActor()) == this) {
			CurrentASC->SetAvatarActor(nullptr);
		}

		PlayerStateAbilitySystem.Reset();

	}

}

bool AUnit::ProjectileCross_Implementation(AMLProjectileBase* Projectile) {
	return true;
}

void AUnit::ProjectileCrossed_Implementation(AMLProjectileBase* Projectile) {

}

void AUnit::OnBeginOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult) {

}

void AUnit::OnEndOverlap(UPrimitiveComponent* OverlappedComp, AActor* OtherActor, UPrimitiveComponent* OtherComp, int32 OtherBodyIndex) {

}

UMLAbilitySystemComponent* AUnit::GetMLAbilitySystemComponent() const {

	if(bOwnsAblitySystem) {
		return AbilitySystem;
	} else {
		return PlayerStateAbilitySystem.Get();
	}

}
