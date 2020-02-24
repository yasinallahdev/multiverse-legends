/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
declare class MLProjectileBase extends Actor { 
	ProjectileInteractionComponent: MLProjectileInteractionComponent;
	ProjectileMovement: MLProjectileMovementComponent;
	DefaultProjectileSpeed: number;
	static GetDefaultObject(): MLProjectileBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLProjectileBase;
	UnitCrossed(Unit: Unit): void;
	UnitCross(Unit: Unit): boolean;
	OnEndOverlap(OverlappedComp: PrimitiveComponent,OtherActor: Actor,OtherComp: PrimitiveComponent,OtherBodyIndex: number): void;
	OnBeginOverlap(OverlappedComp: PrimitiveComponent,OtherActor: Actor,OtherComp: PrimitiveComponent,OtherBodyIndex: number,bFromSweep: boolean,SweepResult: HitResult): void;
	GetMovementComponent(): MLProjectileMovementComponent;
	static C(Other: UObject | any): MLProjectileBase;
}

declare class Unit extends Character { 
	UnitBasicAttack: UnrealEngineClass;
	bSpawnOwnedASCInBeginPlay: boolean;
	HealthBarComponent: WidgetComponent;
	EventOnDeath: UnrealEngineMulticastDelegate<(KilledUnit: Unit, AttackingUnit: Unit, CauseOfDeath: ECauseOfDeath) => void>;
	EventOnTakeDamage: UnrealEngineMulticastDelegate<(DefendingUnit: Unit, Attacker: Unit, DamageDealt: number, DamageType: EDamageType, DamageSource: EDamageEffects) => void>;
	EventOnDealtDamage: UnrealEngineMulticastDelegate<(Attacker: Unit, Target: Unit, DamageDealt: number, DamageType: EDamageType, DamageSource: EDamageEffects) => void>;
	UnitTeam: ETeam;
	AbilitySystem: MLAbilitySystemComponent;
	PlayerStateAbilitySystem: any;
	bOwnsAblitySystem: boolean;
	bGeneratedAbilitySystem: boolean;
	UnitCapsuleComponent: UnitCapsuleComponent;
	static GetDefaultObject(): Unit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Unit;
	ProjectileCrossed(Projectile: MLProjectileBase): void;
	ProjectileCross(Projectile: MLProjectileBase): boolean;
	OnEndOverlap(OverlappedComp: PrimitiveComponent,OtherActor: Actor,OtherComp: PrimitiveComponent,OtherBodyIndex: number): void;
	OnBeginOverlap(OverlappedComp: PrimitiveComponent,OtherActor: Actor,OtherComp: PrimitiveComponent,OtherBodyIndex: number,bFromSweep: boolean,SweepResult: HitResult): void;
	static C(Other: UObject | any): Unit;
}

declare class MLGameplayAbility extends GameplayAbility { 
	Cost: ScalableFloat;
	CooldownDuration: ScalableFloat;
	CooldownTags: GameplayTagContainer;
	TempCooldownTags: GameplayTagContainer;
	static Load(ResourceName: string): MLGameplayAbility;
	static Find(Outer: UObject, ResourceName: string): MLGameplayAbility;
	static GetDefaultObject(): MLGameplayAbility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLGameplayAbility;
	static C(Other: UObject | any): MLGameplayAbility;
}

declare class ScoreStruct { 
	PhysicalDamageDealt: number;
	MagicalDamageDealt: number;
	TrueDamageDealt: number;
	ChampionPhysicalDamageDealt: number;
	ChampionMagicalDamageDealt: number;
	ChampionTrueDamageDealt: number;
	PhysicalDamageTaken: number;
	MagicalDamageTaken: number;
	TrueDamageTaken: number;
	ChampionPhysicalDamageTaken: number;
	ChampionMagicalDamageTaken: number;
	ChampionTrueDamageTaken: number;
	Kills: number;
	Deaths: number;
	Assists: number;
	MinionKills: number;
	DenialScore: number;
	AllyMonsterKills: number;
	EnemyMonsterKills: number;
	EpicMonsterKills: number;
	clone() : ScoreStruct;
	static C(Other: UObject | any): ScoreStruct;
}

declare class MLMasterPlayerController extends PlayerController { 
	LinkedAIController: PlayerChampionAIController;
	RegisteredChampion: PlayerChampion;
	CameraPawn: CameraPawn;
	static GetDefaultObject(): MLMasterPlayerController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLMasterPlayerController;
	ReceiveChampionUnregistered(UnregisteredChampion: PlayerChampion): void;
	ReceiveChampionRegistered(NewRegisteredChampion: PlayerChampion): void;
	OnRep_RegisteredChampion(): void;
	static C(Other: UObject | any): MLMasterPlayerController;
}

declare class PlayerChampionAIController extends AIController { 
	Destination: Vector;
	TargetUnit: Unit;
	OwningPlayerState: MLPlayerState;
	MasterPlayerController: MLMasterPlayerController;
	PlayerChampion: PlayerChampion;
	bShouldIgnoreInput: boolean;
	bBlockChangingController: boolean;
	bBlockChangingPlayerState: number;
	static GetDefaultObject(): PlayerChampionAIController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlayerChampionAIController;
	static C(Other: UObject | any): PlayerChampionAIController;
}

declare class MLPlayerState extends PlayerState { 
	ScoreStructure: ScoreStruct;
	RegisteredAIController: PlayerChampionAIController;
	RegisteredChampion: Champion;
	AbilitySystem: MLAbilitySystemComponent;
	static GetDefaultObject(): MLPlayerState;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLPlayerState;
	GetTotalDamageTaken(): number;
	GetTotalDamageDealt(): number;
	GetTotalChampionDamageTaken(): number;
	GetTotalChampionDamageDealt(): number;
	static C(Other: UObject | any): MLPlayerState;
}

declare class Champion extends Unit { 
	Ability1: UnrealEngineClass;
	Ability2: UnrealEngineClass;
	Ability3: UnrealEngineClass;
	Ability4: UnrealEngineClass;
	OnMasterPlayerStateUpdated: UnrealEngineMulticastDelegate<(OldMasterPlayerState: MLPlayerState, NewMasterPlayerState: MLPlayerState) => void>;
	MasterPlayerState: MLPlayerState;
	static GetDefaultObject(): Champion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Champion;
	OnRep_MasterPlayerState(): void;
	static C(Other: UObject | any): Champion;
}

declare class PlayerChampion extends Champion { 
	MasterPlayerController: MLMasterPlayerController;
	static GetDefaultObject(): PlayerChampion;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlayerChampion;
	static C(Other: UObject | any): PlayerChampion;
}

declare class CameraPawn extends Pawn { 
	RootScene: SceneComponent;
	SpringArm: SpringArmComponent;
	CameraComponent: MLCameraComponent;
	CameraMovement: PawnMovementComponent;
	ControlledChampion: PlayerChampion;
	FollowedUnit: Unit;
	bIsCameraLocked: boolean;
	ViewportSizeX: number;
	ViewportSizeY: number;
	Margin: number;
	static GetDefaultObject(): CameraPawn;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CameraPawn;
	UpdateViewportSize(): void;
	MoveVectorWithPan(PanDirection: Vector): void;
	static C(Other: UObject | any): CameraPawn;
}

declare class GameplayAttributeData { 
	BaseValue: number;
	CurrentValue: number;
	clone() : GameplayAttributeData;
	static C(Other: UObject | any): GameplayAttributeData;
}

declare class CasterAttributeSet extends AttributeSet { 
	BaseAbilityPower: GameplayAttributeData;
	BonusAbilityPower: GameplayAttributeData;
	CurrentResource: GameplayAttributeData;
	BaseResource: GameplayAttributeData;
	BonusResource: GameplayAttributeData;
	CooldownReduction: GameplayAttributeData;
	static Load(ResourceName: string): CasterAttributeSet;
	static Find(Outer: UObject, ResourceName: string): CasterAttributeSet;
	static GetDefaultObject(): CasterAttributeSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CasterAttributeSet;
	OnRep_CurrentResource(): void;
	OnRep_CooldownReduction(): void;
	OnRep_BonusResource(): void;
	OnRep_BonusAbilityPower(): void;
	OnRep_BaseResource(): void;
	OnRep_BaseAbilityPower(): void;
	static C(Other: UObject | any): CasterAttributeSet;
}

declare class CooldownGameplayEffect extends GameplayEffect { 
	static Load(ResourceName: string): CooldownGameplayEffect;
	static Find(Outer: UObject, ResourceName: string): CooldownGameplayEffect;
	static GetDefaultObject(): CooldownGameplayEffect;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CooldownGameplayEffect;
	static C(Other: UObject | any): CooldownGameplayEffect;
}

declare class CostGameplayEffect extends GameplayEffect { 
	static Load(ResourceName: string): CostGameplayEffect;
	static Find(Outer: UObject, ResourceName: string): CostGameplayEffect;
	static GetDefaultObject(): CostGameplayEffect;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CostGameplayEffect;
	static C(Other: UObject | any): CostGameplayEffect;
}

declare class DefenseAttributeSet extends AttributeSet { 
	CurrentHealth: GameplayAttributeData;
	BaseHealth: GameplayAttributeData;
	BonusHealth: GameplayAttributeData;
	BasePhysicalArmor: GameplayAttributeData;
	BonusPhysicalArmor: GameplayAttributeData;
	BaseMagicalArmor: GameplayAttributeData;
	BonusMagicalArmor: GameplayAttributeData;
	static Load(ResourceName: string): DefenseAttributeSet;
	static Find(Outer: UObject, ResourceName: string): DefenseAttributeSet;
	static GetDefaultObject(): DefenseAttributeSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DefenseAttributeSet;
	OnRep_CurrentHealth(): void;
	OnRep_BonusPhysicalArmor(): void;
	OnRep_BonusMagicalArmor(): void;
	OnRep_BonusHealth(): void;
	OnRep_BasePhysicalArmor(): void;
	OnRep_BaseMagicalArmor(): void;
	OnRep_BaseHealth(): void;
	static C(Other: UObject | any): DefenseAttributeSet;
}

declare class MLAbilitySystemInterface extends AbilitySystemInterface { 
	static Load(ResourceName: string): MLAbilitySystemInterface;
	static Find(Outer: UObject, ResourceName: string): MLAbilitySystemInterface;
	static GetDefaultObject(): MLAbilitySystemInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLAbilitySystemInterface;
	static C(Other: UObject | any): MLAbilitySystemInterface;
}

declare class MLBasicAttackCooldownCalculator extends GameplayModMagnitudeCalculation { 
	static Load(ResourceName: string): MLBasicAttackCooldownCalculator;
	static Find(Outer: UObject, ResourceName: string): MLBasicAttackCooldownCalculator;
	static GetDefaultObject(): MLBasicAttackCooldownCalculator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLBasicAttackCooldownCalculator;
	static C(Other: UObject | any): MLBasicAttackCooldownCalculator;
}

declare class MLGameInstance extends GameInstance { 
	static Load(ResourceName: string): MLGameInstance;
	static Find(Outer: UObject, ResourceName: string): MLGameInstance;
	static GetDefaultObject(): MLGameInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLGameInstance;
	static C(Other: UObject | any): MLGameInstance;
}

declare class MLGameModeBase extends GameMode { 
	JavascriptComponent: JavascriptComponent;
	BaseGoldGenerationRate: number;
	StartingGold: number;
	static GetDefaultObject(): MLGameModeBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLGameModeBase;
	GetStartingGold(): number;
	GetBaseGoldGenerationRate(): number;
	static C(Other: UObject | any): MLGameModeBase;
}

declare class MLGameSession extends GameSession { 
	static GetDefaultObject(): MLGameSession;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLGameSession;
	static C(Other: UObject | any): MLGameSession;
}

declare class MLGameStateBase extends GameState { 
	static GetDefaultObject(): MLGameStateBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLGameStateBase;
	static C(Other: UObject | any): MLGameStateBase;
}

declare class MovementAttributeSet extends AttributeSet { 
	BaseMovementSpeed: GameplayAttributeData;
	BonusMovementSpeed: GameplayAttributeData;
	static Load(ResourceName: string): MovementAttributeSet;
	static Find(Outer: UObject, ResourceName: string): MovementAttributeSet;
	static GetDefaultObject(): MovementAttributeSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovementAttributeSet;
	OnRep_BonusMovementSpeed(): void;
	OnRep_BaseMovementSpeed(): void;
	static C(Other: UObject | any): MovementAttributeSet;
}

declare class MultiverseLegendsCharacter extends Character { 
	TopDownCameraComponent: CameraComponent;
	CameraBoom: SpringArmComponent;
	CursorToWorld: DecalComponent;
	static GetDefaultObject(): MultiverseLegendsCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MultiverseLegendsCharacter;
	static C(Other: UObject | any): MultiverseLegendsCharacter;
}

declare class MultiverseLegendsGameMode extends GameModeBase { 
	static GetDefaultObject(): MultiverseLegendsGameMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MultiverseLegendsGameMode;
	static C(Other: UObject | any): MultiverseLegendsGameMode;
}

declare class MultiverseLegendsPlayerController extends PlayerController { 
	static GetDefaultObject(): MultiverseLegendsPlayerController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MultiverseLegendsPlayerController;
	static C(Other: UObject | any): MultiverseLegendsPlayerController;
}

declare class OffensiveAttributeSet extends AttributeSet { 
	BaseAttackDamage: GameplayAttributeData;
	BonusAttackDamage: GameplayAttributeData;
	BaseFlatPhysicalArmorPenetration: GameplayAttributeData;
	BonusFlatPhysicalArmorPenetration: GameplayAttributeData;
	BaseFlatMagicalArmorPenetration: GameplayAttributeData;
	BonusFlatMagicalArmorPenetration: GameplayAttributeData;
	BaseAttackSpeed: GameplayAttributeData;
	BonusAttackSpeed: GameplayAttributeData;
	static Load(ResourceName: string): OffensiveAttributeSet;
	static Find(Outer: UObject, ResourceName: string): OffensiveAttributeSet;
	static GetDefaultObject(): OffensiveAttributeSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OffensiveAttributeSet;
	OnRep_BonusFlatPhysicalArmorPenetration(): void;
	OnRep_BonusFlatMagicalArmorPenetration(): void;
	OnRep_BonusAttackSpeed(): void;
	OnRep_BonusAttackDamage(): void;
	OnRep_BaseFlatPhysicalArmorPenetration(): void;
	OnRep_BaseFlatMagicalArmorPenetration(): void;
	OnRep_BaseAttackSpeed(): void;
	OnRep_BaseAttackDamage(): void;
	static C(Other: UObject | any): OffensiveAttributeSet;
}

declare class UnitMovementComponent extends CharacterMovementComponent { 
	UnitOwner: Unit;
	static Load(ResourceName: string): UnitMovementComponent;
	static Find(Outer: UObject, ResourceName: string): UnitMovementComponent;
	static GetDefaultObject(): UnitMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitMovementComponent;
	static C(Other: UObject | any): UnitMovementComponent;
}

declare class OnMasterPlayerStateUpdated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMasterPlayerStateUpdated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMasterPlayerStateUpdated__PythonCallable;
	static GetDefaultObject(): OnMasterPlayerStateUpdated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMasterPlayerStateUpdated__PythonCallable;
	static C(Other: UObject | any): OnMasterPlayerStateUpdated__PythonCallable;
}

declare class OnDeath__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDeath__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDeath__PythonCallable;
	static GetDefaultObject(): OnDeath__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDeath__PythonCallable;
	static C(Other: UObject | any): OnDeath__PythonCallable;
}

declare class OnTakeDamage__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTakeDamage__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTakeDamage__PythonCallable;
	static GetDefaultObject(): OnTakeDamage__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTakeDamage__PythonCallable;
	static C(Other: UObject | any): OnTakeDamage__PythonCallable;
}

declare class OnDealDamage__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDealDamage__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDealDamage__PythonCallable;
	static GetDefaultObject(): OnDealDamage__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDealDamage__PythonCallable;
	static C(Other: UObject | any): OnDealDamage__PythonCallable;
}

declare type EMeshPaintColorViewMode = 'Normal' | 'RGB' | 'Alpha' | 'Red' | 'Green' | 'Blue' | 'EMeshPaintColorViewMode_MAX';
declare var EMeshPaintColorViewMode : { Normal:'Normal',RGB:'RGB',Alpha:'Alpha',Red:'Red',Green:'Green',Blue:'Blue',EMeshPaintColorViewMode_MAX:'EMeshPaintColorViewMode_MAX', };
declare class PaintBrushSettings extends UObject { 
	BrushRadius: number;
	BrushStrength: number;
	BrushFalloffAmount: number;
	bEnableFlow: boolean;
	bOnlyFrontFacingTriangles: boolean;
	ColorViewMode: EMeshPaintColorViewMode;
	static Load(ResourceName: string): PaintBrushSettings;
	static Find(Outer: UObject, ResourceName: string): PaintBrushSettings;
	static GetDefaultObject(): PaintBrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaintBrushSettings;
	static C(Other: UObject | any): PaintBrushSettings;
}

declare class MeshPaintSettings extends UObject { 
	VertexPreviewSize: number;
	static Load(ResourceName: string): MeshPaintSettings;
	static Find(Outer: UObject, ResourceName: string): MeshPaintSettings;
	static GetDefaultObject(): MeshPaintSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshPaintSettings;
	static C(Other: UObject | any): MeshPaintSettings;
}

declare class VertexColorImportOptions extends UObject { 
	UVIndex: number;
	LODIndex: number;
	bRed: boolean;
	bBlue: boolean;
	bGreen: boolean;
	bAlpha: boolean;
	bImportToInstance: boolean;
	bCanImportToInstance: boolean;
	static Load(ResourceName: string): VertexColorImportOptions;
	static Find(Outer: UObject, ResourceName: string): VertexColorImportOptions;
	static GetDefaultObject(): VertexColorImportOptions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VertexColorImportOptions;
	static C(Other: UObject | any): VertexColorImportOptions;
}

declare class FlipbookEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): FlipbookEditorSettings;
	static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
	static GetDefaultObject(): FlipbookEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FlipbookEditorSettings;
	static C(Other: UObject | any): FlipbookEditorSettings;
}

declare type ESpriteExtractMode = 'Auto' | 'Grid' | 'ESpriteExtractMode_MAX';
declare var ESpriteExtractMode : { Auto:'Auto',Grid:'Grid',ESpriteExtractMode_MAX:'ESpriteExtractMode_MAX', };
declare class PaperExtractSpritesSettings extends UObject { 
	SpriteExtractMode: ESpriteExtractMode;
	OutlineColor: LinearColor;
	ViewportTextureTint: LinearColor;
	BackgroundColor: LinearColor;
	NamingTemplate: string;
	NamingStartIndex: number;
	static Load(ResourceName: string): PaperExtractSpritesSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpritesSettings;
	static GetDefaultObject(): PaperExtractSpritesSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpritesSettings;
	static C(Other: UObject | any): PaperExtractSpritesSettings;
}

declare class PaperExtractSpriteGridSettings extends UObject { 
	CellWidth: number;
	CellHeight: number;
	NumCellsX: number;
	NumCellsY: number;
	MarginX: number;
	MarginY: number;
	SpacingX: number;
	SpacingY: number;
	static Load(ResourceName: string): PaperExtractSpriteGridSettings;
	static Find(Outer: UObject, ResourceName: string): PaperExtractSpriteGridSettings;
	static GetDefaultObject(): PaperExtractSpriteGridSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperExtractSpriteGridSettings;
	static C(Other: UObject | any): PaperExtractSpriteGridSettings;
}

declare class PaperFlipbookActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperFlipbookActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
	static GetDefaultObject(): PaperFlipbookActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookActorFactory;
	static C(Other: UObject | any): PaperFlipbookActorFactory;
}

declare class PaperFlipbookFactory extends Factory { 
	static Load(ResourceName: string): PaperFlipbookFactory;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
	static GetDefaultObject(): PaperFlipbookFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookFactory;
	static C(Other: UObject | any): PaperFlipbookFactory;
}

declare class PaperSpriteThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteThumbnailRenderer;
	static GetDefaultObject(): PaperSpriteThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteThumbnailRenderer;
	static C(Other: UObject | any): PaperSpriteThumbnailRenderer;
}

declare class PaperFlipbookThumbnailRenderer extends PaperSpriteThumbnailRenderer { 
	static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperFlipbookThumbnailRenderer;
	static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperFlipbookThumbnailRenderer;
	static C(Other: UObject | any): PaperFlipbookThumbnailRenderer;
}

declare class PaperImporterSettings extends UObject { 
	bPickBestMaterialWhenCreatingSprites: boolean;
	bPickBestMaterialWhenCreatingTileMaps: boolean;
	bAnalysisCanUseOpaque: boolean;
	DefaultPixelsPerUnrealUnit: number;
	NormalMapTextureSuffixes: string[];
	BaseMapTextureSuffixes: string[];
	DefaultSpriteTextureGroup: TextureGroup;
	bOverrideTextureCompression: boolean;
	DefaultSpriteTextureCompression: TextureCompressionSettings;
	UnlitDefaultMaskedMaterialName: SoftObjectPath;
	UnlitDefaultTranslucentMaterialName: SoftObjectPath;
	UnlitDefaultOpaqueMaterialName: SoftObjectPath;
	LitDefaultMaskedMaterialName: SoftObjectPath;
	LitDefaultTranslucentMaterialName: SoftObjectPath;
	LitDefaultOpaqueMaterialName: SoftObjectPath;
	static Load(ResourceName: string): PaperImporterSettings;
	static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
	static GetDefaultObject(): PaperImporterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperImporterSettings;
	static C(Other: UObject | any): PaperImporterSettings;
}

declare class PaperSpriteActorFactory extends ActorFactory { 
	static Load(ResourceName: string): PaperSpriteActorFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
	static GetDefaultObject(): PaperSpriteActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteActorFactory;
	static C(Other: UObject | any): PaperSpriteActorFactory;
}

declare class PaperSpriteAtlasFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteAtlasFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
	static GetDefaultObject(): PaperSpriteAtlasFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteAtlasFactory;
	static C(Other: UObject | any): PaperSpriteAtlasFactory;
}

declare class PaperSpriteFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
	static GetDefaultObject(): PaperSpriteFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteFactory;
	static C(Other: UObject | any): PaperSpriteFactory;
}

declare class PaperTileMapFactory extends Factory { 
	static Load(ResourceName: string): PaperTileMapFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
	static GetDefaultObject(): PaperTileMapFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapFactory;
	static C(Other: UObject | any): PaperTileMapFactory;
}

declare class PaperTileMapPromotionFactory extends Factory { 
	AssetToRename: PaperTileMap;
	static Load(ResourceName: string): PaperTileMapPromotionFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileMapPromotionFactory;
	static GetDefaultObject(): PaperTileMapPromotionFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileMapPromotionFactory;
	static C(Other: UObject | any): PaperTileMapPromotionFactory;
}

declare class PaperTileSetFactory extends Factory { 
	static Load(ResourceName: string): PaperTileSetFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
	static GetDefaultObject(): PaperTileSetFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetFactory;
	static C(Other: UObject | any): PaperTileSetFactory;
}

declare class PaperTileSetThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): PaperTileSetThumbnailRenderer;
	static GetDefaultObject(): PaperTileSetThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTileSetThumbnailRenderer;
	static C(Other: UObject | any): PaperTileSetThumbnailRenderer;
}

declare class SpriteEditorSettings extends UObject { 
	BackgroundColor: Color;
	bShowGridByDefault: boolean;
	static Load(ResourceName: string): SpriteEditorSettings;
	static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
	static GetDefaultObject(): SpriteEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpriteEditorSettings;
	static C(Other: UObject | any): SpriteEditorSettings;
}

declare class TerrainSplineActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TerrainSplineActorFactory;
	static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
	static GetDefaultObject(): TerrainSplineActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TerrainSplineActorFactory;
	static C(Other: UObject | any): TerrainSplineActorFactory;
}

declare class TileMapActorFactory extends ActorFactory { 
	static Load(ResourceName: string): TileMapActorFactory;
	static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
	static GetDefaultObject(): TileMapActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapActorFactory;
	static C(Other: UObject | any): TileMapActorFactory;
}

declare class TileSetImportMapping { 
	SourceName: string;
	ImportedTileSet: any;
	ImportedTexture: any;
	clone() : TileSetImportMapping;
	static C(Other: UObject | any): TileSetImportMapping;
}

declare class TileMapAssetImportData extends AssetImportData { 
	TileSetMap: TileSetImportMapping[];
	static Load(ResourceName: string): TileMapAssetImportData;
	static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
	static GetDefaultObject(): TileMapAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapAssetImportData;
	static C(Other: UObject | any): TileMapAssetImportData;
}

declare class TileMapEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	DefaultTileGridColor: Color;
	DefaultMultiTileGridColor: Color;
	DefaultMultiTileGridWidth: number;
	DefaultMultiTileGridHeight: number;
	DefaultMultiTileGridOffsetX: number;
	DefaultMultiTileGridOffsetY: number;
	DefaultLayerGridColor: Color;
	static Load(ResourceName: string): TileMapEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
	static GetDefaultObject(): TileMapEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileMapEditorSettings;
	static C(Other: UObject | any): TileMapEditorSettings;
}

declare class TileSetEditorSettings extends UObject { 
	DefaultBackgroundColor: Color;
	bShowGridByDefault: boolean;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSetEditorSettings;
	static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
	static GetDefaultObject(): TileSetEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSetEditorSettings;
	static C(Other: UObject | any): TileSetEditorSettings;
}

declare class TileSheetPaddingFactory extends Factory { 
	SourceTileSet: PaperTileSet;
	ExtrusionAmount: number;
	bPadToPowerOf2: boolean;
	bFillWithTransparentBlack: boolean;
	static Load(ResourceName: string): TileSheetPaddingFactory;
	static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
	static GetDefaultObject(): TileSheetPaddingFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TileSheetPaddingFactory;
	static C(Other: UObject | any): TileSheetPaddingFactory;
}

declare class PaperSpriteSheet extends UObject { 
	SpriteNames: string[];
	Sprites: PaperSprite[];
	TextureName: string;
	Texture: Texture2D;
	NormalMapTextureName: string;
	NormalMapTexture: Texture2D;
	AssetImportData: AssetImportData;
	static Load(ResourceName: string): PaperSpriteSheet;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
	static GetDefaultObject(): PaperSpriteSheet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheet;
	static C(Other: UObject | any): PaperSpriteSheet;
}

declare class PaperSpriteSheetImportFactory extends Factory { 
	static Load(ResourceName: string): PaperSpriteSheetImportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetImportFactory;
	static GetDefaultObject(): PaperSpriteSheetImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetImportFactory;
	static C(Other: UObject | any): PaperSpriteSheetImportFactory;
}

declare class PaperSpriteSheetReimportFactory extends PaperSpriteSheetImportFactory { 
	static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
	static Find(Outer: UObject, ResourceName: string): PaperSpriteSheetReimportFactory;
	static GetDefaultObject(): PaperSpriteSheetReimportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperSpriteSheetReimportFactory;
	static C(Other: UObject | any): PaperSpriteSheetReimportFactory;
}

declare class PaperTiledImporterFactory extends Factory { 
	static Load(ResourceName: string): PaperTiledImporterFactory;
	static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
	static GetDefaultObject(): PaperTiledImporterFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PaperTiledImporterFactory;
	static C(Other: UObject | any): PaperTiledImporterFactory;
}

declare class LightPropagationVolumeBlendableFactory extends Factory { 
	static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
	static Find(Outer: UObject, ResourceName: string): LightPropagationVolumeBlendableFactory;
	static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LightPropagationVolumeBlendableFactory;
	static C(Other: UObject | any): LightPropagationVolumeBlendableFactory;
}

declare class LayersBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LayersBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
	static GetDefaultObject(): LayersBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LayersBlueprintLibrary;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static C(Other: UObject | any): LayersBlueprintLibrary;
}

declare class AnimationSharingSetupFactory extends Factory { 
	static Load(ResourceName: string): AnimationSharingSetupFactory;
	static Find(Outer: UObject, ResourceName: string): AnimationSharingSetupFactory;
	static GetDefaultObject(): AnimationSharingSetupFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimationSharingSetupFactory;
	static C(Other: UObject | any): AnimationSharingSetupFactory;
}

declare class MyPluginStruct { 
	TestString: string;
	clone() : MyPluginStruct;
	static C(Other: UObject | any): MyPluginStruct;
}

declare class MyPluginObject extends UObject { 
	MyStruct: MyPluginStruct;
	static Load(ResourceName: string): MyPluginObject;
	static Find(Outer: UObject, ResourceName: string): MyPluginObject;
	static GetDefaultObject(): MyPluginObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MyPluginObject;
	static C(Other: UObject | any): MyPluginObject;
}

declare class CryptoKeysCommandlet extends Commandlet { 
	static Load(ResourceName: string): CryptoKeysCommandlet;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysCommandlet;
	static GetDefaultObject(): CryptoKeysCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysCommandlet;
	static C(Other: UObject | any): CryptoKeysCommandlet;
}

declare class CryptoEncryptionKey { 
	Guid: Guid;
	Name: string;
	Key: string;
	clone() : CryptoEncryptionKey;
	static C(Other: UObject | any): CryptoEncryptionKey;
}

declare class CryptoKeysSettings extends UObject { 
	EncryptionKey: string;
	SecondaryEncryptionKeys: CryptoEncryptionKey[];
	bEncryptPakIniFiles: boolean;
	bEncryptPakIndex: boolean;
	bEncryptUAssetFiles: boolean;
	bEncryptAllAssetFiles: boolean;
	SigningPublicExponent: string;
	SigningModulus: string;
	SigningPrivateExponent: string;
	bEnablePakSigning: boolean;
	static Load(ResourceName: string): CryptoKeysSettings;
	static Find(Outer: UObject, ResourceName: string): CryptoKeysSettings;
	static GetDefaultObject(): CryptoKeysSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CryptoKeysSettings;
	static C(Other: UObject | any): CryptoKeysSettings;
}

declare type ECurveEditorFFTFilterType = 'Lowpass' | 'Highpass' | 'ECurveEditorFFTFilterType_MAX';
declare var ECurveEditorFFTFilterType : { Lowpass:'Lowpass',Highpass:'Highpass',ECurveEditorFFTFilterType_MAX:'ECurveEditorFFTFilterType_MAX', };
declare type ECurveEditorFFTFilterClass = 'Butterworth' | 'Chebyshev' | 'ECurveEditorFFTFilterClass_MAX';
declare var ECurveEditorFFTFilterClass : { Butterworth:'Butterworth',Chebyshev:'Chebyshev',ECurveEditorFFTFilterClass_MAX:'ECurveEditorFFTFilterClass_MAX', };
declare class CurveEditorFFTFilter extends CurveEditorFilterBase { 
	CutoffFrequency: number;
	Type: ECurveEditorFFTFilterType;
	Response: ECurveEditorFFTFilterClass;
	Order: number;
	static Load(ResourceName: string): CurveEditorFFTFilter;
	static Find(Outer: UObject, ResourceName: string): CurveEditorFFTFilter;
	static GetDefaultObject(): CurveEditorFFTFilter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEditorFFTFilter;
	static C(Other: UObject | any): CurveEditorFFTFilter;
}

declare class CurveEditorRetimeAnchor { 
	ValueInSeconds: any;
	bIsSelected: boolean;
	clone() : CurveEditorRetimeAnchor;
	static C(Other: UObject | any): CurveEditorRetimeAnchor;
}

declare class CurveEditorRetimeToolData extends UObject { 
	RetimingAnchors: CurveEditorRetimeAnchor[];
	static Load(ResourceName: string): CurveEditorRetimeToolData;
	static Find(Outer: UObject, ResourceName: string): CurveEditorRetimeToolData;
	static GetDefaultObject(): CurveEditorRetimeToolData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CurveEditorRetimeToolData;
	static C(Other: UObject | any): CurveEditorRetimeToolData;
}

declare class NewPluginDescriptorData extends UObject { 
	CreatedBy: string;
	CreatedByURL: string;
	Description: string;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): NewPluginDescriptorData;
	static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
	static GetDefaultObject(): NewPluginDescriptorData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NewPluginDescriptorData;
	static C(Other: UObject | any): NewPluginDescriptorData;
}

declare class PluginMetadataObject extends UObject { 
	Version: number;
	VersionName: string;
	FriendlyName: string;
	Description: string;
	Category: string;
	CreatedBy: string;
	CreatedByURL: string;
	DocsURL: string;
	MarketplaceURL: string;
	SupportURL: string;
	bCanContainContent: boolean;
	bIsBetaVersion: boolean;
	static Load(ResourceName: string): PluginMetadataObject;
	static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
	static GetDefaultObject(): PluginMetadataObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PluginMetadataObject;
	static C(Other: UObject | any): PluginMetadataObject;
}

declare class SpeedTreeImportFactory extends Factory { 
	static Load(ResourceName: string): SpeedTreeImportFactory;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
	static GetDefaultObject(): SpeedTreeImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportFactory;
	static C(Other: UObject | any): SpeedTreeImportFactory;
}

declare class ReimportSpeedTreeFactory extends SpeedTreeImportFactory { 
	static Load(ResourceName: string): ReimportSpeedTreeFactory;
	static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
	static GetDefaultObject(): ReimportSpeedTreeFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReimportSpeedTreeFactory;
	static C(Other: UObject | any): ReimportSpeedTreeFactory;
}

declare type EImportGeometryType = 'IGT_3D' | 'IGT_Billboards' | 'IGT_Both' | 'IGT_MAX';
declare var EImportGeometryType : { IGT_3D:'IGT_3D',IGT_Billboards:'IGT_Billboards',IGT_Both:'IGT_Both',IGT_MAX:'IGT_MAX', };
declare type EImportLODType = 'ILT_PaintedFoliage' | 'ILT_IndividualActors' | 'ILT_MAX';
declare var EImportLODType : { ILT_PaintedFoliage:'ILT_PaintedFoliage',ILT_IndividualActors:'ILT_IndividualActors',ILT_MAX:'ILT_MAX', };
declare class SpeedTreeImportData extends AssetImportData { 
	TreeScale: number;
	ImportGeometryType: EImportGeometryType;
	LODType: EImportLODType;
	IncludeCollision: boolean;
	MakeMaterialsCheck: boolean;
	IncludeNormalMapCheck: boolean;
	IncludeDetailMapCheck: boolean;
	IncludeSpecularMapCheck: boolean;
	IncludeBranchSeamSmoothing: boolean;
	IncludeSpeedTreeAO: boolean;
	IncludeColorAdjustment: boolean;
	IncludeSubsurface: boolean;
	IncludeVertexProcessingCheck: boolean;
	IncludeWindCheck: boolean;
	IncludeSmoothLODCheck: boolean;
	static Load(ResourceName: string): SpeedTreeImportData;
	static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
	static GetDefaultObject(): SpeedTreeImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpeedTreeImportData;
	static C(Other: UObject | any): SpeedTreeImportData;
}

