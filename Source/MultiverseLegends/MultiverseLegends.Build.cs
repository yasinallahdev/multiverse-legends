// Copyright 1998-2019 Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class MultiverseLegends : ModuleRules
{
	public MultiverseLegends(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

        PublicDependencyModuleNames.AddRange(new string[] { "GameplayAbilities", "GameplayTasks", "GameplayTags", "Core", "CoreUObject", "Engine", "InputCore",
		"HeadMountedDisplay", "NavigationSystem", "AIModule", "V8" });
    }
}
