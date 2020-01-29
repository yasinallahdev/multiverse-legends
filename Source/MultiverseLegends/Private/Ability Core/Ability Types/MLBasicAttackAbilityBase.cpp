// Fill out your copyright notice in the Description page of Project Settings.


#include "MLBasicAttackAbilityBase.h"
#include "Ability Core/Cooldown Effects/BasicAttackCooldownEffect.h"


UMLBasicAttackAbilityBase::UMLBasicAttackAbilityBase() {
    CooldownGameplayEffectClass = UBasicAttackCooldownEffect::StaticClass();
}
