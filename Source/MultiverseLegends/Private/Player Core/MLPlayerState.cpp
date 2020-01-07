// Fill out your copyright notice in the Description page of Project Settings.


#include "MLPlayerState.h"

AMLPlayerState::AMLPlayerState() {
    AbilitySystem = CreateDefaultSubobject<UMLAbilitySystemComponent>(TEXT("AbilitySystem"));
}

void AMLPlayerState::BeginPlay() {

    if(AbilitySystem) {

        AbilitySystem->InitAbilityActorInfo(this, nullptr);

    }

}
