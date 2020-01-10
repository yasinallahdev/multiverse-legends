/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
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