declare class DatasmithSceneNewFactory extends Factory { 
	static Load(ResourceName: string): DatasmithSceneNewFactory;
	static Find(Outer: UObject, ResourceName: string): DatasmithSceneNewFactory;
	static GetDefaultObject(): DatasmithSceneNewFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DatasmithSceneNewFactory;
	static C(Other: UObject | any): DatasmithSceneNewFactory;
}

declare class CapturedPropSegment { 
	PropertyName: string;
	PropertyIndex: number;
	ComponentName: string;
	clone() : CapturedPropSegment;
	static C(Other: UObject | any): CapturedPropSegment;
}

declare type EPropertyValueCategory = 'Undefined' | 'Generic' | 'RelativeLocation' | 'RelativeRotation' | 'RelativeScale3D' | 'bVisible' | 'Material' | 'Color' | 'EPropertyValueCategory_MAX';
declare var EPropertyValueCategory : { Undefined:'Undefined',Generic:'Generic',RelativeLocation:'RelativeLocation',RelativeRotation:'RelativeRotation',RelativeScale3D:'RelativeScale3D',bVisible:'bVisible',Material:'Material',Color:'Color',EPropertyValueCategory_MAX:'EPropertyValueCategory_MAX', };
declare class PropertyValue extends UObject { 
	Properties: Property[];
	PropertyIndices: number[];
	CapturedPropSegments: CapturedPropSegment[];
	FullDisplayString: string;
	PropertySetterName: string;
	PropertySetterParameterDefaults: any;
	bHasRecordedData: boolean;
	LeafPropertyClass: UnrealEngineClass;
	ValueBytes: number[];
	PropCategory: EPropertyValueCategory;
	static Load(ResourceName: string): PropertyValue;
	static Find(Outer: UObject, ResourceName: string): PropertyValue;
	static GetDefaultObject(): PropertyValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValue;
	HasRecordedData(): boolean;
	GetPropertyTooltip(): string;
	GetFullDisplayString(): string;
	static C(Other: UObject | any): PropertyValue;
}

declare class FunctionCaller { 
	FunctionName: string;
	FunctionEntry: any;
	clone() : FunctionCaller;
	static C(Other: UObject | any): FunctionCaller;
}

declare class VariantObjectBinding extends UObject { 
	ObjectPtr: SoftObjectPath;
	LazyObjectPtr: any;
	CapturedProperties: PropertyValue[];
	FunctionCallers: FunctionCaller[];
	static Load(ResourceName: string): VariantObjectBinding;
	static Find(Outer: UObject, ResourceName: string): VariantObjectBinding;
	static GetDefaultObject(): VariantObjectBinding;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantObjectBinding;
	static C(Other: UObject | any): VariantObjectBinding;
}

declare class Variant extends UObject { 
	DisplayText: string;
	ObjectBindings: VariantObjectBinding[];
	static Load(ResourceName: string): Variant;
	static Find(Outer: UObject, ResourceName: string): Variant;
	static GetDefaultObject(): Variant;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Variant;
	SwitchOn(): void;
	SetDisplayText(NewDisplayText: string): void;
	GetNumActors(): number;
	GetDisplayText(): string;
	GetActor(ActorIndex: number): Actor;
	static C(Other: UObject | any): Variant;
}

declare class VariantSet extends UObject { 
	DisplayText: string;
	bExpanded: boolean;
	Variants: Variant[];
	static Load(ResourceName: string): VariantSet;
	static Find(Outer: UObject, ResourceName: string): VariantSet;
	static GetDefaultObject(): VariantSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantSet;
	SetDisplayText(NewDisplayText: string): void;
	GetVariantByName(VariantName: string): Variant;
	GetVariant(VariantIndex: number): Variant;
	GetNumVariants(): number;
	GetDisplayText(): string;
	static C(Other: UObject | any): VariantSet;
}

declare class LevelVariantSets extends UObject { 
	DirectorBlueprint: UObject;
	DirectorClass: UnrealEngineClass;
	VariantSets: VariantSet[];
	static Load(ResourceName: string): LevelVariantSets;
	static Find(Outer: UObject, ResourceName: string): LevelVariantSets;
	static GetDefaultObject(): LevelVariantSets;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSets;
	GetVariantSetByName(VariantSetName: string): VariantSet;
	GetVariantSet(VariantSetIndex: number): VariantSet;
	GetNumVariantSets(): number;
	static C(Other: UObject | any): LevelVariantSets;
}

declare class LevelVariantSetsActor extends Actor { 
	LevelVariantSets: SoftObjectPath;
	static GetDefaultObject(): LevelVariantSetsActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSetsActor;
	SwitchOnVariantByName(VariantSetName: string,VariantName: string): boolean;
	SwitchOnVariantByIndex(VariantSetIndex: number,VariantIndex: number): boolean;
	SetLevelVariantSets(InVariantSets: LevelVariantSets): void;
	GetLevelVariantSets(bLoad: boolean): LevelVariantSets;
	static C(Other: UObject | any): LevelVariantSetsActor;
}

declare class LevelVariantSetsFunctionDirector extends UObject { 
	static Load(ResourceName: string): LevelVariantSetsFunctionDirector;
	static Find(Outer: UObject, ResourceName: string): LevelVariantSetsFunctionDirector;
	static GetDefaultObject(): LevelVariantSetsFunctionDirector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSetsFunctionDirector;
	static C(Other: UObject | any): LevelVariantSetsFunctionDirector;
}

declare class PropertyValueTransform extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueTransform;
	static Find(Outer: UObject, ResourceName: string): PropertyValueTransform;
	static GetDefaultObject(): PropertyValueTransform;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueTransform;
	static C(Other: UObject | any): PropertyValueTransform;
}

declare class PropertyValueVisibility extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueVisibility;
	static Find(Outer: UObject, ResourceName: string): PropertyValueVisibility;
	static GetDefaultObject(): PropertyValueVisibility;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueVisibility;
	static C(Other: UObject | any): PropertyValueVisibility;
}

declare class PropertyValueColor extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueColor;
	static Find(Outer: UObject, ResourceName: string): PropertyValueColor;
	static GetDefaultObject(): PropertyValueColor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueColor;
	static C(Other: UObject | any): PropertyValueColor;
}

declare class PropertyValueMaterial extends PropertyValue { 
	static Load(ResourceName: string): PropertyValueMaterial;
	static Find(Outer: UObject, ResourceName: string): PropertyValueMaterial;
	static GetDefaultObject(): PropertyValueMaterial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyValueMaterial;
	static C(Other: UObject | any): PropertyValueMaterial;
}

declare class GeometryCacheTrack extends UObject { 
	Duration: number;
	static Load(ResourceName: string): GeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
	static GetDefaultObject(): GeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack;
	static C(Other: UObject | any): GeometryCacheTrack;
}

declare class GeometryCache extends UObject { 
	AssetImportData: AssetImportData;
	ThumbnailInfo: ThumbnailInfo;
	Materials: MaterialInterface[];
	Tracks: GeometryCacheTrack[];
	StartFrame: number;
	EndFrame: number;
	static Load(ResourceName: string): GeometryCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCache;
	static GetDefaultObject(): GeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCache;
	static C(Other: UObject | any): GeometryCache;
}

declare class GeometryCacheComponent extends MeshComponent { 
	GeometryCache: GeometryCache;
	bRunning: boolean;
	bLooping: boolean;
	StartTimeOffset: number;
	PlaybackSpeed: number;
	NumTracks: number;
	ElapsedTime: number;
	Duration: number;
	bManualTick: boolean;
	static Load(ResourceName: string): GeometryCacheComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheComponent;
	TickAtThisTime(Time: number,bInIsRunning: boolean,bInBackwards: boolean,bInIsLooping: boolean): void;
	Stop(): void;
	SetStartTimeOffset(NewStartTimeOffset: number): void;
	SetPlaybackSpeed(NewPlaybackSpeed: number): void;
	SetLooping(bNewLooping: boolean): void;
	SetGeometryCache(NewGeomCache: GeometryCache): boolean;
	PlayReversedFromEnd(): void;
	PlayReversed(): void;
	PlayFromStart(): void;
	Play(): void;
	Pause(): void;
	IsPlayingReversed(): boolean;
	IsPlaying(): boolean;
	IsLooping(): boolean;
	GetStartTimeOffset(): number;
	GetPlaybackSpeed(): number;
	GetPlaybackDirection(): number;
	GetNumberOfFrames(): number;
	GetDuration(): number;
	GetAnimationTime(): number;
	static C(Other: UObject | any): GeometryCacheComponent;
}

declare class GeometryCacheActor extends Actor { 
	GeometryCacheComponent: GeometryCacheComponent;
	static GetDefaultObject(): GeometryCacheActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheActor;
	GetGeometryCacheComponent(): GeometryCacheComponent;
	static C(Other: UObject | any): GeometryCacheActor;
}

declare class GeometryCacheCodecBase extends UObject { 
	TopologyRanges: number[];
	static Load(ResourceName: string): GeometryCacheCodecBase;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecBase;
	static GetDefaultObject(): GeometryCacheCodecBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecBase;
	static C(Other: UObject | any): GeometryCacheCodecBase;
}

declare class GeometryCacheCodecRaw extends GeometryCacheCodecBase { 
	DummyProperty: number;
	static Load(ResourceName: string): GeometryCacheCodecRaw;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecRaw;
	static GetDefaultObject(): GeometryCacheCodecRaw;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecRaw;
	static C(Other: UObject | any): GeometryCacheCodecRaw;
}

declare class GeometryCacheCodecV1 extends GeometryCacheCodecBase { 
	static Load(ResourceName: string): GeometryCacheCodecV1;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecV1;
	static GetDefaultObject(): GeometryCacheCodecV1;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheCodecV1;
	static C(Other: UObject | any): GeometryCacheCodecV1;
}

declare class GeometryCacheMeshData { 
	clone() : GeometryCacheMeshData;
	static C(Other: UObject | any): GeometryCacheMeshData;
}

declare class GeometryCacheTrack_FlipbookAnimation extends GeometryCacheTrack { 
	NumMeshSamples: any;
	static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
	static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_FlipbookAnimation;
	AddMeshSample(MeshData: GeometryCacheMeshData,SampleTime: number): void;
	static C(Other: UObject | any): GeometryCacheTrack_FlipbookAnimation;
}

declare class GeometryCacheTrackStreamable extends GeometryCacheTrack { 
	Codec: GeometryCacheCodecBase;
	StartSampleTime: number;
	static Load(ResourceName: string): GeometryCacheTrackStreamable;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrackStreamable;
	static GetDefaultObject(): GeometryCacheTrackStreamable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrackStreamable;
	static C(Other: UObject | any): GeometryCacheTrackStreamable;
}

declare class GeometryCacheTrack_TransformAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformAnimation;
}

declare class GeometryCacheTrack_TransformGroupAnimation extends GeometryCacheTrack { 
	static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
	static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheTrack_TransformGroupAnimation;
	SetMesh(NewMeshData: GeometryCacheMeshData): void;
	static C(Other: UObject | any): GeometryCacheTrack_TransformGroupAnimation;
}

declare type EAlembicSamplingType = 'PerFrame' | 'PerXFrames' | 'PerTimeStep' | 'EAlembicSamplingType_MAX';
declare var EAlembicSamplingType : { PerFrame:'PerFrame',PerXFrames:'PerXFrames',PerTimeStep:'PerTimeStep',EAlembicSamplingType_MAX:'EAlembicSamplingType_MAX', };
declare class AbcSamplingSettings { 
	SamplingType: EAlembicSamplingType;
	FrameSteps: number;
	TimeSteps: number;
	FrameStart: number;
	FrameEnd: number;
	bSkipEmpty: boolean;
	clone() : AbcSamplingSettings;
	static C(Other: UObject | any): AbcSamplingSettings;
}

declare class AbcAssetImportData extends AssetImportData { 
	TrackNames: string[];
	SamplingSettings: AbcSamplingSettings;
	static Load(ResourceName: string): AbcAssetImportData;
	static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
	static GetDefaultObject(): AbcAssetImportData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcAssetImportData;
	static C(Other: UObject | any): AbcAssetImportData;
}

declare type EAlembicImportType = 'StaticMesh' | 'GeometryCache' | 'Skeletal' | 'EAlembicImportType_MAX';
declare var EAlembicImportType : { StaticMesh:'StaticMesh',GeometryCache:'GeometryCache',Skeletal:'Skeletal',EAlembicImportType_MAX:'EAlembicImportType_MAX', };
declare class AbcNormalGenerationSettings { 
	bForceOneSmoothingGroupPerObject: boolean;
	HardEdgeAngleThreshold: number;
	bRecomputeNormals: boolean;
	bIgnoreDegenerateTriangles: boolean;
	clone() : AbcNormalGenerationSettings;
	static C(Other: UObject | any): AbcNormalGenerationSettings;
}

declare class AbcMaterialSettings { 
	bCreateMaterials: boolean;
	bFindMaterials: boolean;
	clone() : AbcMaterialSettings;
	static C(Other: UObject | any): AbcMaterialSettings;
}

declare type EBaseCalculationType = 'PercentageBased' | 'FixedNumber' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
declare class AbcCompressionSettings { 
	bMergeMeshes: boolean;
	bBakeMatrixAnimation: boolean;
	BaseCalculationType: EBaseCalculationType;
	PercentageOfTotalBases: number;
	MaxNumberOfBases: number;
	MinimumNumberOfVertexInfluencePercentage: number;
	clone() : AbcCompressionSettings;
	static C(Other: UObject | any): AbcCompressionSettings;
}

declare class AbcStaticMeshSettings { 
	bMergeMeshes: boolean;
	bPropagateMatrixTransformations: boolean;
	bGenerateLightmapUVs: boolean;
	clone() : AbcStaticMeshSettings;
	static C(Other: UObject | any): AbcStaticMeshSettings;
}

declare class AbcGeometryCacheSettings { 
	bFlattenTracks: boolean;
	bApplyConstantTopologyOptimizations: boolean;
	bCalculateMotionVectorsDuringImport: boolean;
	bOptimizeIndexBuffers: boolean;
	CompressedPositionPrecision: number;
	CompressedTextureCoordinatesNumberOfBits: number;
	clone() : AbcGeometryCacheSettings;
	static C(Other: UObject | any): AbcGeometryCacheSettings;
}

declare type EAbcConversionPreset = 'Maya' | 'Max' | 'Custom' | 'EAbcConversionPreset_MAX';
declare var EAbcConversionPreset : { Maya:'Maya',Max:'Max',Custom:'Custom',EAbcConversionPreset_MAX:'EAbcConversionPreset_MAX', };
declare class AbcConversionSettings { 
	Preset: EAbcConversionPreset;
	bFlipU: boolean;
	bFlipV: boolean;
	Scale: Vector;
	Rotation: Vector;
	clone() : AbcConversionSettings;
	static C(Other: UObject | any): AbcConversionSettings;
}

declare class AbcImportSettings extends UObject { 
	ImportType: EAlembicImportType;
	SamplingSettings: AbcSamplingSettings;
	NormalGenerationSettings: AbcNormalGenerationSettings;
	MaterialSettings: AbcMaterialSettings;
	CompressionSettings: AbcCompressionSettings;
	StaticMeshSettings: AbcStaticMeshSettings;
	GeometryCacheSettings: AbcGeometryCacheSettings;
	ConversionSettings: AbcConversionSettings;
	static Load(ResourceName: string): AbcImportSettings;
	static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
	static GetDefaultObject(): AbcImportSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbcImportSettings;
	static C(Other: UObject | any): AbcImportSettings;
}

declare class AlembicTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): AlembicTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
	static GetDefaultObject(): AlembicTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicTestCommandlet;
	static C(Other: UObject | any): AlembicTestCommandlet;
}

declare class AlembicImportFactory extends Factory { 
	ImportSettings: AbcImportSettings;
	bShowOption: boolean;
	static Load(ResourceName: string): AlembicImportFactory;
	static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
	static GetDefaultObject(): AlembicImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AlembicImportFactory;
	static C(Other: UObject | any): AlembicImportFactory;
}

declare class ActorFactoryGeometryCache extends ActorFactory { 
	static Load(ResourceName: string): ActorFactoryGeometryCache;
	static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
	static GetDefaultObject(): ActorFactoryGeometryCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorFactoryGeometryCache;
	static C(Other: UObject | any): ActorFactoryGeometryCache;
}

declare class GeometryCacheThumbnailRenderer extends DefaultSizedThumbnailRenderer { 
	static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
	static Find(Outer: UObject, ResourceName: string): GeometryCacheThumbnailRenderer;
	static GetDefaultObject(): GeometryCacheThumbnailRenderer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCacheThumbnailRenderer;
	static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}

declare class AutomationUtilsBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AutomationUtilsBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AutomationUtilsBlueprintLibrary;
	static GetDefaultObject(): AutomationUtilsBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AutomationUtilsBlueprintLibrary;
	static TakeGameplayAutomationScreenshot(ScreenShotName: string,MaxGlobalError: number,MaxLocalError: number,MapNameOverride: string): void;
	static C(Other: UObject | any): AutomationUtilsBlueprintLibrary;
}

declare class ScreenshotComparisonCommandlet extends Commandlet { 
	static Load(ResourceName: string): ScreenshotComparisonCommandlet;
	static Find(Outer: UObject, ResourceName: string): ScreenshotComparisonCommandlet;
	static GetDefaultObject(): ScreenshotComparisonCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ScreenshotComparisonCommandlet;
	static C(Other: UObject | any): ScreenshotComparisonCommandlet;
}

declare class MovieSceneGeometryCacheParams { 
	GeometryCacheAsset: GeometryCache;
	StartFrameOffset: FrameNumber;
	EndFrameOffset: FrameNumber;
	PlayRate: number;
	bReverse: boolean;
	StartOffset: number;
	EndOffset: number;
	GeometryCache: SoftObjectPath;
	clone() : MovieSceneGeometryCacheParams;
	static C(Other: UObject | any): MovieSceneGeometryCacheParams;
}

declare class MovieSceneGeometryCacheSection extends MovieSceneSection { 
	Params: MovieSceneGeometryCacheParams;
	static Load(ResourceName: string): MovieSceneGeometryCacheSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheSection;
	static GetDefaultObject(): MovieSceneGeometryCacheSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheSection;
	static C(Other: UObject | any): MovieSceneGeometryCacheSection;
}

declare class MovieSceneGeometryCacheTrack extends MovieSceneNameableTrack { 
	AnimationSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneGeometryCacheTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneGeometryCacheTrack;
	static GetDefaultObject(): MovieSceneGeometryCacheTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneGeometryCacheTrack;
	static C(Other: UObject | any): MovieSceneGeometryCacheTrack;
}

declare class WebSocketConnection extends NetConnection { 
	static Load(ResourceName: string): WebSocketConnection;
	static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
	static GetDefaultObject(): WebSocketConnection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketConnection;
	static C(Other: UObject | any): WebSocketConnection;
}

declare class WebSocketNetDriver extends NetDriver { 
	WebSocketPort: number;
	static Load(ResourceName: string): WebSocketNetDriver;
	static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
	static GetDefaultObject(): WebSocketNetDriver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketNetDriver;
	static C(Other: UObject | any): WebSocketNetDriver;
}

declare class ImgMediaSettings extends UObject { 
	DefaultFrameRate: FrameRate;
	CacheBehindPercentage: number;
	CacheSizeGB: number;
	CacheThreads: number;
	CacheThreadStackSizeKB: number;
	GlobalCacheSizeGB: number;
	UseGlobalCache: boolean;
	ExrDecoderThreads: any;
	DefaultProxy: string;
	UseDefaultProxy: boolean;
	static Load(ResourceName: string): ImgMediaSettings;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
	static GetDefaultObject(): ImgMediaSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSettings;
	static C(Other: UObject | any): ImgMediaSettings;
}

declare class ImgMediaSource extends BaseMediaSource { 
	FrameRateOverride: FrameRate;
	ProxyOverride: string;
	SequencePath: DirectoryPath;
	static Load(ResourceName: string): ImgMediaSource;
	static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
	static GetDefaultObject(): ImgMediaSource;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ImgMediaSource;
	SetSequencePath(Path: string): void;
	GetSequencePath(): string;
	GetProxies(OutProxies?: string[]): {OutProxies: string[]};
	static C(Other: UObject | any): ImgMediaSource;
}

declare class MovieSceneMediaSection extends MovieSceneSection { 
	MediaSource: MediaSource;
	bLooping: boolean;
	StartFrameOffset: FrameNumber;
	MediaTexture: MediaTexture;
	MediaSoundComponent: MediaSoundComponent;
	bUseExternalMediaPlayer: boolean;
	ExternalMediaPlayer: MediaPlayer;
	ThumbnailReferenceOffset: number;
	static Load(ResourceName: string): MovieSceneMediaSection;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaSection;
	static GetDefaultObject(): MovieSceneMediaSection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaSection;
	static C(Other: UObject | any): MovieSceneMediaSection;
}

declare class MovieSceneMediaTrack extends MovieSceneNameableTrack { 
	MediaSections: MovieSceneSection[];
	static Load(ResourceName: string): MovieSceneMediaTrack;
	static Find(Outer: UObject, ResourceName: string): MovieSceneMediaTrack;
	static GetDefaultObject(): MovieSceneMediaTrack;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovieSceneMediaTrack;
	static C(Other: UObject | any): MovieSceneMediaTrack;
}

declare class NetPropertyHook extends Property { 
	static Load(ResourceName: string): NetPropertyHook;
	static Find(Outer: UObject, ResourceName: string): NetPropertyHook;
	static GetDefaultObject(): NetPropertyHook;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetPropertyHook;
	static C(Other: UObject | any): NetPropertyHook;
}

declare class UnitTestBase extends UObject { 
	static Load(ResourceName: string): UnitTestBase;
	static Find(Outer: UObject, ResourceName: string): UnitTestBase;
	static GetDefaultObject(): UnitTestBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestBase;
	static C(Other: UObject | any): UnitTestBase;
}

declare class UnitTask extends UObject { 
	static Load(ResourceName: string): UnitTask;
	static Find(Outer: UObject, ResourceName: string): UnitTask;
	static GetDefaultObject(): UnitTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTask;
	static C(Other: UObject | any): UnitTask;
}

declare type EUnitTestVerification = 'Unverified' | 'VerifiedNotFixed' | 'VerifiedFixed' | 'VerifiedNeedsUpdate' | 'VerifiedUnreliable' | 'EUnitTestVerification_MAX';
declare var EUnitTestVerification : { Unverified:'Unverified',VerifiedNotFixed:'VerifiedNotFixed',VerifiedFixed:'VerifiedFixed',VerifiedNeedsUpdate:'VerifiedNeedsUpdate',VerifiedUnreliable:'VerifiedUnreliable',EUnitTestVerification_MAX:'EUnitTestVerification_MAX', };
declare class UnitTest extends UnitTestBase { 
	PeakMemoryUsage: any;
	TimeToPeakMem: number;
	LastExecutionTime: number;
	UnitTasks: UnitTask[];
	VerificationState: EUnitTestVerification;
	static Load(ResourceName: string): UnitTest;
	static Find(Outer: UObject, ResourceName: string): UnitTest;
	static GetDefaultObject(): UnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTest;
	static C(Other: UObject | any): UnitTest;
}

declare class ProcessUnitTest extends UnitTest { 
	static Load(ResourceName: string): ProcessUnitTest;
	static Find(Outer: UObject, ResourceName: string): ProcessUnitTest;
	static GetDefaultObject(): ProcessUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ProcessUnitTest;
	static C(Other: UObject | any): ProcessUnitTest;
}

declare class MinimalClient extends UObject { 
	static Load(ResourceName: string): MinimalClient;
	static Find(Outer: UObject, ResourceName: string): MinimalClient;
	static GetDefaultObject(): MinimalClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MinimalClient;
	static C(Other: UObject | any): MinimalClient;
}

declare class ClientUnitTest extends ProcessUnitTest { 
	MinClient: MinimalClient;
	static Load(ResourceName: string): ClientUnitTest;
	static Find(Outer: UObject, ResourceName: string): ClientUnitTest;
	static GetDefaultObject(): ClientUnitTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClientUnitTest;
	static C(Other: UObject | any): ClientUnitTest;
}

declare class IPClient extends ClientUnitTest { 
	static Load(ResourceName: string): IPClient;
	static Find(Outer: UObject, ResourceName: string): IPClient;
	static GetDefaultObject(): IPClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IPClient;
	static C(Other: UObject | any): IPClient;
}

declare class HTML5Client extends IPClient { 
	static Load(ResourceName: string): HTML5Client;
	static Find(Outer: UObject, ResourceName: string): HTML5Client;
	static GetDefaultObject(): HTML5Client;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5Client;
	static C(Other: UObject | any): HTML5Client;
}

declare class NUTActor extends Actor { 
	TempDelegate: UnrealEngineDelegate<(InNUTActor: NUTActor) => void>;
	static GetDefaultObject(): NUTActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NUTActor;
	Wait(Seconds: any): void;
	UnitTravel(Dest: string): void;
	UnitSeamlessTravel(Dest: string): void;
	ServerReceiveText(InText: string): void;
	ServerExecute(InDelegate: string): void;
	ServerClientStillAlive(): void;
	ServerClientPing(): void;
	ServerAdmin(Command: string): void;
	NetMulticastPing(): void;
	NetFlush(): void;
	Admin(Command: string): void;
	static C(Other: UObject | any): NUTActor;
}

declare class NUTGlobals extends UObject { 
	EventWatcher: NetConnection;
	ServerPortOffset: number;
	UnitTestNetDriverCount: number;
	DumpRPCMatches: string[];
	UnitTestModules: string[];
	UnloadedModules: string[];
	static Load(ResourceName: string): NUTGlobals;
	static Find(Outer: UObject, ResourceName: string): NUTGlobals;
	static GetDefaultObject(): NUTGlobals;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NUTGlobals;
	static C(Other: UObject | any): NUTGlobals;
}

declare class PackedVectorTest extends UnitTest { 
	static Load(ResourceName: string): PackedVectorTest;
	static Find(Outer: UObject, ResourceName: string): PackedVectorTest;
	static GetDefaultObject(): PackedVectorTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PackedVectorTest;
	static C(Other: UObject | any): PackedVectorTest;
}

declare class SteamClient extends IPClient { 
	static Load(ResourceName: string): SteamClient;
	static Find(Outer: UObject, ResourceName: string): SteamClient;
	static GetDefaultObject(): SteamClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamClient;
	static C(Other: UObject | any): SteamClient;
}

declare class UnitTestActorChannel extends ActorChannel { 
	static Load(ResourceName: string): UnitTestActorChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestActorChannel;
	static GetDefaultObject(): UnitTestActorChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestActorChannel;
	static C(Other: UObject | any): UnitTestActorChannel;
}

declare class UnitTestChannel extends Channel { 
	static Load(ResourceName: string): UnitTestChannel;
	static Find(Outer: UObject, ResourceName: string): UnitTestChannel;
	static GetDefaultObject(): UnitTestChannel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestChannel;
	static C(Other: UObject | any): UnitTestChannel;
}

declare class UnitTestCommandlet extends Commandlet { 
	static Load(ResourceName: string): UnitTestCommandlet;
	static Find(Outer: UObject, ResourceName: string): UnitTestCommandlet;
	static GetDefaultObject(): UnitTestCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestCommandlet;
	static C(Other: UObject | any): UnitTestCommandlet;
}

declare class UnitTestManager extends UObject { 
	bCapUnitTestCount: boolean;
	MaxUnitTestCount: number;
	bCapUnitTestMemory: boolean;
	MaxMemoryPercent: number;
	AutoCloseMemoryPercent: number;
	MaxAutoCloseCount: number;
	UnitTestSessionCount: any;
	PendingUnitTests: UnrealEngineClass[];
	ActiveUnitTests: UnitTest[];
	FinishedUnitTests: UnitTest[];
	static Load(ResourceName: string): UnitTestManager;
	static Find(Outer: UObject, ResourceName: string): UnitTestManager;
	static GetDefaultObject(): UnitTestManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestManager;
	static C(Other: UObject | any): UnitTestManager;
}

declare class UnitTestPackageMap extends PackageMapClient { 
	static Load(ResourceName: string): UnitTestPackageMap;
	static Find(Outer: UObject, ResourceName: string): UnitTestPackageMap;
	static GetDefaultObject(): UnitTestPackageMap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitTestPackageMap;
	static C(Other: UObject | any): UnitTestPackageMap;
}

declare class VMReflection extends UnitTest { 
	static Load(ResourceName: string): VMReflection;
	static Find(Outer: UObject, ResourceName: string): VMReflection;
	static GetDefaultObject(): VMReflection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMReflection;
	static C(Other: UObject | any): VMReflection;
}

declare class VMTestClassA extends UObject { 
	AObjectRef: UObject;
	ByteProp: number;
	UInt16Prop: any;
	UInt32Prop: any;
	UInt64Prop: any;
	Int8Prop: any;
	Int16Prop: any;
	Int32Prop: number;
	Int64Prop: any;
	FloatProp: number;
	DoubleProp: any;
	bBoolPropA: boolean;
	bBoolPropB: boolean;
	bBoolPropC: boolean;
	bBoolPropD: boolean;
	bBoolPropE: boolean;
	NameProp: string;
	StringProp: string;
	TextProp: string;
	BytePropArray: number;
	ObjectPropArray: UObject;
	DynBytePropArray: number[];
	DynBoolPropArray: boolean[];
	DynObjectPropArray: UObject[];
	DynNamePropArray: string[];
	DynDoublePropArray: any[];
	DynFloatPropArray: number[];
	DynInt16PropArray: any[];
	DynInt64PropArray: any[];
	DynInt8PropArray: any[];
	DynIntPropArray: number[];
	DynUInt16PropArray: any[];
	DynUIntPropArray: any[];
	DynUInt64PropArray: any[];
	DynStringPropArray: string[];
	DynTextPropArray: string[];
	DynClassPropArray: UnrealEngineClass[];
	DynPawnPropArray: Pawn[];
	StructProp: Vector;
	StructPropArray: Vector;
	DynStructPropArray: Vector[];
	static Load(ResourceName: string): VMTestClassA;
	static Find(Outer: UObject, ResourceName: string): VMTestClassA;
	static GetDefaultObject(): VMTestClassA;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassA;
	static C(Other: UObject | any): VMTestClassA;
}

declare class VMTestClassB extends UObject { 
	BObjectRef: UObject;
	static Load(ResourceName: string): VMTestClassB;
	static Find(Outer: UObject, ResourceName: string): VMTestClassB;
	static GetDefaultObject(): VMTestClassB;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VMTestClassB;
	static C(Other: UObject | any): VMTestClassB;
}

declare class ExecuteOnServer__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ExecuteOnServer__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ExecuteOnServer__PythonCallable;
	static GetDefaultObject(): ExecuteOnServer__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExecuteOnServer__PythonCallable;
	static C(Other: UObject | any): ExecuteOnServer__PythonCallable;
}

declare class FTextCrash extends ClientUnitTest { 
	static Load(ResourceName: string): FTextCrash;
	static Find(Outer: UObject, ResourceName: string): FTextCrash;
	static GetDefaultObject(): FTextCrash;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FTextCrash;
	static C(Other: UObject | any): FTextCrash;
}

declare class NetBitsTest extends UnitTest { 
	static Load(ResourceName: string): NetBitsTest;
	static Find(Outer: UObject, ResourceName: string): NetBitsTest;
	static GetDefaultObject(): NetBitsTest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetBitsTest;
	static C(Other: UObject | any): NetBitsTest;
}

declare class UTT61_DebugReplicateData extends ClientUnitTest { 
	static Load(ResourceName: string): UTT61_DebugReplicateData;
	static Find(Outer: UObject, ResourceName: string): UTT61_DebugReplicateData;
	static GetDefaultObject(): UTT61_DebugReplicateData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UTT61_DebugReplicateData;
	static C(Other: UObject | any): UTT61_DebugReplicateData;
}

declare class AndroidPermissionCallbackProxy extends UObject { 
	OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<(Permissions: string[], GrantResults: boolean[]) => void>;
	static Load(ResourceName: string): AndroidPermissionCallbackProxy;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionCallbackProxy;
	static GetDefaultObject(): AndroidPermissionCallbackProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionCallbackProxy;
}

declare class AndroidPermissionFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AndroidPermissionFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionFunctionLibrary;
	static GetDefaultObject(): AndroidPermissionFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionFunctionLibrary;
	static CheckPermission(permission: string): boolean;
	static AcquirePermissions(Permissions: string[]): AndroidPermissionCallbackProxy;
	static C(Other: UObject | any): AndroidPermissionFunctionLibrary;
}

declare class AndroidPermissionDynamicDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AndroidPermissionDynamicDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AndroidPermissionDynamicDelegate__PythonCallable;
	static GetDefaultObject(): AndroidPermissionDynamicDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidPermissionDynamicDelegate__PythonCallable;
	static C(Other: UObject | any): AndroidPermissionDynamicDelegate__PythonCallable;
}

declare class AppleImageUtilsImageConversionResult { 
	Error: string;
	ImageData: number[];
	clone() : AppleImageUtilsImageConversionResult;
	static C(Other: UObject | any): AppleImageUtilsImageConversionResult;
}

