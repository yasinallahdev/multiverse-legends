// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "AttributeMacros.h"
#include "DefenseAttributeSet.generated.h"

/**
 * 
 */
UCLASS()
class UDefenseAttributeSet : public UAttributeSet {
    
	GENERATED_BODY()
    
public:
    
    virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_CurrentHealth)
    FGameplayAttributeData CurrentHealth;
    UFUNCTION()
    void OnRep_CurrentHealth(const FGameplayAttributeData& OldCurrentHealth) {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, CurrentHealth, OldCurrentHealth);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(CurrentHealth);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BaseHealth)
    FGameplayAttributeData BaseHealth;
    UFUNCTION()
    void OnRep_BaseHealth(const FGameplayAttributeData& OldBaseHealth) {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BaseHealth, OldBaseHealth);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BaseHealth);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BonusHealth)
    FGameplayAttributeData BonusHealth;
    UFUNCTION()
    void OnRep_BonusHealth(const FGameplayAttributeData& OldBonusHealth) {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BonusHealth, OldBonusHealth);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BonusHealth);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BasePhysicalArmor)
    FGameplayAttributeData BasePhysicalArmor;
    UFUNCTION()
    void OnRep_BasePhysicalArmor(const FGameplayAttributeData& OldBasePhysicalArmor) {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BasePhysicalArmor, OldBasePhysicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BasePhysicalArmor);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BonusPhysicalArmor)
    FGameplayAttributeData BonusPhysicalArmor;
    UFUNCTION()
    void OnRep_BonusPhysicalArmor(const FGameplayAttributeData& OldBonusPhysicalArmor) {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BonusPhysicalArmor, OldBonusPhysicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BonusPhysicalArmor);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BaseMagicalArmor)
    FGameplayAttributeData BaseMagicalArmor;
    UFUNCTION()
    void OnRep_BaseMagicalArmor(const FGameplayAttributeData& OldBaseMagicalArmor) {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BaseMagicalArmor, OldBaseMagicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BaseMagicalArmor);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BonusMagicalArmor)
    FGameplayAttributeData BonusMagicalArmor;
    UFUNCTION()
    void OnRep_BonusMagicalArmor(const FGameplayAttributeData& OldBonusMagicalArmor) {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BonusMagicalArmor, OldBonusMagicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BonusMagicalArmor);
	
};
