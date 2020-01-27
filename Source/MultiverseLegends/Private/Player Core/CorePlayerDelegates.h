#pragma once

#include "CoreMinimal.h"
//#include "CorePlayerDelegates.generated.h"

class AMLPlayerState;

DECLARE_MULTICAST_DELEGATE_TwoParams(FOnMasterPlayerStateUpdated, AMLPlayerState*, AMLPlayerState*);

// DECLARE_DYNAMIC_MULTICAST_DELEGATE_TwoParams(FOnMasterPlayerStateUpdated, class AMLPlayerState*, OldMasterPlayerState, class AMLPlayerState*, NewMasterPlayerState);