declare type ETextureRotationDirection = 'None' | 'Left' | 'Right' | 'Down' | 'ETextureRotationDirection_MAX';
declare var ETextureRotationDirection : { None:'None',Left:'Left',Right:'Right',Down:'Down',ETextureRotationDirection_MAX:'ETextureRotationDirection_MAX', };
declare class AppleImageUtilsBaseAsyncTaskBlueprintProxy extends UObject { 
	OnSuccess: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	OnFailure: UnrealEngineMulticastDelegate<(ConversionResult: AppleImageUtilsImageConversionResult) => void>;
	ConversionResult: AppleImageUtilsImageConversionResult;
	static Load(ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static Find(Outer: UObject, ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static GetDefaultObject(): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToTIFF(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToPNG(SourceImage: Texture,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToJPEG(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static CreateProxyObjectForConvertToHEIF(SourceImage: Texture,Quality: number,bWantColor: boolean,bUseGpu: boolean,Scale: number,Rotate: ETextureRotationDirection): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
	static C(Other: UObject | any): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
}

declare class AppleImageInterface extends Interface { 
	static Load(ResourceName: string): AppleImageInterface;
	static Find(Outer: UObject, ResourceName: string): AppleImageInterface;
	static GetDefaultObject(): AppleImageInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageInterface;
	static C(Other: UObject | any): AppleImageInterface;
}

declare class AppleImageConversionDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AppleImageConversionDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AppleImageConversionDelegate__PythonCallable;
	static GetDefaultObject(): AppleImageConversionDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AppleImageConversionDelegate__PythonCallable;
	static C(Other: UObject | any): AppleImageConversionDelegate__PythonCallable;
}

declare class K2Node_ConvertToJPEG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToJPEG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToJPEG;
	static GetDefaultObject(): K2Node_ConvertToJPEG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToJPEG;
	static C(Other: UObject | any): K2Node_ConvertToJPEG;
}

declare class K2Node_ConvertToHEIF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToHEIF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToHEIF;
	static GetDefaultObject(): K2Node_ConvertToHEIF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToHEIF;
	static C(Other: UObject | any): K2Node_ConvertToHEIF;
}

declare class K2Node_ConvertToTIFF extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToTIFF;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToTIFF;
	static GetDefaultObject(): K2Node_ConvertToTIFF;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToTIFF;
	static C(Other: UObject | any): K2Node_ConvertToTIFF;
}

declare class K2Node_ConvertToPNG extends K2Node_BaseAsyncTask { 
	static Load(ResourceName: string): K2Node_ConvertToPNG;
	static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToPNG;
	static GetDefaultObject(): K2Node_ConvertToPNG;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_ConvertToPNG;
	static C(Other: UObject | any): K2Node_ConvertToPNG;
}

declare class ArchVisCharacter extends Character { 
	LookUpAxisName: string;
	LookUpAtRateAxisName: string;
	TurnAxisName: string;
	TurnAtRateAxisName: string;
	MoveForwardAxisName: string;
	MoveRightAxisName: string;
	MouseSensitivityScale_Pitch: number;
	MouseSensitivityScale_Yaw: number;
	static GetDefaultObject(): ArchVisCharacter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharacter;
	static C(Other: UObject | any): ArchVisCharacter;
}

declare class ArchVisCharMovementComponent extends CharacterMovementComponent { 
	RotationalAcceleration: Rotator;
	RotationalDeceleration: Rotator;
	MaxRotationalVelocity: Rotator;
	MinPitch: number;
	MaxPitch: number;
	WalkingFriction: number;
	WalkingSpeed: number;
	WalkingAcceleration: number;
	static Load(ResourceName: string): ArchVisCharMovementComponent;
	static Find(Outer: UObject, ResourceName: string): ArchVisCharMovementComponent;
	static GetDefaultObject(): ArchVisCharMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ArchVisCharMovementComponent;
	static C(Other: UObject | any): ArchVisCharMovementComponent;
}

declare class AudioCaptureDeviceInfo { 
	DeviceName: string;
	NumInputChannels: number;
	SampleRate: number;
	clone() : AudioCaptureDeviceInfo;
	static C(Other: UObject | any): AudioCaptureDeviceInfo;
}

declare class AudioCapture extends AudioGenerator { 
	static Load(ResourceName: string): AudioCapture;
	static Find(Outer: UObject, ResourceName: string): AudioCapture;
	static GetDefaultObject(): AudioCapture;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCapture;
	StopCapturingAudio(): void;
	StartCapturingAudio(): void;
	IsCapturingAudio(): boolean;
	GetAudioCaptureDeviceInfo(OutInfo?: AudioCaptureDeviceInfo): {OutInfo: AudioCaptureDeviceInfo, $: boolean};
	static C(Other: UObject | any): AudioCapture;
}

declare class AudioCaptureFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AudioCaptureFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureFunctionLibrary;
	static GetDefaultObject(): AudioCaptureFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureFunctionLibrary;
	static CreateAudioCapture(): AudioCapture;
	static C(Other: UObject | any): AudioCaptureFunctionLibrary;
}

declare class AudioCaptureComponent extends SynthComponent { 
	JitterLatencyFrames: number;
	static Load(ResourceName: string): AudioCaptureComponent;
	static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
	static GetDefaultObject(): AudioCaptureComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AudioCaptureComponent;
	static C(Other: UObject | any): AudioCaptureComponent;
}

declare class ComponentReference { 
	OtherActor: Actor;
	ComponentProperty: string;
	PathToComponent: string;
	clone() : ComponentReference;
	static C(Other: UObject | any): ComponentReference;
}

declare class CableComponent extends MeshComponent { 
	bAttachStart: boolean;
	bAttachEnd: boolean;
	AttachEndTo: ComponentReference;
	AttachEndToSocketName: string;
	EndLocation: Vector;
	CableLength: number;
	NumSegments: number;
	SubstepTime: number;
	SolverIterations: number;
	bEnableStiffness: boolean;
	bEnableCollision: boolean;
	CollisionFriction: number;
	CableForce: Vector;
	CableGravityScale: number;
	CableWidth: number;
	NumSides: number;
	TileMaterial: number;
	static Load(ResourceName: string): CableComponent;
	static Find(Outer: UObject, ResourceName: string): CableComponent;
	static GetDefaultObject(): CableComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableComponent;
	SetAttachEndToComponent(Component: SceneComponent,SocketName: string): void;
	SetAttachEndTo(Actor: Actor,ComponentProperty: string,SocketName: string): void;
	GetCableParticleLocations(Locations?: Vector[]): {Locations: Vector[]};
	GetAttachedComponent(): SceneComponent;
	GetAttachedActor(): Actor;
	static C(Other: UObject | any): CableComponent;
}

declare class CableActor extends Actor { 
	CableComponent: CableComponent;
	static GetDefaultObject(): CableActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CableActor;
	static C(Other: UObject | any): CableActor;
}

declare class CustomMeshTriangle { 
	Vertex0: Vector;
	Vertex1: Vector;
	Vertex2: Vector;
	clone() : CustomMeshTriangle;
	static C(Other: UObject | any): CustomMeshTriangle;
}

declare class CustomMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): CustomMeshComponent;
	static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
	static GetDefaultObject(): CustomMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomMeshComponent;
	SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
	static C(Other: UObject | any): CustomMeshComponent;
}

declare class ChaosEventListenerComponent extends ActorComponent { 
	static Load(ResourceName: string): ChaosEventListenerComponent;
	static Find(Outer: UObject, ResourceName: string): ChaosEventListenerComponent;
	static GetDefaultObject(): ChaosEventListenerComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosEventListenerComponent;
	static C(Other: UObject | any): ChaosEventListenerComponent;
}

declare class ChaosGameplayEventDispatcher extends ChaosEventListenerComponent { 
	CollisionEventRegistrations: any;
	BreakEventRegistrations: any;
	static Load(ResourceName: string): ChaosGameplayEventDispatcher;
	static Find(Outer: UObject, ResourceName: string): ChaosGameplayEventDispatcher;
	static GetDefaultObject(): ChaosGameplayEventDispatcher;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosGameplayEventDispatcher;
	static C(Other: UObject | any): ChaosGameplayEventDispatcher;
}

declare class ChaosNotifyHandlerInterface extends Interface { 
	static Load(ResourceName: string): ChaosNotifyHandlerInterface;
	static Find(Outer: UObject, ResourceName: string): ChaosNotifyHandlerInterface;
	static GetDefaultObject(): ChaosNotifyHandlerInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosNotifyHandlerInterface;
	static C(Other: UObject | any): ChaosNotifyHandlerInterface;
}

declare class ChaosPhysicsCollisionInfo { 
	Component: PrimitiveComponent;
	OtherComponent: PrimitiveComponent;
	Location: Vector;
	Normal: Vector;
	AccumulatedImpulse: Vector;
	Velocity: Vector;
	OtherVelocity: Vector;
	AngularVelocity: Vector;
	OtherAngularVelocity: Vector;
	Mass: number;
	OtherMass: number;
	clone() : ChaosPhysicsCollisionInfo;
	static C(Other: UObject | any): ChaosPhysicsCollisionInfo;
	ConvertPhysicsCollisionToHitResult(): HitResult;
	static ConvertPhysicsCollisionToHitResult(PhysicsCollision: ChaosPhysicsCollisionInfo): HitResult;
}

declare class ChaosSolverEngineBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): ChaosSolverEngineBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): ChaosSolverEngineBlueprintLibrary;
	static GetDefaultObject(): ChaosSolverEngineBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverEngineBlueprintLibrary;
	static ConvertPhysicsCollisionToHitResult(PhysicsCollision: ChaosPhysicsCollisionInfo): HitResult;
	static C(Other: UObject | any): ChaosSolverEngineBlueprintLibrary;
}

declare class ChaosSolver extends UObject { 
	static Load(ResourceName: string): ChaosSolver;
	static Find(Outer: UObject, ResourceName: string): ChaosSolver;
	static GetDefaultObject(): ChaosSolver;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolver;
	static C(Other: UObject | any): ChaosSolver;
}

declare type EClusterConnectionTypeEnum = 'Chaos_PointImplicit' | 'Chaos_DelaunayTriangulation' | 'Chaos_MinimalSpanningSubsetDelaunayTriangulation' | 'Chaos_PointImplicitAugmentedWithMinimalDelaunay' | 'Chaos_None' | 'Chaos_EClsuterCreationParameters_Max' | 'Chaos_MAX';
declare var EClusterConnectionTypeEnum : { Chaos_PointImplicit:'Chaos_PointImplicit',Chaos_DelaunayTriangulation:'Chaos_DelaunayTriangulation',Chaos_MinimalSpanningSubsetDelaunayTriangulation:'Chaos_MinimalSpanningSubsetDelaunayTriangulation',Chaos_PointImplicitAugmentedWithMinimalDelaunay:'Chaos_PointImplicitAugmentedWithMinimalDelaunay',Chaos_None:'Chaos_None',Chaos_EClsuterCreationParameters_Max:'Chaos_EClsuterCreationParameters_Max',Chaos_MAX:'Chaos_MAX', };
declare class SolverCollisionFilterSettings { 
	FilterEnabled: boolean;
	MinMass: number;
	MinSpeed: number;
	MinImpulse: number;
	clone() : SolverCollisionFilterSettings;
	static C(Other: UObject | any): SolverCollisionFilterSettings;
}

declare class SolverBreakingFilterSettings { 
	FilterEnabled: boolean;
	MinMass: number;
	MinSpeed: number;
	MinVolume: number;
	clone() : SolverBreakingFilterSettings;
	static C(Other: UObject | any): SolverBreakingFilterSettings;
}

declare class SolverTrailingFilterSettings { 
	FilterEnabled: boolean;
	MinMass: number;
	MinSpeed: number;
	MinVolume: number;
	clone() : SolverTrailingFilterSettings;
	static C(Other: UObject | any): SolverTrailingFilterSettings;
}

declare class ChaosDebugSubstepControl { 
	bPause: boolean;
	bSubstep: boolean;
	bStep: boolean;
	clone() : ChaosDebugSubstepControl;
	static C(Other: UObject | any): ChaosDebugSubstepControl;
}

declare class ChaosSolverActor extends Actor { 
	TimeStepMultiplier: number;
	CollisionIterations: number;
	PushOutIterations: number;
	PushOutPairIterations: number;
	ClusterConnectionFactor: number;
	ClusterUnionConnectionType: EClusterConnectionTypeEnum;
	DoGenerateCollisionData: boolean;
	CollisionFilterSettings: SolverCollisionFilterSettings;
	DoGenerateBreakingData: boolean;
	BreakingFilterSettings: SolverBreakingFilterSettings;
	DoGenerateTrailingData: boolean;
	TrailingFilterSettings: SolverTrailingFilterSettings;
	bHasFloor: boolean;
	FloorHeight: number;
	MassScale: number;
	ChaosDebugSubstepControl: ChaosDebugSubstepControl;
	SpriteComponent: BillboardComponent;
	GameplayEventDispatcherComponent: ChaosGameplayEventDispatcher;
	static GetDefaultObject(): ChaosSolverActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverActor;
	SetSolverActive(bActive: boolean): void;
	SetAsCurrentWorldSolver(): void;
	static C(Other: UObject | any): ChaosSolverActor;
}

declare class ChaosSolverSettings extends DeveloperSettings { 
	DefaultChaosSolverActorClass: SoftClassPath;
	static Load(ResourceName: string): ChaosSolverSettings;
	static Find(Outer: UObject, ResourceName: string): ChaosSolverSettings;
	static GetDefaultObject(): ChaosSolverSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosSolverSettings;
	static C(Other: UObject | any): ChaosSolverSettings;
}

declare class FieldSystem extends UObject { 
	static Load(ResourceName: string): FieldSystem;
	static Find(Outer: UObject, ResourceName: string): FieldSystem;
	static GetDefaultObject(): FieldSystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystem;
	static C(Other: UObject | any): FieldSystem;
}

declare type EFieldPhysicsType = 'Field_DynamicState' | 'Field_LinearForce' | 'Field_ExternalClusterStrain' | 'Field_Kill' | 'Field_LinearVelocity' | 'Field_AngularVelociy' | 'Field_AngularTorque' | 'Field_InternalClusterStrain' | 'Field_DisableThreshold' | 'Field_SleepingThreshold' | 'Field_PositionStatic' | 'Field_PositionAnimated' | 'Field_PositionTarget' | 'Field_DynamicConstraint' | 'Field_CollisionGroup' | 'Field_ActivateDisabled' | 'Field_PhysicsType_Max';
declare var EFieldPhysicsType : { Field_DynamicState:'Field_DynamicState',Field_LinearForce:'Field_LinearForce',Field_ExternalClusterStrain:'Field_ExternalClusterStrain',Field_Kill:'Field_Kill',Field_LinearVelocity:'Field_LinearVelocity',Field_AngularVelociy:'Field_AngularVelociy',Field_AngularTorque:'Field_AngularTorque',Field_InternalClusterStrain:'Field_InternalClusterStrain',Field_DisableThreshold:'Field_DisableThreshold',Field_SleepingThreshold:'Field_SleepingThreshold',Field_PositionStatic:'Field_PositionStatic',Field_PositionAnimated:'Field_PositionAnimated',Field_PositionTarget:'Field_PositionTarget',Field_DynamicConstraint:'Field_DynamicConstraint',Field_CollisionGroup:'Field_CollisionGroup',Field_ActivateDisabled:'Field_ActivateDisabled',Field_PhysicsType_Max:'Field_PhysicsType_Max', };
declare class FieldSystemMetaData extends ActorComponent { 
	static Load(ResourceName: string): FieldSystemMetaData;
	static Find(Outer: UObject, ResourceName: string): FieldSystemMetaData;
	static GetDefaultObject(): FieldSystemMetaData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemMetaData;
	static C(Other: UObject | any): FieldSystemMetaData;
}

declare class FieldNodeBase extends ActorComponent { 
	static Load(ResourceName: string): FieldNodeBase;
	static Find(Outer: UObject, ResourceName: string): FieldNodeBase;
	static GetDefaultObject(): FieldNodeBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeBase;
	static C(Other: UObject | any): FieldNodeBase;
}

declare class FieldSystemComponent extends PrimitiveComponent { 
	FieldSystem: FieldSystem;
	SupportedSolvers: ChaosSolverActor[];
	static Load(ResourceName: string): FieldSystemComponent;
	static Find(Outer: UObject, ResourceName: string): FieldSystemComponent;
	static GetDefaultObject(): FieldSystemComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemComponent;
	ResetFieldSystem(): void;
	ApplyUniformVectorFalloffForce(Enabled: boolean,Position: Vector,Direction: Vector,Radius: number,Magnitude: number): void;
	ApplyStrainField(Enabled: boolean,Position: Vector,Radius: number,Magnitude: number,Iterations: number): void;
	ApplyStayDynamicField(Enabled: boolean,Position: Vector,Radius: number): void;
	ApplyRadialVectorFalloffForce(Enabled: boolean,Position: Vector,Radius: number,Magnitude: number): void;
	ApplyRadialForce(Enabled: boolean,Position: Vector,Magnitude: number): void;
	ApplyPhysicsField(Enabled: boolean,Target: EFieldPhysicsType,MetaData: FieldSystemMetaData,Field: FieldNodeBase): void;
	ApplyLinearForce(Enabled: boolean,Direction: Vector,Magnitude: number): void;
	AddFieldCommand(Enabled: boolean,Target: EFieldPhysicsType,MetaData: FieldSystemMetaData,Field: FieldNodeBase): void;
	static C(Other: UObject | any): FieldSystemComponent;
}

declare class FieldSystemActor extends Actor { 
	FieldSystemComponent: FieldSystemComponent;
	static GetDefaultObject(): FieldSystemActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemActor;
	static C(Other: UObject | any): FieldSystemActor;
}

declare class FieldSystemMetaDataIteration extends FieldSystemMetaData { 
	Iterations: number;
	static Load(ResourceName: string): FieldSystemMetaDataIteration;
	static Find(Outer: UObject, ResourceName: string): FieldSystemMetaDataIteration;
	static GetDefaultObject(): FieldSystemMetaDataIteration;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemMetaDataIteration;
	SetMetaDataIteration(Iterations: number): FieldSystemMetaDataIteration;
	static C(Other: UObject | any): FieldSystemMetaDataIteration;
}

declare type EFieldResolutionType = 'Field_Resolution_Minimal' | 'Field_Resolution_DisabledParents' | 'Field_Resolution_Maximum' | 'Field_Resolution_Max';
declare var EFieldResolutionType : { Field_Resolution_Minimal:'Field_Resolution_Minimal',Field_Resolution_DisabledParents:'Field_Resolution_DisabledParents',Field_Resolution_Maximum:'Field_Resolution_Maximum',Field_Resolution_Max:'Field_Resolution_Max', };
declare class FieldSystemMetaDataProcessingResolution extends FieldSystemMetaData { 
	ResolutionType: EFieldResolutionType;
	static Load(ResourceName: string): FieldSystemMetaDataProcessingResolution;
	static Find(Outer: UObject, ResourceName: string): FieldSystemMetaDataProcessingResolution;
	static GetDefaultObject(): FieldSystemMetaDataProcessingResolution;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldSystemMetaDataProcessingResolution;
	SetMetaDataaProcessingResolutionType(ResolutionType: EFieldResolutionType): FieldSystemMetaDataProcessingResolution;
	static C(Other: UObject | any): FieldSystemMetaDataProcessingResolution;
}

declare class FieldNodeInt extends FieldNodeBase { 
	static Load(ResourceName: string): FieldNodeInt;
	static Find(Outer: UObject, ResourceName: string): FieldNodeInt;
	static GetDefaultObject(): FieldNodeInt;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeInt;
	static C(Other: UObject | any): FieldNodeInt;
}

declare class FieldNodeFloat extends FieldNodeBase { 
	static Load(ResourceName: string): FieldNodeFloat;
	static Find(Outer: UObject, ResourceName: string): FieldNodeFloat;
	static GetDefaultObject(): FieldNodeFloat;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeFloat;
	static C(Other: UObject | any): FieldNodeFloat;
}

declare class FieldNodeVector extends FieldNodeBase { 
	static Load(ResourceName: string): FieldNodeVector;
	static Find(Outer: UObject, ResourceName: string): FieldNodeVector;
	static GetDefaultObject(): FieldNodeVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): FieldNodeVector;
	static C(Other: UObject | any): FieldNodeVector;
}

declare class UniformInteger extends FieldNodeInt { 
	Magnitude: number;
	static Load(ResourceName: string): UniformInteger;
	static Find(Outer: UObject, ResourceName: string): UniformInteger;
	static GetDefaultObject(): UniformInteger;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UniformInteger;
	SetUniformInteger(Magnitude: number): UniformInteger;
	static C(Other: UObject | any): UniformInteger;
}

declare type ESetMaskConditionType = 'Field_Set_Always' | 'Field_Set_IFF_NOT_Interior' | 'Field_Set_IFF_NOT_Exterior' | 'Field_MaskCondition_Max';
declare var ESetMaskConditionType : { Field_Set_Always:'Field_Set_Always',Field_Set_IFF_NOT_Interior:'Field_Set_IFF_NOT_Interior',Field_Set_IFF_NOT_Exterior:'Field_Set_IFF_NOT_Exterior',Field_MaskCondition_Max:'Field_MaskCondition_Max', };
declare class RadialIntMask extends FieldNodeInt { 
	Radius: number;
	Position: Vector;
	InteriorValue: number;
	ExteriorValue: number;
	SetMaskCondition: ESetMaskConditionType;
	static Load(ResourceName: string): RadialIntMask;
	static Find(Outer: UObject, ResourceName: string): RadialIntMask;
	static GetDefaultObject(): RadialIntMask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialIntMask;
	SetRadialIntMask(Radius: number,Position: Vector,InteriorValue: number,ExteriorValue: number,SetMaskConditionIn: ESetMaskConditionType): RadialIntMask;
	static C(Other: UObject | any): RadialIntMask;
}

declare class UniformScalar extends FieldNodeFloat { 
	Magnitude: number;
	static Load(ResourceName: string): UniformScalar;
	static Find(Outer: UObject, ResourceName: string): UniformScalar;
	static GetDefaultObject(): UniformScalar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UniformScalar;
	SetUniformScalar(Magnitude: number): UniformScalar;
	static C(Other: UObject | any): UniformScalar;
}

declare type EFieldFalloffType = 'Field_FallOff_None' | 'Field_Falloff_Linear' | 'Field_Falloff_Inverse' | 'Field_Falloff_Squared' | 'Field_Falloff_Logarithmic' | 'Field_Falloff_Max';
declare var EFieldFalloffType : { Field_FallOff_None:'Field_FallOff_None',Field_Falloff_Linear:'Field_Falloff_Linear',Field_Falloff_Inverse:'Field_Falloff_Inverse',Field_Falloff_Squared:'Field_Falloff_Squared',Field_Falloff_Logarithmic:'Field_Falloff_Logarithmic',Field_Falloff_Max:'Field_Falloff_Max', };
declare class RadialFalloff extends FieldNodeFloat { 
	Magnitude: number;
	MinRange: number;
	MaxRange: number;
	Default: number;
	Radius: number;
	Position: Vector;
	Falloff: EFieldFalloffType;
	static Load(ResourceName: string): RadialFalloff;
	static Find(Outer: UObject, ResourceName: string): RadialFalloff;
	static GetDefaultObject(): RadialFalloff;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialFalloff;
	SetRadialFalloff(Magnitude: number,MinRange: number,MaxRange: number,Default: number,Radius: number,Position: Vector,Falloff: EFieldFalloffType): RadialFalloff;
	static C(Other: UObject | any): RadialFalloff;
}

declare class PlaneFalloff extends FieldNodeFloat { 
	Magnitude: number;
	MinRange: number;
	MaxRange: number;
	Default: number;
	Distance: number;
	Position: Vector;
	Normal: Vector;
	Falloff: EFieldFalloffType;
	static Load(ResourceName: string): PlaneFalloff;
	static Find(Outer: UObject, ResourceName: string): PlaneFalloff;
	static GetDefaultObject(): PlaneFalloff;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PlaneFalloff;
	SetPlaneFalloff(Magnitude: number,MinRange: number,MaxRange: number,Default: number,Distance: number,Position: Vector,Normal: Vector,Falloff: EFieldFalloffType): PlaneFalloff;
	static C(Other: UObject | any): PlaneFalloff;
}

declare class BoxFalloff extends FieldNodeFloat { 
	Magnitude: number;
	MinRange: number;
	MaxRange: number;
	Default: number;
	Transform: Transform;
	Falloff: EFieldFalloffType;
	static Load(ResourceName: string): BoxFalloff;
	static Find(Outer: UObject, ResourceName: string): BoxFalloff;
	static GetDefaultObject(): BoxFalloff;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BoxFalloff;
	SetBoxFalloff(Magnitude: number,MinRange: number,MaxRange: number,Default: number,Transform: Transform,Falloff: EFieldFalloffType): BoxFalloff;
	static C(Other: UObject | any): BoxFalloff;
}

declare class NoiseField extends FieldNodeFloat { 
	MinRange: number;
	MaxRange: number;
	Transform: Transform;
	static Load(ResourceName: string): NoiseField;
	static Find(Outer: UObject, ResourceName: string): NoiseField;
	static GetDefaultObject(): NoiseField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NoiseField;
	SetNoiseField(MinRange: number,MaxRange: number,Transform: Transform): NoiseField;
	static C(Other: UObject | any): NoiseField;
}

declare class UniformVector extends FieldNodeVector { 
	Magnitude: number;
	Direction: Vector;
	static Load(ResourceName: string): UniformVector;
	static Find(Outer: UObject, ResourceName: string): UniformVector;
	static GetDefaultObject(): UniformVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UniformVector;
	SetUniformVector(Magnitude: number,Direction: Vector): UniformVector;
	static C(Other: UObject | any): UniformVector;
}

declare class RadialVector extends FieldNodeVector { 
	Magnitude: number;
	Position: Vector;
	static Load(ResourceName: string): RadialVector;
	static Find(Outer: UObject, ResourceName: string): RadialVector;
	static GetDefaultObject(): RadialVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RadialVector;
	SetRadialVector(Magnitude: number,Position: Vector): RadialVector;
	static C(Other: UObject | any): RadialVector;
}

declare class RandomVector extends FieldNodeVector { 
	Magnitude: number;
	static Load(ResourceName: string): RandomVector;
	static Find(Outer: UObject, ResourceName: string): RandomVector;
	static GetDefaultObject(): RandomVector;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RandomVector;
	SetRandomVector(Magnitude: number): RandomVector;
	static C(Other: UObject | any): RandomVector;
}

declare type EFieldOperationType = 'Field_Multiply' | 'Field_Divide' | 'Field_Add' | 'Field_Substract' | 'Field_Operation_Max';
declare var EFieldOperationType : { Field_Multiply:'Field_Multiply',Field_Divide:'Field_Divide',Field_Add:'Field_Add',Field_Substract:'Field_Substract',Field_Operation_Max:'Field_Operation_Max', };
declare class OperatorField extends FieldNodeBase { 
	Magnitude: number;
	RightField: FieldNodeBase;
	LeftField: FieldNodeBase;
	Operation: EFieldOperationType;
	static Load(ResourceName: string): OperatorField;
	static Find(Outer: UObject, ResourceName: string): OperatorField;
	static GetDefaultObject(): OperatorField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OperatorField;
	SetOperatorField(Magnitude: number,RightField: FieldNodeBase,LeftField: FieldNodeBase,Operation: EFieldOperationType): OperatorField;
	static C(Other: UObject | any): OperatorField;
}

declare class ToIntegerField extends FieldNodeInt { 
	FloatField: FieldNodeFloat;
	static Load(ResourceName: string): ToIntegerField;
	static Find(Outer: UObject, ResourceName: string): ToIntegerField;
	static GetDefaultObject(): ToIntegerField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ToIntegerField;
	SetToIntegerField(FloatField: FieldNodeFloat): ToIntegerField;
	static C(Other: UObject | any): ToIntegerField;
}

declare class ToFloatField extends FieldNodeFloat { 
	IntField: FieldNodeInt;
	static Load(ResourceName: string): ToFloatField;
	static Find(Outer: UObject, ResourceName: string): ToFloatField;
	static GetDefaultObject(): ToFloatField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ToFloatField;
	SetToFloatField(IntegerField: FieldNodeInt): ToFloatField;
	static C(Other: UObject | any): ToFloatField;
}

declare type EFieldCullingOperationType = 'Field_Culling_Inside' | 'Field_Culling_Outside' | 'Field_Culling_Operation_Max' | 'Field_Culling_MAX';
declare var EFieldCullingOperationType : { Field_Culling_Inside:'Field_Culling_Inside',Field_Culling_Outside:'Field_Culling_Outside',Field_Culling_Operation_Max:'Field_Culling_Operation_Max',Field_Culling_MAX:'Field_Culling_MAX', };
declare class CullingField extends FieldNodeBase { 
	Culling: FieldNodeBase;
	Field: FieldNodeBase;
	Operation: EFieldCullingOperationType;
	static Load(ResourceName: string): CullingField;
	static Find(Outer: UObject, ResourceName: string): CullingField;
	static GetDefaultObject(): CullingField;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CullingField;
	SetCullingField(Culling: FieldNodeBase,Field: FieldNodeBase,Operation: EFieldCullingOperationType): CullingField;
	static C(Other: UObject | any): CullingField;
}

declare class ReturnResultsTerminal extends FieldNodeBase { 
	static Load(ResourceName: string): ReturnResultsTerminal;
	static Find(Outer: UObject, ResourceName: string): ReturnResultsTerminal;
	static GetDefaultObject(): ReturnResultsTerminal;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ReturnResultsTerminal;
	SetReturnResultsTerminal(): ReturnResultsTerminal;
	static C(Other: UObject | any): ReturnResultsTerminal;
}

declare type EChaosCollisionSortMethod = 'SortNone' | 'SortByHighestMass' | 'SortByHighestSpeed' | 'SortByHighestImpulse' | 'SortByNearestFirst' | 'Count' | 'EChaosCollisionSortMethod_MAX';
declare var EChaosCollisionSortMethod : { SortNone:'SortNone',SortByHighestMass:'SortByHighestMass',SortByHighestSpeed:'SortByHighestSpeed',SortByHighestImpulse:'SortByHighestImpulse',SortByNearestFirst:'SortByNearestFirst',Count:'Count',EChaosCollisionSortMethod_MAX:'EChaosCollisionSortMethod_MAX', };
declare class ChaosCollisionEventRequestSettings { 
	MaxNumberResults: number;
	MinMass: number;
	MinSpeed: number;
	MinImpulse: number;
	MaxDistance: number;
	SortMethod: EChaosCollisionSortMethod;
	clone() : ChaosCollisionEventRequestSettings;
	static C(Other: UObject | any): ChaosCollisionEventRequestSettings;
}

declare type EChaosBreakingSortMethod = 'SortNone' | 'SortByHighestMass' | 'SortByHighestSpeed' | 'SortByNearestFirst' | 'Count' | 'EChaosBreakingSortMethod_MAX';
declare var EChaosBreakingSortMethod : { SortNone:'SortNone',SortByHighestMass:'SortByHighestMass',SortByHighestSpeed:'SortByHighestSpeed',SortByNearestFirst:'SortByNearestFirst',Count:'Count',EChaosBreakingSortMethod_MAX:'EChaosBreakingSortMethod_MAX', };
declare class ChaosBreakingEventRequestSettings { 
	MaxNumberOfResults: number;
	MinRadius: number;
	MinSpeed: number;
	MinMass: number;
	MaxDistance: number;
	SortMethod: EChaosBreakingSortMethod;
	clone() : ChaosBreakingEventRequestSettings;
	static C(Other: UObject | any): ChaosBreakingEventRequestSettings;
}

declare type EChaosTrailingSortMethod = 'SortNone' | 'SortByHighestMass' | 'SortByHighestSpeed' | 'SortByNearestFirst' | 'Count' | 'EChaosTrailingSortMethod_MAX';
declare var EChaosTrailingSortMethod : { SortNone:'SortNone',SortByHighestMass:'SortByHighestMass',SortByHighestSpeed:'SortByHighestSpeed',SortByNearestFirst:'SortByNearestFirst',Count:'Count',EChaosTrailingSortMethod_MAX:'EChaosTrailingSortMethod_MAX', };
declare class ChaosTrailingEventRequestSettings { 
	MaxNumberOfResults: number;
	MinMass: number;
	MinSpeed: number;
	MinAngularSpeed: number;
	MaxDistance: number;
	SortMethod: EChaosTrailingSortMethod;
	clone() : ChaosTrailingEventRequestSettings;
	static C(Other: UObject | any): ChaosTrailingEventRequestSettings;
}

declare class ChaosCollisionEventData { 
	Location: Vector;
	Normal: Vector;
	Velocity1: Vector;
	Velocity2: Vector;
	Mass1: number;
	Mass2: number;
	Impulse: Vector;
	ParticleIndex: number;
	LevelsetIndex: number;
	clone() : ChaosCollisionEventData;
	static C(Other: UObject | any): ChaosCollisionEventData;
}

declare class ChaosBreakingEventData { 
	Location: Vector;
	Velocity: Vector;
	Mass: number;
	ParticleIndex: number;
	clone() : ChaosBreakingEventData;
	static C(Other: UObject | any): ChaosBreakingEventData;
}

declare class ChaosTrailingEventData { 
	Location: Vector;
	Velocity: Vector;
	AngularVelocity: Vector;
	Mass: number;
	ParticleIndex: number;
	clone() : ChaosTrailingEventData;
	static C(Other: UObject | any): ChaosTrailingEventData;
}

declare type EImplicitTypeEnum = 'Chaos_Implicit_Box' | 'Chaos_Implicit_Sphere' | 'Chaos_Implicit_Capsule' | 'Chaos_Implicit_LevelSet' | 'Chaos_Implicit_None' | 'Chaos_Max';
declare var EImplicitTypeEnum : { Chaos_Implicit_Box:'Chaos_Implicit_Box',Chaos_Implicit_Sphere:'Chaos_Implicit_Sphere',Chaos_Implicit_Capsule:'Chaos_Implicit_Capsule',Chaos_Implicit_LevelSet:'Chaos_Implicit_LevelSet',Chaos_Implicit_None:'Chaos_Implicit_None',Chaos_Max:'Chaos_Max', };
declare class GeometryCollectionSizeSpecificData { 
	MaxSize: number;
	CollisionType: ECollisionTypeEnum;
	ImplicitType: EImplicitTypeEnum;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	MinClusterLevelSetResolution: number;
	MaxClusterLevelSetResolution: number;
	CollisionObjectReductionPercentage: number;
	CollisionParticlesFraction: number;
	MaximumCollisionParticles: number;
	clone() : GeometryCollectionSizeSpecificData;
	static C(Other: UObject | any): GeometryCollectionSizeSpecificData;
}

declare class GeometryCollection extends UObject { 
	Materials: MaterialInterface[];
	CollisionType: ECollisionTypeEnum;
	ImplicitType: EImplicitTypeEnum;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	MinClusterLevelSetResolution: number;
	MaxClusterLevelSetResolution: number;
	CollisionObjectReductionPercentage: number;
	bMassAsDensity: boolean;
	Mass: number;
	MinimumMassClamp: number;
	CollisionParticlesFraction: number;
	MaximumCollisionParticles: number;
	SizeSpecificData: GeometryCollectionSizeSpecificData[];
	EnableRemovePiecesOnFracture: boolean;
	RemoveOnFractureMaterials: MaterialInterface[];
	ThumbnailInfo: ThumbnailInfo;
	PersistentGuid: Guid;
	StateGuid: Guid;
	BoneSelectedMaterialIndex: number;
	static Load(ResourceName: string): GeometryCollection;
	static Find(Outer: UObject, ResourceName: string): GeometryCollection;
	static GetDefaultObject(): GeometryCollection;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollection;
	static C(Other: UObject | any): GeometryCollection;
}

