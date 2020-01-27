#pragma once

#include "CoreMinimal.h"
#include "UnitEvents.generated.h"

class AUnit;

UENUM(BlueprintType)
enum class ECauseOfDeath : uint8 {

	UnitDamage,
	Execution,
	SelfInflictedDamage

};


UENUM(BlueprintType)
enum class EDamageType : uint8 {

	PhysicalDamage UMETA(DisplayName = "Physical"),
	MagicalDamage UMETA(DisplayName = "Magical"),
	TrueDamage UMETA(DisplayName = "True"),
	PureDamage UMETA(DisplayName = "Pure")

};

UENUM(BlueprintType, meta = (Bitflags))
enum class EDamageEffects : uint8 {

	None = 0x00,
	OnHit = 0x01,
	OnAttack = 0x02,
	Spell = 0x04

};

ENUM_CLASS_FLAGS(EDamageEffects);


/*

	OnDeath Event: When a unit's health reaches zero, this event fires and all functions bound to it will be called with the following arguments:

	First Argument: Unit that died
	Second Argument: Unit that killed the dying unit
	Third Argument: Actual cause of death

*/
DECLARE_DYNAMIC_MULTICAST_DELEGATE_ThreeParams(FOnDeath, AUnit*, KilledUnit, AUnit*, AttackingUnit, ECauseOfDeath, CauseOfDeath);

/*

	OnTakeDamage Event: When a Unit takes damage, this event fires and all functions bound to it will be called with the following arguments:

	First Argument: Unit that took damage
	Second Argument: Attacking Unit
	Third Argument: Damage Dealt
	Forth Argument: Damage Type (Physical/Magical/True/Pure)
	Fifth Argument: Damage Effects (What type of damage effects it applies; On-Hit, On-Attack, Spell, etc.)

*/
DECLARE_DYNAMIC_MULTICAST_DELEGATE_FiveParams(FOnTakeDamage, AUnit*, DefendingUnit, AUnit*, Attacker, float, DamageDealt, EDamageType, DamageType, EDamageEffects, DamageSource);

/*


	OnTakeDamage Event: When a Unit deals damage, this event fires and all functions bound to it will be called with the following arguments:

	First Argument: Attacking Unit
	Second Argument: Target Unit
	Third Argument: Damage Dealt
	Forth Argument: Damage Type (Physical/Magical/True/Pure)
	Fifth Argument: Damage Effects (What type of damage effects it applies; On-Hit, On-Attack, Spell, etc.)

*/
DECLARE_DYNAMIC_MULTICAST_DELEGATE_FiveParams(FOnDealDamage, AUnit*, Attacker, AUnit*, Target, float, DamageDealt, EDamageType, DamageType, EDamageEffects, DamageSource);
