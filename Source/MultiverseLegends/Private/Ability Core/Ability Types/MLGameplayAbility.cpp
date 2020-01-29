// Fill out your copyright notice in the Description page of Project Settings.


#include "MLGameplayAbility.h"
#include "Ability Core/Cooldown Effects/CooldownGameplayEffect.h"

UMLGameplayAbility::UMLGameplayAbility() {
    
}

const FGameplayTagContainer* UMLGameplayAbility::GetCooldownTags() const {

    // Need to find a better way to do this; I assume this can lead to a memory leak
    FGameplayTagContainer* Tags = new FGameplayTagContainer();
	const FGameplayTagContainer* ParentTags = Super::GetCooldownTags();
	if (ParentTags) {
		Tags->AppendTags(*ParentTags);
	}
	Tags->AppendTags(CooldownTags);
	return Tags;

}


void UMLGameplayAbility::ApplyCooldown(const FGameplayAbilitySpecHandle Handle, const FGameplayAbilityActorInfo * ActorInfo, const FGameplayAbilityActivationInfo ActivationInfo) const {

	UCooldownGameplayEffect* CooldownGE = Cast<UCooldownGameplayEffect>(GetCooldownGameplayEffect());
	if (CooldownGE) {
		FGameplayEffectSpecHandle SpecHandle = MakeOutgoingGameplayEffectSpec(CooldownGE->GetClass(), GetAbilityLevel());
		SpecHandle.Data.Get()->DynamicGrantedTags.AppendTags(CooldownTags);
		ApplyGameplayEffectSpecToOwner(Handle, ActorInfo, ActivationInfo, SpecHandle);
	}

}