declare type EGeometryCollectionCacheType = 'None' | 'Record' | 'Play' | 'RecordAndPlay' | 'EGeometryCollectionCacheType_MAX';
declare var EGeometryCollectionCacheType : { None:'None',Record:'Record',Play:'Play',RecordAndPlay:'RecordAndPlay',EGeometryCollectionCacheType_MAX:'EGeometryCollectionCacheType_MAX', };
declare class SolverCollisionData { 
	Location: Vector;
	AccumulatedImpulse: Vector;
	Normal: Vector;
	Velocity1: Vector;
	Velocity2: Vector;
	AngularVelocity1: Vector;
	AngularVelocity2: Vector;
	Mass1: number;
	Mass2: number;
	ParticleIndex: number;
	LevelsetIndex: number;
	ParticleIndexMesh: number;
	LevelsetIndexMesh: number;
	clone() : SolverCollisionData;
	static C(Other: UObject | any): SolverCollisionData;
}

declare class SolverBreakingData { 
	Location: Vector;
	Velocity: Vector;
	AngularVelocity: Vector;
	Mass: number;
	ParticleIndex: number;
	ParticleIndexMesh: number;
	clone() : SolverBreakingData;
	static C(Other: UObject | any): SolverBreakingData;
}

declare class RecordedFrame { 
	Transforms: Transform[];
	TransformIndices: number[];
	PreviousTransformIndices: number[];
	DisabledFlags: boolean[];
	Collisions: SolverCollisionData[];
	Breakings: SolverBreakingData[];
	Trailings: any;
	Timestamp: number;
	clone() : RecordedFrame;
	static C(Other: UObject | any): RecordedFrame;
}

declare class RecordedTransformTrack { 
	Records: RecordedFrame[];
	clone() : RecordedTransformTrack;
	static C(Other: UObject | any): RecordedTransformTrack;
}

declare class GeometryCollectionCache extends UObject { 
	RecordedData: RecordedTransformTrack;
	SupportedCollection: GeometryCollection;
	CompatibleCollectionState: Guid;
	static Load(ResourceName: string): GeometryCollectionCache;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionCache;
	static GetDefaultObject(): GeometryCollectionCache;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionCache;
	static C(Other: UObject | any): GeometryCollectionCache;
}

declare class GeomComponentCacheParameters { 
	CacheMode: EGeometryCollectionCacheType;
	TargetCache: GeometryCollectionCache;
	ReverseCacheBeginTime: number;
	SaveCollisionData: boolean;
	DoGenerateCollisionData: boolean;
	CollisionDataSizeMax: number;
	DoCollisionDataSpatialHash: boolean;
	CollisionDataSpatialHashRadius: number;
	MaxCollisionPerCell: number;
	SaveBreakingData: boolean;
	DoGenerateBreakingData: boolean;
	BreakingDataSizeMax: number;
	DoBreakingDataSpatialHash: boolean;
	BreakingDataSpatialHashRadius: number;
	MaxBreakingPerCell: number;
	SaveTrailingData: boolean;
	DoGenerateTrailingData: boolean;
	TrailingDataSizeMax: number;
	TrailingMinSpeedThreshold: number;
	TrailingMinVolumeThreshold: number;
	clone() : GeomComponentCacheParameters;
	static C(Other: UObject | any): GeomComponentCacheParameters;
}

declare class ChaosBreakEvent { 
	Component: PrimitiveComponent;
	Location: Vector;
	Velocity: Vector;
	AngularVelocity: Vector;
	Mass: number;
	clone() : ChaosBreakEvent;
	static C(Other: UObject | any): ChaosBreakEvent;
}

declare type EGeometryCollectionPhysicsTypeEnum = 'Chaos_AngularVelocity' | 'Chaos_DynamicState' | 'Chaos_LinearVelocity' | 'Chaos_InitialAngularVelocity' | 'Chaos_InitialLinearVelocity' | 'Chaos_CollisionGroup' | 'Chaos_LinearForce' | 'Chaos_AngularTorque' | 'Chaos_Max';
declare var EGeometryCollectionPhysicsTypeEnum : { Chaos_AngularVelocity:'Chaos_AngularVelocity',Chaos_DynamicState:'Chaos_DynamicState',Chaos_LinearVelocity:'Chaos_LinearVelocity',Chaos_InitialAngularVelocity:'Chaos_InitialAngularVelocity',Chaos_InitialLinearVelocity:'Chaos_InitialLinearVelocity',Chaos_CollisionGroup:'Chaos_CollisionGroup',Chaos_LinearForce:'Chaos_LinearForce',Chaos_AngularTorque:'Chaos_AngularTorque',Chaos_Max:'Chaos_Max', };
declare class GeometryCollectionComponent extends MeshComponent { 
	ChaosSolverActor: ChaosSolverActor;
	RestCollection: GeometryCollection;
	InitializationFields: FieldSystemActor[];
	simulating: boolean;
	ObjectType: EObjectStateTypeEnum;
	EnableClustering: boolean;
	ClusterGroupIndex: number;
	MaxClusterLevel: number;
	DamageThreshold: number[];
	ClusterConnectionType: EClusterConnectionTypeEnum;
	CollisionGroup: number;
	CollisionSampleFraction: number;
	PhysicalMaterial: ChaosPhysicalMaterial;
	InitialVelocityType: EInitialVelocityTypeEnum;
	InitialLinearVelocity: Vector;
	InitialAngularVelocity: Vector;
	CacheParameters: GeomComponentCacheParameters;
	NotifyGeometryCollectionPhysicsStateChange: UnrealEngineMulticastDelegate<(FracturedComponent: GeometryCollectionComponent) => void>;
	NotifyGeometryCollectionPhysicsLoadingStateChange: UnrealEngineMulticastDelegate<(FracturedComponent: GeometryCollectionComponent) => void>;
	OnChaosBreakEvent: UnrealEngineMulticastDelegate<(BreakEvent: ChaosBreakEvent) => void>;
	DesiredCacheTime: number;
	CachePlayback: boolean;
	OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) => void>;
	bNotifyBreaks: boolean;
	bNotifyCollisions: boolean;
	SelectedBones: number[];
	HighlightedBones: number[];
	DummyBodySetup: BodySetup;
	EditorActor: Actor;
	static Load(ResourceName: string): GeometryCollectionComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionComponent;
	static GetDefaultObject(): GeometryCollectionComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionComponent;
	SetNotifyBreaks(bNewNotifyBreaks: boolean): void;
	ReceivePhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo): void;
	ApplyPhysicsField(Enabled: boolean,Target: EGeometryCollectionPhysicsTypeEnum,MetaData: FieldSystemMetaData,Field: FieldNodeBase): void;
	ApplyKinematicField(Radius: number,Position: Vector): void;
	static C(Other: UObject | any): GeometryCollectionComponent;
}

declare class GeometryCollectionDebugDrawWarningMessage { 
	clone() : GeometryCollectionDebugDrawWarningMessage;
	static C(Other: UObject | any): GeometryCollectionDebugDrawWarningMessage;
}

declare class GeometryCollectionDebugDrawActorSelectedRigidBody { 
	ID: number;
	Solver: ChaosSolverActor;
	GeometryCollection: GeometryCollectionActor;
	clone() : GeometryCollectionDebugDrawActorSelectedRigidBody;
	static C(Other: UObject | any): GeometryCollectionDebugDrawActorSelectedRigidBody;
}

declare type EGeometryCollectionDebugDrawActorHideGeometry = 'HideNone' | 'HideWithCollision' | 'HideSelected' | 'HideWholeCollection' | 'HideAll' | 'EGeometryCollectionDebugDrawActorHideGeometry_MAX';
declare var EGeometryCollectionDebugDrawActorHideGeometry : { HideNone:'HideNone',HideWithCollision:'HideWithCollision',HideSelected:'HideSelected',HideWholeCollection:'HideWholeCollection',HideAll:'HideAll',EGeometryCollectionDebugDrawActorHideGeometry_MAX:'EGeometryCollectionDebugDrawActorHideGeometry_MAX', };
declare class GeometryCollectionDebugDrawActor extends Actor { 
	WarningMessage: GeometryCollectionDebugDrawWarningMessage;
	SelectedRigidBody: GeometryCollectionDebugDrawActorSelectedRigidBody;
	bDebugDrawWholeCollection: boolean;
	bDebugDrawHierarchy: boolean;
	bDebugDrawClustering: boolean;
	HideGeometry: EGeometryCollectionDebugDrawActorHideGeometry;
	bShowRigidBodyId: boolean;
	bShowRigidBodyCollision: boolean;
	bCollisionAtOrigin: boolean;
	bShowRigidBodyTransform: boolean;
	bShowRigidBodyInertia: boolean;
	bShowRigidBodyVelocity: boolean;
	bShowRigidBodyForce: boolean;
	bShowRigidBodyInfos: boolean;
	bShowTransformIndex: boolean;
	bShowTransform: boolean;
	bShowParent: boolean;
	bShowLevel: boolean;
	bShowConnectivityEdges: boolean;
	bShowGeometryIndex: boolean;
	bShowGeometryTransform: boolean;
	bShowBoundingBox: boolean;
	bShowFaces: boolean;
	bShowFaceIndices: boolean;
	bShowFaceNormals: boolean;
	bShowSingleFace: boolean;
	SingleFaceIndex: number;
	bShowVertices: boolean;
	bShowVertexIndices: boolean;
	bShowVertexNormals: boolean;
	bUseActiveVisualization: boolean;
	PointThickness: number;
	LineThickness: number;
	bTextShadow: boolean;
	TextScale: number;
	NormalScale: number;
	AxisScale: number;
	ArrowScale: number;
	RigidBodyIdColor: Color;
	RigidBodyTransformScale: number;
	RigidBodyCollisionColor: Color;
	RigidBodyInertiaColor: Color;
	RigidBodyVelocityColor: Color;
	RigidBodyForceColor: Color;
	RigidBodyInfoColor: Color;
	TransformIndexColor: Color;
	TransformScale: number;
	LevelColor: Color;
	ParentColor: Color;
	ConnectivityEdgeThickness: number;
	GeometryIndexColor: Color;
	GeometryTransformScale: number;
	BoundingBoxColor: Color;
	FaceColor: Color;
	FaceIndexColor: Color;
	FaceNormalColor: Color;
	SingleFaceColor: Color;
	VertexColor: Color;
	VertexIndexColor: Color;
	VertexNormalColor: Color;
	SpriteComponent: BillboardComponent;
	static GetDefaultObject(): GeometryCollectionDebugDrawActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionDebugDrawActor;
	static C(Other: UObject | any): GeometryCollectionDebugDrawActor;
}

declare class GeometryCollectionRenderLevelSetActor extends Actor { 
	TargetVolumeTexture: VolumeTexture;
	RayMarchMaterial: Material;
	SurfaceTolerance: number;
	Isovalue: number;
	Enabled: boolean;
	RenderVolumeBoundingBox: boolean;
	static GetDefaultObject(): GeometryCollectionRenderLevelSetActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionRenderLevelSetActor;
	static C(Other: UObject | any): GeometryCollectionRenderLevelSetActor;
}

declare class GeometryCollectionDebugDrawComponent extends ActorComponent { 
	GeometryCollectionDebugDrawActor: GeometryCollectionDebugDrawActor;
	GeometryCollectionRenderLevelSetActor: GeometryCollectionRenderLevelSetActor;
	static Load(ResourceName: string): GeometryCollectionDebugDrawComponent;
	static Find(Outer: UObject, ResourceName: string): GeometryCollectionDebugDrawComponent;
	static GetDefaultObject(): GeometryCollectionDebugDrawComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionDebugDrawComponent;
	static C(Other: UObject | any): GeometryCollectionDebugDrawComponent;
}

declare class GeometryCollectionActor extends Actor { 
	GeometryCollectionComponent: GeometryCollectionComponent;
	GeometryCollectionDebugDrawComponent: GeometryCollectionDebugDrawComponent;
	static GetDefaultObject(): GeometryCollectionActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GeometryCollectionActor;
	RaycastSingle(Start: Vector,End: Vector,OutHit?: HitResult): {OutHit: HitResult, $: boolean};
	static C(Other: UObject | any): GeometryCollectionActor;
}

declare class ChaosDestructionListener extends SceneComponent { 
	bIsCollisionEventListeningEnabled: boolean;
	bIsBreakingEventListeningEnabled: boolean;
	bIsTrailingEventListeningEnabled: boolean;
	CollisionEventRequestSettings: ChaosCollisionEventRequestSettings;
	BreakingEventRequestSettings: ChaosBreakingEventRequestSettings;
	TrailingEventRequestSettings: ChaosTrailingEventRequestSettings;
	ChaosSolverActors: any;
	GeometryCollectionActors: any;
	OnCollisionEvents: UnrealEngineMulticastDelegate<(CollisionEvents: ChaosCollisionEventData[]) => void>;
	OnBreakingEvents: UnrealEngineMulticastDelegate<(BreakingEvents: ChaosBreakingEventData[]) => void>;
	OnTrailingEvents: UnrealEngineMulticastDelegate<(TrailingEvents: ChaosTrailingEventData[]) => void>;
	static Load(ResourceName: string): ChaosDestructionListener;
	static Find(Outer: UObject, ResourceName: string): ChaosDestructionListener;
	static GetDefaultObject(): ChaosDestructionListener;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ChaosDestructionListener;
	SortTrailingEvents(TrailingEvents?: ChaosTrailingEventData[],SortMethod?: EChaosTrailingSortMethod): {TrailingEvents: ChaosTrailingEventData[]};
	SortCollisionEvents(CollisionEvents?: ChaosCollisionEventData[],SortMethod?: EChaosCollisionSortMethod): {CollisionEvents: ChaosCollisionEventData[]};
	SortBreakingEvents(BreakingEvents?: ChaosBreakingEventData[],SortMethod?: EChaosBreakingSortMethod): {BreakingEvents: ChaosBreakingEventData[]};
	SetTrailingEventRequestSettings(InSettings: ChaosTrailingEventRequestSettings): void;
	SetTrailingEventEnabled(bIsEnabled: boolean): void;
	SetCollisionEventRequestSettings(InSettings: ChaosCollisionEventRequestSettings): void;
	SetCollisionEventEnabled(bIsEnabled: boolean): void;
	SetBreakingEventRequestSettings(InSettings: ChaosBreakingEventRequestSettings): void;
	SetBreakingEventEnabled(bIsEnabled: boolean): void;
	RemoveGeometryCollectionActor(GeometryCollectionActor: GeometryCollectionActor): void;
	RemoveChaosSolverActor(ChaosSolverActor: ChaosSolverActor): void;
	IsEventListening(): boolean;
	AddGeometryCollectionActor(GeometryCollectionActor: GeometryCollectionActor): void;
	AddChaosSolverActor(ChaosSolverActor: ChaosSolverActor): void;
	static C(Other: UObject | any): ChaosDestructionListener;
}

declare class SkeletalMeshSimulationComponent extends ActorComponent { 
	PhysicalMaterial: ChaosPhysicalMaterial;
	ChaosSolverActor: ChaosSolverActor;
	OverridePhysicsAsset: PhysicsAsset;
	bSimulating: boolean;
	bNotifyCollisions: boolean;
	ObjectType: EObjectStateTypeEnum;
	Density: number;
	MinMass: number;
	MaxMass: number;
	CollisionType: ECollisionTypeEnum;
	ImplicitShapeParticlesPerUnitArea: number;
	ImplicitShapeMinNumParticles: number;
	ImplicitShapeMaxNumParticles: number;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	CollisionGroup: number;
	InitialVelocityType: EInitialVelocityTypeEnum;
	InitialLinearVelocity: Vector;
	InitialAngularVelocity: Vector;
	OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) => void>;
	static Load(ResourceName: string): SkeletalMeshSimulationComponent;
	static Find(Outer: UObject, ResourceName: string): SkeletalMeshSimulationComponent;
	static GetDefaultObject(): SkeletalMeshSimulationComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SkeletalMeshSimulationComponent;
	ReceivePhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo): void;
	static C(Other: UObject | any): SkeletalMeshSimulationComponent;
}

declare class StaticMeshSimulationComponent extends ActorComponent { 
	simulating: boolean;
	bNotifyCollisions: boolean;
	ObjectType: EObjectStateTypeEnum;
	Mass: number;
	CollisionType: ECollisionTypeEnum;
	ImplicitType: EImplicitTypeEnum;
	MinLevelSetResolution: number;
	MaxLevelSetResolution: number;
	InitialVelocityType: EInitialVelocityTypeEnum;
	InitialLinearVelocity: Vector;
	InitialAngularVelocity: Vector;
	DamageThreshold: number;
	PhysicalMaterial: ChaosPhysicalMaterial;
	ChaosSolverActor: ChaosSolverActor;
	OnChaosPhysicsCollision: UnrealEngineMulticastDelegate<(CollisionInfo: ChaosPhysicsCollisionInfo) => void>;
	SimulatedComponents: PrimitiveComponent[];
	static Load(ResourceName: string): StaticMeshSimulationComponent;
	static Find(Outer: UObject, ResourceName: string): StaticMeshSimulationComponent;
	static GetDefaultObject(): StaticMeshSimulationComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StaticMeshSimulationComponent;
	ReceivePhysicsCollision(CollisionInfo: ChaosPhysicsCollisionInfo): void;
	ForceRecreatePhysicsState(): void;
	static C(Other: UObject | any): StaticMeshSimulationComponent;
}

declare class EditableMeshAdapter extends UObject { 
	static Load(ResourceName: string): EditableMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableMeshAdapter;
	static GetDefaultObject(): EditableMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshAdapter;
	static C(Other: UObject | any): EditableMeshAdapter;
}

declare class EditableGeometryCollectionAdapter extends EditableMeshAdapter { 
	GeometryCollection: GeometryCollection;
	OriginalGeometryCollection: GeometryCollection;
	GeometryCollectionLODIndex: number;
	static Load(ResourceName: string): EditableGeometryCollectionAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableGeometryCollectionAdapter;
	static GetDefaultObject(): EditableGeometryCollectionAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableGeometryCollectionAdapter;
	static C(Other: UObject | any): EditableGeometryCollectionAdapter;
}

declare class ElementID { 
	IDValue: number;
	clone() : ElementID;
	static C(Other: UObject | any): ElementID;
}

declare class VertexID extends ElementID { 
	clone() : VertexID;
	static C(Other: UObject | any): VertexID;
}

declare class EdgeID extends ElementID { 
	clone() : EdgeID;
	static C(Other: UObject | any): EdgeID;
}

declare class PolygonID extends ElementID { 
	clone() : PolygonID;
	static C(Other: UObject | any): PolygonID;
}

declare type ETriangleTessellationMode = 'ThreeTriangles' | 'FourTriangles' | 'ETriangleTessellationMode_MAX';
declare var ETriangleTessellationMode : { ThreeTriangles:'ThreeTriangles',FourTriangles:'FourTriangles',ETriangleTessellationMode_MAX:'ETriangleTessellationMode_MAX', };
declare type EMeshModificationType = 'FirstInterim' | 'Interim' | 'Final' | 'EMeshModificationType_MAX';
declare var EMeshModificationType : { FirstInterim:'FirstInterim',Interim:'Interim',Final:'Final',EMeshModificationType_MAX:'EMeshModificationType_MAX', };
declare type EMeshTopologyChange = 'NoTopologyChange' | 'TopologyChange' | 'EMeshTopologyChange_MAX';
declare var EMeshTopologyChange : { NoTopologyChange:'NoTopologyChange',TopologyChange:'TopologyChange',EMeshTopologyChange_MAX:'EMeshTopologyChange_MAX', };
declare class VertexPair { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	clone() : VertexPair;
	static C(Other: UObject | any): VertexPair;
}

declare class PolygonToSplit { 
	PolygonID: PolygonID;
	VertexPairsToSplitAt: VertexPair[];
	clone() : PolygonToSplit;
	static C(Other: UObject | any): PolygonToSplit;
}

declare class MeshElementAttributeValue { 
	clone() : MeshElementAttributeValue;
	static C(Other: UObject | any): MeshElementAttributeValue;
}

declare class MeshElementAttributeData { 
	AttributeName: string;
	AttributeIndex: number;
	AttributeValue: MeshElementAttributeValue;
	clone() : MeshElementAttributeData;
	static C(Other: UObject | any): MeshElementAttributeData;
}

declare class MeshElementAttributeList { 
	Attributes: MeshElementAttributeData[];
	clone() : MeshElementAttributeList;
	static C(Other: UObject | any): MeshElementAttributeList;
}

declare class AttributesForVertex { 
	VertexID: VertexID;
	VertexAttributes: MeshElementAttributeList;
	clone() : AttributesForVertex;
	static C(Other: UObject | any): AttributesForVertex;
}

declare class VertexInstanceID extends ElementID { 
	clone() : VertexInstanceID;
	static C(Other: UObject | any): VertexInstanceID;
}

declare class AttributesForVertexInstance { 
	VertexInstanceID: VertexInstanceID;
	VertexInstanceAttributes: MeshElementAttributeList;
	clone() : AttributesForVertexInstance;
	static C(Other: UObject | any): AttributesForVertexInstance;
}

declare class VertexAttributesForPolygonHole { 
	VertexAttributeList: MeshElementAttributeList[];
	clone() : VertexAttributesForPolygonHole;
	static C(Other: UObject | any): VertexAttributesForPolygonHole;
}

declare class VertexAttributesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexAttributeLists: MeshElementAttributeList[];
	VertexAttributeListsForEachHole: VertexAttributesForPolygonHole[];
	clone() : VertexAttributesForPolygon;
	static C(Other: UObject | any): VertexAttributesForPolygon;
}

declare class VerticesForEdge { 
	EdgeID: EdgeID;
	NewVertexID0: VertexID;
	NewVertexID1: VertexID;
	clone() : VerticesForEdge;
	static C(Other: UObject | any): VerticesForEdge;
}

declare class AttributesForEdge { 
	EdgeID: EdgeID;
	EdgeAttributes: MeshElementAttributeList;
	clone() : AttributesForEdge;
	static C(Other: UObject | any): AttributesForEdge;
}

declare class VertexToMove { 
	VertexID: VertexID;
	NewVertexPosition: Vector;
	clone() : VertexToMove;
	static C(Other: UObject | any): VertexToMove;
}

declare class PolygonGroupID extends ElementID { 
	clone() : PolygonGroupID;
	static C(Other: UObject | any): PolygonGroupID;
}

declare type EInsetPolygonsMode = 'All' | 'CenterPolygonOnly' | 'SidePolygonsOnly' | 'EInsetPolygonsMode_MAX';
declare var EInsetPolygonsMode : { All:'All',CenterPolygonOnly:'CenterPolygonOnly',SidePolygonsOnly:'SidePolygonsOnly',EInsetPolygonsMode_MAX:'EInsetPolygonsMode_MAX', };
declare class VertexAndAttributes { 
	VertexInstanceID: VertexInstanceID;
	VertexID: VertexID;
	PolygonVertexAttributes: MeshElementAttributeList;
	clone() : VertexAndAttributes;
	static C(Other: UObject | any): VertexAndAttributes;
}

declare class SubdividedQuadVertex { 
	VertexPositionIndex: number;
	TextureCoordinate0: Vector2D;
	TextureCoordinate1: Vector2D;
	VertexColor: Color;
	VertexNormal: Vector;
	VertexTangent: Vector;
	VertexBinormalSign: number;
	clone() : SubdividedQuadVertex;
	static C(Other: UObject | any): SubdividedQuadVertex;
}

declare class SubdividedQuad { 
	QuadVertex0: SubdividedQuadVertex;
	QuadVertex1: SubdividedQuadVertex;
	QuadVertex2: SubdividedQuadVertex;
	QuadVertex3: SubdividedQuadVertex;
	clone() : SubdividedQuad;
	static C(Other: UObject | any): SubdividedQuad;
}

declare class SubdivisionLimitSection { 
	SubdividedQuads: SubdividedQuad[];
	clone() : SubdivisionLimitSection;
	static C(Other: UObject | any): SubdivisionLimitSection;
}

declare class SubdividedWireEdge { 
	EdgeVertex0PositionIndex: number;
	EdgeVertex1PositionIndex: number;
	clone() : SubdividedWireEdge;
	static C(Other: UObject | any): SubdividedWireEdge;
}

declare class SubdivisionLimitData { 
	VertexPositions: Vector[];
	Sections: SubdivisionLimitSection[];
	SubdividedWireEdges: SubdividedWireEdge[];
	clone() : SubdivisionLimitData;
	static C(Other: UObject | any): SubdivisionLimitData;
}

declare class MeshTriangle { 
	VertexInstanceID0: VertexInstanceID;
	VertexInstanceID1: VertexInstanceID;
	VertexInstanceID2: VertexInstanceID;
	clone() : MeshTriangle;
	static C(Other: UObject | any): MeshTriangle;
}

declare class VertexToCreate { 
	VertexAttributes: MeshElementAttributeList;
	OriginalVertexID: VertexID;
	clone() : VertexToCreate;
	static C(Other: UObject | any): VertexToCreate;
}

declare class VertexInstanceToCreate { 
	VertexID: VertexID;
	VertexInstanceAttributes: MeshElementAttributeList;
	OriginalVertexInstanceID: VertexInstanceID;
	clone() : VertexInstanceToCreate;
	static C(Other: UObject | any): VertexInstanceToCreate;
}

declare type EPolygonEdgeHardness = 'NewEdgesSoft' | 'NewEdgesHard' | 'AllEdgesSoft' | 'AllEdgesHard' | 'EPolygonEdgeHardness_MAX';
declare var EPolygonEdgeHardness : { NewEdgesSoft:'NewEdgesSoft',NewEdgesHard:'NewEdgesHard',AllEdgesSoft:'AllEdgesSoft',AllEdgesHard:'AllEdgesHard',EPolygonEdgeHardness_MAX:'EPolygonEdgeHardness_MAX', };
declare class PolygonToCreate { 
	PolygonGroupID: PolygonGroupID;
	PerimeterVertices: VertexAndAttributes[];
	OriginalPolygonID: PolygonID;
	PolygonEdgeHardness: EPolygonEdgeHardness;
	clone() : PolygonToCreate;
	static C(Other: UObject | any): PolygonToCreate;
}

declare class PolygonGroupToCreate { 
	PolygonGroupAttributes: MeshElementAttributeList;
	OriginalPolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupToCreate;
	static C(Other: UObject | any): PolygonGroupToCreate;
}

declare class EdgeToCreate { 
	VertexID0: VertexID;
	VertexID1: VertexID;
	ConnectedPolygons: PolygonID[];
	EdgeAttributes: MeshElementAttributeList;
	OriginalEdgeID: EdgeID;
	clone() : EdgeToCreate;
	static C(Other: UObject | any): EdgeToCreate;
}

declare class VertexIndexAndInstanceID { 
	ContourIndex: number;
	VertexInstanceID: VertexInstanceID;
	clone() : VertexIndexAndInstanceID;
	static C(Other: UObject | any): VertexIndexAndInstanceID;
}

declare class VertexInstancesForPolygonHole { 
	VertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	clone() : VertexInstancesForPolygonHole;
	static C(Other: UObject | any): VertexInstancesForPolygonHole;
}

declare class ChangeVertexInstancesForPolygon { 
	PolygonID: PolygonID;
	PerimeterVertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
	VertexIndicesAndInstanceIDsForEachHole: VertexInstancesForPolygonHole[];
	clone() : ChangeVertexInstancesForPolygon;
	static C(Other: UObject | any): ChangeVertexInstancesForPolygon;
}

declare class PolygonGroupForPolygon { 
	PolygonID: PolygonID;
	PolygonGroupID: PolygonGroupID;
	clone() : PolygonGroupForPolygon;
	static C(Other: UObject | any): PolygonGroupForPolygon;
}

