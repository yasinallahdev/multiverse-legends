#pragma once

#include "CoreMinimal.h"
#include "CorePlayerDelegates.generated.h"

UENUM()
enum class ECorePlayerDelegateDummy {

    None

};

class AMLPlayerState;

DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnMasterPlayerStateUpdated, class AMLPlayerState*, OldMasterPlayerState, class AMLPlayerState*, NewMasterPlayerState);
