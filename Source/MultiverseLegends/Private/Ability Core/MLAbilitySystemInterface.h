// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AbilitySystemInterface.h"
#include "Ability Core/MLAbilitySystemComponent.h"
#include "MLAbilitySystemInterface.generated.h"

/** Interface for actors that expose access to an ability system component */
UINTERFACE(MinimalAPI, meta = (CannotImplementInterfaceInBlueprint))
class UMLAbilitySystemInterface : public UAbilitySystemInterface {

	GENERATED_BODY()

};

class IMLAbilitySystemInterface : public IAbilitySystemInterface {

	GENERATED_BODY()

public:

	virtual bool ActorOwnsAbilitySystem() const = 0;

	/** Returns the ability system component to use for this actor. It may live on another actor, such as a Pawn using the PlayerState's component */
	virtual UMLAbilitySystemComponent* GetMLAbilitySystemComponent() const = 0;
};