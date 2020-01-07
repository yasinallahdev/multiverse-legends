// Fill out your copyright notice in the Description page of Project Settings.


#include "MLAbilitySystemComponent.h"
#include "Attributes/OffensiveAttributeSet.h"
#include "Attributes/DefenseAttributeSet.h"
#include "Attributes/MovementAttributeSet.h"
#include "Attributes/CasterAttributeSet.h"

float UMLAbilitySystemComponent::GetStat(EMLStatType StatType, EStatGroup StatGroup) const {

    // If there is no stat split, just return the stat without checking for StatGroup.
    switch(StatType) {
        case EMLStatType::CurrentHealth:return GetNumericAttribute(UDefenseAttributeSet::CurrentHealthAttribute());
        case EMLStatType::CurrentResource:return GetNumericAttribute(UCasterAttributeSet::CurrentResourceAttribute());
        case EMLStatType::CooldownReduction:return GetNumericAttribute(UCasterAttributeSet::CooldownReductionAttribute());
    }

    float BaseStat = 0;
    float BonusStat = 0;
    bool bGetBaseStat = false;
    bool bGetBonusStat = false;

    switch(StatGroup) {
        case EStatGroup::Base:
            bGetBaseStat = true;
            break;
        case EStatGroup::Bonus:
            bGetBonusStat = true;
            break;
        case EStatGroup::Total:
            bGetBaseStat = true;
            bGetBonusStat = true;
            break;
        default:
            return 0;
    }

    if(bGetBaseStat) {
        switch(StatType) {
            case EMLStatType::AttackDamage:
                BaseStat = GetNumericAttribute(UOffensiveAttributeSet::BaseAttackDamageAttribute());
                break;
            case EMLStatType::FlatPhysicalArmorPen:
                BaseStat = GetNumericAttribute(UOffensiveAttributeSet::BaseFlatPhysicalArmorPenetrationAttribute());
                break;
            case EMLStatType::FlatMagicalArmorPen:
                BaseStat = GetNumericAttribute(UOffensiveAttributeSet::BaseFlatMagicalArmorPenetrationAttribute());
                break;
            case EMLStatType::MaximumHealth:
                BaseStat = GetNumericAttribute(UDefenseAttributeSet::BaseHealthAttribute());
                break;
            case EMLStatType::PhysicalArmor:
                BaseStat = GetNumericAttribute(UDefenseAttributeSet::BasePhysicalArmorAttribute());
                break;
            case EMLStatType::MagicalArmor:
                BaseStat = GetNumericAttribute(UDefenseAttributeSet::BaseMagicalArmorAttribute());
                break;
            case EMLStatType::MovementSpeed:
                BaseStat = GetNumericAttribute(UMovementAttributeSet::BaseMovementSpeedAttribute());
                break;
            case EMLStatType::AbilityPower:
                BaseStat = GetNumericAttribute(UCasterAttributeSet::BaseAbilityPowerAttribute());
                break;
            case EMLStatType::MaximumResource:
                BaseStat = GetNumericAttribute(UCasterAttributeSet::BaseResourceAttribute());
                break;
            default:
                BaseStat = 0;
                break;
        }
    }
    if(bGetBonusStat) {
        switch(StatType){
            case EMLStatType::AttackDamage:
                BonusStat = GetNumericAttribute(UOffensiveAttributeSet::BonusAttackDamageAttribute());
                break;
            case EMLStatType::FlatPhysicalArmorPen:
                BonusStat = GetNumericAttribute(UOffensiveAttributeSet::BonusFlatPhysicalArmorPenetrationAttribute());
                break;
            case EMLStatType::FlatMagicalArmorPen:
                BonusStat = GetNumericAttribute(UOffensiveAttributeSet::BonusFlatMagicalArmorPenetrationAttribute());
                break;
            case EMLStatType::MaximumHealth:
                BonusStat = GetNumericAttribute(UDefenseAttributeSet::BonusHealthAttribute());
                break;
            case EMLStatType::PhysicalArmor:
                BonusStat = GetNumericAttribute(UDefenseAttributeSet::BonusPhysicalArmorAttribute());
                break;
            case EMLStatType::MagicalArmor:
                BonusStat = GetNumericAttribute(UDefenseAttributeSet::BonusMagicalArmorAttribute());
                break;
            case EMLStatType::MovementSpeed:
                BonusStat = GetNumericAttribute(UMovementAttributeSet::BonusMovementSpeedAttribute());
                break;
            case EMLStatType::AbilityPower:
                BonusStat = GetNumericAttribute(UCasterAttributeSet::BonusAbilityPowerAttribute());
                break;
            case EMLStatType::MaximumResource:
                BonusStat = GetNumericAttribute(UCasterAttributeSet::BonusResourceAttribute());
                break;
            default:
                BonusStat = 0;
                break;
        }
    }

    return BaseStat + BonusStat;

}

AActor* UMLAbilitySystemComponent::GetOwnerActor() const {
    return OwnerActor;
}