declare class EditableMesh extends UObject { 
	Adapters: EditableMeshAdapter[];
	TextureCoordinateCount: number;
	PendingCompactCounter: number;
	SubdivisionCount: number;
	static Load(ResourceName: string): EditableMesh;
	static Find(Outer: UObject, ResourceName: string): EditableMesh;
	static GetDefaultObject(): EditableMesh;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMesh;
	WeldVertices(VertexIDs: VertexID[],OutNewVertexID?: VertexID): {OutNewVertexID: VertexID};
	TryToRemoveVertex(VertexID: VertexID,bOutWasVertexRemoved?: boolean,OutNewEdgeID?: EdgeID): {bOutWasVertexRemoved: boolean, OutNewEdgeID: EdgeID};
	TryToRemovePolygonEdge(EdgeID: EdgeID,bOutWasEdgeRemoved?: boolean,OutNewPolygonID?: PolygonID): {bOutWasEdgeRemoved: boolean, OutNewPolygonID: PolygonID};
	TriangulatePolygons(PolygonIDs: PolygonID[],OutNewTrianglePolygons?: PolygonID[]): {OutNewTrianglePolygons: PolygonID[]};
	TessellatePolygons(PolygonIDs: PolygonID[],TriangleTessellationMode: ETriangleTessellationMode,OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	StartModification(MeshModificationType: EMeshModificationType,MeshTopologyChange: EMeshTopologyChange): void;
	SplitPolygons(PolygonsToSplit: PolygonToSplit[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	SplitPolygonalMesh(InPlane: Plane,PolygonIDs1?: PolygonID[],PolygonIDs2?: PolygonID[],BoundaryIDs?: EdgeID[]): {PolygonIDs1: PolygonID[], PolygonIDs2: PolygonID[], BoundaryIDs: EdgeID[]};
	SplitEdge(EdgeID: EdgeID,Splits: number[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	SetVerticesCornerSharpness(VertexIDs: VertexID[],VerticesNewCornerSharpness: number[]): void;
	SetVerticesAttributes(AttributesForVertices: AttributesForVertex[]): void;
	SetVertexInstancesAttributes(AttributesForVertexInstances: AttributesForVertexInstance[]): void;
	SetTextureCoordinateCount(NumTexCoords: number): void;
	SetSubdivisionCount(NewSubdivisionCount: number): void;
	SetPolygonsVertexAttributes(VertexAttributesForPolygons: VertexAttributesForPolygon[]): void;
	SetEdgesVertices(VerticesForEdges: VerticesForEdge[]): void;
	SetEdgesHardnessAutomatically(EdgeIDs: EdgeID[],MaxDotProductForSoftEdge: number): void;
	SetEdgesHardness(EdgeIDs: EdgeID[],EdgesNewIsHard: boolean[]): void;
	SetEdgesCreaseSharpness(EdgeIDs: EdgeID[],EdgesNewCreaseSharpness: number[]): void;
	SetEdgesAttributes(AttributesForEdges: AttributesForEdge[]): void;
	SetAllowUndo(bInAllowUndo: boolean): void;
	SetAllowSpatialDatabase(bInAllowSpatialDatabase: boolean): void;
	SetAllowCompact(bInAllowCompact: boolean): void;
	SearchSpatialDatabaseForPolygonsPotentiallyIntersectingPlane(InPlane: Plane,OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	SearchSpatialDatabaseForPolygonsPotentiallyIntersectingLineSegment(LineSegmentStart: Vector,LineSegmentEnd: Vector,OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	SearchSpatialDatabaseForPolygonsInVolume(planes: Plane[],OutPolygons?: PolygonID[]): {OutPolygons: PolygonID[]};
	RevertInstance(): EditableMesh;
	Revert(): void;
	RemovePolygonPerimeterVertices(PolygonID: PolygonID,FirstVertexNumberToRemove: number,NumVerticesToRemove: number,bDeleteOrphanedVertexInstances: boolean): void;
	RebuildRenderMesh(): void;
	QuadrangulateMesh(OutNewPolygonIDs?: PolygonID[]): {OutNewPolygonIDs: PolygonID[]};
	PropagateInstanceChanges(): void;
	MoveVertices(VerticesToMove: VertexToMove[]): void;
	static MakeVertexID(VertexIndex: number): VertexID;
	static MakePolygonID(PolygonIndex: number): PolygonID;
	static MakePolygonGroupID(PolygonGroupIndex: number): PolygonGroupID;
	static MakeEdgeID(EdgeIndex: number): EdgeID;
	IsValidVertex(VertexID: VertexID): boolean;
	IsValidPolygonGroup(PolygonGroupID: PolygonGroupID): boolean;
	IsValidPolygon(PolygonID: PolygonID): boolean;
	IsValidEdge(EdgeID: EdgeID): boolean;
	IsUndoAllowed(): boolean;
	IsSpatialDatabaseAllowed(): boolean;
	IsPreviewingSubdivisions(): boolean;
	IsOrphanedVertex(VertexID: VertexID): boolean;
	IsCompactAllowed(): boolean;
	IsCommittedAsInstance(): boolean;
	IsCommitted(): boolean;
	IsBeingModified(): boolean;
	static InvalidVertexID(): VertexID;
	static InvalidPolygonID(): PolygonID;
	static InvalidPolygonGroupID(): PolygonGroupID;
	static InvalidEdgeID(): EdgeID;
	InsetPolygons(PolygonIDs: PolygonID[],InsetFixedDistance: number,InsetProgressTowardCenter: number,Mode: EInsetPolygonsMode,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	InsertPolygonPerimeterVertices(PolygonID: PolygonID,InsertBeforeVertexNumber: number,VerticesToInsert: VertexAndAttributes[]): void;
	InsertEdgeLoop(EdgeID: EdgeID,Splits: number[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	InitializeAdapters(): void;
	GetVertexPairEdge(VertexID: VertexID,NextVertexID: VertexID,bOutEdgeWindingIsReversed?: boolean): {bOutEdgeWindingIsReversed: boolean, $: EdgeID};
	GetVertexInstanceVertex(VertexInstanceID: VertexInstanceID): VertexID;
	GetVertexInstanceCount(): number;
	GetVertexInstanceConnectedPolygons(VertexInstanceID: VertexInstanceID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexInstanceConnectedPolygonCount(VertexInstanceID: VertexInstanceID): number;
	GetVertexInstanceConnectedPolygon(VertexInstanceID: VertexInstanceID,ConnectedPolygonNumber: number): PolygonID;
	GetVertexCount(): number;
	GetVertexConnectedPolygons(VertexID: VertexID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetVertexConnectedEdges(VertexID: VertexID,OutConnectedEdgeIDs?: EdgeID[]): {OutConnectedEdgeIDs: EdgeID[]};
	GetVertexConnectedEdgeCount(VertexID: VertexID): number;
	GetVertexConnectedEdge(VertexID: VertexID,ConnectedEdgeNumber: number): EdgeID;
	GetVertexAdjacentVertices(VertexID: VertexID,OutAdjacentVertexIDs?: VertexID[]): {OutAdjacentVertexIDs: VertexID[]};
	GetTextureCoordinateCount(): number;
	GetSubdivisionLimitData(): SubdivisionLimitData;
	GetSubdivisionCount(): number;
	GetPolygonTriangulatedTriangleCount(PolygonID: PolygonID): number;
	GetPolygonTriangulatedTriangle(PolygonID: PolygonID,PolygonTriangleNumber: number): MeshTriangle;
	GetPolygonPerimeterVertices(PolygonID: PolygonID,OutPolygonPerimeterVertexIDs?: VertexID[]): {OutPolygonPerimeterVertexIDs: VertexID[]};
	GetPolygonPerimeterVertexInstances(PolygonID: PolygonID,OutPolygonPerimeterVertexInstanceIDs?: VertexInstanceID[]): {OutPolygonPerimeterVertexInstanceIDs: VertexInstanceID[]};
	GetPolygonPerimeterVertexInstance(PolygonID: PolygonID,PolygonVertexNumber: number): VertexInstanceID;
	GetPolygonPerimeterVertexCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterVertex(PolygonID: PolygonID,PolygonVertexNumber: number): VertexID;
	GetPolygonPerimeterEdges(PolygonID: PolygonID,OutPolygonPerimeterEdgeIDs?: EdgeID[]): {OutPolygonPerimeterEdgeIDs: EdgeID[]};
	GetPolygonPerimeterEdgeCount(PolygonID: PolygonID): number;
	GetPolygonPerimeterEdge(PolygonID: PolygonID,PerimeterEdgeNumber: number,bOutEdgeWindingIsReversedForPolygon?: boolean): {bOutEdgeWindingIsReversedForPolygon: boolean, $: EdgeID};
	GetPolygonInGroup(PolygonGroupID: PolygonGroupID,PolygonNumber: number): PolygonID;
	GetPolygonGroupCount(): number;
	GetPolygonCountInGroup(PolygonGroupID: PolygonGroupID): number;
	GetPolygonCount(): number;
	GetPolygonAdjacentPolygons(PolygonID: PolygonID,OutAdjacentPolygons?: PolygonID[]): {OutAdjacentPolygons: PolygonID[]};
	GetGroupForPolygon(PolygonID: PolygonID): PolygonGroupID;
	GetFirstValidPolygonGroup(): PolygonGroupID;
	GetEdgeVertices(EdgeID: EdgeID,OutEdgeVertexID0?: VertexID,OutEdgeVertexID1?: VertexID): {OutEdgeVertexID0: VertexID, OutEdgeVertexID1: VertexID};
	GetEdgeVertex(EdgeID: EdgeID,EdgeVertexNumber: number): VertexID;
	GetEdgeThatConnectsVertices(VertexID0: VertexID,VertexID1: VertexID): EdgeID;
	GetEdgeLoopElements(EdgeID: EdgeID,EdgeLoopIDs?: EdgeID[]): {EdgeLoopIDs: EdgeID[]};
	GetEdgeCount(): number;
	GetEdgeConnectedPolygons(EdgeID: EdgeID,OutConnectedPolygonIDs?: PolygonID[]): {OutConnectedPolygonIDs: PolygonID[]};
	GetEdgeConnectedPolygonCount(EdgeID: EdgeID): number;
	GetEdgeConnectedPolygon(EdgeID: EdgeID,ConnectedPolygonNumber: number): PolygonID;
	GeneratePolygonTangentsAndNormals(PolygonIDs: PolygonID[]): void;
	FlipPolygons(PolygonIDs: PolygonID[]): void;
	FindPolygonPerimeterVertexNumberForVertex(PolygonID: PolygonID,VertexID: VertexID): number;
	FindPolygonPerimeterEdgeNumberForVertices(PolygonID: PolygonID,EdgeVertexID0: VertexID,EdgeVertexID1: VertexID): number;
	FindPolygonLoop(EdgeID: EdgeID,OutEdgeLoopEdgeIDs?: EdgeID[],OutFlippedEdgeIDs?: EdgeID[],OutReversedEdgeIDPathToTake?: EdgeID[],OutPolygonIDsToSplit?: PolygonID[]): {OutEdgeLoopEdgeIDs: EdgeID[], OutFlippedEdgeIDs: EdgeID[], OutReversedEdgeIDPathToTake: EdgeID[], OutPolygonIDsToSplit: PolygonID[]};
	ExtrudePolygons(Polygons: PolygonID[],ExtrudeDistance: number,bKeepNeighborsTogether: boolean,OutNewExtrudedFrontPolygons?: PolygonID[]): {OutNewExtrudedFrontPolygons: PolygonID[]};
	ExtendVertices(VertexIDs: VertexID[],bOnlyExtendClosestEdge: boolean,ReferencePosition: Vector,OutNewExtendedVertexIDs?: VertexID[]): {OutNewExtendedVertexIDs: VertexID[]};
	ExtendEdges(EdgeIDs: EdgeID[],bWeldNeighbors: boolean,OutNewExtendedEdgeIDs?: EdgeID[]): {OutNewExtendedEdgeIDs: EdgeID[]};
	EndModification(bFromUndo: boolean): void;
	DeleteVertexInstances(VertexInstanceIDsToDelete: VertexInstanceID[],bDeleteOrphanedVertices: boolean): void;
	DeleteVertexAndConnectedEdgesAndPolygons(VertexID: VertexID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygons(PolygonIDsToDelete: PolygonID[],bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	DeletePolygonGroups(PolygonGroupIDs: PolygonGroupID[]): void;
	DeleteOrphanVertices(VertexIDsToDelete: VertexID[]): void;
	DeleteEdges(EdgeIDsToDelete: EdgeID[],bDeleteOrphanedVertices: boolean): void;
	DeleteEdgeAndConnectedPolygons(EdgeID: EdgeID,bDeleteOrphanedEdges: boolean,bDeleteOrphanedVertices: boolean,bDeleteOrphanedVertexInstances: boolean,bDeleteEmptyPolygonGroups: boolean): void;
	CreateVertices(VerticesToCreate: VertexToCreate[],OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateVertexInstances(VertexInstancesToCreate: VertexInstanceToCreate[],OutNewVertexInstanceIDs?: VertexInstanceID[]): {OutNewVertexInstanceIDs: VertexInstanceID[]};
	CreatePolygons(PolygonsToCreate: PolygonToCreate[],OutNewPolygonIDs?: PolygonID[],OutNewEdgeIDs?: EdgeID[]): {OutNewPolygonIDs: PolygonID[], OutNewEdgeIDs: EdgeID[]};
	CreatePolygonGroups(PolygonGroupsToCreate: PolygonGroupToCreate[],OutNewPolygonGroupIDs?: PolygonGroupID[]): {OutNewPolygonGroupIDs: PolygonGroupID[]};
	CreateMissingPolygonPerimeterEdges(PolygonID: PolygonID,OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	CreateEmptyVertexRange(NumVerticesToCreate: number,OutNewVertexIDs?: VertexID[]): {OutNewVertexIDs: VertexID[]};
	CreateEdges(EdgesToCreate: EdgeToCreate[],OutNewEdgeIDs?: EdgeID[]): {OutNewEdgeIDs: EdgeID[]};
	ComputePolygonTriangulation(PolygonID: PolygonID,OutTriangles?: MeshTriangle[]): {OutTriangles: MeshTriangle[]};
	ComputePolygonsSharedEdges(PolygonIDs: PolygonID[],OutSharedEdgeIDs?: EdgeID[]): {OutSharedEdgeIDs: EdgeID[]};
	ComputePolygonPlane(PolygonID: PolygonID): Plane;
	ComputePolygonNormal(PolygonID: PolygonID): Vector;
	ComputePolygonCenter(PolygonID: PolygonID): Vector;
	ComputeBoundingBoxAndSphere(): BoxSphereBounds;
	ComputeBoundingBox(): Box;
	ComputeBarycentricWeightForPointOnPolygon(PolygonID: PolygonID,PointOnPolygon: Vector,OutTriangle?: MeshTriangle,OutTriangleVertexWeights?: Vector): {OutTriangle: MeshTriangle, OutTriangleVertexWeights: Vector, $: boolean};
	CommitInstance(ComponentToInstanceTo: PrimitiveComponent): EditableMesh;
	Commit(): void;
	ChangePolygonsVertexInstances(VertexInstancesForPolygons: ChangeVertexInstancesForPolygon[]): void;
	BevelPolygons(PolygonIDs: PolygonID[],BevelFixedDistance: number,BevelProgressTowardCenter: number,OutNewCenterPolygonIDs?: PolygonID[],OutNewSidePolygonIDs?: PolygonID[]): {OutNewCenterPolygonIDs: PolygonID[], OutNewSidePolygonIDs: PolygonID[]};
	AssignPolygonsToPolygonGroups(PolygonGroupForPolygons: PolygonGroupForPolygon[],bDeleteOrphanedPolygonGroups: boolean): void;
	AnyChangesToUndo(): boolean;
	static C(Other: UObject | any): EditableMesh;
}

declare class EditableMeshFactory extends UObject { 
	static Load(ResourceName: string): EditableMeshFactory;
	static Find(Outer: UObject, ResourceName: string): EditableMeshFactory;
	static GetDefaultObject(): EditableMeshFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableMeshFactory;
	static MakeEditableMesh(PrimitiveComponent: PrimitiveComponent,LODIndex: number): EditableMesh;
	static C(Other: UObject | any): EditableMeshFactory;
}

declare class EditableStaticMeshAdapter extends EditableMeshAdapter { 
	StaticMesh: StaticMesh;
	OriginalStaticMesh: StaticMesh;
	StaticMeshLODIndex: number;
	static Load(ResourceName: string): EditableStaticMeshAdapter;
	static Find(Outer: UObject, ResourceName: string): EditableStaticMeshAdapter;
	static GetDefaultObject(): EditableStaticMeshAdapter;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditableStaticMeshAdapter;
	static C(Other: UObject | any): EditableStaticMeshAdapter;
}

declare class MobileInstalledContent extends UObject { 
	static Load(ResourceName: string): MobileInstalledContent;
	static Find(Outer: UObject, ResourceName: string): MobileInstalledContent;
	static GetDefaultObject(): MobileInstalledContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobileInstalledContent;
	Mount(PakOrder: number,MountPoint: string): boolean;
	GetInstalledContentSize(): number;
	GetDiskFreeSpace(): number;
	static C(Other: UObject | any): MobileInstalledContent;
}

declare class MobilePendingContent extends MobileInstalledContent { 
	static Load(ResourceName: string): MobilePendingContent;
	static Find(Outer: UObject, ResourceName: string): MobilePendingContent;
	static GetDefaultObject(): MobilePendingContent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePendingContent;
	GetTotalDownloadedSize(): number;
	GetRequiredDiskSpace(): number;
	GetInstallProgress(): number;
	GetDownloadStatusText(): string;
	GetDownloadSpeed(): number;
	GetDownloadSize(): number;
	static C(Other: UObject | any): MobilePendingContent;
}

declare class MobilePatchingLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MobilePatchingLibrary;
	static Find(Outer: UObject, ResourceName: string): MobilePatchingLibrary;
	static GetDefaultObject(): MobilePatchingLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MobilePatchingLibrary;
	static HasActiveWiFiConnection(): boolean;
	static GetSupportedPlatformNames(): string[];
	static GetInstalledContent(InstallDirectory: string): MobileInstalledContent;
	static GetActiveDeviceProfileName(): string;
	static C(Other: UObject | any): MobilePatchingLibrary;
}

declare class OnContentInstallSucceeded__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContentInstallSucceeded__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContentInstallSucceeded__PythonCallable;
	static GetDefaultObject(): OnContentInstallSucceeded__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContentInstallSucceeded__PythonCallable;
	static C(Other: UObject | any): OnContentInstallSucceeded__PythonCallable;
}

declare class OnContentInstallFailed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContentInstallFailed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContentInstallFailed__PythonCallable;
	static GetDefaultObject(): OnContentInstallFailed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContentInstallFailed__PythonCallable;
	static C(Other: UObject | any): OnContentInstallFailed__PythonCallable;
}

declare class OnRequestContentSucceeded__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRequestContentSucceeded__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRequestContentSucceeded__PythonCallable;
	static GetDefaultObject(): OnRequestContentSucceeded__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRequestContentSucceeded__PythonCallable;
	static C(Other: UObject | any): OnRequestContentSucceeded__PythonCallable;
}

declare class OnRequestContentFailed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnRequestContentFailed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnRequestContentFailed__PythonCallable;
	static GetDefaultObject(): OnRequestContentFailed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnRequestContentFailed__PythonCallable;
	static C(Other: UObject | any): OnRequestContentFailed__PythonCallable;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
declare type EAndroidAntVerbosity = 'Quiet' | 'Normal' | 'Verbose' | 'EAndroidAntVerbosity_MAX';
declare var EAndroidAntVerbosity : { Quiet:'Quiet',Normal:'Normal',Verbose:'Verbose',EAndroidAntVerbosity_MAX:'EAndroidAntVerbosity_MAX', };
declare type EAndroidDepthBufferPreference = 'Default' | 'Bits16' | 'Bits24' | 'Bits32' | 'EAndroidDepthBufferPreference_MAX';
declare var EAndroidDepthBufferPreference : { Default:'Default',Bits16:'Bits16',Bits24:'Bits24',Bits32:'Bits32',EAndroidDepthBufferPreference_MAX:'EAndroidDepthBufferPreference_MAX', };
declare type EOculusMobileDevice = 'GearGo' | 'Quest' | 'EOculusMobileDevice_MAX';
declare var EOculusMobileDevice : { GearGo:'GearGo',Quest:'Quest',EOculusMobileDevice_MAX:'EOculusMobileDevice_MAX', };
declare type EGoogleVRCaps = 'Cardboard' | 'Daydream33' | 'Daydream63' | 'Daydream66' | 'EGoogleVRCaps_MAX';
declare var EGoogleVRCaps : { Cardboard:'Cardboard',Daydream33:'Daydream33',Daydream63:'Daydream63',Daydream66:'Daydream66',EGoogleVRCaps_MAX:'EGoogleVRCaps_MAX', };
declare class GooglePlayAchievementMapping { 
	Name: string;
	AchievementID: string;
	clone() : GooglePlayAchievementMapping;
	static C(Other: UObject | any): GooglePlayAchievementMapping;
}

declare class GooglePlayLeaderboardMapping { 
	Name: string;
	LeaderboardID: string;
	clone() : GooglePlayLeaderboardMapping;
	static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}

declare type EAndroidAudio = 'Default' | 'OGG' | 'ADPCM' | 'EAndroidAudio_MAX';
declare var EAndroidAudio : { Default:'Default',OGG:'OGG',ADPCM:'ADPCM',EAndroidAudio_MAX:'EAndroidAudio_MAX', };
declare class PlatformRuntimeAudioCompressionOverrides { 
	bOverrideCompressionTimes: boolean;
	DurationThreshold: number;
	MaxNumRandomBranches: number;
	SoundCueQualityIndex: number;
	clone() : PlatformRuntimeAudioCompressionOverrides;
	static C(Other: UObject | any): PlatformRuntimeAudioCompressionOverrides;
}

declare type EAndroidGraphicsDebugger = 'None' | 'Mali' | 'Adreno' | 'EAndroidGraphicsDebugger_MAX';
declare var EAndroidGraphicsDebugger : { None:'None',Mali:'Mali',Adreno:'Adreno',EAndroidGraphicsDebugger_MAX:'EAndroidGraphicsDebugger_MAX', };
declare class AndroidRuntimeSettings extends UObject { 
	PackageName: string;
	StoreVersion: number;
	StoreVersionOffsetArmV7: number;
	StoreVersionOffsetArm64: number;
	StoreVersionOffsetX8664: number;
	ApplicationDisplayName: string;
	VersionDisplayName: string;
	MinSDKVersion: number;
	TargetSDKVersion: number;
	InstallLocation: EAndroidInstallLocation;
	bEnableGradle: boolean;
	bEnableLint: boolean;
	bPackageDataInsideApk: boolean;
	bCreateAllPlatformsInstall: boolean;
	bDisableVerifyOBBOnStartUp: boolean;
	bAllowLargeOBBFiles: boolean;
	bAllowPatchOBBFile: boolean;
	bUseExternalFilesDir: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	bUseDisplayCutout: boolean;
	AntVerbosity: EAndroidAntVerbosity;
	bFullScreen: boolean;
	bEnableNewKeyboard: boolean;
	DepthBufferPreference: EAndroidDepthBufferPreference;
	bValidateTextureFormats: boolean;
	ExtraManifestNodeTags: string[];
	ExtraApplicationNodeTags: string[];
	ExtraApplicationSettings: string;
	ExtraActivityNodeTags: string[];
	ExtraActivitySettings: string;
	ExtraPermissions: string[];
	bAndroidVoiceEnabled: boolean;
	PackageForOculusMobile: EOculusMobileDevice[];
	bRemoveOSIG: boolean;
	GoogleVRCaps: EGoogleVRCaps[];
	bGoogleVRSustainedPerformance: boolean;
	KeyStore: string;
	KeyAlias: string;
	KeyStorePassword: string;
	KeyPassword: string;
	bBuildForArmV7: boolean;
	bBuildForArm64: boolean;
	bBuildForX8664: boolean;
	bBuildForES2: boolean;
	bBuildForES31: boolean;
	bSupportsVulkan: boolean;
	bDetectVulkanByDefault: boolean;
	bBuildWithHiddenSymbolVisibility: boolean;
	bSaveSymbols: boolean;
	bEnableGooglePlaySupport: boolean;
	bUseGetAccounts: boolean;
	GamesAppID: string;
	AchievementMap: GooglePlayAchievementMapping[];
	LeaderboardMap: GooglePlayLeaderboardMapping[];
	bEnableSnapshots: boolean;
	bSupportAdMob: boolean;
	AdMobAdUnitID: string;
	AdMobAdUnitIDs: string[];
	GooglePlayLicenseKey: string;
	GCMClientSenderID: string;
	bShowLaunchImage: boolean;
	bAllowIMU: boolean;
	bAllowControllers: boolean;
	bBlockAndroidKeysOnControllers: boolean;
	AndroidAudio: EAndroidAudio;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bResampleForDevice: boolean;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	AndroidGraphicsDebugger: EAndroidGraphicsDebugger;
	MaliGraphicsDebuggerPath: DirectoryPath;
	bMultiTargetFormat_ETC1: boolean;
	bMultiTargetFormat_ETC1a: boolean;
	bMultiTargetFormat_ETC2: boolean;
	bMultiTargetFormat_DXT: boolean;
	bMultiTargetFormat_PVRTC: boolean;
	bMultiTargetFormat_ATC: boolean;
	bMultiTargetFormat_ASTC: boolean;
	TextureFormatPriority_ETC1: number;
	TextureFormatPriority_ETC1a: number;
	TextureFormatPriority_ETC2: number;
	TextureFormatPriority_DXT: number;
	TextureFormatPriority_PVRTC: number;
	TextureFormatPriority_ATC: number;
	TextureFormatPriority_ASTC: number;
	SDKAPILevelOverride: string;
	NDKAPILevelOverride: string;
	static Load(ResourceName: string): AndroidRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
	static GetDefaultObject(): AndroidRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidRuntimeSettings;
	static C(Other: UObject | any): AndroidRuntimeSettings;
}

declare type EOculusPlatform = 'PC' | 'Mobile' | 'Length' | 'EOculusPlatform_MAX';
declare var EOculusPlatform : { PC:'PC',Mobile:'Mobile',Length:'Length',EOculusPlatform_MAX:'EOculusPlatform_MAX', };
declare class OculusEditorSettings extends UObject { 
	PerfToolIgnoreList: any;
	PerfToolTargetPlatform: EOculusPlatform;
	bAddMenuOption: boolean;
	static Load(ResourceName: string): OculusEditorSettings;
	static Find(Outer: UObject, ResourceName: string): OculusEditorSettings;
	static GetDefaultObject(): OculusEditorSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusEditorSettings;
	static C(Other: UObject | any): OculusEditorSettings;
}

declare type EOculusPlatformTarget = 'Rift' | 'Quest' | 'Mobile' | 'Length' | 'EOculusPlatformTarget_MAX';
declare var EOculusPlatformTarget : { Rift:'Rift',Quest:'Quest',Mobile:'Mobile',Length:'Length',EOculusPlatformTarget_MAX:'EOculusPlatformTarget_MAX', };
declare class OculusPlatformToolSettings extends UObject { 
	OculusRiftBuildDirectory: string;
	OculusRiftBuildVersion: string;
	OculusTargetPlatform: EOculusPlatformTarget;
	OculusApplicationID: string[];
	OculusApplicationToken: string[];
	OculusReleaseChannel: string[];
	OculusReleaseNote: string[];
	OculusLaunchFilePath: string[];
	static Load(ResourceName: string): OculusPlatformToolSettings;
	static Find(Outer: UObject, ResourceName: string): OculusPlatformToolSettings;
	static GetDefaultObject(): OculusPlatformToolSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusPlatformToolSettings;
	static C(Other: UObject | any): OculusPlatformToolSettings;
}

declare type ESteamVRTouchDPadMapping = 'FaceButtons' | 'ThumbstickDirections' | 'Disabled' | 'ESteamVRTouchDPadMapping_MAX';
declare var ESteamVRTouchDPadMapping : { FaceButtons:'FaceButtons',ThumbstickDirections:'ThumbstickDirections',Disabled:'Disabled',ESteamVRTouchDPadMapping_MAX:'ESteamVRTouchDPadMapping_MAX', };
declare class SteamVRControllerLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): SteamVRControllerLibrary;
	static Find(Outer: UObject, ResourceName: string): SteamVRControllerLibrary;
	static GetDefaultObject(): SteamVRControllerLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SteamVRControllerLibrary;
	static SetTouchDPadMapping(NewMapping: ESteamVRTouchDPadMapping): void;
	static C(Other: UObject | any): SteamVRControllerLibrary;
}

declare class JavascriptPinParams { 
	ContainerType: EPinContainerType;
	bIsReference: boolean;
	bIsConst: boolean;
	index: number;
	clone() : JavascriptPinParams;
	static C(Other: UObject | any): JavascriptPinParams;
}

declare class JavascriptGraphEdNode extends EdGraphNode { 
	BackgroundColor: SlateColor;
	GraphNode: UObject;
	IsTitleOnly: boolean;
	OnWidgetFinalized: UnrealEngineDelegate<() => void>;
	Bidirectional: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptGraphEdNode;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
	static GetDefaultObject(): JavascriptGraphEdNode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNode;
	UpdateSlate(): void;
	SetVisible(bVisible: boolean): void;
	SetTitleSelectionMode(InTitleHeight: number): void;
	SetEnable(bEnable: boolean): void;
	ResetTitleSelectionMode(): void;
	RemovePinByName(PinName: string): boolean;
	RemovePin(Pin: JavascriptEdGraphPin): boolean;
	GetVisible(): boolean;
	GetNumOfPins(Direction: EEdGraphPinDirection): number;
	GetDesiredSize(): Vector2D;
	CreatePin(Dir: EEdGraphPinDirection,PinCategory: string,PinSubCategory: string,PinSubCategoryObject: UObject,PinName: string,PinToolTip: string,PinDisplayName: string,InPinParams: JavascriptPinParams): JavascriptEdGraphPin;
	static C(Other: UObject | any): JavascriptGraphEdNode;
}

declare class JavascriptSlateEdNode { 
	clone() : JavascriptSlateEdNode;
	static C(Other: UObject | any): JavascriptSlateEdNode;
	AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
	RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
}

declare class JavascriptPerformSecondPassLayoutContainer { 
	PrevNode: EdGraphNode;
	NextNode: EdGraphNode;
	NodeIndex: number;
	MaxNodes: number;
	clone() : JavascriptPerformSecondPassLayoutContainer;
	static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}

declare class JavascriptConnectionParams { 
	WireColor: LinearColor;
	AssociatedPin1: JavascriptEdGraphPin;
	AssociatedPin2: JavascriptEdGraphPin;
	WireThickness: number;
	bDrawBubbles: boolean;
	bUserFlag1: boolean;
	bUserFlag2: boolean;
	StartDirection: EEdGraphPinDirection;
	EndDirection: EEdGraphPinDirection;
	clone() : JavascriptConnectionParams;
	static C(Other: UObject | any): JavascriptConnectionParams;
}

declare class JavascriptGraphConnectionDrawingPolicyContainer { 
	clone() : JavascriptGraphConnectionDrawingPolicyContainer;
	static C(Other: UObject | any): JavascriptGraphConnectionDrawingPolicyContainer;
	ApplyHoverDeemphasis(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	DetermineWiringStyle(OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	DrawConnection(A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	DrawSplineWithArrow(StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	GetHorveredPinNum(): number;
	IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
	MakeRotatedBox(ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
}

declare type EGraphSchemaGetStringQuery = 'Description' | 'Title' | 'EGraphSchemaGetStringQuery_MAX';
declare var EGraphSchemaGetStringQuery : { Description:'Description',Title:'Title',EGraphSchemaGetStringQuery_MAX:'EGraphSchemaGetStringQuery_MAX', };
declare class JavascriptGraphMenuBuilder extends JavascriptMenuBuilder { 
	Graph: EdGraph;
	GraphNode: EdGraphNode;
	GraphPin: JavascriptEdGraphPin;
	bIsDebugging: boolean;
	clone() : JavascriptGraphMenuBuilder;
	static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}

declare type ECanCreateConnectionResponse = 'CONNECT_RESPONSE_MAKE' | 'CONNECT_RESPONSE_DISALLOW' | 'CONNECT_RESPONSE_BREAK_OTHERS_A' | 'CONNECT_RESPONSE_BREAK_OTHERS_B' | 'CONNECT_RESPONSE_BREAK_OTHERS_AB' | 'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE' | 'CONNECT_RESPONSE_MAX';
declare var ECanCreateConnectionResponse : { CONNECT_RESPONSE_MAKE:'CONNECT_RESPONSE_MAKE',CONNECT_RESPONSE_DISALLOW:'CONNECT_RESPONSE_DISALLOW',CONNECT_RESPONSE_BREAK_OTHERS_A:'CONNECT_RESPONSE_BREAK_OTHERS_A',CONNECT_RESPONSE_BREAK_OTHERS_B:'CONNECT_RESPONSE_BREAK_OTHERS_B',CONNECT_RESPONSE_BREAK_OTHERS_AB:'CONNECT_RESPONSE_BREAK_OTHERS_AB',CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE:'CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE',CONNECT_RESPONSE_MAX:'CONNECT_RESPONSE_MAX', };
declare class JavascriptPinConnectionResponse { 
	Message: string;
	Response: ECanCreateConnectionResponse;
	clone() : JavascriptPinConnectionResponse;
	static C(Other: UObject | any): JavascriptPinConnectionResponse;
}

declare class EdGraphSchemaAction { 
	MenuDescription: string;
	TooltipDescription: string;
	Category: string;
	Keywords: string;
	Grouping: number;
	SectionID: number;
	MenuDescriptionArray: string[];
	FullSearchTitlesArray: string[];
	FullSearchKeywordsArray: string[];
	FullSearchCategoryArray: string[];
	LocalizedMenuDescriptionArray: string[];
	LocalizedFullSearchTitlesArray: string[];
	LocalizedFullSearchKeywordsArray: string[];
	LocalizedFullSearchCategoryArray: string[];
	SearchText: string;
	clone() : EdGraphSchemaAction;
	static C(Other: UObject | any): EdGraphSchemaAction;
}

declare class PerformActionContext { 
	ParentGraph: EdGraph;
	FromPins: JavascriptEdGraphPin[];
	Location: Vector2D;
	bSelectNewNode: boolean;
	clone() : PerformActionContext;
	static C(Other: UObject | any): PerformActionContext;
}

declare class JavascriptArrangedWidget { 
	clone() : JavascriptArrangedWidget;
	static C(Other: UObject | any): JavascriptArrangedWidget;
}

declare class JavascriptPinWidget { 
	clone() : JavascriptPinWidget;
	static C(Other: UObject | any): JavascriptPinWidget;
}

declare class JavascriptDetermineLinkGeometryContainer { 
	clone() : JavascriptDetermineLinkGeometryContainer;
	static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
	FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
	GetOutputPinWidget(): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
}

declare class JavascriptGraphAssetGraphSchema extends EdGraphSchema { 
	OnGetPinColor: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor>;
	OnGetDefaultValueVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetSlateBrushName: UnrealEngineDelegate<(bHovered: boolean, Pin: JavascriptEdGraphPin) => string>;
	OnPinConnectionListChanged: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => void>;
	OnTryCreateConnection: UnrealEngineDelegate<(PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void>;
	OnMouseEnter: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, SlateEdNode: JavascriptSlateEdNode, UPointerEvent: UPointerEvent) => void>;
	OnMouseMove: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Delta: Vector2D, bUserIsDragging: boolean, MouseZone: number, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonDown: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnMouseButtonUp: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, MyGeometry: Geometry, UPointerEvent: UPointerEvent) => boolean>;
	OnPerformSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptPerformSecondPassLayoutContainer>;
	OnRequiresSecondPassLayout: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnMoveTo: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean>;
	OnTakeContentWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, OutLeftNodeBoxWidget: JavascriptSlateWidget, OutRightNodeBoxWidget: JavascriptSlateWidget) => JavascriptSlateWidget>;
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingAlternativeInputPinBox: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingAlternativeOutputPinBox: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => JavascriptSlateWidget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnCanCreateConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => JavascriptPinConnectionResponse>;
	OnPerformAction: UnrealEngineDelegate<(Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode>;
	OnContextActions: UnrealEngineDelegate<(FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]>;
	OnNodeConnectionListChanged: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean>;
	OnDetermineLinkGeometry: UnrealEngineDelegate<(OutPin: JavascriptEdGraphPin, InputPin: JavascriptEdGraphPin, StartWidgetGeometry: JavascriptArrangedWidget, EndWidgetGeometry: JavascriptArrangedWidget, Container: JavascriptDetermineLinkGeometryContainer) => boolean>;
	OnIsNodeComment: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnEndUserInteraction: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreateOutputSideAddButton: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnAddPinByAddButton: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
	OnDragEnter: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDragLeave: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnDragOver: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	OnDrop: UnrealEngineDelegate<(Target: JavascriptGraphEdNode, Capture: JavascriptGraphEdNode, MyGeometry: Geometry) => boolean>;
	static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphAssetGraphSchema;
	static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphAssetGraphSchema;
	BreakSinglePinLink(SourcePin: JavascriptEdGraphPin,TargetPin: JavascriptEdGraphPin): void;
	BreakPinLinks(TargetPin: JavascriptEdGraphPin,bSendsNodeNotifcation: boolean): void;
	BreakNodeLinks(TargetNode: EdGraphNode): void;
	static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	CreateEmptyNode(): JavascriptGraphEdNode;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static CreateEmptyNode(Graph: JavascriptGraphEdGraph): JavascriptGraphEdNode;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
}

declare class JavascriptGraphEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptGraphEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorLibrary;
	static GetDefaultObject(): JavascriptGraphEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorLibrary;
	static TryConnection(Schema: EdGraphSchema,A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static SetPinType(Pin: JavascriptEdGraphPin,PinType: EdGraphPinType): void;
	static SetPinInfo(A: JavascriptEdGraphPin,InPinName: string,InPinToolTip: string): void;
	static SetPinHidden(A: JavascriptEdGraphPin,bHidden: boolean): void;
	static SetParentPin(A: JavascriptEdGraphPin,Parent: JavascriptEdGraphPin): void;
	static SetNodeMetaData(Schema: EdGraphSchema,UNode: EdGraphNode,KeyValue: string): boolean;
	static ResizeNode(UNode: EdGraphNode,NewSize: Vector2D): void;
	static RemovePinFromHoverSet(InSlateNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static NodeCreator(Graph: JavascriptGraphEdGraph,bSelectNewNode: boolean): JavascriptNodeCreator;
	static MakeRotatedBox(Container: JavascriptGraphConnectionDrawingPolicyContainer,ArrowDrawPos: Vector2D,AngleInRadians: number,WireColor: LinearColor): void;
	static MakeLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static IsValid(A: JavascriptEdGraphPin): boolean;
	static IsPinHidden(A: JavascriptEdGraphPin): boolean;
	static IsContainedHoveredPins(Container: JavascriptGraphConnectionDrawingPolicyContainer,Pin: JavascriptEdGraphPin): boolean;
	static GetSubPins(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
	static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
	static GetPinName(A: JavascriptEdGraphPin): string;
	static GetPinIndex(A: JavascriptEdGraphPin): number;
	static GetPinGUID(A: JavascriptEdGraphPin): Guid;
	static GetPinContainerType(A: JavascriptEdGraphPin): EJavascriptPinContainerType;
	static GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin;
	static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
	static GetOutputPinWidget(Container: JavascriptDetermineLinkGeometryContainer): JavascriptPinWidget;
	static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
	static GetLinkedPinNum(A: JavascriptEdGraphPin): number;
	static GetHorveredPinNum(Container: JavascriptGraphConnectionDrawingPolicyContainer): number;
	static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirection;
	static GetDefaultObject(): JavascriptEdGraphPin;
	static GetArrangedNodes(Container: JavascriptDetermineLinkGeometryContainer,UNode: EdGraphNode): JavascriptArrangedWidget;
	static FindPinToPinWidgetMap(Container: JavascriptDetermineLinkGeometryContainer,Pin: JavascriptEdGraphPin): JavascriptPinWidget;
	static FindPinGeometries(Container: JavascriptDetermineLinkGeometryContainer,PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
	static FindPin(UNode: EdGraphNode,PinName: string,Direction: EEdGraphPinDirection): JavascriptEdGraphPin;
	static FindClosestPointOnGeom(Geom: Geometry,TestPoint: Vector2D): Vector2D;
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
	static DrawSplineWithArrow(Container: JavascriptGraphConnectionDrawingPolicyContainer,StartAnchorPoint: Vector2D,EndAnchorPoint: Vector2D,Params: JavascriptConnectionParams): void;
	static DrawConnection(Container: JavascriptGraphConnectionDrawingPolicyContainer,A: Vector2D,B: Vector2D,Params: JavascriptConnectionParams): void;
	static DetermineWiringStyle(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Params?: JavascriptConnectionParams): {Params: JavascriptConnectionParams};
	static DestroyNode(UNode: EdGraphNode): void;
	static CreateEmptyNode(Graph: JavascriptGraphEdGraph): JavascriptGraphEdNode;
	static CenterOf(Geom: Geometry): Vector2D;
	static CanUserDeleteNode(UNode: EdGraphNode): boolean;
	static CanDuplicateNode(UNode: EdGraphNode): boolean;
	static BreakLinkTo(A: JavascriptEdGraphPin,B: JavascriptEdGraphPin): void;
	static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
	static AutowireNewNode(UNode: EdGraphNode,FromPin: JavascriptEdGraphPin): void;
	static ApplyHoverDeemphasis(Container: JavascriptGraphConnectionDrawingPolicyContainer,OutputPin: JavascriptEdGraphPin,InputPin: JavascriptEdGraphPin,Thickness: number,WireColor: LinearColor): void;
	static AddPinToHoverSet(InSlateEdNode: JavascriptSlateEdNode,Pin: JavascriptEdGraphPin): void;
	static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}

declare class JavascriptGraphAppearanceInfo { 
	CornerImage: SlateBrush;
	CornerText: string;
	PIENotifyText: string;
	ReadOnlyText: string;
	InstructionText: string;
	clone() : JavascriptGraphAppearanceInfo;
	static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}

declare class JavascriptGraphEditorWidget extends Widget { 
	EdGraph: JavascriptGraphEdGraph;
	OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
	OnDropActor: UnrealEngineDelegate<(Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void>;
	OnDisallowedPinConnection: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void>;
	OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
	AppearanceInfo: JavascriptGraphAppearanceInfo;
	CommandList: JavascriptUICommandList;
	static Load(ResourceName: string): JavascriptGraphEditorWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEditorWidget;
	static GetDefaultObject(): JavascriptGraphEditorWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEditorWidget;
	SetViewLocation(Location: Vector2D,ZoomAmount: number): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
	JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
	JumpToNode(JumpToMe: EdGraphNode,bRequestRename: boolean,bSelectNode: boolean): void;
	GetViewLocation(OutLocation?: Vector2D,OutZoomAmount?: number): {OutLocation: Vector2D, OutZoomAmount: number};
	GetSelectedNodes(): UObject[];
	GetPasteLocation(): Vector2D;
	ClearSelectionSet(): void;
	static C(Other: UObject | any): JavascriptGraphEditorWidget;
}

declare class JavascriptGraphEdNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	static C(Other: UObject | any): JavascriptGraphEdNodeWidget;
}

declare class JavascriptTextProperty { 
	Key: string;
	Namespace: string;
	Value: string;
	TableId: string;
	clone() : JavascriptTextProperty;
	static C(Other: UObject | any): JavascriptTextProperty;
}

declare class JavascriptGraphTextPropertyEditableTextBox extends Widget { 
	OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
	OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
	OnTextCommitted: UnrealEngineMulticastDelegate<(TextProperty: JavascriptTextProperty) => void>;
	WidgetStyle: EditableTextBoxStyle;
	WrapTextAt: number;
	AutoWrapText: boolean;
	static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
	static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphTextPropertyEditableTextBox;
	static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}

declare class OnBuildMenu__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnBuildMenu__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnBuildMenu__PythonCallable;
	static GetDefaultObject(): OnBuildMenu__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnBuildMenu__PythonCallable;
	static C(Other: UObject | any): OnBuildMenu__PythonCallable;
}

declare class OnCanCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCanCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCanCreateConnection__PythonCallable;
	static GetDefaultObject(): OnCanCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCanCreateConnection__PythonCallable;
	static C(Other: UObject | any): OnCanCreateConnection__PythonCallable;
}

declare class OnContextActions__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContextActions__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContextActions__PythonCallable;
	static GetDefaultObject(): OnContextActions__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContextActions__PythonCallable;
	static C(Other: UObject | any): OnContextActions__PythonCallable;
}

declare class OnCreateAutomaticConversionNodeAndConnections__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static GetDefaultObject(): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
	static C(Other: UObject | any): OnCreateAutomaticConversionNodeAndConnections__PythonCallable;
}

declare class OnCreatePin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnCreatePin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnCreatePin__PythonCallable;
	static GetDefaultObject(): OnCreatePin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnCreatePin__PythonCallable;
	static C(Other: UObject | any): OnCreatePin__PythonCallable;
}

declare class OnDetermineLinkGeometry__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDetermineLinkGeometry__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDetermineLinkGeometry__PythonCallable;
	static GetDefaultObject(): OnDetermineLinkGeometry__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDetermineLinkGeometry__PythonCallable;
	static C(Other: UObject | any): OnDetermineLinkGeometry__PythonCallable;
}

declare class OnDetermineWiringStyle__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDetermineWiringStyle__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDetermineWiringStyle__PythonCallable;
	static GetDefaultObject(): OnDetermineWiringStyle__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDetermineWiringStyle__PythonCallable;
	static C(Other: UObject | any): OnDetermineWiringStyle__PythonCallable;
}

declare class OnDrawPreviewConnector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawPreviewConnector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawPreviewConnector__PythonCallable;
	static GetDefaultObject(): OnDrawPreviewConnector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawPreviewConnector__PythonCallable;
	static C(Other: UObject | any): OnDrawPreviewConnector__PythonCallable;
}

declare class OnDrawSplineWithArrow__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawSplineWithArrow__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawSplineWithArrow__PythonCallable;
	static GetDefaultObject(): OnDrawSplineWithArrow__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawSplineWithArrow__PythonCallable;
	static C(Other: UObject | any): OnDrawSplineWithArrow__PythonCallable;
}

declare class OnDrawSplineWithArrow_Geom__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawSplineWithArrow_Geom__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawSplineWithArrow_Geom__PythonCallable;
	static GetDefaultObject(): OnDrawSplineWithArrow_Geom__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawSplineWithArrow_Geom__PythonCallable;
	static C(Other: UObject | any): OnDrawSplineWithArrow_Geom__PythonCallable;
}

declare class OnEdNodeAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnEdNodeAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnEdNodeAction__PythonCallable;
	static GetDefaultObject(): OnEdNodeAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnEdNodeAction__PythonCallable;
	static C(Other: UObject | any): OnEdNodeAction__PythonCallable;
}

declare class OnGetBoolean__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBoolean__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBoolean__PythonCallable;
	static GetDefaultObject(): OnGetBoolean__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBoolean__PythonCallable;
	static C(Other: UObject | any): OnGetBoolean__PythonCallable;
}

declare class OnGetBoolean_GraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBoolean_GraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBoolean_GraphPin__PythonCallable;
	static GetDefaultObject(): OnGetBoolean_GraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBoolean_GraphPin__PythonCallable;
	static C(Other: UObject | any): OnGetBoolean_GraphPin__PythonCallable;
}

declare class OnGetBooleanMoveTo__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBooleanMoveTo__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBooleanMoveTo__PythonCallable;
	static GetDefaultObject(): OnGetBooleanMoveTo__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBooleanMoveTo__PythonCallable;
	static C(Other: UObject | any): OnGetBooleanMoveTo__PythonCallable;
}

declare class OnGetBooleanWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetBooleanWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetBooleanWidget__PythonCallable;
	static GetDefaultObject(): OnGetBooleanWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetBooleanWidget__PythonCallable;
	static C(Other: UObject | any): OnGetBooleanWidget__PythonCallable;
}

declare class OnGetPinColor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetPinColor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetPinColor__PythonCallable;
	static GetDefaultObject(): OnGetPinColor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetPinColor__PythonCallable;
	static C(Other: UObject | any): OnGetPinColor__PythonCallable;
}

declare class OnGetPins__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetPins__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetPins__PythonCallable;
	static GetDefaultObject(): OnGetPins__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetPins__PythonCallable;
	static C(Other: UObject | any): OnGetPins__PythonCallable;
}

