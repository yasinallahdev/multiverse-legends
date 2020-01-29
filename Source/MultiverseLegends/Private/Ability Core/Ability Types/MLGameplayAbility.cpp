// Fill out your copyright notice in the Description page of Project Settings.


#include "MLGameplayAbility.h"
#include "Ability Core/Cooldown Effects/CooldownGameplayEffect.h"

UMLGameplayAbility::UMLGameplayAbility() {
    CooldownGameplayEffectClass = UCooldownGameplayEffect::StaticClass();
}

const FGameplayTagContainer* UMLGameplayAbility::GetCooldownTags() const {

	FGameplayTagContainer* MutableTags = const_cast<FGameplayTagContainer*>(&TempCooldownTags);
	const FGameplayTagContainer* ParentTags = Super::GetCooldownTags();
	if (ParentTags) {
		MutableTags->AppendTags(*ParentTags);
	}
	MutableTags->AppendTags(CooldownTags);
	return MutableTags;

}


void UMLGameplayAbility::ApplyCooldown(const FGameplayAbilitySpecHandle Handle, const FGameplayAbilityActorInfo * ActorInfo, const FGameplayAbilityActivationInfo ActivationInfo) const {

	UCooldownGameplayEffect* CooldownGE = Cast<UCooldownGameplayEffect>(GetCooldownGameplayEffect());
	if (CooldownGE) {
		FGameplayEffectSpecHandle SpecHandle = MakeOutgoingGameplayEffectSpec(CooldownGE->GetClass(), GetAbilityLevel());
		SpecHandle.Data.Get()->DynamicGrantedTags.AppendTags(CooldownTags);
		ApplyGameplayEffectSpecToOwner(Handle, ActorInfo, ActivationInfo, SpecHandle);
	}

}
