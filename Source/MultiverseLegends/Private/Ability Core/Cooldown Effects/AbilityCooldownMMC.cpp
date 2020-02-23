// Fill out your copyright notice in the Description page of Project Settings.


#include "AbilityCooldownMMC.h"
#include "Ability Core/Ability Types/MLGameplayAbility.h"
#include "Attributes/CasterAttributeSet.h"

UAbilityCooldownMMC::UAbilityCooldownMMC(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) {

    CooldownReductionDef.AttributeToCapture = UCasterAttributeSet::CooldownReductionAttribute();
    CooldownReductionDef.AttributeSource = EGameplayEffectAttributeCaptureSource::Target;
    CooldownReductionDef.bSnapshot = false;

}

float UAbilityCooldownMMC::CalculateBaseMagnitude_Implementation(const FGameplayEffectSpec & Spec) const {

    // Gather the tags from the source and target as that can affect which buffs should be used
	const FGameplayTagContainer* SourceTags = Spec.CapturedSourceTags.GetAggregatedTags();
	const FGameplayTagContainer* TargetTags = Spec.CapturedTargetTags.GetAggregatedTags();

	FAggregatorEvaluateParameters EvaluationParameters;
	EvaluationParameters.SourceTags = SourceTags;
	EvaluationParameters.TargetTags = TargetTags;

    float CooldownReduction = 0.f;
    GetCapturedAttributeMagnitude(CooldownReductionDef, Spec, EvaluationParameters, CooldownReduction);

    const UMLGameplayAbility* Ability = Cast<UMLGameplayAbility>(Spec.GetContext().GetAbilityInstance_NotReplicated());

    if(!Ability) {
        return 0.0f;
    }

    return Ability->GetAbilityCooldownDurationAtLevel(Ability->GetAbilityLevel()) * (1 - CooldownReduction);

}