declare class OnGetSlateBrushName__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetSlateBrushName__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetSlateBrushName__PythonCallable;
	static GetDefaultObject(): OnGetSlateBrushName__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetSlateBrushName__PythonCallable;
	static C(Other: UObject | any): OnGetSlateBrushName__PythonCallable;
}

declare class OnGetString__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetString__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetString__PythonCallable;
	static GetDefaultObject(): OnGetString__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetString__PythonCallable;
	static C(Other: UObject | any): OnGetString__PythonCallable;
}

declare class OnMouseDragEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseDragEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseDragEvent__PythonCallable;
	static GetDefaultObject(): OnMouseDragEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseDragEvent__PythonCallable;
	static C(Other: UObject | any): OnMouseDragEvent__PythonCallable;
}

declare class OnMouseEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEvent__PythonCallable;
	static GetDefaultObject(): OnMouseEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEvent__PythonCallable;
	static C(Other: UObject | any): OnMouseEvent__PythonCallable;
}

declare class OnMouseEventAdvanced__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEventAdvanced__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEventAdvanced__PythonCallable;
	static GetDefaultObject(): OnMouseEventAdvanced__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEventAdvanced__PythonCallable;
	static C(Other: UObject | any): OnMouseEventAdvanced__PythonCallable;
}

declare class OnPerformAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPerformAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPerformAction__PythonCallable;
	static GetDefaultObject(): OnPerformAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPerformAction__PythonCallable;
	static C(Other: UObject | any): OnPerformAction__PythonCallable;
}

declare class OnPerformSecondPassLayout__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPerformSecondPassLayout__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPerformSecondPassLayout__PythonCallable;
	static GetDefaultObject(): OnPerformSecondPassLayout__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPerformSecondPassLayout__PythonCallable;
	static C(Other: UObject | any): OnPerformSecondPassLayout__PythonCallable;
}

declare class OnPinConnectionListChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnPinConnectionListChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnPinConnectionListChanged__PythonCallable;
	static GetDefaultObject(): OnPinConnectionListChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnPinConnectionListChanged__PythonCallable;
	static C(Other: UObject | any): OnPinConnectionListChanged__PythonCallable;
}

declare class OnShouldAlwaysPurgeOnModification__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static GetDefaultObject(): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnShouldAlwaysPurgeOnModification__PythonCallable;
	static C(Other: UObject | any): OnShouldAlwaysPurgeOnModification__PythonCallable;
}

declare class OnTakeContentWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTakeContentWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTakeContentWidget__PythonCallable;
	static GetDefaultObject(): OnTakeContentWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTakeContentWidget__PythonCallable;
	static C(Other: UObject | any): OnTakeContentWidget__PythonCallable;
}

declare class OnTakeWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTakeWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTakeWidget__PythonCallable;
	static GetDefaultObject(): OnTakeWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTakeWidget__PythonCallable;
	static C(Other: UObject | any): OnTakeWidget__PythonCallable;
}

declare class OnTryCreateConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTryCreateConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTryCreateConnection__PythonCallable;
	static GetDefaultObject(): OnTryCreateConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTryCreateConnection__PythonCallable;
	static C(Other: UObject | any): OnTryCreateConnection__PythonCallable;
}

declare class OnVectorArith__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnVectorArith__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnVectorArith__PythonCallable;
	static GetDefaultObject(): OnVectorArith__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnVectorArith__PythonCallable;
	static C(Other: UObject | any): OnVectorArith__PythonCallable;
}

declare class OnDisallowedPinConnection__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDisallowedPinConnection__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDisallowedPinConnection__PythonCallable;
	static GetDefaultObject(): OnDisallowedPinConnection__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDisallowedPinConnection__PythonCallable;
	static C(Other: UObject | any): OnDisallowedPinConnection__PythonCallable;
}

declare class OnDropActor__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDropActor__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDropActor__PythonCallable;
	static GetDefaultObject(): OnDropActor__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDropActor__PythonCallable;
	static C(Other: UObject | any): OnDropActor__PythonCallable;
}

declare class SetNodes__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SetNodes__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SetNodes__PythonCallable;
	static GetDefaultObject(): SetNodes__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetNodes__PythonCallable;
	static C(Other: UObject | any): SetNodes__PythonCallable;
}

declare class SingleNode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SingleNode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SingleNode__PythonCallable;
	static GetDefaultObject(): SingleNode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SingleNode__PythonCallable;
	static C(Other: UObject | any): SingleNode__PythonCallable;
}

declare class OnWidgetFinalized__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnWidgetFinalized__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnWidgetFinalized__PythonCallable;
	static GetDefaultObject(): OnWidgetFinalized__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnWidgetFinalized__PythonCallable;
	static C(Other: UObject | any): OnWidgetFinalized__PythonCallable;
}

declare class OnGetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetDefaultValue__PythonCallable;
	static GetDefaultObject(): OnGetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetDefaultValue__PythonCallable;
	static C(Other: UObject | any): OnGetDefaultValue__PythonCallable;
}

declare class OnGetGraphPin__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetGraphPin__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetGraphPin__PythonCallable;
	static GetDefaultObject(): OnGetGraphPin__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetGraphPin__PythonCallable;
	static C(Other: UObject | any): OnGetGraphPin__PythonCallable;
}

declare type EJavasriptTabActivationCause = 'UserClickedOnTab' | 'SetDirectly' | 'EJavasriptTabActivationCause_MAX';
declare var EJavasriptTabActivationCause : { UserClickedOnTab:'UserClickedOnTab',SetDirectly:'SetDirectly',EJavasriptTabActivationCause_MAX:'EJavasriptTabActivationCause_MAX', };
declare class JavascriptWorkspaceItem { 
	clone() : JavascriptWorkspaceItem;
	static C(Other: UObject | any): JavascriptWorkspaceItem;
	AddGroup(DisplayName: string): JavascriptWorkspaceItem;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
}

declare type EJavascriptTabRole = 'MajorTab' | 'PanelTab' | 'NomadTab' | 'DocumentTab' | 'EJavascriptTabRole_MAX';
declare var EJavascriptTabRole : { MajorTab:'MajorTab',PanelTab:'PanelTab',NomadTab:'NomadTab',DocumentTab:'DocumentTab',EJavascriptTabRole_MAX:'EJavascriptTabRole_MAX', };
declare class JavascriptEditorTab extends UObject { 
	OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
	OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
	OnTabActivatedCallback: UnrealEngineDelegate<(TabId: string, Cause: EJavasriptTabActivationCause) => void>;
	Group: JavascriptWorkspaceItem;
	TabId: string;
	DisplayName: string;
	bIsNomad: boolean;
	Role: EJavascriptTabRole;
	static Load(ResourceName: string): JavascriptEditorTab;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
	static GetDefaultObject(): JavascriptEditorTab;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTab;
	ForceCommit(): void;
	Discard(): void;
	Commit(): void;
	CloseTab(Widget: Widget): void;
	static C(Other: UObject | any): JavascriptEditorTab;
}

declare class JavascriptMenuExtension { 
	ExtensionHook: string;
	HookPosition: EJavascriptExtensionHook;
	clone() : JavascriptMenuExtension;
	static C(Other: UObject | any): JavascriptMenuExtension;
}

declare class JavascriptUIExtender extends UObject { 
	MenuExtensions: JavascriptMenuExtension[];
	ToolbarExtensions: JavascriptMenuExtension[];
	OnHook: UnrealEngineDelegate<(Hook: string) => void>;
	static Load(ResourceName: string): JavascriptUIExtender;
	static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
	static GetDefaultObject(): JavascriptUIExtender;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUIExtender;
	static GetTopCommandList(): JavascriptUICommandList;
	static EndSection(): void;
	static Bind(Commands: JavascriptUICommands): void;
	static BeginSection(Name: string,text: string): void;
	static AddToolBarButton(Commands: JavascriptUICommands,ID: string): void;
	static AddMenuSeparator(): void;
	static AddMenuEntry(Commands: JavascriptUICommands,ID: string): void;
	static C(Other: UObject | any): JavascriptUIExtender;
}

declare class JavascriptAssetEditorToolkit extends UObject { 
	ToolkitFName: string;
	Layout: string;
	BaseToolkitName: string;
	ToolkitName: string;
	WorldCentricTabColorScale: LinearColor;
	WorldCentricTabPrefix: string;
	Tabs: JavascriptEditorTab[];
	Commands: JavascriptUICommands;
	MenuExtender: JavascriptUIExtender;
	ToolbarExtender: JavascriptUIExtender;
	TestArray: number[];
	static Load(ResourceName: string): JavascriptAssetEditorToolkit;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetEditorToolkit;
	static GetDefaultObject(): JavascriptAssetEditorToolkit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetEditorToolkit;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}

declare class JavascriptAssetPicker extends Widget { 
	OnGetDefaultValue: UnrealEngineDelegate<() => UObject>;
	OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
	CategoryObject: UObject;
	AllowedClasses: string;
	static Load(ResourceName: string): JavascriptAssetPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetPicker;
	static GetDefaultObject(): JavascriptAssetPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetPicker;
	SetCategoryObject(InCategoryObject: UObject): void;
	SetAllowedClasses(InAllowedClasses: string): void;
	static C(Other: UObject | any): JavascriptAssetPicker;
}

declare class JavascriptAssetTypeActions extends UObject { 
	ActionsName: string;
	Color: Color;
	SupportedClass: UnrealEngineClass;
	Editor: JavascriptAssetEditorToolkit;
	Actions: JavascriptUIExtender;
	static Load(ResourceName: string): JavascriptAssetTypeActions;
	static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
	static GetDefaultObject(): JavascriptAssetTypeActions;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptAssetTypeActions;
	Refresh(): void;
	Discard(): void;
	Commit(): void;
	static C(Other: UObject | any): JavascriptAssetTypeActions;
}

declare class JavascriptColorPicker extends Widget { 
	OnColorChanged: UnrealEngineMulticastDelegate<(Color: LinearColor) => void>;
	SelectedColor: LinearColor;
	static Load(ResourceName: string): JavascriptColorPicker;
	static Find(Outer: UObject, ResourceName: string): JavascriptColorPicker;
	static GetDefaultObject(): JavascriptColorPicker;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptColorPicker;
	static C(Other: UObject | any): JavascriptColorPicker;
}

declare class JavascriptCommandlet extends Commandlet { 
	CmdLineTokens: string[];
	CmdLineSwitches: string[];
	static Load(ResourceName: string): JavascriptCommandlet;
	static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
	static GetDefaultObject(): JavascriptCommandlet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCommandlet;
	static C(Other: UObject | any): JavascriptCommandlet;
}

declare class JavascriptCurveTableEditor extends Widget { 
	static Load(ResourceName: string): JavascriptCurveTableEditor;
	static Find(Outer: UObject, ResourceName: string): JavascriptCurveTableEditor;
	static GetDefaultObject(): JavascriptCurveTableEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCurveTableEditor;
	SetObject(UObject: CurveTable,bForceRefresh: boolean): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): JavascriptCurveTableEditor;
}

declare class JavascriptEditorEngineLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorEngineLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorEngineLibrary;
	static GetDefaultObject(): JavascriptEditorEngineLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorEngineLibrary;
	static SetMaterial(Engine: EditorEngine,InModel: Model,Material: MaterialInterface,Surfaces: number[]): void;
	static SelectNone(Engine: EditorEngine,bNoteSelectionChange: boolean,bDeselectBSPSurfs: boolean,WarnAboutManyActors: boolean): void;
	static SelectGroup(Engine: EditorEngine,InGroupActor: GroupActor,bForceSelection: boolean,bInSelected: boolean,bNotify: boolean): void;
	static SelectComponent(Engine: EditorEngine,Component: ActorComponent,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean): void;
	static SelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bNotify: boolean,bSelectEvenIfHidden: boolean,bForceRefresh: boolean): void;
	static RedrawAllViewports(Engine: EditorEngine,bInvalidateHitProxies: boolean): void;
	static RebuildStaticNavigableGeometry(Engine: EditorEngine,Level: Level): void;
	static RebuildLevel(Engine: EditorEngine,Level: Level): void;
	static GetSurfaces(Brush: Brush,Surfaces?: number[]): {Surfaces: number[]};
	static GetSelectedSet(Engine: EditorEngine,Class: UnrealEngineClass): USelection;
	static GetSelectedObjects(Engine: EditorEngine): USelection;
	static GetSelectedComponents(Engine: EditorEngine): USelection;
	static GetPIEWorld(Engine: Engine): World;
	static GetLongPackagePath(InPackage: Package): string;
	static GetEditorWorld(Engine: Engine): World;
	static FindBrushBuilder(Engine: EditorEngine,BrushBuilderClass: UnrealEngineClass): BrushBuilder;
	static Exec(Engine: EditorEngine,InWorld: World,Command: string,Out?: string): {Out: string, $: boolean};
	static DuplicateAsset(AssetName: string,PackagePath: string,OriginalObject: UObject): UObject;
	static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
	static CanSelectActor(Engine: EditorEngine,Actor: Actor,bInSelected: boolean,bSelectEvenIfHidden: boolean,bWarnIfLevelLocked: boolean): boolean;
	static bspBrushCSG(Engine: EditorEngine,Actor: Brush,Model: Model,PolyFlags: number,BrushType: EBrushType,CSGOper: ECsgOper,bBuildBounds: boolean,bMergePolys: boolean,bReplaceNULLMaterialRefs: boolean,bShowProgressBar: boolean): number;
	static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}

declare class JavascriptAssetData { 
	ObjectPath: string;
	PackageName: string;
	PackagePath: string;
	AssetName: string;
	AssetClass: string;
	ChunkIDs: number[];
	PackageFlags: number;
	clone() : JavascriptAssetData;
	static C(Other: UObject | any): JavascriptAssetData;
	GetAllTags(OutArray?: string[]): {OutArray: string[]};
	GetAsset(): UObject;
	GetClass(): UnrealEngineClass;
	GetPackage(): Package;
	GetTagValue(Name: string,OutValue?: string): {OutValue: string, $: boolean};
	IsAssetLoaded(): boolean;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}

declare class JavascriptEditorGlobalDelegates extends UObject { 
	static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorGlobalDelegates;
	static GetDefaultObject(): JavascriptEditorGlobalDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorGlobalDelegates;
	WorldChange(): void;
	UnbindAll(): void;
	Unbind(Key: string): void;
	SurfProps(): void;
	SingleStepPIE(bIsSimulating: boolean): void;
	SelectedProps(): void;
	ResumePIE(bIsSimulating: boolean): void;
	RefreshPrimitiveStatsBrowser(): void;
	RefreshLayerBrowser(): void;
	RefreshEditor(): void;
	RefreshAllBrowsers(): void;
	RedrawAllViewports(): void;
	PropertySelectionChange(): void;
	PreSaveWorld_Friendly(SaveFlags: number,World: World): void;
	PreBeginPIE(bIsSimulating: boolean): void;
	PostSaveWorld_Friendly(SaveFlags: number,World: World,bSuccess: boolean): void;
	PostLandscapeLayerUpdated(): void;
	OnShutdownPostPackagesSaved(): void;
	OnPathRemoved(Path: string): void;
	OnPathAdded(Path: string): void;
	OnObjectReimported(UObject: UObject): void;
	OnNewAssetCreated(InFactory: Factory): void;
	OnNewActorsDropped(DroppedObjects: UObject[],OutNewActors: Actor[]): void;
	OnMapOpened(Filename: string,bAsTemplate: boolean): void;
	OnLightingBuildStarted(): void;
	OnLightingBuildKept(): void;
	OnInMemoryAssetDeleted(InObject: UObject): void;
	OnInMemoryAssetCreated(InObject: UObject): void;
	OnGridSnappingChanged(bGridEnabled: boolean,GridSize: number): void;
	OnFocusViewportOnActors(Actors: Actor[]): void;
	OnFinishPickingBlueprintClass(InClass: UnrealEngineClass): void;
	OnFilesLoaded(): void;
	OnFileLoadProgressUpdated_Friendly(NumTotalAssets: number,NumAssetsProcessedByAssetRegistry: number,NumAssetsPendingDataLoad: number,bIsDiscoveringAssetFiles: boolean): void;
	OnEditorCameraMoved(ViewLocation: Vector,ViewRotation: Rotator,ViewportType: ELevelViewportType,ViewIndex: number): void;
	OnDollyPerspectiveCamera(Drag: Vector,ViewIndex: number): void;
	OnConfigureNewAssetProperties(InFactory: Factory): void;
	OnClassPackageLoadedOrUnloaded(): void;
	OnBlueprintReinstanced(): void;
	OnBlueprintPreCompile(Blueprint: Blueprint): void;
	OnBlueprintCompiled(): void;
	OnAssetsPreDelete(Assets: UObject[]): void;
	OnAssetsDeleted(Classes: UnrealEngineClass[]): void;
	OnAssetRenamed_Friendly(AssetData: JavascriptAssetData,Name: string): void;
	OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
	OnAssetReimport(InCreatedObject: UObject): void;
	OnAssetPreImport_Friendly(InFactory: Factory,InClass: UnrealEngineClass,InParent: UObject,Name: string,Type: string): void;
	OnAssetPostImport(InFactory: Factory,InCreatedObject: UObject): void;
	OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
	OnApplyObjectToActor(ObjectToApply: UObject,Actor: Actor): void;
	OnAddLevelToWorld(Level: Level): void;
	OnActionAxisMappingsChanged(): void;
	NewCurrentLevel(): void;
	MapChange_Friendly(MapChangeFlags: number): void;
	LoadSelectedAssetsIfNeeded(): void;
	LayerChange(): void;
	FitTextureToSurface(World: World): void;
	EndPlayMapDelegate(): void;
	EndPIE(bIsSimulating: boolean): void;
	DisplayLoadErrors(): void;
	CleanseEditor(): void;
	ChangeEditorMode(NewMode: string): void;
	Bind(Key: string): void;
	BeginPIE(bIsSimulating: boolean): void;
	ActorPropertiesChange(): void;
	static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}

declare class JavascriptEditorInputProcessor extends UObject { 
	static Load(ResourceName: string): JavascriptEditorInputProcessor;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorInputProcessor;
	static GetDefaultObject(): JavascriptEditorInputProcessor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorInputProcessor;
	UnRegister(): void;
	Register(): void;
	HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
	HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
	HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
	HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
	Activate(bEnable: boolean): void;
	static C(Other: UObject | any): JavascriptEditorInputProcessor;
}

declare class JavascriptLazyExtenderDelegates extends UObject { 
	GetExtender: UnrealEngineDelegate<(List: JavascriptUICommandList, EditingObjects: UObject[]) => JavascriptExtender>;
	static Load(ResourceName: string): JavascriptLazyExtenderDelegates;
	static Find(Outer: UObject, ResourceName: string): JavascriptLazyExtenderDelegates;
	static GetDefaultObject(): JavascriptLazyExtenderDelegates;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLazyExtenderDelegates;
	static C(Other: UObject | any): JavascriptLazyExtenderDelegates;
}

