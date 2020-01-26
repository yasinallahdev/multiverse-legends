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


/*

	OnDeath Event: When a unit's health reaches zero, this event is called and all functions

	First Argument: Unit that died
	Second Argument: Unit that killed the dying unit
	Third Argument: Actual cause of death

*/
DECLARE_DYNAMIC_MULTICAST_DELEGATE_ThreeParams(FOnDeath, AUnit*, KilledUnit, AUnit*, AttackingUnit, ECauseOfDeath, CauseOfDeath);

