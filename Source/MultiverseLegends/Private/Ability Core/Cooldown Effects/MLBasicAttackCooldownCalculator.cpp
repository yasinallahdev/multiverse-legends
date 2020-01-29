// Fill out your copyright notice in the Description page of Project Settings.


#include "MLBasicAttackCooldownCalculator.h"
#include "Ability Core/MLAbilitySystemComponent.h"
#include "Attributes/OffensiveAttributeSet.h"

UMLBasicAttackCooldownCalculator::UMLBasicAttackCooldownCalculator(const FObjectInitializer& ObjectInitializer) : Super(ObjectInitializer) {

    BaseAttackSpeedDef.AttributeToCapture = UOffensiveAttributeSet::BaseAttackSpeedAttribute();
    BaseAttackSpeedDef.AttributeSource = EGameplayEffectAttributeCaptureSource::Target;
    BaseAttackSpeedDef.bSnapshot = false;

    BonusAttackSpeedDef.AttributeToCapture = UOffensiveAttributeSet::BonusAttackSpeedAttribute();
    BonusAttackSpeedDef.AttributeSource = EGameplayEffectAttributeCaptureSource::Target;
    BonusAttackSpeedDef.bSnapshot = false;

}

float UMLBasicAttackCooldownCalculator::CalculateBaseMagnitude_Implementation(const FGameplayEffectSpec& Spec) const {

    // Gather the tags from the source and target as that can affect which buffs should be used
	const FGameplayTagContainer* SourceTags = Spec.CapturedSourceTags.GetAggregatedTags();
	const FGameplayTagContainer* TargetTags = Spec.CapturedTargetTags.GetAggregatedTags();

	FAggregatorEvaluateParameters EvaluationParameters;
	EvaluationParameters.SourceTags = SourceTags;
	EvaluationParameters.TargetTags = TargetTags;

    float BaseAttackSpeed = 0.f;
    GetCapturedAttributeMagnitude(BaseAttackSpeedDef, Spec, EvaluationParameters, BaseAttackSpeed);

    float BonusAttackSpeed = 0.f;
    GetCapturedAttributeMagnitude(BonusAttackSpeedDef, Spec, EvaluationParameters, BonusAttackSpeed);

    float FinalAttackSpeed = FMath::Clamp(BaseAttackSpeed * (1 + BonusAttackSpeed), 0.2f, 3.f);

    return 1.f / FinalAttackSpeed;
}