declare type EJavascriptRHIFeatureLevel = 'ES2' | 'ES3_1' | 'SM4' | 'SM5' | 'Num' | 'EJavascriptRHIFeatureLevel_MAX';
declare var EJavascriptRHIFeatureLevel : { ES2:'ES2',ES3_1:'ES3_1',SM4:'SM4',SM5:'SM5',Num:'Num',EJavascriptRHIFeatureLevel_MAX:'EJavascriptRHIFeatureLevel_MAX', };
declare class JavascriptPDI { 
	clone() : JavascriptPDI;
	static C(Other: UObject | any): JavascriptPDI;
	DrawArc(Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawCircle(Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawConnectedArrow(ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	DrawDashedLine(Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	DrawDirectionalArrow(ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	DrawOrientedWireBox(Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawPolygon(Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	DrawWireBox(Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireBox2(Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireCapsule(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireChoppedCone(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireCone(Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	DrawWireCylinder(Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireDiamond(Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireSphere(Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphere2(Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides(Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereAutoSides2(Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	DrawWireSphereCappedCone(Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	DrawWireStar(Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	SetHitProxy(Name: string): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
}

declare class JavascriptExtensibilityManager { 
	clone() : JavascriptExtensibilityManager;
	static C(Other: UObject | any): JavascriptExtensibilityManager;
	AddExtender(Extender: JavascriptExtender): void;
	AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates): void;
	RemoveAllLazyExtender(): void;
	RemoveExtender(Extender: JavascriptExtender): void;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
}

declare class JavascriptViewportClick { 
	clone() : JavascriptViewportClick;
	static C(Other: UObject | any): JavascriptViewportClick;
	GetClickPos(): IntPoint;
	GetDirection(): Vector;
	GetEvent(): EInputEvent;
	GetKey(): Key;
	GetOrigin(): Vector;
	IsAltDown(): boolean;
	IsControlDown(): boolean;
	IsShiftDown(): boolean;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
}

declare class JavascriptHitProxy { 
	clone() : JavascriptHitProxy;
	static C(Other: UObject | any): JavascriptHitProxy;
	GetActor(): Actor;
	GetName(): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static GetName(Proxy: JavascriptHitProxy): string;
}

declare type EJavascriptMessageSeverity = 'CriticalError' | 'Error' | 'PerformanceWarning' | 'Warning' | 'Info' | 'EJavascriptMessageSeverity_MAX';
declare var EJavascriptMessageSeverity : { CriticalError:'CriticalError',Error:'Error',PerformanceWarning:'PerformanceWarning',Warning:'Warning',Info:'Info',EJavascriptMessageSeverity_MAX:'EJavascriptMessageSeverity_MAX', };
declare class JavascriptEditorLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEditorLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
	static GetDefaultObject(): JavascriptEditorLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorLibrary;
	static UpdateModelComponents(Level: Level): void;
	static ToggleSelect(USelection: USelection,InObject: UObject): void;
	static SetIsTemporarilyHiddenInEditor(Actor: Actor,bIsHidden: boolean): void;
	static SetHitProxy(PDI: JavascriptPDI,Name: string): void;
	static SetHeightmapDataFromMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static SetFolderPath_Recursively(Actor: Actor,NewFolderPath: string): void;
	static SetFolderPath(Actor: Actor,NewFolderPath: string): void;
	static SetAlphamapDataFromMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number,PaintingRestriction: ELandscapeLayerPaintingRestriction): void;
	static SetActorLocation(Actor: Actor,NewLocation: Vector,bSweep: boolean,SweepHitResult?: HitResult,bTeleport?: boolean): {SweepHitResult: HitResult, $: boolean};
	static SetActorLabel(Actor: Actor,NewActorLabel: string,bMarkDirty: boolean): void;
	static Select(USelection: USelection,InObject: UObject): void;
	static SavePackage(Package: Package,Filename: string): boolean;
	static RequestEndPlayMapInPIE(): void;
	static ReplaceAnimNotifyClass(Sequence: AnimSequenceBase,NotifyName: string,NewNotifyName: string,NewNotifyClass: UObject): number;
	static RemoveLevelInstance(World: World): void;
	static RemoveExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static RemoveComponentFromBlueprint(Blueprint: Blueprint,RemoveComponent: ActorComponent,bPromoteChildren: boolean): void;
	static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
	static PostEditChange(InObject: UObject): void;
	static OpenPopupWindow(Widget: Widget,PopupDesiredSize: Vector2D,HeadingText: string): void;
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenEditorForAssetByPath(AssetPathName: string,ObjectName: string): void;
	static OpenEditorForAsset(Asset: UObject): boolean;
	static NotifyUpdateCurveTable(InCurveTable: CurveTable): void;
	static ModifyObject(UObject: UObject,bAlwaysMarkDirty: boolean): void;
	static MarkPackageDirty(InObject: UObject): boolean;
	static LoadImageFromDiskAsync(ImagePath: string,Callback: AsyncTaskDownloadImage): boolean;
	static LoadFileToString(Path: string,Data?: string): {Data: string, $: boolean};
	static LoadFileToIntArray(Path: string,FileData?: number[]): {FileData: number[], $: boolean};
	static IsShiftDown(Click: JavascriptViewportClick): boolean;
	static IsControlDown(Click: JavascriptViewportClick): boolean;
	static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
	static IsAltDown(Click: JavascriptViewportClick): boolean;
	static IsActorLabelEditable(Actor: Actor): boolean;
	static IsActive(Transactor: Transactor): boolean;
	static InvalidateModelGeometry(World: World,InLevel: Level): void;
	static HasMetaData(Field: Field,Key: string): boolean;
	static GetTransaction(Transactor: Transactor,QueueIndex: number): JavascriptTransaction;
	static GetToolBarExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetTitle(Transaction: JavascriptTransaction): string;
	static GetTagValue(AssetData: JavascriptAssetData,Name: string,OutValue?: string): {OutValue: string, $: boolean};
	static GetSelectedObjects(USelection: USelection,Out?: UObject[]): {Out: UObject[], $: number};
	static GetRootWindow(): JavascriptSlateWidget;
	static GetQueueLength(Transactor: Transactor): number;
	static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
	static GetParentClassOfBlueprint(Blueprint: Blueprint): UnrealEngineClass;
	static GetPackage(AssetData: JavascriptAssetData): Package;
	static GetOrigin(Click: JavascriptViewportClick): Vector;
	static GetName(Proxy: JavascriptHitProxy): string;
	static GetMenuExtensibilityManager(What: string): JavascriptExtensibilityManager;
	static GetLevelEditorActions(): JavascriptUICommandList;
	static GetLayerInfoByName(LandscapeInfo: LandscapeInfo,LayerName: string,Owner: LandscapeProxy): LandscapeLayerInfoObject;
	static GetLandscapeInfo(Landscape: Landscape,bSpawnNewActor: boolean): LandscapeInfo;
	static GetLandscapeExtent(LandscapeInfo: LandscapeInfo,MinX?: number,MinY?: number,MaxX?: number,MaxY?: number): {MinX: number, MinY: number, MaxX: number, MaxY: number, $: boolean};
	static GetKeyNameByKeyEvent(Event: KeyEvent): string;
	static GetKey(Click: JavascriptViewportClick): Key;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetDirection(Click: JavascriptViewportClick): Vector;
	static GetDefaultBrush(World: World): Brush;
	static GetDataTableAsJSON(InDataTable: DataTable,InDTExportFlags: number): string;
	static GetContext(Transaction: JavascriptTransaction): string;
	static GetClickPos(Click: JavascriptViewportClick): IntPoint;
	static GetClass(AssetData: JavascriptAssetData): UnrealEngineClass;
	static GetAssetsByType(Types: string[],bRecursiveClasses: boolean): AssetData[];
	static GetAsset(AssetData: JavascriptAssetData): UObject;
	static GetAlphamapDataToMemory(LandscapeInfo: LandscapeInfo,LayerInfo: LandscapeLayerInfoObject,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetAllTags(AssetData: JavascriptAssetData,OutArray?: string[]): {OutArray: string[]};
	static GetActorLocation(Actor: Actor): Vector;
	static GetActorLabel(Actor: Actor): string;
	static GetActor(Proxy: JavascriptHitProxy): Actor;
	static FindWorldInPackage(Package: Package): World;
	static ExportNavigation(InWorld: World,Path: string): string;
	static EditorDestroyActor(World: World,Actor: Actor,bShouldModifyLevel: boolean): boolean;
	static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
	static DrawWireStar(PDI: JavascriptPDI,Position: Vector,Size: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereCappedCone(PDI: JavascriptPDI,Transform: Transform,ConeRadius: number,ConeAngle: number,ConeSides: number,ArcFrequency: number,CapSegments: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireSphereAutoSides2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphereAutoSides(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere2(PDI: JavascriptPDI,Transform: Transform,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireSphere(PDI: JavascriptPDI,Base: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireDiamond(PDI: JavascriptPDI,Transform: Transform,Size: number,InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCylinder(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireCone(PDI: JavascriptPDI,Verts?: Vector[],Transform?: Transform,ConeRadius?: number,ConeAngle?: number,ConeSides?: number,Color?: LinearColor,DepthPriority?: ESceneDepthPriorityGroup,Thickness?: number,DepthBias?: number,bScreenSpace?: boolean): {Verts: Vector[]};
	static DrawWireChoppedCone(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,TopRadius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup): void;
	static DrawWireCapsule(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Color: LinearColor,Radius: number,HalfHeight: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox2(PDI: JavascriptPDI,Matrix: Transform,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawWireBox(PDI: JavascriptPDI,Box: Box,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawPolygon(PDI: JavascriptPDI,Verts: Vector[],InColor: LinearColor,DepthPriority: ESceneDepthPriorityGroup,RHIFeatureLevel: EJavascriptRHIFeatureLevel): void;
	static DrawOrientedWireBox(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Z: Vector,Extent: Vector,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawDirectionalArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,InColor: LinearColor,Length: number,ArrowSize: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number): void;
	static DrawDashedLine(PDI: JavascriptPDI,Start: Vector,End: Vector,Color: LinearColor,DashSize: number,DepthPriority: ESceneDepthPriorityGroup,DepthBias: number): void;
	static DrawConnectedArrow(PDI: JavascriptPDI,ArrowToWorld: Transform,Color: LinearColor,ArrowHeight: number,ArrowWidth: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,NumSpokes: number): void;
	static DrawCircle(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,Color: LinearColor,Radius: number,NumSides: number,DepthPriority: ESceneDepthPriorityGroup,Thickness: number,DepthBias: number,bScreenSpace: boolean): void;
	static DrawArc(PDI: JavascriptPDI,Base: Vector,X: Vector,Y: Vector,MinAngle: number,MaxAngle: number,Radius: number,Sections: number,Color: LinearColor,DepthPriority: ESceneDepthPriorityGroup): void;
	static DeselectAll(USelection: USelection,InClass: UnrealEngineClass): void;
	static Deselect(USelection: USelection,InObject: UObject): void;
	static DeletePackage(Package: Package): boolean;
	static csgAdd(DefaultBrush: Brush,PolyFlags: number,BrushType: EBrushType): Brush;
	static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
	static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
	static CreateLogListing(InLogName: string,InLabel: string): void;
	static CreateBrushForVolumeActor(NewActor: Volume,BrushBuilder: BrushBuilder): void;
	static CompileBlueprint(Blueprint: Blueprint): void;
	static ClearActorLabel(Actor: Actor): void;
	static Build(Builder: BrushBuilder,InWorld: World,InBrush: Brush): boolean;
	static BroadcastHotReload(): void;
	static BroadcastAssetCreated(NewAsset: UObject): void;
	static AddWhitelistedObject(InObject: UObject): void;
	static AddRichCurve(InCurveTable: CurveTable,Key: string,InCurve: RichCurve): void;
	static AddLogListingMessage(InLogName: string,InSeverity: EJavascriptMessageSeverity,LogText: string): void;
	static AddLazyExtender(Manager: JavascriptExtensibilityManager,Delegates: JavascriptLazyExtenderDelegates): void;
	static AddGroup(Parent: JavascriptWorkspaceItem,DisplayName: string): JavascriptWorkspaceItem;
	static AddExtender(Manager: JavascriptExtensibilityManager,Extender: JavascriptExtender): void;
	static AddComponentsToBlueprint(Blueprint: Blueprint,Components: ActorComponent[],bHarvesting: boolean,OptionalNewRootComponent: ActorComponent,bKeepMobility: boolean): void;
	static C(Other: UObject | any): JavascriptEditorLibrary;
}

declare class JavascriptEditorPopupWindow extends UObject { 
	Widget: Widget;
	static Load(ResourceName: string): JavascriptEditorPopupWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorPopupWindow;
	static GetDefaultObject(): JavascriptEditorPopupWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorPopupWindow;
	Open(Heading: string,DesiredSize: Vector2D): boolean;
	OnDismissed(): void;
	static C(Other: UObject | any): JavascriptEditorPopupWindow;
}

declare class JavascriptEditorTabManager extends Widget { 
	Layout: string;
	Tabs: JavascriptEditorTab[];
	static Load(ResourceName: string): JavascriptEditorTabManager;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
	static GetDefaultObject(): JavascriptEditorTabManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTabManager;
	static C(Other: UObject | any): JavascriptEditorTabManager;
}

declare class JavascriptEditorTick extends UObject { 
	OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
	static Load(ResourceName: string): JavascriptEditorTick;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
	static GetDefaultObject(): JavascriptEditorTick;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTick;
	GetEngine(): EditorEngine;
	ForceTick(DeltaTime: number): void;
	static C(Other: UObject | any): JavascriptEditorTick;
}

declare class JavascriptEditorToolbar extends Widget { 
	OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
	static Load(ResourceName: string): JavascriptEditorToolbar;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
	static GetDefaultObject(): JavascriptEditorToolbar;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorToolbar;
	static C(Other: UObject | any): JavascriptEditorToolbar;
}

declare class JavascriptInputEventState { 
	clone() : JavascriptInputEventState;
	static C(Other: UObject | any): JavascriptInputEventState;
	GetInputEvent(): EInputEvent;
	GetKey(): Key;
	IsAltButtonEvent(): boolean;
	IsAltButtonPressed(): boolean;
	IsAnyMouseButtonDown(): boolean;
	IsButtonPressed(InKey: Key): boolean;
	IsCtrlButtonEvent(): boolean;
	IsCtrlButtonPressed(): boolean;
	IsLeftMouseButtonPressed(): boolean;
	IsMiddleMouseButtonPressed(): boolean;
	IsMouseButtonEvent(): boolean;
	IsRightMouseButtonPressed(): boolean;
	IsShiftButtonEvent(): boolean;
	IsShiftButtonPressed(): boolean;
	IsSpaceBarPressed(): boolean;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}

declare type EJavascriptWidgetMode = 'WM_Translate' | 'WM_TranslateRotateZ' | 'WM_2D' | 'WM_Rotate' | 'WM_Scale' | 'WM_Max' | 'WM_None';
declare var EJavascriptWidgetMode : { WM_Translate:'WM_Translate',WM_TranslateRotateZ:'WM_TranslateRotateZ',WM_2D:'WM_2D',WM_Rotate:'WM_Rotate',WM_Scale:'WM_Scale',WM_Max:'WM_Max',WM_None:'WM_None', };
declare class JavascriptEditorViewport extends PanelWidget { 
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStarted: UnrealEngineDelegate<(InputState: JavascriptInputEventState, bIsDraggingWidget: boolean, bNudge: boolean, Instance: JavascriptEditorViewport) => void>;
	OnTrackingStopped: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => void>;
	OnInputWidgetDelta: UnrealEngineDelegate<(Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorViewport) => boolean>;
	OnInputKey: UnrealEngineDelegate<(ControllerId: number, Key: Key, Event: EInputEvent, Instance: JavascriptEditorViewport) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(X: number, Y: number, Instance: JavascriptEditorViewport) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void>;
	OnDrawCanvas: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorViewport) => void>;
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Vector>;
	OnGetWidgetRotation: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => Rotator>;
	OnGetWidgetMode: UnrealEngineDelegate<(Instance: JavascriptEditorViewport) => EJavascriptWidgetMode>;
	static Load(ResourceName: string): JavascriptEditorViewport;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
	static GetDefaultObject(): JavascriptEditorViewport;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorViewport;
	SetWidgetMode(WidgetMode: EJavascriptWidgetMode): void;
	SetViewRotation(ViewRotation: Rotator): void;
	SetViewportType(InViewportType: ELevelViewportType): void;
	SetViewMode(InViewModeIndex: EViewModeIndex): void;
	SetViewLocation(ViewLocation: Vector): void;
	SetViewFOV(InViewFOV: number): void;
	SetSkyBrightness(SkyBrightness: number): void;
	SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
	SetRealtime(bInRealtime: boolean,bStoreCurrentValue: boolean): void;
	SetProfileIndex(InProfileIndex: number): void;
	SetLightDirection(InLightDir: Rotator): void;
	SetLightColor(LightColor: Color): void;
	SetLightBrightness(LightBrightness: number): void;
	SetFloorOffset(InFloorOffset: number): void;
	SetEngineShowFlags(In: string): boolean;
	SetCameraSpeedSetting(SpeedSetting: number): void;
	SetBackgroundColor(BackgroundColor: LinearColor): void;
	RestoreRealtime(bAllowDisable: boolean): void;
	Redraw(): void;
	ProjectWorldToScreen(WorldPosition: Vector,OutScreenPosition?: Vector2D): {OutScreenPosition: Vector2D};
	OverridePostProcessSettings(PostProcessSettings: PostProcessSettings,Weight: number): void;
	GetWidgetMode(): EJavascriptWidgetMode;
	GetViewRotation(): Rotator;
	GetViewportWorld(): World;
	GetViewLocation(): Vector;
	GetViewFOV(): number;
	GetSkyComponent(): StaticMeshComponent;
	GetFloorMeshComponent(): StaticMeshComponent;
	GetEngineShowFlags(): string;
	GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent;
	GetDefaultSkySphereComponent(): StaticMeshComponent;
	GetDefaultSkyLightComponent(): SkyLightComponent;
	GetDefaultPostProcessComponent(): PostProcessComponent;
	GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant;
	GetDefaultDirectionalLightComponent(): DirectionalLightComponent;
	GetDefaultAssetViewerSettings(): AssetViewerSettings;
	GetCurrentProfileIndex(): number;
	GetCameraSpeedSetting(): number;
	DeprojectScreenToWorld(ScreenPosition: Vector2D,OutRayOrigin?: Vector,OutRayDirection?: Vector): {OutRayOrigin: Vector, OutRayDirection: Vector};
	static C(Other: UObject | any): JavascriptEditorViewport;
}

declare class JavascriptEdViewport { 
	clone() : JavascriptEdViewport;
	static C(Other: UObject | any): JavascriptEdViewport;
	GetHitProxy(): JavascriptHitProxy;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}

declare class JavascriptEditorModeTools { 
	clone() : JavascriptEditorModeTools;
	static C(Other: UObject | any): JavascriptEditorModeTools;
	ActivateDefaultMode(): {Tools: JavascriptEditorModeTools};
	ActivateMode(InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	DeactivateAllModes(): {Tools: JavascriptEditorModeTools};
	DeactivateMode(InID?: string): {Tools: JavascriptEditorModeTools};
	DestroyMode(InID?: string): {Tools: JavascriptEditorModeTools};
	EndTracking(Viewport: JavascriptEdViewport): boolean;
	EnsureNotInMode(ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	IsDefaultModeActive(): {Tools: JavascriptEditorModeTools, $: boolean};
	IsModeActive(InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	IsTracking(): boolean;
	SetDefaultMode(DefaultID?: string): {Tools: JavascriptEditorModeTools};
	StartTracking(Viewport: JavascriptEdViewport): boolean;
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
}

declare class JavascriptEditorMode { 
	clone() : JavascriptEditorMode;
	static C(Other: UObject | any): JavascriptEditorMode;
	GetCurrentWidgetAxis(): number;
	GetModeManager(): JavascriptEditorModeTools;
	SelectNone(): void;
	SetCurrentWidgetAxis(InAxis: number): void;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
}

declare type EJavascriptEditAction = 'Skip' | 'Process' | 'Halt' | 'EJavascriptEditAction_MAX';
declare var EJavascriptEditAction : { Skip:'Skip',Process:'Process',Halt:'Halt',EJavascriptEditAction_MAX:'EJavascriptEditAction_MAX', };
declare class JavascriptEdMode extends UObject { 
	OnGetWidgetLocation: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => Vector>;
	OnSelect: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnDraw: UnrealEngineDelegate<(PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void>;
	OnDrawHUD: UnrealEngineDelegate<(Canvas: Canvas, Instance: JavascriptEditorMode) => void>;
	IsSelectionAllowed: UnrealEngineDelegate<(Actor: Actor, bSelected: boolean, Instance: JavascriptEditorMode) => boolean>;
	OnClick: UnrealEngineDelegate<(ViewportClick: JavascriptViewportClick, HitProxy: JavascriptHitProxy, Instance: JavascriptEditorMode) => boolean>;
	OnQuery: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnStartTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnEndTracking: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnInputAxis: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, ControllerId: number, Key: Key, Delta: number, DeltaTime: number, Instance: JavascriptEditorMode) => boolean>;
	OnInputKey: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Key: Key, Event: EInputEvent, Instance: JavascriptEditorMode) => boolean>;
	OnInputDelta: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Drag: Vector, Rot: Rotator, Scale: Vector, Instance: JavascriptEditorMode) => boolean>;
	OnCapturedMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseEnter: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnMouseLeave: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnMouseMove: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, X: number, Y: number, Instance: JavascriptEditorMode) => boolean>;
	OnLostFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnReceivedFocus: UnrealEngineDelegate<(Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean>;
	OnSelectionChanged: UnrealEngineDelegate<(Tools: JavascriptEditorModeTools, Item: UObject) => void>;
	OnGetContent: UnrealEngineDelegate<() => Widget>;
	OnProcess: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => boolean>;
	OnGetAction: UnrealEngineDelegate<(Request: string, Instance: JavascriptEditorMode) => EJavascriptEditAction>;
	OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorsDuplicated: UnrealEngineDelegate<(PreDuplicateSelection: Actor[], PostDuplicateSelection: Actor[], bOffsetLocations: boolean, Instance: JavascriptEditorMode) => void>;
	OnActorSelectionChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnActorPropChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
	ModeId: string;
	SlateIcon: JavascriptSlateIcon;
	ModeName: string;
	bVisible: boolean;
	PriorityOrder: number;
	static Load(ResourceName: string): JavascriptEdMode;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
	static GetDefaultObject(): JavascriptEdMode;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdMode;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptEdMode;
}

declare class JavascriptEdModeLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptEdModeLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
	static GetDefaultObject(): JavascriptEdModeLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEdModeLibrary;
	static StartTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static SetDefaultMode(Tools?: JavascriptEditorModeTools,DefaultID?: string): {Tools: JavascriptEditorModeTools};
	static SetCurrentWidgetAxis(Mode: JavascriptEditorMode,InAxis: number): void;
	static SelectNone(Mode: JavascriptEditorMode): void;
	static IsTracking(Tools: JavascriptEditorModeTools): boolean;
	static IsModeActive(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools, $: boolean};
	static IsDefaultModeActive(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools, $: boolean};
	static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
	static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
	static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
	static EnsureNotInMode(Tools?: JavascriptEditorModeTools,ModeId?: string,ErrorMsg?: string,bNotifyUser?: boolean): {Tools: JavascriptEditorModeTools, $: boolean};
	static EndTracking(Tools: JavascriptEditorModeTools,Viewport: JavascriptEdViewport): boolean;
	static DestroyMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateMode(Tools?: JavascriptEditorModeTools,InID?: string): {Tools: JavascriptEditorModeTools};
	static DeactivateAllModes(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static ActivateMode(Tools?: JavascriptEditorModeTools,InID?: string,bToggle?: boolean): {Tools: JavascriptEditorModeTools};
	static ActivateDefaultMode(Tools?: JavascriptEditorModeTools): {Tools: JavascriptEditorModeTools};
	static C(Other: UObject | any): JavascriptEdModeLibrary;
}

declare class JavascriptInputEventStateLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptInputEventStateLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptInputEventStateLibrary;
	static GetDefaultObject(): JavascriptInputEventStateLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptInputEventStateLibrary;
	static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsRightMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsMiddleMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsLeftMouseButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static IsButtonPressed(InputEvent: JavascriptInputEventState,InKey: Key): boolean;
	static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
	static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
	static GetKey(InputEvent: JavascriptInputEventState): Key;
	static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEvent;
	static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}

declare class JavascriptLogSubscriber extends UObject { 
	OnNewLogMessage: UnrealEngineMulticastDelegate<(Message: string, Type: string, Category: string) => void>;
	static Load(ResourceName: string): JavascriptLogSubscriber;
	static Find(Outer: UObject, ResourceName: string): JavascriptLogSubscriber;
	static GetDefaultObject(): JavascriptLogSubscriber;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptLogSubscriber;
	static C(Other: UObject | any): JavascriptLogSubscriber;
}

declare type EJSCheckBoxState = 'Unchecked' | 'Checked' | 'Undetermined' | 'EJSCheckBoxState_MAX';
declare var EJSCheckBoxState : { Unchecked:'Unchecked',Checked:'Checked',Undetermined:'Undetermined',EJSCheckBoxState_MAX:'EJSCheckBoxState_MAX', };
declare class JavascriptNotification extends UObject { 
	text: string;
	bUseImage: boolean;
	UImage: SlateBrush;
	FadeInDuration: number;
	FadeOutDuration: number;
	ExpireDuration: number;
	bUseThrobber: boolean;
	bUseSuccessFailIcons: boolean;
	bUseLargeFont: boolean;
	bFireAndForget: boolean;
	CheckBoxState: EJSCheckBoxState;
	CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxState) => void>;
	CheckBoxText: string;
	Hyperlink: UnrealEngineDelegate<() => void>;
	HyperlinkText: string;
	bAllowThrottleWhenFrameRateIsLow: boolean;
	static Load(ResourceName: string): JavascriptNotification;
	static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
	static GetDefaultObject(): JavascriptNotification;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptNotification;
	Success(): void;
	SetText(InText: string): void;
	Reset(): void;
	Pending(): void;
	Fire(): void;
	Fail(): void;
	Fadeout(): void;
	static C(Other: UObject | any): JavascriptNotification;
}

declare type EPropertyAccessResult = 'MultipleValues' | 'Fail' | 'Success' | 'EPropertyAccessResult_MAX';
declare var EPropertyAccessResult : { MultipleValues:'MultipleValues',Fail:'Fail',Success:'Success',EPropertyAccessResult_MAX:'EPropertyAccessResult_MAX', };
declare class JavascriptPropertyHandle { 
	clone() : JavascriptPropertyHandle;
	static C(Other: UObject | any): JavascriptPropertyHandle;
	CreatePropertyNameWidget(NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	CreatePropertyValueWidget(bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	IsEditConst(): boolean;
	IsValidHandle(): boolean;
	SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
}

declare class JavascriptDetailWidgetDecl { 
	clone() : JavascriptDetailWidgetDecl;
	static C(Other: UObject | any): JavascriptDetailWidgetDecl;
	SetContent(Widget: JavascriptSlateWidget): void;
	SetHAlign(InAlignment: EHorizontalAlignment): void;
	SetMaxDesiredWidth(MaxWidth: number): void;
	SetMinDesiredWidth(MinWidth: number): void;
	SetVAlign(InAlignment: EVerticalAlignment): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
}

declare class JavascriptDetailWidgetRow { 
	clone() : JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptDetailWidgetRow;
	NameContent(): JavascriptDetailWidgetDecl;
	SetFilterString(InFilterString: string): void;
	ValueContent(): JavascriptDetailWidgetDecl;
	WholeRowContent(): JavascriptDetailWidgetDecl;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
}

declare class JavascriptPropertyTypeCustomizationUtils { 
	clone() : JavascriptPropertyTypeCustomizationUtils;
	static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
	RequestRefresh(bForce: boolean): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
}

declare class JavascriptSimpleGetBoolDelegateWrapper extends UObject { 
	delegate: UnrealEngineDelegate<() => boolean>;
	static Load(ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static Find(Outer: UObject, ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
	static GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptSimpleGetBoolDelegateWrapper;
	static C(Other: UObject | any): JavascriptSimpleGetBoolDelegateWrapper;
}

declare class JavascriptDetailPropertyRow { 
	clone() : JavascriptDetailPropertyRow;
	static C(Other: UObject | any): JavascriptDetailPropertyRow;
	BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
}

declare class JavascriptDetailChildrenBuilder { 
	clone() : JavascriptDetailChildrenBuilder;
	static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
	AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
	AddChildProperty(PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	AddExternalObjectProperty(Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	AddExternalObjects(Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	GenerateStructValueWidget(StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
}

declare class JavascriptPropertyCustomization extends UObject { 
	PropertyTypeName: string;
	OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
	OnCustomizeHeader: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, HeaderRow: JavascriptDetailWidgetRow, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnCustomizeChildren: UnrealEngineDelegate<(Handle: JavascriptPropertyHandle, ChildBuilder: JavascriptDetailChildrenBuilder, Utils: JavascriptPropertyTypeCustomizationUtils, ID: number) => void>;
	OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptPropertyCustomization;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomization;
	static GetDefaultObject(): JavascriptPropertyCustomization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomization;
	Unregister(): void;
	Register(): void;
	static C(Other: UObject | any): JavascriptPropertyCustomization;
}

declare class JavascriptPropertyCustomizationLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyCustomizationLibrary;
	static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyCustomizationLibrary;
	static WholeRowContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static ValueContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static SetValueFromFormattedString(Handle: JavascriptPropertyHandle,InValue: string): EPropertyAccessResult;
	static SetVAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EVerticalAlignment): void;
	static SetOnPropertyValueChanged(Handle: JavascriptPropertyHandle,Custom: JavascriptPropertyCustomization): void;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static CustomWidget(Row: JavascriptDetailPropertyRow,bShowChildren: boolean): JavascriptDetailWidgetRow;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static BindVisibility(Row: JavascriptDetailPropertyRow,Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
	static AddExternalObjects(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],UniqueIdName?: string): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddExternalObjectProperty(ChildBuilder: JavascriptDetailChildrenBuilder,Objects?: UObject[],PropertyName?: string,UniqueIdName?: string,bAllowChildrenOverride?: boolean,bCreateCategoryNodesOverride?: boolean): {Objects: UObject[], $: JavascriptDetailPropertyRow};
	static AddChildProperty(ChildBuilder: JavascriptDetailChildrenBuilder,PropertyHandle: JavascriptPropertyHandle): JavascriptDetailPropertyRow;
	static AddChildContent(ChildBuilder: JavascriptDetailChildrenBuilder,SearchString: string): JavascriptDetailWidgetRow;
	static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}

declare class JavascriptPropertyTable extends Widget { 
	static Load(ResourceName: string): JavascriptPropertyTable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyTable;
	static GetDefaultObject(): JavascriptPropertyTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyTable;
	SetEditingObjects(InEditingObjects: UObject[]): void;
	GetEditingObjects(): UObject[];
	static C(Other: UObject | any): JavascriptPropertyTable;
}

declare class JavascriptRawMeshLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptRawMeshLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
	static GetDefaultObject(): JavascriptRawMeshLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptRawMeshLibrary;
	static SetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number,Info: MeshSectionInfo): void;
	static SaveRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,InMesh?: JavascriptRawMesh): {InMesh: JavascriptRawMesh};
	static LoadRawMesh(StaticMesh: StaticMesh,SourceModelIndex: number,OutMesh?: JavascriptRawMesh): {OutMesh: JavascriptRawMesh};
	static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
	static IsValid(RawMesh: JavascriptRawMesh): boolean;
	static GetWedgePosition(RawMesh: JavascriptRawMesh,WedgeIndex: number): Vector;
	static GetSectionInfo(StaticMesh: StaticMesh,LODIndex: number,SectionIndex: number): MeshSectionInfo;
	static Empty(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static CompactMaterialIndices(RawMesh?: JavascriptRawMesh): {RawMesh: JavascriptRawMesh};
	static Build(StaticMesh: StaticMesh): void;
	static C(Other: UObject | any): JavascriptRawMeshLibrary;
}

declare class JavascriptScrubControlPanel extends Widget { 
	OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
	OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
	SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptScrubControlPanel;
	static Find(Outer: UObject, ResourceName: string): JavascriptScrubControlPanel;
	static GetDefaultObject(): JavascriptScrubControlPanel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptScrubControlPanel;
	SetViewRange(NewMin: number,NewMax: number): void;
	SetSumFrames(NewSumFrames: number): void;
	SetPlaybackPosition(NewTime: number): void;
	SetLooping(NewbLooping: boolean): void;
	SetFramesPerSecond(NewFramesPerSecond: number): void;
	IsLooping(): boolean;
	GetViewRangeMin(): number;
	GetViewRangeMax(): number;
	GetTotalSequenceLength(): number;
	GetTotalFrameCount(): any;
	GetPlaybackPosition(): number;
	GetFramesPerSecond(): number;
	static C(Other: UObject | any): JavascriptScrubControlPanel;
}

declare class JavascriptWebBrowser extends Widget { 
	OnUrlChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
	OnBeforePopup: UnrealEngineMulticastDelegate<(URL: string, Frame: string) => void>;
	bShowAddressBar: boolean;
	bShowControls: boolean;
	bSupportsThumbMouseButtonNavigation: boolean;
	static Load(ResourceName: string): JavascriptWebBrowser;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebBrowser;
	static GetDefaultObject(): JavascriptWebBrowser;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebBrowser;
	LoadURL(NewURL: string): void;
	LoadString(Contents: string,DummyURL: string): void;
	GetUrl(): string;
	GetTitleText(): string;
	ExecuteJavascript(ScriptText: string): void;
	static C(Other: UObject | any): JavascriptWebBrowser;
}

declare type EPropertyEditorNameAreaSettings = 'HideNameArea' | 'ObjectsUseNameArea' | 'ActorsUseNameArea' | 'ComponentsAndActorsUseNameArea' | 'EPropertyEditorNameAreaSettings_MAX';
declare var EPropertyEditorNameAreaSettings : { HideNameArea:'HideNameArea',ObjectsUseNameArea:'ObjectsUseNameArea',ActorsUseNameArea:'ActorsUseNameArea',ComponentsAndActorsUseNameArea:'ComponentsAndActorsUseNameArea',EPropertyEditorNameAreaSettings_MAX:'EPropertyEditorNameAreaSettings_MAX', };
declare class PropertyEditor extends Widget { 
	OnChange: UnrealEngineMulticastDelegate<(PropertyName: string, MemberPropertyName: string) => void>;
	bUpdateFromSelection: boolean;
	bLockable: boolean;
	bAllowSearch: boolean;
	bHideSelectionTip: boolean;
	bReadOnly: boolean;
	bEnablePropertyPath: boolean;
	NameAreaSettings: EPropertyEditorNameAreaSettings;
	static Load(ResourceName: string): PropertyEditor;
	static Find(Outer: UObject, ResourceName: string): PropertyEditor;
	static GetDefaultObject(): PropertyEditor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditor;
	SetObjects(Objects: UObject[],bForceRefresh: boolean,bOverrideLock: boolean): void;
	SetObject(UObject: UObject,bForceRefresh: boolean): void;
	IsPropertyVisible(PropertName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	IsPropertyReadOnly(PropertyName: string,ParentPropertyName: string,PropertyPaths: string[]): boolean;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class DynamicSimpleGetBoolDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): DynamicSimpleGetBoolDelegate__PythonCallable;
	static GetDefaultObject(): DynamicSimpleGetBoolDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): DynamicSimpleGetBoolDelegate__PythonCallable;
	static C(Other: UObject | any): DynamicSimpleGetBoolDelegate__PythonCallable;
}

declare class PropertyEditorPropertyChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): PropertyEditorPropertyChanged__PythonCallable;
	static GetDefaultObject(): PropertyEditorPropertyChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): PropertyEditorPropertyChanged__PythonCallable;
	static C(Other: UObject | any): PropertyEditorPropertyChanged__PythonCallable;
}

declare class OnSetDefaultValue__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSetDefaultValue__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSetDefaultValue__PythonCallable;
	static GetDefaultObject(): OnSetDefaultValue__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSetDefaultValue__PythonCallable;
	static C(Other: UObject | any): OnSetDefaultValue__PythonCallable;
}

declare class OnColorChangedEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnColorChangedEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnColorChangedEvent__PythonCallable;
	static GetDefaultObject(): OnColorChangedEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnColorChangedEvent__PythonCallable;
	static C(Other: UObject | any): OnColorChangedEvent__PythonCallable;
}

declare class JavascriptGetExtender__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptGetExtender__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptGetExtender__PythonCallable;
	static GetDefaultObject(): JavascriptGetExtender__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGetExtender__PythonCallable;
	static C(Other: UObject | any): JavascriptGetExtender__PythonCallable;
}

declare class CloseTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CloseTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CloseTab__PythonCallable;
	static GetDefaultObject(): CloseTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CloseTab__PythonCallable;
	static C(Other: UObject | any): CloseTab__PythonCallable;
}

declare class OnTabActivated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnTabActivated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnTabActivated__PythonCallable;
	static GetDefaultObject(): OnTabActivated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnTabActivated__PythonCallable;
	static C(Other: UObject | any): OnTabActivated__PythonCallable;
}

declare class SpawnTab__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SpawnTab__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SpawnTab__PythonCallable;
	static GetDefaultObject(): SpawnTab__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpawnTab__PythonCallable;
	static C(Other: UObject | any): SpawnTab__PythonCallable;
}

declare class JavascriptEditorTickSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptEditorTickSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptEditorTickSignature__PythonCallable;
	static GetDefaultObject(): JavascriptEditorTickSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptEditorTickSignature__PythonCallable;
	static C(Other: UObject | any): JavascriptEditorTickSignature__PythonCallable;
}

declare class OnGetWidgetLocation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetLocation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetLocation__PythonCallable;
	static GetDefaultObject(): OnGetWidgetLocation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetLocation__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetLocation__PythonCallable;
}

declare class OnGetWidgetMode__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetMode__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetMode__PythonCallable;
	static GetDefaultObject(): OnGetWidgetMode__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetMode__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetMode__PythonCallable;
}

declare class OnGetWidgetRotation__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidgetRotation__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidgetRotation__PythonCallable;
	static GetDefaultObject(): OnGetWidgetRotation__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidgetRotation__PythonCallable;
	static C(Other: UObject | any): OnGetWidgetRotation__PythonCallable;
}

declare class OnInputAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputAxis__PythonCallable;
	static GetDefaultObject(): OnInputAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputAxis__PythonCallable;
	static C(Other: UObject | any): OnInputAxis__PythonCallable;
}

declare class OnInputKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputKey__PythonCallable;
	static GetDefaultObject(): OnInputKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputKey__PythonCallable;
	static C(Other: UObject | any): OnInputKey__PythonCallable;
}

declare class OnInputWidgetDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputWidgetDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputWidgetDelta__PythonCallable;
	static GetDefaultObject(): OnInputWidgetDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputWidgetDelta__PythonCallable;
	static C(Other: UObject | any): OnInputWidgetDelta__PythonCallable;
}

declare class OnMouseEnter__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseEnter__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseEnter__PythonCallable;
	static GetDefaultObject(): OnMouseEnter__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseEnter__PythonCallable;
	static C(Other: UObject | any): OnMouseEnter__PythonCallable;
}

declare class OnMouseLeave__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseLeave__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseLeave__PythonCallable;
	static GetDefaultObject(): OnMouseLeave__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseLeave__PythonCallable;
	static C(Other: UObject | any): OnMouseLeave__PythonCallable;
}

declare class OnMouseMove__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnMouseMove__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnMouseMove__PythonCallable;
	static GetDefaultObject(): OnMouseMove__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnMouseMove__PythonCallable;
	static C(Other: UObject | any): OnMouseMove__PythonCallable;
}

declare class OnViewportClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportClick__PythonCallable;
	static GetDefaultObject(): OnViewportClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportClick__PythonCallable;
	static C(Other: UObject | any): OnViewportClick__PythonCallable;
}

declare class OnViewportDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportDraw__PythonCallable;
	static GetDefaultObject(): OnViewportDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportDraw__PythonCallable;
	static C(Other: UObject | any): OnViewportDraw__PythonCallable;
}

declare class OnViewportDrawCanvas__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportDrawCanvas__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportDrawCanvas__PythonCallable;
	static GetDefaultObject(): OnViewportDrawCanvas__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportDrawCanvas__PythonCallable;
	static C(Other: UObject | any): OnViewportDrawCanvas__PythonCallable;
}

declare class OnViewportTrackingStarted__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportTrackingStarted__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportTrackingStarted__PythonCallable;
	static GetDefaultObject(): OnViewportTrackingStarted__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportTrackingStarted__PythonCallable;
	static C(Other: UObject | any): OnViewportTrackingStarted__PythonCallable;
}

declare class OnViewportTrackingStopped__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnViewportTrackingStopped__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnViewportTrackingStopped__PythonCallable;
	static GetDefaultObject(): OnViewportTrackingStopped__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnViewportTrackingStopped__PythonCallable;
	static C(Other: UObject | any): OnViewportTrackingStopped__PythonCallable;
}

declare class ActorDuplicated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ActorDuplicated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ActorDuplicated__PythonCallable;
	static GetDefaultObject(): ActorDuplicated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorDuplicated__PythonCallable;
	static C(Other: UObject | any): ActorDuplicated__PythonCallable;
}

declare class OnClick__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick__PythonCallable;
	static GetDefaultObject(): OnClick__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick__PythonCallable;
	static C(Other: UObject | any): OnClick__PythonCallable;
}

declare class OnDraw__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDraw__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDraw__PythonCallable;
	static GetDefaultObject(): OnDraw__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDraw__PythonCallable;
	static C(Other: UObject | any): OnDraw__PythonCallable;
}

declare class OnDrawHUD__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDrawHUD__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDrawHUD__PythonCallable;
	static GetDefaultObject(): OnDrawHUD__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDrawHUD__PythonCallable;
	static C(Other: UObject | any): OnDrawHUD__PythonCallable;
}

declare class OnGetAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetAction__PythonCallable;
	static GetDefaultObject(): OnGetAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetAction__PythonCallable;
	static C(Other: UObject | any): OnGetAction__PythonCallable;
}

declare class OnGetWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetWidget__PythonCallable;
	static GetDefaultObject(): OnGetWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetWidget__PythonCallable;
	static C(Other: UObject | any): OnGetWidget__PythonCallable;
}

declare class OnProcess__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnProcess__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnProcess__PythonCallable;
	static GetDefaultObject(): OnProcess__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnProcess__PythonCallable;
	static C(Other: UObject | any): OnProcess__PythonCallable;
}

declare class OnSelect__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSelect__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSelect__PythonCallable;
	static GetDefaultObject(): OnSelect__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSelect__PythonCallable;
	static C(Other: UObject | any): OnSelect__PythonCallable;
}

declare class OnSelectionChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnSelectionChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnSelectionChanged__PythonCallable;
	static GetDefaultObject(): OnSelectionChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnSelectionChanged__PythonCallable;
	static C(Other: UObject | any): OnSelectionChanged__PythonCallable;
}

declare class QueryVector__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): QueryVector__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): QueryVector__PythonCallable;
	static GetDefaultObject(): QueryVector__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): QueryVector__PythonCallable;
	static C(Other: UObject | any): QueryVector__PythonCallable;
}

declare class SimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SimpleDelegate__PythonCallable;
	static GetDefaultObject(): SimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleDelegate__PythonCallable;
	static C(Other: UObject | any): SimpleDelegate__PythonCallable;
}

declare class Viewport0__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): Viewport0__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): Viewport0__PythonCallable;
	static GetDefaultObject(): Viewport0__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): Viewport0__PythonCallable;
	static C(Other: UObject | any): Viewport0__PythonCallable;
}

declare class ViewportAxis__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportAxis__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportAxis__PythonCallable;
	static GetDefaultObject(): ViewportAxis__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportAxis__PythonCallable;
	static C(Other: UObject | any): ViewportAxis__PythonCallable;
}

declare class ViewportDelta__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportDelta__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportDelta__PythonCallable;
	static GetDefaultObject(): ViewportDelta__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportDelta__PythonCallable;
	static C(Other: UObject | any): ViewportDelta__PythonCallable;
}

