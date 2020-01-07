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
    void OnRep_CurrentHealth() {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, CurrentHealth);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(CurrentHealth);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BaseHealth)
    FGameplayAttributeData BaseHealth;
    UFUNCTION()
    void OnRep_BaseHealth() {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BaseHealth);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BaseHealth);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BonusHealth)
    FGameplayAttributeData BonusHealth;
    UFUNCTION()
    void OnRep_BonusHealth() {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BonusHealth);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BonusHealth);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BasePhysicalArmor)
    FGameplayAttributeData BasePhysicalArmor;
    UFUNCTION()
    void OnRep_BasePhysicalArmor() {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BasePhysicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BasePhysicalArmor);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BonusPhysicalArmor)
    FGameplayAttributeData BonusPhysicalArmor;
    UFUNCTION()
    void OnRep_BonusPhysicalArmor() {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BonusPhysicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BonusPhysicalArmor);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BaseMagicalArmor)
    FGameplayAttributeData BaseMagicalArmor;
    UFUNCTION()
    void OnRep_BaseMagicalArmor() {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BaseMagicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BaseMagicalArmor);
    
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Defense Attributes", ReplicatedUsing = OnRep_BonusMagicalArmor)
    FGameplayAttributeData BonusMagicalArmor;
    UFUNCTION()
    void OnRep_BonusMagicalArmor() {
        GAMEPLAYATTRIBUTE_REPNOTIFY(UDefenseAttributeSet, BonusMagicalArmor);
    }
    
    DECLARE_ATTRIBUTE_FUNCTION(BonusMagicalArmor);
	
};