declare class ViewportKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportKey__PythonCallable;
	static GetDefaultObject(): ViewportKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportKey__PythonCallable;
	static C(Other: UObject | any): ViewportKey__PythonCallable;
}

declare class ViewportXY__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ViewportXY__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ViewportXY__PythonCallable;
	static GetDefaultObject(): ViewportXY__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ViewportXY__PythonCallable;
	static C(Other: UObject | any): ViewportXY__PythonCallable;
}

declare class OnNewLogMessage__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnNewLogMessage__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnNewLogMessage__PythonCallable;
	static GetDefaultObject(): OnNewLogMessage__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnNewLogMessage__PythonCallable;
	static C(Other: UObject | any): OnNewLogMessage__PythonCallable;
}

declare class CheckDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CheckDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CheckDelegate__PythonCallable;
	static GetDefaultObject(): CheckDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CheckDelegate__PythonCallable;
	static C(Other: UObject | any): CheckDelegate__PythonCallable;
}

declare class CustomChildren__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CustomChildren__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CustomChildren__PythonCallable;
	static GetDefaultObject(): CustomChildren__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomChildren__PythonCallable;
	static C(Other: UObject | any): CustomChildren__PythonCallable;
}

declare class CustomHeader__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): CustomHeader__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): CustomHeader__PythonCallable;
	static GetDefaultObject(): CustomHeader__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): CustomHeader__PythonCallable;
	static C(Other: UObject | any): CustomHeader__PythonCallable;
}

declare class OnDestroy__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnDestroy__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnDestroy__PythonCallable;
	static GetDefaultObject(): OnDestroy__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnDestroy__PythonCallable;
	static C(Other: UObject | any): OnDestroy__PythonCallable;
}

declare class OnClick_Backward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward__PythonCallable;
	static GetDefaultObject(): OnClick_Backward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward__PythonCallable;
}

declare class OnClick_Backward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward_End__PythonCallable;
	static GetDefaultObject(): OnClick_Backward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward_End__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward_End__PythonCallable;
}

declare class OnClick_Backward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Backward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Backward_Step__PythonCallable;
	static GetDefaultObject(): OnClick_Backward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Backward_Step__PythonCallable;
	static C(Other: UObject | any): OnClick_Backward_Step__PythonCallable;
}

declare class OnClick_Forward__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward__PythonCallable;
	static GetDefaultObject(): OnClick_Forward__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward__PythonCallable;
}

declare class OnClick_Forward_End__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward_End__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward_End__PythonCallable;
	static GetDefaultObject(): OnClick_Forward_End__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward_End__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward_End__PythonCallable;
}

declare class OnClick_Forward_Step__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_Forward_Step__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_Forward_Step__PythonCallable;
	static GetDefaultObject(): OnClick_Forward_Step__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_Forward_Step__PythonCallable;
	static C(Other: UObject | any): OnClick_Forward_Step__PythonCallable;
}

declare class OnClick_ToggleLoop__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnClick_ToggleLoop__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnClick_ToggleLoop__PythonCallable;
	static GetDefaultObject(): OnClick_ToggleLoop__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnClick_ToggleLoop__PythonCallable;
	static C(Other: UObject | any): OnClick_ToggleLoop__PythonCallable;
}

declare class SetPlaybackPosition__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SetPlaybackPosition__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SetPlaybackPosition__PythonCallable;
	static GetDefaultObject(): SetPlaybackPosition__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetPlaybackPosition__PythonCallable;
	static C(Other: UObject | any): SetPlaybackPosition__PythonCallable;
}

declare class OnBeforePopup__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnBeforePopup__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnBeforePopup__PythonCallable;
	static GetDefaultObject(): OnBeforePopup__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnBeforePopup__PythonCallable;
	static C(Other: UObject | any): OnBeforePopup__PythonCallable;
}

declare class OnUrlChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnUrlChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnUrlChanged__PythonCallable;
	static GetDefaultObject(): OnUrlChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnUrlChanged__PythonCallable;
	static C(Other: UObject | any): OnUrlChanged__PythonCallable;
}

declare class MockAI extends UObject { 
	BBComp: BlackboardComponent;
	BrainComp: BrainComponent;
	PerceptionComp: AIPerceptionComponent;
	PawnActionComp: PawnActionsComponent;
	static Load(ResourceName: string): MockAI;
	static Find(Outer: UObject, ResourceName: string): MockAI;
	static GetDefaultObject(): MockAI;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI;
	static C(Other: UObject | any): MockAI;
}

declare class MockAI_BT extends MockAI { 
	BTComp: BehaviorTreeComponent;
	static Load(ResourceName: string): MockAI_BT;
	static Find(Outer: UObject, ResourceName: string): MockAI_BT;
	static GetDefaultObject(): MockAI_BT;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockAI_BT;
	static C(Other: UObject | any): MockAI_BT;
}

declare class MockTask_Log extends GameplayTask { 
	static Load(ResourceName: string): MockTask_Log;
	static Find(Outer: UObject, ResourceName: string): MockTask_Log;
	static GetDefaultObject(): MockTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockTask_Log;
	static C(Other: UObject | any): MockTask_Log;
}

declare class MockGameplayTasksComponent extends GameplayTasksComponent { 
	static Load(ResourceName: string): MockGameplayTasksComponent;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTasksComponent;
	static GetDefaultObject(): MockGameplayTasksComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTasksComponent;
	static C(Other: UObject | any): MockGameplayTasksComponent;
}

declare class MockGameplayTaskOwner extends UObject { 
	GTComponent: GameplayTasksComponent;
	static Load(ResourceName: string): MockGameplayTaskOwner;
	static Find(Outer: UObject, ResourceName: string): MockGameplayTaskOwner;
	static GetDefaultObject(): MockGameplayTaskOwner;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MockGameplayTaskOwner;
	static C(Other: UObject | any): MockGameplayTaskOwner;
}

declare class TestBTDecorator_CantExecute extends BTDecorator { 
	static Load(ResourceName: string): TestBTDecorator_CantExecute;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_CantExecute;
	static GetDefaultObject(): TestBTDecorator_CantExecute;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_CantExecute;
	static C(Other: UObject | any): TestBTDecorator_CantExecute;
}

declare class TestBTDecorator_DelayedAbort extends BTDecorator { 
	DelayTicks: number;
	bOnlyOnce: boolean;
	static Load(ResourceName: string): TestBTDecorator_DelayedAbort;
	static Find(Outer: UObject, ResourceName: string): TestBTDecorator_DelayedAbort;
	static GetDefaultObject(): TestBTDecorator_DelayedAbort;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTDecorator_DelayedAbort;
	static C(Other: UObject | any): TestBTDecorator_DelayedAbort;
}

declare class TestBTService_Log extends BTService { 
	LogActivation: number;
	LogDeactivation: number;
	static Load(ResourceName: string): TestBTService_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTService_Log;
	static GetDefaultObject(): TestBTService_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTService_Log;
	static C(Other: UObject | any): TestBTService_Log;
}

declare class TestBTTask_LatentWithFlags extends BTTaskNode { 
	LogIndexExecuteStart: number;
	LogIndexExecuteFinish: number;
	LogIndexAbortStart: number;
	LogIndexAbortFinish: number;
	ExecuteTicks: number;
	AbortTicks: number;
	KeyNameExecute: string;
	KeyNameAbort: string;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_LatentWithFlags;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_LatentWithFlags;
	static GetDefaultObject(): TestBTTask_LatentWithFlags;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_LatentWithFlags;
	static C(Other: UObject | any): TestBTTask_LatentWithFlags;
}

declare class TestBTTask_Log extends BTTaskNode { 
	LogIndex: number;
	LogFinished: number;
	ExecutionTicks: number;
	LogResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_Log;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_Log;
	static GetDefaultObject(): TestBTTask_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_Log;
	static C(Other: UObject | any): TestBTTask_Log;
}

declare class TestBTTask_SetFlag extends BTTaskNode { 
	KeyName: string;
	bValue: boolean;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetFlag;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetFlag;
	static GetDefaultObject(): TestBTTask_SetFlag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetFlag;
	static C(Other: UObject | any): TestBTTask_SetFlag;
}

declare class TestBTTask_SetValue extends BTTaskNode { 
	KeyName: string;
	Value: number;
	TaskResult: EBTNodeResult;
	static Load(ResourceName: string): TestBTTask_SetValue;
	static Find(Outer: UObject, ResourceName: string): TestBTTask_SetValue;
	static GetDefaultObject(): TestBTTask_SetValue;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestBTTask_SetValue;
	static C(Other: UObject | any): TestBTTask_SetValue;
}

declare class TestPawnAction_Log extends PawnAction { 
	static Load(ResourceName: string): TestPawnAction_Log;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_Log;
	static GetDefaultObject(): TestPawnAction_Log;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_Log;
	static C(Other: UObject | any): TestPawnAction_Log;
}

declare class TestPawnAction_CallFunction extends TestPawnAction_Log { 
	static Load(ResourceName: string): TestPawnAction_CallFunction;
	static Find(Outer: UObject, ResourceName: string): TestPawnAction_CallFunction;
	static GetDefaultObject(): TestPawnAction_CallFunction;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TestPawnAction_CallFunction;
	static C(Other: UObject | any): TestPawnAction_CallFunction;
}

declare type ELiveCodingStartupMode = 'Automatic' | 'AutomaticButHidden' | 'Manual' | 'ELiveCodingStartupMode_MAX';
declare var ELiveCodingStartupMode : { Automatic:'Automatic',AutomaticButHidden:'AutomaticButHidden',Manual:'Manual',ELiveCodingStartupMode_MAX:'ELiveCodingStartupMode_MAX', };
declare class LiveCodingSettings extends UObject { 
	bEnabled: boolean;
	Startup: ELiveCodingStartupMode;
	bPreloadEngineModules: boolean;
	bPreloadEnginePluginModules: boolean;
	bPreloadProjectModules: boolean;
	bPreloadProjectPluginModules: boolean;
	PreloadNamedModules: string[];
	static Load(ResourceName: string): LiveCodingSettings;
	static Find(Outer: UObject, ResourceName: string): LiveCodingSettings;
	static GetDefaultObject(): LiveCodingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LiveCodingSettings;
	static C(Other: UObject | any): LiveCodingSettings;
}

declare class StructViewerProjectSettings extends UObject { 
	InternalOnlyPaths: DirectoryPath[];
	InternalOnlyStructs: ScriptStruct[];
	static Load(ResourceName: string): StructViewerProjectSettings;
	static Find(Outer: UObject, ResourceName: string): StructViewerProjectSettings;
	static GetDefaultObject(): StructViewerProjectSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): StructViewerProjectSettings;
	static C(Other: UObject | any): StructViewerProjectSettings;
}

declare class UndoHistorySettings extends UObject { 
	bShowTransactionDetails: boolean;
	static Load(ResourceName: string): UndoHistorySettings;
	static Find(Outer: UObject, ResourceName: string): UndoHistorySettings;
	static GetDefaultObject(): UndoHistorySettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UndoHistorySettings;
	static C(Other: UObject | any): UndoHistorySettings;
}

declare class LocalizationDashboardSettings extends UObject { 
	static Load(ResourceName: string): LocalizationDashboardSettings;
	static Find(Outer: UObject, ResourceName: string): LocalizationDashboardSettings;
	static GetDefaultObject(): LocalizationDashboardSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocalizationDashboardSettings;
	static C(Other: UObject | any): LocalizationDashboardSettings;
}

declare type EMeshInstancingReplacementMethod = 'RemoveOriginalActors' | 'KeepOriginalActorsAsEditorOnly' | 'EMeshInstancingReplacementMethod_MAX';
declare var EMeshInstancingReplacementMethod : { RemoveOriginalActors:'RemoveOriginalActors',KeepOriginalActorsAsEditorOnly:'KeepOriginalActorsAsEditorOnly',EMeshInstancingReplacementMethod_MAX:'EMeshInstancingReplacementMethod_MAX', };
declare class MeshInstancingSettings { 
	ActorClassToUse: UnrealEngineClass;
	InstanceReplacementThreshold: number;
	MeshReplacementMethod: EMeshInstancingReplacementMethod;
	bSkipMeshesWithVertexColors: boolean;
	bUseHLODVolumes: boolean;
	ISMComponentToUse: UnrealEngineClass;
	clone() : MeshInstancingSettings;
	static C(Other: UObject | any): MeshInstancingSettings;
}

declare class MeshInstancingSettingsObject extends UObject { 
	Settings: MeshInstancingSettings;
	static Load(ResourceName: string): MeshInstancingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshInstancingSettingsObject;
	static GetDefaultObject(): MeshInstancingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshInstancingSettingsObject;
	static C(Other: UObject | any): MeshInstancingSettingsObject;
}

declare class MeshMergingSettingsObject extends UObject { 
	Settings: MeshMergingSettings;
	static Load(ResourceName: string): MeshMergingSettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
	static GetDefaultObject(): MeshMergingSettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshMergingSettingsObject;
	static C(Other: UObject | any): MeshMergingSettingsObject;
}

declare class MeshProxySettingsObject extends UObject { 
	Settings: MeshProxySettings;
	static Load(ResourceName: string): MeshProxySettingsObject;
	static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
	static GetDefaultObject(): MeshProxySettingsObject;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MeshProxySettingsObject;
	static C(Other: UObject | any): MeshProxySettingsObject;
}

declare class EditorKeyboardShortcutSettings extends DeveloperSettings { 
	static Load(ResourceName: string): EditorKeyboardShortcutSettings;
	static Find(Outer: UObject, ResourceName: string): EditorKeyboardShortcutSettings;
	static GetDefaultObject(): EditorKeyboardShortcutSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorKeyboardShortcutSettings;
	static C(Other: UObject | any): EditorKeyboardShortcutSettings;
}

declare type EIOSCloudKitSyncStrategy = 'None' | 'OnlyAtGameStart' | 'Always' | 'EIOSCloudKitSyncStrategy_MAX';
declare var EIOSCloudKitSyncStrategy : { None:'None',OnlyAtGameStart:'OnlyAtGameStart',Always:'Always',EIOSCloudKitSyncStrategy_MAX:'EIOSCloudKitSyncStrategy_MAX', };
declare class IOSBuildResourceDirectory { 
	Path: string;
	clone() : IOSBuildResourceDirectory;
	static C(Other: UObject | any): IOSBuildResourceDirectory;
}

declare class IOSBuildResourceFilePath { 
	FilePath: string;
	clone() : IOSBuildResourceFilePath;
	static C(Other: UObject | any): IOSBuildResourceFilePath;
}

declare type EIOSLandscapeOrientation = 'LandscapeLeft' | 'LandscapeRight' | 'EIOSLandscapeOrientation_MAX';
declare var EIOSLandscapeOrientation : { LandscapeLeft:'LandscapeLeft',LandscapeRight:'LandscapeRight',EIOSLandscapeOrientation_MAX:'EIOSLandscapeOrientation_MAX', };
declare type EPowerUsageFrameRateLock = 'PUFRL_None' | 'PUFRL_20' | 'PUFRL_30' | 'PUFRL_60' | 'PUFRL_MAX';
declare var EPowerUsageFrameRateLock : { PUFRL_None:'PUFRL_None',PUFRL_20:'PUFRL_20',PUFRL_30:'PUFRL_30',PUFRL_60:'PUFRL_60',PUFRL_MAX:'PUFRL_MAX', };
declare type EIOSVersion = 'IOS_61' | 'IOS_7' | 'IOS_8' | 'IOS_9' | 'IOS_10' | 'IOS_11' | 'IOS_12' | 'IOS_MAX';
declare var EIOSVersion : { IOS_61:'IOS_61',IOS_7:'IOS_7',IOS_8:'IOS_8',IOS_9:'IOS_9',IOS_10:'IOS_10',IOS_11:'IOS_11',IOS_12:'IOS_12',IOS_MAX:'IOS_MAX', };
declare class IOSRuntimeSettings extends UObject { 
	bEnableGameCenterSupport: boolean;
	bEnableCloudKitSupport: boolean;
	IOSCloudKitSyncStrategy: EIOSCloudKitSyncStrategy;
	bEnableRemoteNotificationsSupport: boolean;
	bEnableBackgroundFetch: boolean;
	bSupportsMetal: boolean;
	bSupportsMetalMRT: boolean;
	bCookPVRTCTextures: boolean;
	bCookASTCTextures: boolean;
	bSupportsOpenGLES2: boolean;
	EnableRemoteShaderCompile: boolean;
	bGeneratedSYMFile: boolean;
	bGeneratedSYMBundle: boolean;
	bGenerateCrashReportSymbols: boolean;
	bGenerateXCArchive: boolean;
	bDevForArmV7: boolean;
	bDevForArm64: boolean;
	bDevForArmV7S: boolean;
	bShipForArmV7: boolean;
	bShipForArm64: boolean;
	bShipForArmV7S: boolean;
	bShipForBitcode: boolean;
	bEnableAdvertisingIdentifier: boolean;
	AdditionalLinkerFlags: string;
	AdditionalShippingLinkerFlags: string;
	RemoteServerName: string;
	bUseRSync: boolean;
	RSyncUsername: string;
	DeltaCopyInstallPath: IOSBuildResourceDirectory;
	SSHPrivateKeyLocation: string;
	SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
	bTreatRemoteAsSeparateController: boolean;
	bAllowRemoteRotation: boolean;
	bUseRemoteAsVirtualJoystick: boolean;
	bUseRemoteAbsoluteDpadValues: boolean;
	bAllowControllers: boolean;
	bDisableMotionData: boolean;
	bSupportsPortraitOrientation: boolean;
	bSupportsUpsideDownOrientation: boolean;
	bSupportsLandscapeLeftOrientation: boolean;
	bSupportsLandscapeRightOrientation: boolean;
	bSupportsITunesFileSharing: boolean;
	PreferredLandscapeOrientation: EIOSLandscapeOrientation;
	BundleDisplayName: string;
	BundleName: string;
	BundleIdentifier: string;
	VersionInfo: string;
	FrameRateLock: EPowerUsageFrameRateLock;
	MinimumiOSVersion: EIOSVersion;
	bSupportsIPad: boolean;
	bSupportsIPhone: boolean;
	AdditionalPlistData: string;
	bEnableFacebookSupport: boolean;
	FacebookAppID: string;
	MobileProvision: string;
	SigningCertificate: string;
	bAutomaticSigning: boolean;
	IOSTeamID: string;
	bDisableHTTPS: boolean;
	MaxShaderLanguageVersion: number;
	UseFastIntrinsics: boolean;
	ForceFloats: boolean;
	EnableMathOptimisations: boolean;
	bUseIntegratedKeyboard: boolean;
	AudioSampleRate: number;
	AudioCallbackBufferFrameSize: number;
	AudioNumBuffersToEnqueue: number;
	AudioMaxChannels: number;
	AudioNumSourceWorkers: number;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
	bResampleForDevice: boolean;
	MaxSampleRate: number;
	HighSampleRate: number;
	MedSampleRate: number;
	LowSampleRate: number;
	MinSampleRate: number;
	CompressionQualityModifier: number;
	AutoStreamingThreshold: number;
	static Load(ResourceName: string): IOSRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
	static GetDefaultObject(): IOSRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IOSRuntimeSettings;
	static C(Other: UObject | any): IOSRuntimeSettings;
}

declare type ELuminFrameTimingHint = 'Unspecified' | 'Maximum' | 'FPS_60' | 'FPS_120' | 'ELuminFrameTimingHint_MAX';
declare var ELuminFrameTimingHint : { Unspecified:'Unspecified',Maximum:'Maximum',FPS_60:'FPS_60',FPS_120:'FPS_120',ELuminFrameTimingHint_MAX:'ELuminFrameTimingHint_MAX', };
declare type ELuminPrivilege = 'Invalid' | 'AudioRecognizer' | 'BatteryInfo' | 'CameraCapture' | 'WorldReconstruction' | 'InAppPurchase' | 'AudioCaptureMic' | 'DrmCertificates' | 'Occlusion' | 'LowLatencyLightwear' | 'Internet' | 'IdentityRead' | 'BackgroundDownload' | 'BackgroundUpload' | 'MediaDrm' | 'Media' | 'MediaMetadata' | 'PowerInfo' | 'LocalAreaNetwork' | 'VoiceInput' | 'Documents' | 'ConnectBackgroundMusicService' | 'RegisterBackgroundMusicService' | 'PwFoundObjRead' | 'NormalNotificationsUsage' | 'MusicService' | 'ControllerPose' | 'ScreensProvider' | 'GesturesSubscribe' | 'GesturesConfig' | 'ELuminPrivilege_MAX';
declare var ELuminPrivilege : { Invalid:'Invalid',AudioRecognizer:'AudioRecognizer',BatteryInfo:'BatteryInfo',CameraCapture:'CameraCapture',WorldReconstruction:'WorldReconstruction',InAppPurchase:'InAppPurchase',AudioCaptureMic:'AudioCaptureMic',DrmCertificates:'DrmCertificates',Occlusion:'Occlusion',LowLatencyLightwear:'LowLatencyLightwear',Internet:'Internet',IdentityRead:'IdentityRead',BackgroundDownload:'BackgroundDownload',BackgroundUpload:'BackgroundUpload',MediaDrm:'MediaDrm',Media:'Media',MediaMetadata:'MediaMetadata',PowerInfo:'PowerInfo',LocalAreaNetwork:'LocalAreaNetwork',VoiceInput:'VoiceInput',Documents:'Documents',ConnectBackgroundMusicService:'ConnectBackgroundMusicService',RegisterBackgroundMusicService:'RegisterBackgroundMusicService',PwFoundObjRead:'PwFoundObjRead',NormalNotificationsUsage:'NormalNotificationsUsage',MusicService:'MusicService',ControllerPose:'ControllerPose',ScreensProvider:'ScreensProvider',GesturesSubscribe:'GesturesSubscribe',GesturesConfig:'GesturesConfig',ELuminPrivilege_MAX:'ELuminPrivilege_MAX', };
declare class LuminRuntimeSettings extends UObject { 
	PackageName: string;
	ApplicationDisplayName: string;
	bIsScreensApp: boolean;
	FrameTimingHint: ELuminFrameTimingHint;
	bProtectedContent: boolean;
	bUseMobileRendering: boolean;
	bUseVulkan: boolean;
	bBuildWithNvTegraGfxDebugger: boolean;
	Certificate: FilePath;
	IconModelPath: DirectoryPath;
	IconPortalPath: DirectoryPath;
	VersionCode: number;
	MinimumAPILevel: number;
	AppPrivileges: ELuminPrivilege[];
	ExtraApplicationNodes: string[];
	ExtraComponentNodes: string[];
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	bRemoveDebugInfo: boolean;
	static Load(ResourceName: string): LuminRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): LuminRuntimeSettings;
	static GetDefaultObject(): LuminRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminRuntimeSettings;
	static C(Other: UObject | any): LuminRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	ANTPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
}

declare class HTML5SDKSettings extends UObject { 
	static Load(ResourceName: string): HTML5SDKSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5SDKSettings;
	static GetDefaultObject(): HTML5SDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5SDKSettings;
	static C(Other: UObject | any): HTML5SDKSettings;
}

declare type ECanvasScalingMode = 'Stretch' | 'Aspect' | 'Fixed' | 'ECanvasScalingMode_MAX';
declare var ECanvasScalingMode : { Stretch:'Stretch',Aspect:'Aspect',Fixed:'Fixed',ECanvasScalingMode_MAX:'ECanvasScalingMode_MAX', };
declare class HTML5TargetSettings extends UObject { 
	EnableIndexedDB: boolean;
	UseFixedTimeStep: boolean;
	EnableMultithreading: boolean;
	OffscreenCanvas: boolean;
	EnableTracing: boolean;
	CanvasScalingMode: ECanvasScalingMode;
	Compressed: boolean;
	DeployServerPort: number;
	UploadToS3: boolean;
	S3Region: string;
	S3KeyID: string;
	S3SecretAccessKey: string;
	S3BucketName: string;
	S3FolderName: string;
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	static Load(ResourceName: string): HTML5TargetSettings;
	static Find(Outer: UObject, ResourceName: string): HTML5TargetSettings;
	static GetDefaultObject(): HTML5TargetSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): HTML5TargetSettings;
	static C(Other: UObject | any): HTML5TargetSettings;
}

declare class MagicLeapSDKSettings extends UObject { 
	MLSDKPath: DirectoryPath;
	static Load(ResourceName: string): MagicLeapSDKSettings;
	static Find(Outer: UObject, ResourceName: string): MagicLeapSDKSettings;
	static GetDefaultObject(): MagicLeapSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapSDKSettings;
	static C(Other: UObject | any): MagicLeapSDKSettings;
}

declare type ETutorialContent = 'None' | 'Text' | 'UDNExcerpt' | 'RichText' | 'ETutorialContent_MAX';
declare var ETutorialContent : { None:'None',Text:'Text',UDNExcerpt:'UDNExcerpt',RichText:'RichText',ETutorialContent_MAX:'ETutorialContent_MAX', };
declare class TutorialContent { 
	Type: ETutorialContent;
	Content: string;
	ExcerptName: string;
	text: string;
	clone() : TutorialContent;
	static C(Other: UObject | any): TutorialContent;
}

declare type ETutorialAnchorIdentifier = 'None' | 'NamedWidget' | 'Asset' | 'ETutorialAnchorIdentifier_MAX';
declare var ETutorialAnchorIdentifier : { None:'None',NamedWidget:'NamedWidget',Asset:'Asset',ETutorialAnchorIdentifier_MAX:'ETutorialAnchorIdentifier_MAX', };
declare class TutorialContentAnchor { 
	Type: ETutorialAnchorIdentifier;
	WrapperIdentifier: string;
	Asset: SoftObjectPath;
	bDrawHighlight: boolean;
	TabToFocusOrOpen: string;
	FriendlyName: string;
	GuidString: string;
	OuterName: string;
	clone() : TutorialContentAnchor;
	static C(Other: UObject | any): TutorialContentAnchor;
}

declare class TutorialWidgetContent { 
	Content: TutorialContent;
	WidgetAnchor: TutorialContentAnchor;
	HorizontalAlignment: EHorizontalAlignment;
	VerticalAlignment: EVerticalAlignment;
	Offset: Vector2D;
	ContentWidth: number;
	bAutoFocus: boolean;
	clone() : TutorialWidgetContent;
	static C(Other: UObject | any): TutorialWidgetContent;
}

declare class TutorialStage { 
	Name: string;
	Content: TutorialContent;
	WidgetContent: TutorialWidgetContent[];
	NextButtonText: string;
	BackButtonText: string;
	PlatformsToTest: string[];
	bInvertPlatformTest: boolean;
	clone() : TutorialStage;
	static C(Other: UObject | any): TutorialStage;
}

declare class EditorTutorial extends UObject { 
	Title: string;
	SortOrder: number;
	Icon: string;
	Texture: Texture2D;
	Category: string;
	SummaryContent: TutorialContent;
	Stages: TutorialStage[];
	PreviousTutorial: SoftClassPath;
	NextTutorial: SoftClassPath;
	bIsStandalone: boolean;
	AssetToUse: SoftObjectPath;
	ImportPath: string;
	bHideInBrowser: boolean;
	SearchTags: string;
	static Load(ResourceName: string): EditorTutorial;
	static Find(Outer: UObject, ResourceName: string): EditorTutorial;
	static GetDefaultObject(): EditorTutorial;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorial;
	static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
	static OpenAsset(Asset: UObject): void;
	OnTutorialStageStarted(StageName: string): void;
	OnTutorialStageEnded(StageName: string): void;
	OnTutorialLaunched(): void;
	OnTutorialClosed(): void;
	static GoToPreviousTutorialStage(): void;
	static GoToNextTutorialStage(): void;
	static GetEngineFolderVisibilty(): boolean;
	GetActorReference(PathToActor: string): Actor;
	static BeginTutorial(TutorialToStart: EditorTutorial,bRestart: boolean): void;
	static C(Other: UObject | any): EditorTutorial;
}

declare class EditorTutorialFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
	static GetDefaultObject(): EditorTutorialFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialFactory;
	static C(Other: UObject | any): EditorTutorialFactory;
}

declare class EditorTutorialImportFactory extends Factory { 
	static Load(ResourceName: string): EditorTutorialImportFactory;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialImportFactory;
	static GetDefaultObject(): EditorTutorialImportFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialImportFactory;
	static C(Other: UObject | any): EditorTutorialImportFactory;
}

declare class TutorialCategory { 
	Identifier: string;
	Title: string;
	SortOrder: number;
	Description: string;
	Icon: string;
	Texture: SoftObjectPath;
	clone() : TutorialCategory;
	static C(Other: UObject | any): TutorialCategory;
}

declare class TutorialContext { 
	Context: string;
	BrowserFilter: string;
	AttractTutorial: SoftClassPath;
	LaunchTutorial: SoftClassPath;
	clone() : TutorialContext;
	static C(Other: UObject | any): TutorialContext;
}

declare class EditorTutorialSettings extends UObject { 
	bDisableAllTutorialAlerts: boolean;
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	TutorialContexts: TutorialContext[];
	static Load(ResourceName: string): EditorTutorialSettings;
	static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
	static GetDefaultObject(): EditorTutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EditorTutorialSettings;
	static C(Other: UObject | any): EditorTutorialSettings;
}

declare class TutorialSettings extends UObject { 
	Categories: TutorialCategory[];
	StartupTutorial: SoftClassPath;
	static Load(ResourceName: string): TutorialSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialSettings;
	static GetDefaultObject(): TutorialSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialSettings;
	static C(Other: UObject | any): TutorialSettings;
}

declare class TutorialProgress { 
	Tutorial: SoftClassPath;
	CurrentStage: number;
	bUserDismissed: boolean;
	clone() : TutorialProgress;
	static C(Other: UObject | any): TutorialProgress;
}

declare class TutorialStateSettings extends UObject { 
	TutorialsProgress: TutorialProgress[];
	bDismissedAllTutorials: boolean;
	static Load(ResourceName: string): TutorialStateSettings;
	static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
	static GetDefaultObject(): TutorialStateSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TutorialStateSettings;
	static C(Other: UObject | any): TutorialStateSettings;
}

declare class LogVisualizerSessionSettings extends UObject { 
	bEnableGraphsVisualization: boolean;
	static Load(ResourceName: string): LogVisualizerSessionSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSessionSettings;
	static GetDefaultObject(): LogVisualizerSessionSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSessionSettings;
	static C(Other: UObject | any): LogVisualizerSessionSettings;
}

declare class CategoryFilter { 
	CategoryName: string;
	LogVerbosity: number;
	Enabled: boolean;
	clone() : CategoryFilter;
	static C(Other: UObject | any): CategoryFilter;
}

declare class VisualLoggerFiltersData { 
	SearchBoxFilter: string;
	ObjectNameFilter: string;
	Categories: CategoryFilter[];
	SelectedClasses: string[];
	clone() : VisualLoggerFiltersData;
	static C(Other: UObject | any): VisualLoggerFiltersData;
}

declare class LogVisualizerSettings extends UObject { 
	bIgnoreTrivialLogs: boolean;
	TrivialLogsThreshold: number;
	bStickToRecentData: boolean;
	bResetDataWithNewSession: boolean;
	bShowHistogramLabelsOutside: boolean;
	DefaultCameraDistance: number;
	bSearchInsideLogs: boolean;
	GraphsBackgroundColor: Color;
	bPresistentFilters: boolean;
	bDrawExtremesOnGraphs: boolean;
	bUsePlayersOnlyForPause: boolean;
	bLogNavOctreeOnStop: boolean;
	PresistentFilters: VisualLoggerFiltersData;
	DebugMeshMaterialFakeLight: Material;
	DebugMeshMaterialFakeLightName: string;
	static Load(ResourceName: string): LogVisualizerSettings;
	static Find(Outer: UObject, ResourceName: string): LogVisualizerSettings;
	static GetDefaultObject(): LogVisualizerSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LogVisualizerSettings;
	static C(Other: UObject | any): LogVisualizerSettings;
}

declare class VisualLoggerCameraController extends DebugCameraController { 
	PickedActor: Actor;
	static GetDefaultObject(): VisualLoggerCameraController;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerCameraController;
	static C(Other: UObject | any): VisualLoggerCameraController;
}

declare class VisualLoggerHUD extends DebugCameraHUD { 
	static GetDefaultObject(): VisualLoggerHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerHUD;
	static C(Other: UObject | any): VisualLoggerHUD;
}

declare class VisualLoggerRenderingActor extends Actor { 
	static GetDefaultObject(): VisualLoggerRenderingActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingActor;
	static C(Other: UObject | any): VisualLoggerRenderingActor;
}

declare class VisualLoggerRenderingComponent extends PrimitiveComponent { 
	static Load(ResourceName: string): VisualLoggerRenderingComponent;
	static Find(Outer: UObject, ResourceName: string): VisualLoggerRenderingComponent;
	static GetDefaultObject(): VisualLoggerRenderingComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualLoggerRenderingComponent;
	static C(Other: UObject | any): VisualLoggerRenderingComponent;
}

declare class ClothPainterSettings extends MeshPaintSettings { 
	ViewMin: number;
	ViewMax: number;
	bAutoViewRange: boolean;
	AutoCalculatedViewMin: number;
	AutoCalculatedViewMax: number;
	ClothingAssets: ClothingAsset[];
	bFlipNormal: boolean;
	bCullBackface: boolean;
	Opacity: number;
	static Load(ResourceName: string): ClothPainterSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
	static GetDefaultObject(): ClothPainterSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPainterSettings;
	static C(Other: UObject | any): ClothPainterSettings;
}

declare class ClothPaintTool_BrushSettings extends UObject { 
	PaintValue: number;
	static Load(ResourceName: string): ClothPaintTool_BrushSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_BrushSettings;
	static GetDefaultObject(): ClothPaintTool_BrushSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_BrushSettings;
	static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}

declare class ClothPaintTool_GradientSettings extends UObject { 
	GradientStartValue: number;
	GradientEndValue: number;
	bUseRegularBrush: boolean;
	static Load(ResourceName: string): ClothPaintTool_GradientSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_GradientSettings;
	static GetDefaultObject(): ClothPaintTool_GradientSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_GradientSettings;
	static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}

declare class ClothPaintTool_SmoothSettings extends UObject { 
	Strength: number;
	static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_SmoothSettings;
	static GetDefaultObject(): ClothPaintTool_SmoothSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_SmoothSettings;
	static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}

declare class ClothPaintTool_FillSettings extends UObject { 
	Threshold: number;
	FillValue: number;
	static Load(ResourceName: string): ClothPaintTool_FillSettings;
	static Find(Outer: UObject, ResourceName: string): ClothPaintTool_FillSettings;
	static GetDefaultObject(): ClothPaintTool_FillSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ClothPaintTool_FillSettings;
	static C(Other: UObject | any): ClothPaintTool_FillSettings;
}

declare var Context : JavascriptContext;

declare var Root : JavascriptEditorTick;

