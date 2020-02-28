/// <reference path="_part_0_ue.d.ts">/>
/// <reference path="_part_1_ue.d.ts">/>
/// <reference path="_part_2_ue.d.ts">/>
declare class JavascriptTextBlock extends TextBlock { 
	HighlightText: string;
	HighlightTextDelegate: UnrealEngineDelegate<() => string>;
	static Load(ResourceName: string): JavascriptTextBlock;
	static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
	static GetDefaultObject(): JavascriptTextBlock;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTextBlock;
	SetHighlightText(InHighlightText: string): void;
	static C(Other: UObject | any): JavascriptTextBlock;
}

declare class JavascriptTileView extends TileView { 
	JavascriptContext: JavascriptContext;
	static Load(ResourceName: string): JavascriptTileView;
	static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
	static GetDefaultObject(): JavascriptTileView;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptTileView;
	OnSelectionChanged(UObject: UObject,Type: ESelectInfo): void;
	OnDoubleClick(UObject: UObject): void;
	OnClick(UObject: UObject): void;
	static C(Other: UObject | any): JavascriptTileView;
}

declare class JavascriptToolbarButtonContext extends UObject { 
	OnGetLabel: UnrealEngineDelegate<() => string>;
	OnGetTooltip: UnrealEngineDelegate<() => string>;
	OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
	OnExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
	static Load(ResourceName: string): JavascriptToolbarButtonContext;
	static Find(Outer: UObject, ResourceName: string): JavascriptToolbarButtonContext;
	static GetDefaultObject(): JavascriptToolbarButtonContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptToolbarButtonContext;
	UnmarkReferencedObject(): void;
	MarkReferencedObject(): void;
	static C(Other: UObject | any): JavascriptToolbarButtonContext;
}

declare class JavascriptUMGBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGBlueprintLibrary;
	static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGBlueprintLibrary;
	static SlateColor_UseSubduedForeground(): SlateColor;
	static SlateColor_UseForeground(): SlateColor;
	static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
	static GetAsText(TextLayout: JavascriptTextLayout): string;
	static DrawSpaceSpline(Context?: PaintContext,InStart?: Vector2D,InStartDir?: Vector2D,InEnd?: Vector2D,InEndDir?: Vector2D,InThickness?: number,InTint?: LinearColor): {Context: PaintContext};
	static ClearLines(TextLayout?: JavascriptTextLayout): {TextLayout: JavascriptTextLayout};
	static AddLine(TextLayout?: JavascriptTextLayout,Model?: JavascriptTextModel,Runs?: JavascriptSlateTextRun[]): {TextLayout: JavascriptTextLayout};
	static C(Other: UObject | any): JavascriptUMGBlueprintLibrary;
}

declare class JavascriptSlateStyle { 
	clone() : JavascriptSlateStyle;
	static C(Other: UObject | any): JavascriptSlateStyle;
	AddBorderBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddBoxBrush(PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	AddFontInfo(PropertyName: string,FontInfo: SlateFontInfo): void;
	AddImageBrush(PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	AddSound(PropertyName: string,Sound: SlateSound): void;
	Register(): void;
	RootToContentDir(RelativePath: string): string;
	RootToCoreContentDir(RelativePath: string): string;
	SetContentRoot(InContentRootDir: string): void;
	SetCoreContentRoot(InCoreContentRootDir: string): void;
	Unregister(): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
}

declare class JavascriptUMGLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptUMGLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
	static GetDefaultObject(): JavascriptUMGLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUMGLibrary;
	static Unregister(StyleSet: JavascriptSlateStyle): void;
	static TakeWidget(Widget: Widget): JavascriptSlateWidget;
	static ShowWindow(NewWindow: JavascriptSlateWidget): void;
	static SetCoreContentRoot(StyleSet: JavascriptSlateStyle,InCoreContentRootDir: string): void;
	static SetContentRoot(StyleSet: JavascriptSlateStyle,InContentRootDir: string): void;
	static SetContent(TargetWidget: NativeWidgetHost,SlateWidget: JavascriptSlateWidget): Widget;
	static RootToCoreContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static RootToContentDir(StyleSet: JavascriptSlateStyle,RelativePath: string): string;
	static Register(StyleSet: JavascriptSlateStyle): void;
	static GetRootWindow(): JavascriptSlateWidget;
	static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
	static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
	static AddWindowAsNativeChild(NewWindow: JavascriptSlateWidget,RootWindow: JavascriptSlateWidget): void;
	static AddWindow(NewWindow: JavascriptSlateWidget,bShowImmediately: boolean): void;
	static AddSound(StyleSet: JavascriptSlateStyle,PropertyName: string,Sound: SlateSound): void;
	static AddImageBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InImageSize: Vector2D,InTint: LinearColor,InTiling: ESlateBrushTileType,InImageType: ESlateBrushImageType): void;
	static AddFontInfo(StyleSet: JavascriptSlateStyle,PropertyName: string,FontInfo: SlateFontInfo): void;
	static AddBoxBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static AddBorderBrush(StyleSet: JavascriptSlateStyle,PropertyName: string,InImageName: string,InMargin: Margin,InColorAndOpacity: LinearColor,InImageType: ESlateBrushImageType): void;
	static C(Other: UObject | any): JavascriptUMGLibrary;
}

declare class JavascriptWidget extends UserWidget { 
	JavascriptContext: JavascriptContext;
	OnInputActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnReleaseActionEvent: UnrealEngineMulticastDelegate<(ActionName: string) => void>;
	OnInputAxisEvent: UnrealEngineMulticastDelegate<(Axis: number, AxisName: string) => void>;
	ContentSlot: PanelSlot;
	static Load(ResourceName: string): JavascriptWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
	static GetDefaultObject(): JavascriptWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWidget;
	SetRootWidget(Widget: Widget): void;
	RemoveChild(): boolean;
	OnReleaseInputActionByName(ActionName: string): void;
	OnListenForInputAxis(AxisName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnListenForInputAction(ActionName: string,EventType: EInputEvent,bConsume: boolean): void;
	OnInputAxisByName(Axis: number,ActionName: string): void;
	OnInputActionByName(ActionName: string): void;
	OnDestroy(bReleaseChildren: boolean): void;
	static HasValidCachedWidget(Widget: Widget): boolean;
	static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
	AddChild(Content: Widget): PanelSlot;
	static C(Other: UObject | any): JavascriptWidget;
}

declare type EJavascriptWindowType = 'Normal' | 'Menu' | 'ToolTip' | 'Notification' | 'CursorDecorator' | 'EJavascriptWindowType_MAX';
declare var EJavascriptWindowType : { Normal:'Normal',Menu:'Menu',ToolTip:'ToolTip',Notification:'Notification',CursorDecorator:'CursorDecorator',EJavascriptWindowType_MAX:'EJavascriptWindowType_MAX', };
declare class WindowStyle extends SlateWidgetStyle { 
	MinimizeButtonStyle: ButtonStyle;
	MaximizeButtonStyle: ButtonStyle;
	RestoreButtonStyle: ButtonStyle;
	CloseButtonStyle: ButtonStyle;
	TitleTextStyle: TextBlockStyle;
	ActiveTitleBrush: SlateBrush;
	InactiveTitleBrush: SlateBrush;
	FlashTitleBrush: SlateBrush;
	BackgroundColor: SlateColor;
	OutlineBrush: SlateBrush;
	OutlineColor: SlateColor;
	BorderBrush: SlateBrush;
	BackgroundBrush: SlateBrush;
	ChildBackgroundBrush: SlateBrush;
	clone() : WindowStyle;
	static C(Other: UObject | any): WindowStyle;
}

declare type EJavascriptAutoCenter = 'None' | 'PrimaryWorkArea' | 'PreferredWorkArea' | 'EJavascriptAutoCenter_MAX';
declare var EJavascriptAutoCenter : { None:'None',PrimaryWorkArea:'PrimaryWorkArea',PreferredWorkArea:'PreferredWorkArea',EJavascriptAutoCenter_MAX:'EJavascriptAutoCenter_MAX', };
declare type EJavascriptWindowTransparency = 'None' | 'PerWindow' | 'EJavascriptWindowTransparency_MAX';
declare var EJavascriptWindowTransparency : { None:'None',PerWindow:'PerWindow',EJavascriptWindowTransparency_MAX:'EJavascriptWindowTransparency_MAX', };
declare type EJavascriptSizingRule = 'FixedSize' | 'Autosized' | 'UserSized' | 'EJavascriptSizingRule_MAX';
declare var EJavascriptSizingRule : { FixedSize:'FixedSize',Autosized:'Autosized',UserSized:'UserSized',EJavascriptSizingRule_MAX:'EJavascriptSizingRule_MAX', };
declare class JavascriptWindow extends ContentWidget { 
	Type: EJavascriptWindowType;
	Style: WindowStyle;
	Title: string;
	bDragAnywhere: boolean;
	AutoCenter: EJavascriptAutoCenter;
	ScreenPosition: Vector2D;
	ClientSize: Vector2D;
	SupportsTransparency: EJavascriptWindowTransparency;
	InitialOpacity: number;
	IsInitiallyMaximized: boolean;
	SizingRule: EJavascriptSizingRule;
	IsPopupWindow: boolean;
	FocusWhenFirstShown: boolean;
	ActivateWhenFirstShown: boolean;
	UseOSWindowBorder: boolean;
	HasCloseButton: boolean;
	SupportsMaximize: boolean;
	SupportsMinimize: boolean;
	CreateTitleBar: boolean;
	SaneWindowPlacement: boolean;
	LayoutBorder: Margin;
	UserResizeBorder: Margin;
	OnWindowClosed: UnrealEngineDelegate<() => void>;
	OnWindowDeactivated: UnrealEngineDelegate<() => void>;
	IsTopmostWindow: boolean;
	static Load(ResourceName: string): JavascriptWindow;
	static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
	static GetDefaultObject(): JavascriptWindow;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWindow;
	ShowWindow(): void;
	SetOpacity(InOpacity: number): void;
	Resize(NewSize: Vector2D): void;
	ReshapeWindow(NewPosition: Vector2D,NewSize: Vector2D): void;
	RequestDestroyWindow(): void;
	MoveWindowTo(NewPosition: Vector2D): void;
	HideWindow(): void;
	FlashWindow(): void;
	EnableWindow(bEnable: boolean): void;
	DestroyWindowImmediately(): void;
	BringToFront(): void;
	static C(Other: UObject | any): JavascriptWindow;
	OpenFileDialog(DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
	static OpenFileDialog(WindowHandle: JavascriptWindow,DialogTitle: string,DefaultPath: string,DefaultFile: string,FileTypes: string,Flags: number,OutFilenames?: string[]): {OutFilenames: string[], $: boolean};
}

declare class JavascriptHyperlinkSignature__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptHyperlinkSignature__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptHyperlinkSignature__PythonCallable;
	static GetDefaultObject(): JavascriptHyperlinkSignature__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHyperlinkSignature__PythonCallable;
	static C(Other: UObject | any): JavascriptHyperlinkSignature__PythonCallable;
}

declare class OnInputActionEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputActionEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputActionEvent__PythonCallable;
	static GetDefaultObject(): OnInputActionEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputActionEvent__PythonCallable;
	static C(Other: UObject | any): OnInputActionEvent__PythonCallable;
}

declare class OnInputAxisEvent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnInputAxisEvent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnInputAxisEvent__PythonCallable;
	static GetDefaultObject(): OnInputAxisEvent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnInputAxisEvent__PythonCallable;
	static C(Other: UObject | any): OnInputAxisEvent__PythonCallable;
}

declare class OnComboBoxOpened__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnComboBoxOpened__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnComboBoxOpened__PythonCallable;
	static GetDefaultObject(): OnComboBoxOpened__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnComboBoxOpened__PythonCallable;
	static C(Other: UObject | any): OnComboBoxOpened__PythonCallable;
}

declare class OnGetContent__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetContent__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetContent__PythonCallable;
	static GetDefaultObject(): OnGetContent__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetContent__PythonCallable;
	static C(Other: UObject | any): OnGetContent__PythonCallable;
}

declare class OnIsOpenChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnIsOpenChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnIsOpenChanged__PythonCallable;
	static GetDefaultObject(): OnIsOpenChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnIsOpenChanged__PythonCallable;
	static C(Other: UObject | any): OnIsOpenChanged__PythonCallable;
}

declare class BoolDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): BoolDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): BoolDelegate__PythonCallable;
	static GetDefaultObject(): BoolDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BoolDelegate__PythonCallable;
	static C(Other: UObject | any): BoolDelegate__PythonCallable;
}

declare class IconDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): IconDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): IconDelegate__PythonCallable;
	static GetDefaultObject(): IconDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): IconDelegate__PythonCallable;
	static C(Other: UObject | any): IconDelegate__PythonCallable;
}

declare class TextDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): TextDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): TextDelegate__PythonCallable;
	static GetDefaultObject(): TextDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TextDelegate__PythonCallable;
	static C(Other: UObject | any): TextDelegate__PythonCallable;
}

declare class WidgetDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WidgetDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WidgetDelegate__PythonCallable;
	static GetDefaultObject(): WidgetDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WidgetDelegate__PythonCallable;
	static C(Other: UObject | any): WidgetDelegate__PythonCallable;
}

declare class OnContextMenuOpening__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnContextMenuOpening__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnContextMenuOpening__PythonCallable;
	static GetDefaultObject(): OnContextMenuOpening__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnContextMenuOpening__PythonCallable;
	static C(Other: UObject | any): OnContextMenuOpening__PythonCallable;
}

declare class OnExpansionChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnExpansionChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnExpansionChanged__PythonCallable;
	static GetDefaultObject(): OnExpansionChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnExpansionChanged__PythonCallable;
	static C(Other: UObject | any): OnExpansionChanged__PythonCallable;
}

declare class OnGenerateRow__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGenerateRow__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGenerateRow__PythonCallable;
	static GetDefaultObject(): OnGenerateRow__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGenerateRow__PythonCallable;
	static C(Other: UObject | any): OnGenerateRow__PythonCallable;
}

declare class OnGetChildrenUObject__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetChildrenUObject__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetChildrenUObject__PythonCallable;
	static GetDefaultObject(): OnGetChildrenUObject__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetChildrenUObject__PythonCallable;
	static C(Other: UObject | any): OnGetChildrenUObject__PythonCallable;
}

declare class ActionCheckStateDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ActionCheckStateDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ActionCheckStateDelegate__PythonCallable;
	static GetDefaultObject(): ActionCheckStateDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActionCheckStateDelegate__PythonCallable;
	static C(Other: UObject | any): ActionCheckStateDelegate__PythonCallable;
}

declare class ExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ExecuteAction__PythonCallable;
	static GetDefaultObject(): ExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ExecuteAction__PythonCallable;
	static C(Other: UObject | any): ExecuteAction__PythonCallable;
}

declare class OnVScrollBarUserScrolled__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnVScrollBarUserScrolled__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnVScrollBarUserScrolled__PythonCallable;
	static GetDefaultObject(): OnVScrollBarUserScrolled__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnVScrollBarUserScrolled__PythonCallable;
	static C(Other: UObject | any): OnVScrollBarUserScrolled__PythonCallable;
}

declare class SetText__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SetText__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SetText__PythonCallable;
	static GetDefaultObject(): SetText__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SetText__PythonCallable;
	static C(Other: UObject | any): SetText__PythonCallable;
}

declare class JavascriptCanExecuteActionWithEditingObject__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptCanExecuteActionWithEditingObject__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptCanExecuteActionWithEditingObject__PythonCallable;
	static GetDefaultObject(): JavascriptCanExecuteActionWithEditingObject__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCanExecuteActionWithEditingObject__PythonCallable;
	static C(Other: UObject | any): JavascriptCanExecuteActionWithEditingObject__PythonCallable;
}

declare class JavascriptExecuteActionWithEditingObject__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptExecuteActionWithEditingObject__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptExecuteActionWithEditingObject__PythonCallable;
	static GetDefaultObject(): JavascriptExecuteActionWithEditingObject__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptExecuteActionWithEditingObject__PythonCallable;
	static C(Other: UObject | any): JavascriptExecuteActionWithEditingObject__PythonCallable;
}

declare class OnWindowDeactivated__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnWindowDeactivated__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnWindowDeactivated__PythonCallable;
	static GetDefaultObject(): OnWindowDeactivated__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnWindowDeactivated__PythonCallable;
	static C(Other: UObject | any): OnWindowDeactivated__PythonCallable;
}

declare class OnWindowWidgetClosed__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnWindowWidgetClosed__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnWindowWidgetClosed__PythonCallable;
	static GetDefaultObject(): OnWindowWidgetClosed__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnWindowWidgetClosed__PythonCallable;
	static C(Other: UObject | any): OnWindowWidgetClosed__PythonCallable;
}

declare type EJavascriptHttpRequestStatus = 'NotStarted' | 'Processing' | 'Failed' | 'Succeeded' | 'EJavascriptHttpRequestStatus_MAX';
declare var EJavascriptHttpRequestStatus : { NotStarted:'NotStarted',Processing:'Processing',Failed:'Failed',Succeeded:'Succeeded',EJavascriptHttpRequestStatus_MAX:'EJavascriptHttpRequestStatus_MAX', };
declare class JavascriptHttpRequest extends UObject { 
	OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
	OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
	static Load(ResourceName: string): JavascriptHttpRequest;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
	static GetDefaultObject(): JavascriptHttpRequest;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequest;
	SetVerb(Verb: string): void;
	SetURL(URL: string): void;
	SetHeader(HeaderName: string,HeaderValue: string): void;
	SetContentWithFiles(FilePaths: string[],Boundary: string,Content: string): void;
	SetContentFromMemory(): void;
	SetContentAsString(ContentString: string): void;
	ProcessRequest(): boolean;
	GetVerb(): string;
	GetStatus(): EJavascriptHttpRequestStatus;
	GetResponseCode(): number;
	GetElapsedTime(): number;
	GetContentToMemory(): void;
	GetContentLength(): number;
	GetContentAsString(): string;
	CancelRequest(): void;
	static C(Other: UObject | any): JavascriptHttpRequest;
}

declare class JavascriptHttpRequestCompleteDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptHttpRequestCompleteDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequestCompleteDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptHttpRequestCompleteDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequestCompleteDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptHttpRequestCompleteDelegate__PythonCallable;
}

declare class JavascriptHttpRequestProgressDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptHttpRequestProgressDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequestProgressDelegate__PythonCallable;
	static GetDefaultObject(): JavascriptHttpRequestProgressDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptHttpRequestProgressDelegate__PythonCallable;
	static C(Other: UObject | any): JavascriptHttpRequestProgressDelegate__PythonCallable;
}

declare class JavascriptWebSocket extends UObject { 
	OnReceived: UnrealEngineMulticastDelegate<() => void>;
	OnConnected: UnrealEngineMulticastDelegate<() => void>;
	OnError: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): JavascriptWebSocket;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocket;
	static GetDefaultObject(): JavascriptWebSocket;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocket;
	Tick(): void;
	SendMemory(NumBytes: number): void;
	RemoteEndPoint(): string;
	LocalEndPoint(): string;
	GetReceivedBytes(): number;
	Flush(): void;
	Dispose(): void;
	CopyBuffer(): void;
	static Connect(Endpoint: string): JavascriptWebSocket;
	static C(Other: UObject | any): JavascriptWebSocket;
}

declare class JavascriptWebSocketServer extends UObject { 
	OnConnected: UnrealEngineMulticastDelegate<(WebSocket: JavascriptWebSocket) => void>;
	Connections: JavascriptWebSocket[];
	static Load(ResourceName: string): JavascriptWebSocketServer;
	static Find(Outer: UObject, ResourceName: string): JavascriptWebSocketServer;
	static GetDefaultObject(): JavascriptWebSocketServer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptWebSocketServer;
	Tick(): void;
	Info(): string;
	Dispose(): void;
	static Create(Port: number): JavascriptWebSocketServer;
	static C(Other: UObject | any): JavascriptWebSocketServer;
}

declare class OnWebSocketDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnWebSocketDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnWebSocketDelegate__PythonCallable;
	static GetDefaultObject(): OnWebSocketDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnWebSocketDelegate__PythonCallable;
	static C(Other: UObject | any): OnWebSocketDelegate__PythonCallable;
}

declare class OnWebSocketServerDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnWebSocketServerDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnWebSocketServerDelegate__PythonCallable;
	static GetDefaultObject(): OnWebSocketServerDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnWebSocketServerDelegate__PythonCallable;
	static C(Other: UObject | any): OnWebSocketServerDelegate__PythonCallable;
}

declare class TcpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	ListenEndpoint: string;
	ConnectToEndpoints: string[];
	ConnectionRetryDelay: number;
	static Load(ResourceName: string): TcpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): TcpMessagingSettings;
	static GetDefaultObject(): TcpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TcpMessagingSettings;
	static C(Other: UObject | any): TcpMessagingSettings;
}

declare class UdpMessagingSettings extends UObject { 
	EnableTransport: boolean;
	bAutoRepair: boolean;
	UnicastEndpoint: string;
	MulticastEndpoint: string;
	MulticastTimeToLive: number;
	StaticEndpoints: string[];
	EnableTunnel: boolean;
	TunnelUnicastEndpoint: string;
	TunnelMulticastEndpoint: string;
	RemoteTunnelEndpoints: string[];
	static Load(ResourceName: string): UdpMessagingSettings;
	static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
	static GetDefaultObject(): UdpMessagingSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UdpMessagingSettings;
	static C(Other: UObject | any): UdpMessagingSettings;
}

declare type EActorSequenceObjectReferenceType = 'ContextActor' | 'ExternalActor' | 'Component' | 'EActorSequenceObjectReferenceType_MAX';
declare var EActorSequenceObjectReferenceType : { ContextActor:'ContextActor',ExternalActor:'ExternalActor',Component:'Component',EActorSequenceObjectReferenceType_MAX:'EActorSequenceObjectReferenceType_MAX', };
declare class ActorSequenceObjectReference { 
	Type: EActorSequenceObjectReferenceType;
	ActorId: Guid;
	PathToComponent: string;
	clone() : ActorSequenceObjectReference;
	static C(Other: UObject | any): ActorSequenceObjectReference;
}

declare class ActorSequenceObjectReferences { 
	Array: ActorSequenceObjectReference[];
	clone() : ActorSequenceObjectReferences;
	static C(Other: UObject | any): ActorSequenceObjectReferences;
}

declare class ActorSequenceObjectReferenceMap { 
	BindingIds: Guid[];
	References: ActorSequenceObjectReferences[];
	clone() : ActorSequenceObjectReferenceMap;
	static C(Other: UObject | any): ActorSequenceObjectReferenceMap;
}

declare class ActorSequence extends MovieSceneSequence { 
	MovieScene: MovieScene;
	ObjectReferences: ActorSequenceObjectReferenceMap;
	bHasBeenInitialized: boolean;
	static Load(ResourceName: string): ActorSequence;
	static Find(Outer: UObject, ResourceName: string): ActorSequence;
	static GetDefaultObject(): ActorSequence;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequence;
	static C(Other: UObject | any): ActorSequence;
}

declare class ActorSequencePlayer extends MovieSceneSequencePlayer { 
	static Load(ResourceName: string): ActorSequencePlayer;
	static Find(Outer: UObject, ResourceName: string): ActorSequencePlayer;
	static GetDefaultObject(): ActorSequencePlayer;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequencePlayer;
	static C(Other: UObject | any): ActorSequencePlayer;
}

declare class ActorSequenceComponent extends ActorComponent { 
	PlaybackSettings: MovieSceneSequencePlaybackSettings;
	Sequence: ActorSequence;
	SequencePlayer: ActorSequencePlayer;
	static Load(ResourceName: string): ActorSequenceComponent;
	static Find(Outer: UObject, ResourceName: string): ActorSequenceComponent;
	static GetDefaultObject(): ActorSequenceComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActorSequenceComponent;
	static C(Other: UObject | any): ActorSequenceComponent;
}

declare type ETargetDataFilterSelf = 'TDFS_Any' | 'TDFS_NoSelf' | 'TDFS_NoOthers' | 'TDFS_MAX';
declare var ETargetDataFilterSelf : { TDFS_Any:'TDFS_Any',TDFS_NoSelf:'TDFS_NoSelf',TDFS_NoOthers:'TDFS_NoOthers',TDFS_MAX:'TDFS_MAX', };
declare class GameplayTargetDataFilter { 
	SelfActor: Actor;
	SelfFilter: ETargetDataFilterSelf;
	RequiredActorClass: UnrealEngineClass;
	bReverseFilter: boolean;
	clone() : GameplayTargetDataFilter;
	static C(Other: UObject | any): GameplayTargetDataFilter;
	MakeFilterHandle(FilterActor: Actor): GameplayTargetDataFilterHandle;
	static MakeFilterHandle(Filter: GameplayTargetDataFilter,FilterActor: Actor): GameplayTargetDataFilterHandle;
}

declare class AbilitySystemBlueprintLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): AbilitySystemBlueprintLibrary;
	static Find(Outer: UObject, ResourceName: string): AbilitySystemBlueprintLibrary;
	static GetDefaultObject(): AbilitySystemBlueprintLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilitySystemBlueprintLibrary;
	static TargetDataHasOrigin(TargetData: GameplayAbilityTargetDataHandle,index: number): boolean;
	static TargetDataHasHitResult(HitResult: GameplayAbilityTargetDataHandle,index: number): boolean;
	static TargetDataHasEndPoint(TargetData: GameplayAbilityTargetDataHandle,index: number): boolean;
	static TargetDataHasActor(TargetData: GameplayAbilityTargetDataHandle,index: number): boolean;
	static SetStackCountToMax(SpecHandle: GameplayEffectSpecHandle): GameplayEffectSpecHandle;
	static SetStackCount(SpecHandle: GameplayEffectSpecHandle,StackCount: number): GameplayEffectSpecHandle;
	static SetDuration(SpecHandle: GameplayEffectSpecHandle,Duration: number): GameplayEffectSpecHandle;
	static SendGameplayEventToActor(Actor: Actor,EventTag: GameplayTag,Payload: GameplayEventData): void;
	static NotEqual_GameplayAttributeGameplayAttribute(AttributeA: GameplayAttribute,AttributeB: GameplayAttribute): boolean;
	static MakeSpecHandle(InGameplayEffect: GameplayEffect,InInstigator: Actor,InEffectCauser: Actor,InLevel: number): GameplayEffectSpecHandle;
	static MakeGameplayCueParameters(NormalizedMagnitude: number,RawMagnitude: number,EffectContext: GameplayEffectContextHandle,MatchedTagName: GameplayTag,OriginalTag: GameplayTag,AggregatedSourceTags: GameplayTagContainer,AggregatedTargetTags: GameplayTagContainer,Location: Vector,Normal: Vector,Instigator: Actor,EffectCauser: Actor,SourceObject: UObject,PhysicalMaterial: PhysicalMaterial,GameplayEffectLevel: number,AbilityLevel: number,TargetAttachComponent: SceneComponent): GameplayCueParameters;
	static MakeFilterHandle(Filter: GameplayTargetDataFilter,FilterActor: Actor): GameplayTargetDataFilterHandle;
	static IsValid(Attribute: GameplayAttribute): boolean;
	static IsInstigatorLocallyControlledPlayer(Parameters: GameplayCueParameters): boolean;
	static IsInstigatorLocallyControlled(Parameters: GameplayCueParameters): boolean;
	static HasHitResult(Parameters: GameplayCueParameters): boolean;
	static GetTargetDataOrigin(TargetData: GameplayAbilityTargetDataHandle,index: number): Transform;
	static GetTargetDataEndPointTransform(TargetData: GameplayAbilityTargetDataHandle,index: number): Transform;
	static GetTargetDataEndPoint(TargetData: GameplayAbilityTargetDataHandle,index: number): Vector;
	static GetOrigin(Parameters: GameplayCueParameters): Vector;
	static GetModifiedAttributeMagnitude(SpecHandle: GameplayEffectSpecHandle,Attribute: GameplayAttribute): number;
	static GetInstigatorTransform(Parameters: GameplayCueParameters): Transform;
	static GetInstigatorActor(Parameters: GameplayCueParameters): Actor;
	static GetHitResultFromTargetData(HitResult: GameplayAbilityTargetDataHandle,index: number): HitResult;
	static GetHitResult(Parameters: GameplayCueParameters): HitResult;
	static GetGameplayCueEndLocationAndNormal(TargetActor: Actor,Parameters: GameplayCueParameters,Location?: Vector,Normal?: Vector): {Location: Vector, Normal: Vector, $: boolean};
	static GetGameplayCueDirection(TargetActor: Actor,Parameters: GameplayCueParameters,Direction?: Vector): {Direction: Vector, $: boolean};
	static GetFloatAttributeFromAbilitySystemComponent(AbilitySystem: AbilitySystemComponent,Attribute: GameplayAttribute,bSuccessfullyFoundAttribute?: boolean): {bSuccessfullyFoundAttribute: boolean, $: number};
	static GetFloatAttributeBaseFromAbilitySystemComponent(AbilitySystemComponent: AbilitySystemComponent,Attribute: GameplayAttribute,bSuccessfullyFoundAttribute?: boolean): {bSuccessfullyFoundAttribute: boolean, $: number};
	static GetFloatAttributeBase(Actor: Actor,Attribute: GameplayAttribute,bSuccessfullyFoundAttribute?: boolean): {bSuccessfullyFoundAttribute: boolean, $: number};
	static GetFloatAttribute(Actor: Actor,Attribute: GameplayAttribute,bSuccessfullyFoundAttribute?: boolean): {bSuccessfullyFoundAttribute: boolean, $: number};
	static GetEffectContext(SpecHandle: GameplayEffectSpecHandle): GameplayEffectContextHandle;
	static GetDataCountFromTargetData(TargetData: GameplayAbilityTargetDataHandle): number;
	static GetAllLinkedGameplayEffectSpecHandles(SpecHandle: GameplayEffectSpecHandle): GameplayEffectSpecHandle[];
	static GetAllActorsFromTargetData(TargetData: GameplayAbilityTargetDataHandle): Actor[];
	static GetActorsFromTargetData(TargetData: GameplayAbilityTargetDataHandle,index: number): Actor[];
	static GetActorCount(Parameters: GameplayCueParameters): number;
	static GetActorByIndex(Parameters: GameplayCueParameters,index: number): Actor;
	static GetActiveGameplayEffectTotalDuration(ActiveHandle: ActiveGameplayEffectHandle): number;
	static GetActiveGameplayEffectStartTime(ActiveHandle: ActiveGameplayEffectHandle): number;
	static GetActiveGameplayEffectStackLimitCount(ActiveHandle: ActiveGameplayEffectHandle): number;
	static GetActiveGameplayEffectStackCount(ActiveHandle: ActiveGameplayEffectHandle): number;
	static GetActiveGameplayEffectRemainingDuration(WorldContextObject: UObject,ActiveHandle: ActiveGameplayEffectHandle): number;
	static GetActiveGameplayEffectExpectedEndTime(ActiveHandle: ActiveGameplayEffectHandle): number;
	static GetActiveGameplayEffectDebugString(ActiveHandle: ActiveGameplayEffectHandle): string;
	static GetAbilitySystemComponent(Actor: Actor): AbilitySystemComponent;
	static FilterTargetData(TargetDataHandle: GameplayAbilityTargetDataHandle,ActorFilterClass: GameplayTargetDataFilterHandle): GameplayAbilityTargetDataHandle;
	static EvaluateAttributeValueWithTagsAndBase(AbilitySystem: AbilitySystemComponent,Attribute: GameplayAttribute,SourceTags: GameplayTagContainer,TargetTags: GameplayTagContainer,BaseValue: number,bSuccess?: boolean): {bSuccess: boolean, $: number};
	static EvaluateAttributeValueWithTags(AbilitySystem: AbilitySystemComponent,Attribute: GameplayAttribute,SourceTags: GameplayTagContainer,TargetTags: GameplayTagContainer,bSuccess?: boolean): {bSuccess: boolean, $: number};
	static EqualEqual_GameplayAttributeGameplayAttribute(AttributeA: GameplayAttribute,AttributeB: GameplayAttribute): boolean;
	static EffectContextSetOrigin(EffectContext: GameplayEffectContextHandle,Origin: Vector): void;
	static EffectContextIsValid(EffectContext: GameplayEffectContextHandle): boolean;
	static EffectContextIsInstigatorLocallyControlled(EffectContext: GameplayEffectContextHandle): boolean;
	static EffectContextHasHitResult(EffectContext: GameplayEffectContextHandle): boolean;
	static EffectContextGetSourceObject(EffectContext: GameplayEffectContextHandle): UObject;
	static EffectContextGetOriginalInstigatorActor(EffectContext: GameplayEffectContextHandle): Actor;
	static EffectContextGetOrigin(EffectContext: GameplayEffectContextHandle): Vector;
	static EffectContextGetInstigatorActor(EffectContext: GameplayEffectContextHandle): Actor;
	static EffectContextGetHitResult(EffectContext: GameplayEffectContextHandle): HitResult;
	static EffectContextGetEffectCauser(EffectContext: GameplayEffectContextHandle): Actor;
	static EffectContextAddHitResult(EffectContext: GameplayEffectContextHandle,HitResult: HitResult,bReset: boolean): void;
	static DoesTargetDataContainActor(TargetData: GameplayAbilityTargetDataHandle,index: number,Actor: Actor): boolean;
	static DoesGameplayCueMeetTagRequirements(Parameters: GameplayCueParameters,SourceTagReqs: GameplayTagRequirements,TargetTagReqs: GameplayTagRequirements): boolean;
	static CloneSpecHandle(InNewInstigator: Actor,InEffectCauser: Actor,GameplayEffectSpecHandle_Clone: GameplayEffectSpecHandle): GameplayEffectSpecHandle;
	static BreakGameplayCueParameters(Parameters: GameplayCueParameters,NormalizedMagnitude?: number,RawMagnitude?: number,EffectContext?: GameplayEffectContextHandle,MatchedTagName?: GameplayTag,OriginalTag?: GameplayTag,AggregatedSourceTags?: GameplayTagContainer,AggregatedTargetTags?: GameplayTagContainer,Location?: Vector,Normal?: Vector,Instigator?: Actor,EffectCauser?: Actor,SourceObject?: UObject,PhysicalMaterial?: PhysicalMaterial,GameplayEffectLevel?: number,AbilityLevel?: number,TargetAttachComponent?: SceneComponent): {NormalizedMagnitude: number, RawMagnitude: number, EffectContext: GameplayEffectContextHandle, MatchedTagName: GameplayTag, OriginalTag: GameplayTag, AggregatedSourceTags: GameplayTagContainer, AggregatedTargetTags: GameplayTagContainer, Location: Vector, Normal: Vector, Instigator: Actor, EffectCauser: Actor, SourceObject: UObject, PhysicalMaterial: PhysicalMaterial, GameplayEffectLevel: number, AbilityLevel: number, TargetAttachComponent: SceneComponent};
	static AssignTagSetByCallerMagnitude(SpecHandle: GameplayEffectSpecHandle,DataTag: GameplayTag,Magnitude: number): GameplayEffectSpecHandle;
	static AssignSetByCallerMagnitude(SpecHandle: GameplayEffectSpecHandle,DataName: string,Magnitude: number): GameplayEffectSpecHandle;
	static AppendTargetDataHandle(TargetHandle: GameplayAbilityTargetDataHandle,HandleToAdd: GameplayAbilityTargetDataHandle): GameplayAbilityTargetDataHandle;
	static AddLinkedGameplayEffectSpec(SpecHandle: GameplayEffectSpecHandle,LinkedGameplayEffectSpec: GameplayEffectSpecHandle): GameplayEffectSpecHandle;
	static AddLinkedGameplayEffect(SpecHandle: GameplayEffectSpecHandle,LinkedGameplayEffect: UnrealEngineClass): GameplayEffectSpecHandle;
	static AddGrantedTags(SpecHandle: GameplayEffectSpecHandle,NewGameplayTags: GameplayTagContainer): GameplayEffectSpecHandle;
	static AddGrantedTag(SpecHandle: GameplayEffectSpecHandle,NewGameplayTag: GameplayTag): GameplayEffectSpecHandle;
	static AddAssetTags(SpecHandle: GameplayEffectSpecHandle,NewGameplayTags: GameplayTagContainer): GameplayEffectSpecHandle;
	static AddAssetTag(SpecHandle: GameplayEffectSpecHandle,NewGameplayTag: GameplayTag): GameplayEffectSpecHandle;
	static AbilityTargetDataFromLocations(SourceLocation: GameplayAbilityTargetingLocationInfo,TargetLocation: GameplayAbilityTargetingLocationInfo): GameplayAbilityTargetDataHandle;
	static AbilityTargetDataFromHitResult(HitResult: HitResult): GameplayAbilityTargetDataHandle;
	static AbilityTargetDataFromActorArray(ActorArray: Actor[],OneTargetPerHandle: boolean): GameplayAbilityTargetDataHandle;
	static AbilityTargetDataFromActor(Actor: Actor): GameplayAbilityTargetDataHandle;
	static C(Other: UObject | any): AbilitySystemBlueprintLibrary;
}

declare class AbilitySystemDebugHUD extends HUD { 
	static GetDefaultObject(): AbilitySystemDebugHUD;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilitySystemDebugHUD;
	static C(Other: UObject | any): AbilitySystemDebugHUD;
}

declare class NetSerializeScriptStructCache { 
	ScriptStructs: ScriptStruct[];
	clone() : NetSerializeScriptStructCache;
	static C(Other: UObject | any): NetSerializeScriptStructCache;
}

declare class GameplayTagReponsePair { 
	Tag: GameplayTag;
	ResponseGameplayEffect: UnrealEngineClass;
	ResponseGameplayEffects: UnrealEngineClass[];
	SoftCountCap: number;
	clone() : GameplayTagReponsePair;
	static C(Other: UObject | any): GameplayTagReponsePair;
}

declare class GameplayTagResponseTableEntry { 
	Positive: GameplayTagReponsePair;
	Negative: GameplayTagReponsePair;
	clone() : GameplayTagResponseTableEntry;
	static C(Other: UObject | any): GameplayTagResponseTableEntry;
}

declare class GameplayTagReponseTable extends DataAsset { 
	Entries: GameplayTagResponseTableEntry[];
	static Load(ResourceName: string): GameplayTagReponseTable;
	static Find(Outer: UObject, ResourceName: string): GameplayTagReponseTable;
	static GetDefaultObject(): GameplayTagReponseTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayTagReponseTable;
	TagResponseEvent(Tag: GameplayTag,NewCount: number,ASC: AbilitySystemComponent,idx: number): void;
	static C(Other: UObject | any): GameplayTagReponseTable;
}

declare class GameplayCueNotifyData { 
	GameplayCueTag: GameplayTag;
	GameplayCueNotifyObj: SoftObjectPath;
	LoadedGameplayCueClass: UnrealEngineClass;
	clone() : GameplayCueNotifyData;
	static C(Other: UObject | any): GameplayCueNotifyData;
}

declare class GameplayCueSet extends DataAsset { 
	GameplayCueData: GameplayCueNotifyData[];
	static Load(ResourceName: string): GameplayCueSet;
	static Find(Outer: UObject, ResourceName: string): GameplayCueSet;
	static GetDefaultObject(): GameplayCueSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueSet;
	static C(Other: UObject | any): GameplayCueSet;
}

declare class GameplayCueObjectLibrary { 
	Paths: string[];
	ActorObjectLibrary: ObjectLibrary;
	StaticObjectLibrary: ObjectLibrary;
	CueSet: GameplayCueSet;
	bShouldSyncScan: boolean;
	bShouldAsyncLoad: boolean;
	bShouldSyncLoad: boolean;
	bHasBeenInitialized: boolean;
	clone() : GameplayCueObjectLibrary;
	static C(Other: UObject | any): GameplayCueObjectLibrary;
}

declare class GameplayTagReferenceHelper { 
	clone() : GameplayTagReferenceHelper;
	static C(Other: UObject | any): GameplayTagReferenceHelper;
}

declare type EGameplayCueEvent = 'OnActive' | 'WhileActive' | 'Executed' | 'Removed' | 'EGameplayCueEvent_MAX';
declare var EGameplayCueEvent : { OnActive:'OnActive',WhileActive:'WhileActive',Executed:'Executed',Removed:'Removed',EGameplayCueEvent_MAX:'EGameplayCueEvent_MAX', };
declare class GameplayCueNotify_Actor extends Actor { 
	bAutoDestroyOnRemove: boolean;
	AutoDestroyDelay: number;
	WarnIfTimelineIsStillRunning: boolean;
	WarnIfLatentActionIsStillRunning: boolean;
	GameplayCueTag: GameplayTag;
	ReferenceHelper: GameplayTagReferenceHelper;
	GameplayCueName: string;
	bAutoAttachToOwner: boolean;
	IsOverride: boolean;
	bUniqueInstancePerInstigator: boolean;
	bUniqueInstancePerSourceObject: boolean;
	bAllowMultipleOnActiveEvents: boolean;
	bAllowMultipleWhileActiveEvents: boolean;
	NumPreallocatedInstances: number;
	static GetDefaultObject(): GameplayCueNotify_Actor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueNotify_Actor;
	WhileActive(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	OnRemove(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	OnOwnerDestroyed(DestroyedActor: Actor): void;
	OnExecute(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	OnActive(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	K2_HandleGameplayCue(MyTarget: Actor,EventType: EGameplayCueEvent,Parameters: GameplayCueParameters): void;
	K2_EndGameplayCue(): void;
	static C(Other: UObject | any): GameplayCueNotify_Actor;
}

declare type EGameplayCuePayloadType = 'EffectContext' | 'CueParameters' | 'FromSpec' | 'EGameplayCuePayloadType_MAX';
declare var EGameplayCuePayloadType : { EffectContext:'EffectContext',CueParameters:'CueParameters',FromSpec:'FromSpec',EGameplayCuePayloadType_MAX:'EGameplayCuePayloadType_MAX', };
declare class GameplayCuePendingExecute { 
	PredictionKey: PredictionKey;
	PayloadType: EGameplayCuePayloadType;
	OwningComponent: AbilitySystemComponent;
	FromSpec: GameplayEffectSpecForRPC;
	CueParameters: GameplayCueParameters;
	clone() : GameplayCuePendingExecute;
	static C(Other: UObject | any): GameplayCuePendingExecute;
}

declare class PreallocationInfo { 
	ClassesNeedingPreallocation: UnrealEngineClass[];
	clone() : PreallocationInfo;
	static C(Other: UObject | any): PreallocationInfo;
}

declare class GameplayCueManager extends DataAsset { 
	RuntimeGameplayCueObjectLibrary: GameplayCueObjectLibrary;
	EditorGameplayCueObjectLibrary: GameplayCueObjectLibrary;
	LoadedGameplayCueNotifyClasses: UnrealEngineClass[];
	GameplayCueClassesForPreallocation: UnrealEngineClass[];
	PendingExecuteCues: GameplayCuePendingExecute[];
	GameplayCueSendContextCount: number;
	PreallocationInfoList_Internal: PreallocationInfo[];
	static Load(ResourceName: string): GameplayCueManager;
	static Find(Outer: UObject, ResourceName: string): GameplayCueManager;
	static GetDefaultObject(): GameplayCueManager;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueManager;
	static C(Other: UObject | any): GameplayCueManager;
}

declare class AbilitySystemGlobals extends UObject { 
	AbilitySystemGlobalsClassName: SoftClassPath;
	ActivateFailIsDeadTag: GameplayTag;
	ActivateFailIsDeadName: string;
	ActivateFailCooldownTag: GameplayTag;
	ActivateFailCooldownName: string;
	ActivateFailCostTag: GameplayTag;
	ActivateFailCostName: string;
	ActivateFailTagsBlockedTag: GameplayTag;
	ActivateFailTagsBlockedName: string;
	ActivateFailTagsMissingTag: GameplayTag;
	ActivateFailTagsMissingName: string;
	ActivateFailNetworkingTag: GameplayTag;
	ActivateFailNetworkingName: string;
	MinimalReplicationTagCountBits: number;
	TargetDataStructCache: NetSerializeScriptStructCache;
	bAllowGameplayModEvaluationChannels: boolean;
	DefaultGameplayModEvaluationChannel: EGameplayModEvaluationChannel;
	GameplayModEvaluationChannelAliases: string;
	GlobalCurveTableName: SoftObjectPath;
	GlobalCurveTable: CurveTable;
	GlobalAttributeMetaDataTableName: SoftObjectPath;
	GlobalAttributeMetaDataTable: DataTable;
	GlobalAttributeSetDefaultsTableName: SoftObjectPath;
	GlobalAttributeSetDefaultsTableNames: SoftObjectPath[];
	GlobalAttributeDefaultsTables: CurveTable[];
	GlobalGameplayCueManagerClass: SoftObjectPath;
	GlobalGameplayCueManagerName: SoftObjectPath;
	GameplayCueNotifyPaths: string[];
	GameplayTagResponseTableName: SoftObjectPath;
	GameplayTagResponseTable: GameplayTagReponseTable;
	PredictTargetGameplayEffects: boolean;
	GlobalGameplayCueManager: GameplayCueManager;
	static Load(ResourceName: string): AbilitySystemGlobals;
	static Find(Outer: UObject, ResourceName: string): AbilitySystemGlobals;
	static GetDefaultObject(): AbilitySystemGlobals;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilitySystemGlobals;
	ToggleIgnoreAbilitySystemCosts(): void;
	ToggleIgnoreAbilitySystemCooldowns(): void;
	static C(Other: UObject | any): AbilitySystemGlobals;
}

declare class AbilitySystemInterface extends Interface { 
	static Load(ResourceName: string): AbilitySystemInterface;
	static Find(Outer: UObject, ResourceName: string): AbilitySystemInterface;
	static GetDefaultObject(): AbilitySystemInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilitySystemInterface;
	static C(Other: UObject | any): AbilitySystemInterface;
}

declare class AbilitySystemReplicationProxyInterface extends Interface { 
	static Load(ResourceName: string): AbilitySystemReplicationProxyInterface;
	static Find(Outer: UObject, ResourceName: string): AbilitySystemReplicationProxyInterface;
	static GetDefaultObject(): AbilitySystemReplicationProxyInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilitySystemReplicationProxyInterface;
	static C(Other: UObject | any): AbilitySystemReplicationProxyInterface;
}

declare class AbilitySystemTestAttributeSet extends AttributeSet { 
	MaxHealth: number;
	Health: number;
	Mana: number;
	MaxMana: number;
	Damage: number;
	SpellDamage: number;
	PhysicalDamage: number;
	CritChance: number;
	CritMultiplier: number;
	ArmorDamageReduction: number;
	DodgeChance: number;
	LifeSteal: number;
	Strength: number;
	StackingAttribute1: number;
	StackingAttribute2: number;
	NoStackAttribute: number;
	static Load(ResourceName: string): AbilitySystemTestAttributeSet;
	static Find(Outer: UObject, ResourceName: string): AbilitySystemTestAttributeSet;
	static GetDefaultObject(): AbilitySystemTestAttributeSet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilitySystemTestAttributeSet;
	static C(Other: UObject | any): AbilitySystemTestAttributeSet;
}

declare class AbilitySystemTestPawn extends DefaultPawn { 
	AbilitySystemComponent: AbilitySystemComponent;
	static GetDefaultObject(): AbilitySystemTestPawn;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilitySystemTestPawn;
	static C(Other: UObject | any): AbilitySystemTestPawn;
}

declare class AbilityTask extends GameplayTask { 
	Ability: GameplayAbility;
	AbilitySystemComponent: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask;
	static Find(Outer: UObject, ResourceName: string): AbilityTask;
	static GetDefaultObject(): AbilityTask;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask;
	static C(Other: UObject | any): AbilityTask;
}

declare type ERootMotionFinishVelocityMode = 'MaintainLastRootMotionVelocity' | 'SetVelocity' | 'ClampVelocity' | 'ERootMotionFinishVelocityMode_MAX';
declare var ERootMotionFinishVelocityMode : { MaintainLastRootMotionVelocity:'MaintainLastRootMotionVelocity',SetVelocity:'SetVelocity',ClampVelocity:'ClampVelocity',ERootMotionFinishVelocityMode_MAX:'ERootMotionFinishVelocityMode_MAX', };
declare class AbilityTask_ApplyRootMotion_Base extends AbilityTask { 
	ForceName: string;
	FinishVelocityMode: ERootMotionFinishVelocityMode;
	FinishSetVelocity: Vector;
	FinishClampVelocity: number;
	MovementComponent: CharacterMovementComponent;
	static Load(ResourceName: string): AbilityTask_ApplyRootMotion_Base;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_ApplyRootMotion_Base;
	static GetDefaultObject(): AbilityTask_ApplyRootMotion_Base;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_ApplyRootMotion_Base;
	static C(Other: UObject | any): AbilityTask_ApplyRootMotion_Base;
}

declare class AbilityTask_ApplyRootMotionConstantForce extends AbilityTask_ApplyRootMotion_Base { 
	OnFinish: UnrealEngineMulticastDelegate<() => void>;
	WorldDirection: Vector;
	Strength: number;
	Duration: number;
	bIsAdditive: boolean;
	StrengthOverTime: CurveFloat;
	static Load(ResourceName: string): AbilityTask_ApplyRootMotionConstantForce;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_ApplyRootMotionConstantForce;
	static GetDefaultObject(): AbilityTask_ApplyRootMotionConstantForce;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_ApplyRootMotionConstantForce;
	static ApplyRootMotionConstantForce(OwningAbility: GameplayAbility,TaskInstanceName: string,WorldDirection: Vector,Strength: number,Duration: number,bIsAdditive: boolean,StrengthOverTime: CurveFloat,VelocityOnFinishMode: ERootMotionFinishVelocityMode,SetVelocityOnFinish: Vector,ClampVelocityOnFinish: number): AbilityTask_ApplyRootMotionConstantForce;
	static C(Other: UObject | any): AbilityTask_ApplyRootMotionConstantForce;
}

declare class AbilityTask_ApplyRootMotionJumpForce extends AbilityTask_ApplyRootMotion_Base { 
	OnFinish: UnrealEngineMulticastDelegate<() => void>;
	OnLanded: UnrealEngineMulticastDelegate<() => void>;
	Rotation: Rotator;
	Distance: number;
	Height: number;
	Duration: number;
	MinimumLandedTriggerTime: number;
	bFinishOnLanded: boolean;
	PathOffsetCurve: CurveVector;
	TimeMappingCurve: CurveFloat;
	static Load(ResourceName: string): AbilityTask_ApplyRootMotionJumpForce;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_ApplyRootMotionJumpForce;
	static GetDefaultObject(): AbilityTask_ApplyRootMotionJumpForce;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_ApplyRootMotionJumpForce;
	OnLandedCallback(Hit: HitResult): void;
	Finish(): void;
	static ApplyRootMotionJumpForce(OwningAbility: GameplayAbility,TaskInstanceName: string,Rotation: Rotator,Distance: number,Height: number,Duration: number,MinimumLandedTriggerTime: number,bFinishOnLanded: boolean,VelocityOnFinishMode: ERootMotionFinishVelocityMode,SetVelocityOnFinish: Vector,ClampVelocityOnFinish: number,PathOffsetCurve: CurveVector,TimeMappingCurve: CurveFloat): AbilityTask_ApplyRootMotionJumpForce;
	static C(Other: UObject | any): AbilityTask_ApplyRootMotionJumpForce;
}

declare type ERootMotionMoveToActorTargetOffsetType = 'AlignFromTargetToSource' | 'AlignToTargetForward' | 'AlignToWorldSpace' | 'ERootMotionMoveToActorTargetOffsetType_MAX';
declare var ERootMotionMoveToActorTargetOffsetType : { AlignFromTargetToSource:'AlignFromTargetToSource',AlignToTargetForward:'AlignToTargetForward',AlignToWorldSpace:'AlignToWorldSpace',ERootMotionMoveToActorTargetOffsetType_MAX:'ERootMotionMoveToActorTargetOffsetType_MAX', };
declare class AbilityTask_ApplyRootMotionMoveToActorForce extends AbilityTask_ApplyRootMotion_Base { 
	OnFinished: UnrealEngineMulticastDelegate<(DestinationReached: boolean, TimedOut: boolean, FinalTargetLocation: Vector) => void>;
	StartLocation: Vector;
	TargetLocation: Vector;
	TargetActor: Actor;
	TargetLocationOffset: Vector;
	OffsetAlignment: ERootMotionMoveToActorTargetOffsetType;
	Duration: number;
	bDisableDestinationReachedInterrupt: boolean;
	bSetNewMovementMode: boolean;
	NewMovementMode: EMovementMode;
	bRestrictSpeedToExpected: boolean;
	PathOffsetCurve: CurveVector;
	TimeMappingCurve: CurveFloat;
	TargetLerpSpeedHorizontalCurve: CurveFloat;
	TargetLerpSpeedVerticalCurve: CurveFloat;
	static Load(ResourceName: string): AbilityTask_ApplyRootMotionMoveToActorForce;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_ApplyRootMotionMoveToActorForce;
	static GetDefaultObject(): AbilityTask_ApplyRootMotionMoveToActorForce;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_ApplyRootMotionMoveToActorForce;
	OnTargetActorSwapped(OriginalTarget: Actor,NewTarget: Actor): void;
	OnRep_TargetLocation(): void;
	static ApplyRootMotionMoveToTargetDataActorForce(OwningAbility: GameplayAbility,TaskInstanceName: string,TargetDataHandle: GameplayAbilityTargetDataHandle,TargetDataIndex: number,TargetActorIndex: number,TargetLocationOffset: Vector,OffsetAlignment: ERootMotionMoveToActorTargetOffsetType,Duration: number,TargetLerpSpeedHorizontal: CurveFloat,TargetLerpSpeedVertical: CurveFloat,bSetNewMovementMode: boolean,MovementMode: EMovementMode,bRestrictSpeedToExpected: boolean,PathOffsetCurve: CurveVector,TimeMappingCurve: CurveFloat,VelocityOnFinishMode: ERootMotionFinishVelocityMode,SetVelocityOnFinish: Vector,ClampVelocityOnFinish: number,bDisableDestinationReachedInterrupt: boolean): AbilityTask_ApplyRootMotionMoveToActorForce;
	static ApplyRootMotionMoveToActorForce(OwningAbility: GameplayAbility,TaskInstanceName: string,TargetActor: Actor,TargetLocationOffset: Vector,OffsetAlignment: ERootMotionMoveToActorTargetOffsetType,Duration: number,TargetLerpSpeedHorizontal: CurveFloat,TargetLerpSpeedVertical: CurveFloat,bSetNewMovementMode: boolean,MovementMode: EMovementMode,bRestrictSpeedToExpected: boolean,PathOffsetCurve: CurveVector,TimeMappingCurve: CurveFloat,VelocityOnFinishMode: ERootMotionFinishVelocityMode,SetVelocityOnFinish: Vector,ClampVelocityOnFinish: number,bDisableDestinationReachedInterrupt: boolean): AbilityTask_ApplyRootMotionMoveToActorForce;
	static C(Other: UObject | any): AbilityTask_ApplyRootMotionMoveToActorForce;
}

declare class AbilityTask_ApplyRootMotionMoveToForce extends AbilityTask_ApplyRootMotion_Base { 
	OnTimedOut: UnrealEngineMulticastDelegate<() => void>;
	OnTimedOutAndDestinationReached: UnrealEngineMulticastDelegate<() => void>;
	StartLocation: Vector;
	TargetLocation: Vector;
	Duration: number;
	bSetNewMovementMode: boolean;
	NewMovementMode: EMovementMode;
	bRestrictSpeedToExpected: boolean;
	PathOffsetCurve: CurveVector;
	static Load(ResourceName: string): AbilityTask_ApplyRootMotionMoveToForce;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_ApplyRootMotionMoveToForce;
	static GetDefaultObject(): AbilityTask_ApplyRootMotionMoveToForce;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_ApplyRootMotionMoveToForce;
	static ApplyRootMotionMoveToForce(OwningAbility: GameplayAbility,TaskInstanceName: string,TargetLocation: Vector,Duration: number,bSetNewMovementMode: boolean,MovementMode: EMovementMode,bRestrictSpeedToExpected: boolean,PathOffsetCurve: CurveVector,VelocityOnFinishMode: ERootMotionFinishVelocityMode,SetVelocityOnFinish: Vector,ClampVelocityOnFinish: number): AbilityTask_ApplyRootMotionMoveToForce;
	static C(Other: UObject | any): AbilityTask_ApplyRootMotionMoveToForce;
}

declare class AbilityTask_ApplyRootMotionRadialForce extends AbilityTask_ApplyRootMotion_Base { 
	OnFinish: UnrealEngineMulticastDelegate<() => void>;
	Location: Vector;
	LocationActor: Actor;
	Strength: number;
	Duration: number;
	Radius: number;
	bIsPush: boolean;
	bIsAdditive: boolean;
	bNoZForce: boolean;
	StrengthDistanceFalloff: CurveFloat;
	StrengthOverTime: CurveFloat;
	bUseFixedWorldDirection: boolean;
	FixedWorldDirection: Rotator;
	static Load(ResourceName: string): AbilityTask_ApplyRootMotionRadialForce;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_ApplyRootMotionRadialForce;
	static GetDefaultObject(): AbilityTask_ApplyRootMotionRadialForce;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_ApplyRootMotionRadialForce;
	static ApplyRootMotionRadialForce(OwningAbility: GameplayAbility,TaskInstanceName: string,Location: Vector,LocationActor: Actor,Strength: number,Duration: number,Radius: number,bIsPush: boolean,bIsAdditive: boolean,bNoZForce: boolean,StrengthDistanceFalloff: CurveFloat,StrengthOverTime: CurveFloat,bUseFixedWorldDirection: boolean,FixedWorldDirection: Rotator,VelocityOnFinishMode: ERootMotionFinishVelocityMode,SetVelocityOnFinish: Vector,ClampVelocityOnFinish: number): AbilityTask_ApplyRootMotionRadialForce;
	static C(Other: UObject | any): AbilityTask_ApplyRootMotionRadialForce;
}

declare class AbilityTask_MoveToLocation extends AbilityTask { 
	OnTargetLocationReached: UnrealEngineMulticastDelegate<() => void>;
	StartLocation: Vector;
	TargetLocation: Vector;
	DurationOfMovement: number;
	LerpCurve: CurveFloat;
	LerpCurveVector: CurveVector;
	static Load(ResourceName: string): AbilityTask_MoveToLocation;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_MoveToLocation;
	static GetDefaultObject(): AbilityTask_MoveToLocation;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_MoveToLocation;
	static MoveToLocation(OwningAbility: GameplayAbility,TaskInstanceName: string,Location: Vector,Duration: number,OptionalInterpolationCurve: CurveFloat,OptionalVectorInterpolationCurve: CurveVector): AbilityTask_MoveToLocation;
	static C(Other: UObject | any): AbilityTask_MoveToLocation;
}

declare type EAbilityTaskNetSyncType = 'BothWait' | 'OnlyServerWait' | 'OnlyClientWait' | 'EAbilityTaskNetSyncType_MAX';
declare var EAbilityTaskNetSyncType : { BothWait:'BothWait',OnlyServerWait:'OnlyServerWait',OnlyClientWait:'OnlyClientWait',EAbilityTaskNetSyncType_MAX:'EAbilityTaskNetSyncType_MAX', };
declare class AbilityTask_NetworkSyncPoint extends AbilityTask { 
	OnSync: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_NetworkSyncPoint;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_NetworkSyncPoint;
	static GetDefaultObject(): AbilityTask_NetworkSyncPoint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_NetworkSyncPoint;
	static WaitNetSync(OwningAbility: GameplayAbility,SyncType: EAbilityTaskNetSyncType): AbilityTask_NetworkSyncPoint;
	OnSignalCallback(): void;
	static C(Other: UObject | any): AbilityTask_NetworkSyncPoint;
}

declare class AbilityTask_PlayMontageAndWait extends AbilityTask { 
	OnCompleted: UnrealEngineMulticastDelegate<() => void>;
	OnBlendOut: UnrealEngineMulticastDelegate<() => void>;
	OnInterrupted: UnrealEngineMulticastDelegate<() => void>;
	OnCancelled: UnrealEngineMulticastDelegate<() => void>;
	MontageToPlay: AnimMontage;
	Rate: number;
	StartSection: string;
	AnimRootMotionTranslationScale: number;
	bStopWhenAbilityEnds: boolean;
	static Load(ResourceName: string): AbilityTask_PlayMontageAndWait;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_PlayMontageAndWait;
	static GetDefaultObject(): AbilityTask_PlayMontageAndWait;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_PlayMontageAndWait;
	OnMontageInterrupted(): void;
	OnMontageEnded(Montage: AnimMontage,bInterrupted: boolean): void;
	OnMontageBlendingOut(Montage: AnimMontage,bInterrupted: boolean): void;
	static CreatePlayMontageAndWaitProxy(OwningAbility: GameplayAbility,TaskInstanceName: string,MontageToPlay: AnimMontage,Rate: number,StartSection: string,bStopWhenAbilityEnds: boolean,AnimRootMotionTranslationScale: number): AbilityTask_PlayMontageAndWait;
	static C(Other: UObject | any): AbilityTask_PlayMontageAndWait;
}

declare class AbilityTask_Repeat extends AbilityTask { 
	OnPerformAction: UnrealEngineMulticastDelegate<(ActionNumber: number) => void>;
	OnFinished: UnrealEngineMulticastDelegate<(ActionNumber: number) => void>;
	static Load(ResourceName: string): AbilityTask_Repeat;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_Repeat;
	static GetDefaultObject(): AbilityTask_Repeat;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_Repeat;
	static RepeatAction(OwningAbility: GameplayAbility,TimeBetweenActions: number,TotalActionCount: number): AbilityTask_Repeat;
	static C(Other: UObject | any): AbilityTask_Repeat;
}

declare class AbilityTask_SpawnActor extends AbilityTask { 
	Success: UnrealEngineMulticastDelegate<(SpawnedActor: Actor) => void>;
	DidNotSpawn: UnrealEngineMulticastDelegate<(SpawnedActor: Actor) => void>;
	static Load(ResourceName: string): AbilityTask_SpawnActor;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_SpawnActor;
	static GetDefaultObject(): AbilityTask_SpawnActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_SpawnActor;
	static SpawnActor(OwningAbility: GameplayAbility,TargetData: GameplayAbilityTargetDataHandle,Class: UnrealEngineClass): AbilityTask_SpawnActor;
	FinishSpawningActor(OwningAbility: GameplayAbility,TargetData: GameplayAbilityTargetDataHandle,SpawnedActor: Actor): void;
	BeginSpawningActor(OwningAbility: GameplayAbility,TargetData: GameplayAbilityTargetDataHandle,Class: UnrealEngineClass,SpawnedActor?: Actor): {SpawnedActor: Actor, $: boolean};
	static C(Other: UObject | any): AbilityTask_SpawnActor;
}

declare class AbilityTask_StartAbilityState extends AbilityTask { 
	OnStateEnded: UnrealEngineMulticastDelegate<() => void>;
	OnStateInterrupted: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_StartAbilityState;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_StartAbilityState;
	static GetDefaultObject(): AbilityTask_StartAbilityState;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_StartAbilityState;
	static StartAbilityState(OwningAbility: GameplayAbility,StateName: string,bEndCurrentState: boolean): AbilityTask_StartAbilityState;
	static C(Other: UObject | any): AbilityTask_StartAbilityState;
}

declare class AbilityTask_VisualizeTargeting extends AbilityTask { 
	TimeElapsed: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_VisualizeTargeting;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_VisualizeTargeting;
	static GetDefaultObject(): AbilityTask_VisualizeTargeting;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_VisualizeTargeting;
	static VisualizeTargetingUsingActor(OwningAbility: GameplayAbility,TargetActor: GameplayAbilityTargetActor,TaskInstanceName: string,Duration: number): AbilityTask_VisualizeTargeting;
	static VisualizeTargeting(OwningAbility: GameplayAbility,Class: UnrealEngineClass,TaskInstanceName: string,Duration: number): AbilityTask_VisualizeTargeting;
	FinishSpawningActor(OwningAbility: GameplayAbility,SpawnedActor: GameplayAbilityTargetActor): void;
	BeginSpawningActor(OwningAbility: GameplayAbility,Class: UnrealEngineClass,SpawnedActor?: GameplayAbilityTargetActor): {SpawnedActor: GameplayAbilityTargetActor, $: boolean};
	static C(Other: UObject | any): AbilityTask_VisualizeTargeting;
}

declare class AbilityTask_WaitAbilityActivate extends AbilityTask { 
	OnActivate: UnrealEngineMulticastDelegate<(ActivatedAbility: GameplayAbility) => void>;
	static Load(ResourceName: string): AbilityTask_WaitAbilityActivate;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitAbilityActivate;
	static GetDefaultObject(): AbilityTask_WaitAbilityActivate;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitAbilityActivate;
	static WaitForAbilityActivateWithTagRequirements(OwningAbility: GameplayAbility,TagRequirements: GameplayTagRequirements,IncludeTriggeredAbilities: boolean,TriggerOnce: boolean): AbilityTask_WaitAbilityActivate;
	static WaitForAbilityActivate_Query(OwningAbility: GameplayAbility,Query: GameplayTagQuery,IncludeTriggeredAbilities: boolean,TriggerOnce: boolean): AbilityTask_WaitAbilityActivate;
	static WaitForAbilityActivate(OwningAbility: GameplayAbility,WithTag: GameplayTag,WithoutTag: GameplayTag,IncludeTriggeredAbilities: boolean,TriggerOnce: boolean): AbilityTask_WaitAbilityActivate;
	OnAbilityActivate(ActivatedAbility: GameplayAbility): void;
	static C(Other: UObject | any): AbilityTask_WaitAbilityActivate;
}

declare class AbilityTask_WaitAbilityCommit extends AbilityTask { 
	OnCommit: UnrealEngineMulticastDelegate<(ActivatedAbility: GameplayAbility) => void>;
	static Load(ResourceName: string): AbilityTask_WaitAbilityCommit;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitAbilityCommit;
	static GetDefaultObject(): AbilityTask_WaitAbilityCommit;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitAbilityCommit;
	static WaitForAbilityCommit_Query(OwningAbility: GameplayAbility,Query: GameplayTagQuery,TriggerOnce: boolean): AbilityTask_WaitAbilityCommit;
	static WaitForAbilityCommit(OwningAbility: GameplayAbility,WithTag: GameplayTag,WithoutTage: GameplayTag,TriggerOnce: boolean): AbilityTask_WaitAbilityCommit;
	OnAbilityCommit(ActivatedAbility: GameplayAbility): void;
	static C(Other: UObject | any): AbilityTask_WaitAbilityCommit;
}

declare type EWaitAttributeChangeComparison = 'None' | 'GreaterThan' | 'LessThan' | 'GreaterThanOrEqualTo' | 'LessThanOrEqualTo' | 'NotEqualTo' | 'ExactlyEqualTo' | 'MAX';
declare var EWaitAttributeChangeComparison : { None:'None',GreaterThan:'GreaterThan',LessThan:'LessThan',GreaterThanOrEqualTo:'GreaterThanOrEqualTo',LessThanOrEqualTo:'LessThanOrEqualTo',NotEqualTo:'NotEqualTo',ExactlyEqualTo:'ExactlyEqualTo',MAX:'MAX', };
declare class AbilityTask_WaitAttributeChange extends AbilityTask { 
	OnChange: UnrealEngineMulticastDelegate<() => void>;
	ExternalOwner: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask_WaitAttributeChange;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitAttributeChange;
	static GetDefaultObject(): AbilityTask_WaitAttributeChange;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitAttributeChange;
	static WaitForAttributeChangeWithComparison(OwningAbility: GameplayAbility,InAttribute: GameplayAttribute,InWithTag: GameplayTag,InWithoutTag: GameplayTag,InComparisonType: EWaitAttributeChangeComparison,InComparisonValue: number,TriggerOnce: boolean,OptionalExternalOwner: Actor): AbilityTask_WaitAttributeChange;
	static WaitForAttributeChange(OwningAbility: GameplayAbility,Attribute: GameplayAttribute,WithSrcTag: GameplayTag,WithoutSrcTag: GameplayTag,TriggerOnce: boolean,OptionalExternalOwner: Actor): AbilityTask_WaitAttributeChange;
	static C(Other: UObject | any): AbilityTask_WaitAttributeChange;
}

declare class AbilityTask_WaitAttributeChangeRatioThreshold extends AbilityTask { 
	OnChange: UnrealEngineMulticastDelegate<(bMatchesComparison: boolean, CurrentRatio: number) => void>;
	ExternalOwner: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask_WaitAttributeChangeRatioThreshold;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitAttributeChangeRatioThreshold;
	static GetDefaultObject(): AbilityTask_WaitAttributeChangeRatioThreshold;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitAttributeChangeRatioThreshold;
	static WaitForAttributeChangeRatioThreshold(OwningAbility: GameplayAbility,AttributeNumerator: GameplayAttribute,AttributeDenominator: GameplayAttribute,ComparisonType: EWaitAttributeChangeComparison,ComparisonValue: number,bTriggerOnce: boolean,OptionalExternalOwner: Actor): AbilityTask_WaitAttributeChangeRatioThreshold;
	static C(Other: UObject | any): AbilityTask_WaitAttributeChangeRatioThreshold;
}

declare class AbilityTask_WaitAttributeChangeThreshold extends AbilityTask { 
	OnChange: UnrealEngineMulticastDelegate<(bMatchesComparison: boolean, CurrentValue: number) => void>;
	ExternalOwner: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask_WaitAttributeChangeThreshold;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitAttributeChangeThreshold;
	static GetDefaultObject(): AbilityTask_WaitAttributeChangeThreshold;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitAttributeChangeThreshold;
	static WaitForAttributeChangeThreshold(OwningAbility: GameplayAbility,Attribute: GameplayAttribute,ComparisonType: EWaitAttributeChangeComparison,ComparisonValue: number,bTriggerOnce: boolean,OptionalExternalOwner: Actor): AbilityTask_WaitAttributeChangeThreshold;
	static C(Other: UObject | any): AbilityTask_WaitAttributeChangeThreshold;
}

declare class AbilityTask_WaitCancel extends AbilityTask { 
	OnCancel: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_WaitCancel;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitCancel;
	static GetDefaultObject(): AbilityTask_WaitCancel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitCancel;
	static WaitCancel(OwningAbility: GameplayAbility): AbilityTask_WaitCancel;
	OnLocalCancelCallback(): void;
	OnCancelCallback(): void;
	static C(Other: UObject | any): AbilityTask_WaitCancel;
}

declare class AbilityTask_WaitConfirm extends AbilityTask { 
	OnConfirm: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_WaitConfirm;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitConfirm;
	static GetDefaultObject(): AbilityTask_WaitConfirm;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitConfirm;
	static WaitConfirm(OwningAbility: GameplayAbility): AbilityTask_WaitConfirm;
	OnConfirmCallback(InAbility: GameplayAbility): void;
	static C(Other: UObject | any): AbilityTask_WaitConfirm;
}

declare class AbilityTask_WaitConfirmCancel extends AbilityTask { 
	OnConfirm: UnrealEngineMulticastDelegate<() => void>;
	OnCancel: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_WaitConfirmCancel;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitConfirmCancel;
	static GetDefaultObject(): AbilityTask_WaitConfirmCancel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitConfirmCancel;
	static WaitConfirmCancel(OwningAbility: GameplayAbility): AbilityTask_WaitConfirmCancel;
	OnLocalConfirmCallback(): void;
	OnLocalCancelCallback(): void;
	OnConfirmCallback(): void;
	OnCancelCallback(): void;
	static C(Other: UObject | any): AbilityTask_WaitConfirmCancel;
}

declare class AbilityTask_WaitDelay extends AbilityTask { 
	OnFinish: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_WaitDelay;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitDelay;
	static GetDefaultObject(): AbilityTask_WaitDelay;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitDelay;
	static WaitDelay(OwningAbility: GameplayAbility,Time: number): AbilityTask_WaitDelay;
	static C(Other: UObject | any): AbilityTask_WaitDelay;
}

declare class AbilityTask_WaitGameplayEffectApplied extends AbilityTask { 
	ExternalOwner: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask_WaitGameplayEffectApplied;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayEffectApplied;
	static GetDefaultObject(): AbilityTask_WaitGameplayEffectApplied;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayEffectApplied;
	OnApplyGameplayEffectCallback(Target: AbilitySystemComponent,SpecApplied: GameplayEffectSpec,ActiveHandle: ActiveGameplayEffectHandle): void;
	static C(Other: UObject | any): AbilityTask_WaitGameplayEffectApplied;
}

declare class AbilityTask_WaitGameplayEffectApplied_Self extends AbilityTask_WaitGameplayEffectApplied { 
	OnApplied: UnrealEngineMulticastDelegate<(Source: Actor, SpecHandle: GameplayEffectSpecHandle, ActiveHandle: ActiveGameplayEffectHandle) => void>;
	static Load(ResourceName: string): AbilityTask_WaitGameplayEffectApplied_Self;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayEffectApplied_Self;
	static GetDefaultObject(): AbilityTask_WaitGameplayEffectApplied_Self;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayEffectApplied_Self;
	static WaitGameplayEffectAppliedToSelf_Query(OwningAbility: GameplayAbility,SourceFilter: GameplayTargetDataFilterHandle,SourceTagQuery: GameplayTagQuery,TargetTagQuery: GameplayTagQuery,TriggerOnce: boolean,OptionalExternalOwner: Actor,ListenForPeriodicEffect: boolean): AbilityTask_WaitGameplayEffectApplied_Self;
	static WaitGameplayEffectAppliedToSelf(OwningAbility: GameplayAbility,SourceFilter: GameplayTargetDataFilterHandle,SourceTagRequirements: GameplayTagRequirements,TargetTagRequirements: GameplayTagRequirements,TriggerOnce: boolean,OptionalExternalOwner: Actor,ListenForPeriodicEffect: boolean): AbilityTask_WaitGameplayEffectApplied_Self;
	static C(Other: UObject | any): AbilityTask_WaitGameplayEffectApplied_Self;
}

declare class AbilityTask_WaitGameplayEffectApplied_Target extends AbilityTask_WaitGameplayEffectApplied { 
	OnApplied: UnrealEngineMulticastDelegate<(Target: Actor, SpecHandle: GameplayEffectSpecHandle, ActiveHandle: ActiveGameplayEffectHandle) => void>;
	static Load(ResourceName: string): AbilityTask_WaitGameplayEffectApplied_Target;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayEffectApplied_Target;
	static GetDefaultObject(): AbilityTask_WaitGameplayEffectApplied_Target;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayEffectApplied_Target;
	static WaitGameplayEffectAppliedToTarget_Query(OwningAbility: GameplayAbility,SourceFilter: GameplayTargetDataFilterHandle,SourceTagQuery: GameplayTagQuery,TargetTagQuery: GameplayTagQuery,TriggerOnce: boolean,OptionalExternalOwner: Actor,ListenForPeriodicEffect: boolean): AbilityTask_WaitGameplayEffectApplied_Target;
	static WaitGameplayEffectAppliedToTarget(OwningAbility: GameplayAbility,TargetFilter: GameplayTargetDataFilterHandle,SourceTagRequirements: GameplayTagRequirements,TargetTagRequirements: GameplayTagRequirements,TriggerOnce: boolean,OptionalExternalOwner: Actor,ListenForPeriodicEffects: boolean): AbilityTask_WaitGameplayEffectApplied_Target;
	static C(Other: UObject | any): AbilityTask_WaitGameplayEffectApplied_Target;
}

declare class AbilityTask_WaitGameplayEffectBlockedImmunity extends AbilityTask { 
	bLocked: UnrealEngineMulticastDelegate<(BlockedSpec: GameplayEffectSpecHandle, ImmunityGameplayEffectHandle: ActiveGameplayEffectHandle) => void>;
	ExternalOwner: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask_WaitGameplayEffectBlockedImmunity;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayEffectBlockedImmunity;
	static GetDefaultObject(): AbilityTask_WaitGameplayEffectBlockedImmunity;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayEffectBlockedImmunity;
	static WaitGameplayEffectBlockedByImmunity(OwningAbility: GameplayAbility,SourceTagRequirements: GameplayTagRequirements,TargetTagRequirements: GameplayTagRequirements,OptionalExternalTarget: Actor,OnlyTriggerOnce: boolean): AbilityTask_WaitGameplayEffectBlockedImmunity;
	static C(Other: UObject | any): AbilityTask_WaitGameplayEffectBlockedImmunity;
}

declare class GameplayEffectRemovalInfo { 
	bPrematureRemoval: boolean;
	StackCount: number;
	EffectContext: GameplayEffectContextHandle;
	clone() : GameplayEffectRemovalInfo;
	static C(Other: UObject | any): GameplayEffectRemovalInfo;
}

declare class AbilityTask_WaitGameplayEffectRemoved extends AbilityTask { 
	OnRemoved: UnrealEngineMulticastDelegate<(GameplayEffectRemovalInfo: GameplayEffectRemovalInfo) => void>;
	InvalidHandle: UnrealEngineMulticastDelegate<(GameplayEffectRemovalInfo: GameplayEffectRemovalInfo) => void>;
	static Load(ResourceName: string): AbilityTask_WaitGameplayEffectRemoved;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayEffectRemoved;
	static GetDefaultObject(): AbilityTask_WaitGameplayEffectRemoved;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayEffectRemoved;
	static WaitForGameplayEffectRemoved(OwningAbility: GameplayAbility,Handle: ActiveGameplayEffectHandle): AbilityTask_WaitGameplayEffectRemoved;
	OnGameplayEffectRemoved(InGameplayEffectRemovalInfo: GameplayEffectRemovalInfo): void;
	static C(Other: UObject | any): AbilityTask_WaitGameplayEffectRemoved;
}

declare class AbilityTask_WaitGameplayEffectStackChange extends AbilityTask { 
	OnChange: UnrealEngineMulticastDelegate<(Handle: ActiveGameplayEffectHandle, NewCount: number, OldCount: number) => void>;
	InvalidHandle: UnrealEngineMulticastDelegate<(Handle: ActiveGameplayEffectHandle, NewCount: number, OldCount: number) => void>;
	static Load(ResourceName: string): AbilityTask_WaitGameplayEffectStackChange;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayEffectStackChange;
	static GetDefaultObject(): AbilityTask_WaitGameplayEffectStackChange;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayEffectStackChange;
	static WaitForGameplayEffectStackChange(OwningAbility: GameplayAbility,Handle: ActiveGameplayEffectHandle): AbilityTask_WaitGameplayEffectStackChange;
	OnGameplayEffectStackChange(Handle: ActiveGameplayEffectHandle,NewCount: number,OldCount: number): void;
	static C(Other: UObject | any): AbilityTask_WaitGameplayEffectStackChange;
}

declare class AbilityTask_WaitGameplayEvent extends AbilityTask { 
	EventReceived: UnrealEngineMulticastDelegate<(Payload: GameplayEventData) => void>;
	OptionalExternalTarget: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask_WaitGameplayEvent;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayEvent;
	static GetDefaultObject(): AbilityTask_WaitGameplayEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayEvent;
	static WaitGameplayEvent(OwningAbility: GameplayAbility,EventTag: GameplayTag,OptionalExternalTarget: Actor,OnlyTriggerOnce: boolean,OnlyMatchExact: boolean): AbilityTask_WaitGameplayEvent;
	static C(Other: UObject | any): AbilityTask_WaitGameplayEvent;
}

declare class AbilityTask_WaitGameplayTag extends AbilityTask { 
	OptionalExternalTarget: AbilitySystemComponent;
	static Load(ResourceName: string): AbilityTask_WaitGameplayTag;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayTag;
	static GetDefaultObject(): AbilityTask_WaitGameplayTag;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayTag;
	GameplayTagCallback(Tag: GameplayTag,NewCount: number): void;
	static C(Other: UObject | any): AbilityTask_WaitGameplayTag;
}

declare class AbilityTask_WaitGameplayTagAdded extends AbilityTask_WaitGameplayTag { 
	Added: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_WaitGameplayTagAdded;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayTagAdded;
	static GetDefaultObject(): AbilityTask_WaitGameplayTagAdded;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayTagAdded;
	static WaitGameplayTagAdd(OwningAbility: GameplayAbility,Tag: GameplayTag,InOptionalExternalTarget: Actor,OnlyTriggerOnce: boolean): AbilityTask_WaitGameplayTagAdded;
	static C(Other: UObject | any): AbilityTask_WaitGameplayTagAdded;
}

declare class AbilityTask_WaitGameplayTagRemoved extends AbilityTask_WaitGameplayTag { 
	Removed: UnrealEngineMulticastDelegate<() => void>;
	static Load(ResourceName: string): AbilityTask_WaitGameplayTagRemoved;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitGameplayTagRemoved;
	static GetDefaultObject(): AbilityTask_WaitGameplayTagRemoved;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitGameplayTagRemoved;
	static WaitGameplayTagRemove(OwningAbility: GameplayAbility,Tag: GameplayTag,InOptionalExternalTarget: Actor,OnlyTriggerOnce: boolean): AbilityTask_WaitGameplayTagRemoved;
	static C(Other: UObject | any): AbilityTask_WaitGameplayTagRemoved;
}

declare class AbilityTask_WaitInputPress extends AbilityTask { 
	OnPress: UnrealEngineMulticastDelegate<(TimeWaited: number) => void>;
	static Load(ResourceName: string): AbilityTask_WaitInputPress;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitInputPress;
	static GetDefaultObject(): AbilityTask_WaitInputPress;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitInputPress;
	static WaitInputPress(OwningAbility: GameplayAbility,bTestAlreadyPressed: boolean): AbilityTask_WaitInputPress;
	OnPressCallback(): void;
	static C(Other: UObject | any): AbilityTask_WaitInputPress;
}

declare class AbilityTask_WaitInputRelease extends AbilityTask { 
	OnRelease: UnrealEngineMulticastDelegate<(TimeHeld: number) => void>;
	static Load(ResourceName: string): AbilityTask_WaitInputRelease;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitInputRelease;
	static GetDefaultObject(): AbilityTask_WaitInputRelease;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitInputRelease;
	static WaitInputRelease(OwningAbility: GameplayAbility,bTestAlreadyReleased: boolean): AbilityTask_WaitInputRelease;
	OnReleaseCallback(): void;
	static C(Other: UObject | any): AbilityTask_WaitInputRelease;
}

declare class AbilityTask_WaitMovementModeChange extends AbilityTask { 
	OnChange: UnrealEngineMulticastDelegate<(NewMovementMode: EMovementMode) => void>;
	static Load(ResourceName: string): AbilityTask_WaitMovementModeChange;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitMovementModeChange;
	static GetDefaultObject(): AbilityTask_WaitMovementModeChange;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitMovementModeChange;
	OnMovementModeChange(Character: Character,PrevMovementMode: EMovementMode,PreviousCustomMode: number): void;
	static CreateWaitMovementModeChange(OwningAbility: GameplayAbility,NewMode: EMovementMode): AbilityTask_WaitMovementModeChange;
	static C(Other: UObject | any): AbilityTask_WaitMovementModeChange;
}

declare class AbilityTask_WaitOverlap extends AbilityTask { 
	OnOverlap: UnrealEngineMulticastDelegate<(TargetData: GameplayAbilityTargetDataHandle) => void>;
	static Load(ResourceName: string): AbilityTask_WaitOverlap;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitOverlap;
	static GetDefaultObject(): AbilityTask_WaitOverlap;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitOverlap;
	static WaitForOverlap(OwningAbility: GameplayAbility): AbilityTask_WaitOverlap;
	OnHitCallback(HitComp: PrimitiveComponent,OtherActor: Actor,OtherComp: PrimitiveComponent,NormalImpulse: Vector,Hit: HitResult): void;
	static C(Other: UObject | any): AbilityTask_WaitOverlap;
}

declare type EGameplayTargetingConfirmation = 'Instant' | 'UserConfirmed' | 'Custom' | 'CustomMulti' | 'EGameplayTargetingConfirmation_MAX';
declare var EGameplayTargetingConfirmation : { Instant:'Instant',UserConfirmed:'UserConfirmed',Custom:'Custom',CustomMulti:'CustomMulti',EGameplayTargetingConfirmation_MAX:'EGameplayTargetingConfirmation_MAX', };
declare class AbilityTask_WaitTargetData extends AbilityTask { 
	ValidData: UnrealEngineMulticastDelegate<(Data: GameplayAbilityTargetDataHandle) => void>;
	Cancelled: UnrealEngineMulticastDelegate<(Data: GameplayAbilityTargetDataHandle) => void>;
	TargetClass: UnrealEngineClass;
	TargetActor: GameplayAbilityTargetActor;
	static Load(ResourceName: string): AbilityTask_WaitTargetData;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitTargetData;
	static GetDefaultObject(): AbilityTask_WaitTargetData;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitTargetData;
	static WaitTargetDataUsingActor(OwningAbility: GameplayAbility,TaskInstanceName: string,ConfirmationType: EGameplayTargetingConfirmation,TargetActor: GameplayAbilityTargetActor): AbilityTask_WaitTargetData;
	static WaitTargetData(OwningAbility: GameplayAbility,TaskInstanceName: string,ConfirmationType: EGameplayTargetingConfirmation,Class: UnrealEngineClass): AbilityTask_WaitTargetData;
	OnTargetDataReplicatedCancelledCallback(): void;
	OnTargetDataReplicatedCallback(Data: GameplayAbilityTargetDataHandle,ActivationTag: GameplayTag): void;
	OnTargetDataReadyCallback(Data: GameplayAbilityTargetDataHandle): void;
	OnTargetDataCancelledCallback(Data: GameplayAbilityTargetDataHandle): void;
	FinishSpawningActor(OwningAbility: GameplayAbility,SpawnedActor: GameplayAbilityTargetActor): void;
	BeginSpawningActor(OwningAbility: GameplayAbility,Class: UnrealEngineClass,SpawnedActor?: GameplayAbilityTargetActor): {SpawnedActor: GameplayAbilityTargetActor, $: boolean};
	static C(Other: UObject | any): AbilityTask_WaitTargetData;
}

declare class AbilityTask_WaitVelocityChange extends AbilityTask { 
	OnVelocityChage: UnrealEngineMulticastDelegate<() => void>;
	CachedMovementComponent: MovementComponent;
	static Load(ResourceName: string): AbilityTask_WaitVelocityChange;
	static Find(Outer: UObject, ResourceName: string): AbilityTask_WaitVelocityChange;
	static GetDefaultObject(): AbilityTask_WaitVelocityChange;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityTask_WaitVelocityChange;
	static CreateWaitVelocityChange(OwningAbility: GameplayAbility,Direction: Vector,MinimumMagnitude: number): AbilityTask_WaitVelocityChange;
	static C(Other: UObject | any): AbilityTask_WaitVelocityChange;
}

declare class GameplayAbility_CharacterJump extends GameplayAbility { 
	static Load(ResourceName: string): GameplayAbility_CharacterJump;
	static Find(Outer: UObject, ResourceName: string): GameplayAbility_CharacterJump;
	static GetDefaultObject(): GameplayAbility_CharacterJump;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbility_CharacterJump;
	static C(Other: UObject | any): GameplayAbility_CharacterJump;
}

declare class GameplayAbility_Montage extends GameplayAbility { 
	MontageToPlay: AnimMontage;
	PlayRate: number;
	SectionName: string;
	GameplayEffectClassesWhileAnimating: UnrealEngineClass[];
	GameplayEffectsWhileAnimating: GameplayEffect[];
	static Load(ResourceName: string): GameplayAbility_Montage;
	static Find(Outer: UObject, ResourceName: string): GameplayAbility_Montage;
	static GetDefaultObject(): GameplayAbility_Montage;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbility_Montage;
	static C(Other: UObject | any): GameplayAbility_Montage;
}

declare class GameplayAbilityBlueprint extends Blueprint { 
	static Load(ResourceName: string): GameplayAbilityBlueprint;
	static Find(Outer: UObject, ResourceName: string): GameplayAbilityBlueprint;
	static GetDefaultObject(): GameplayAbilityBlueprint;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityBlueprint;
	static C(Other: UObject | any): GameplayAbilityBlueprint;
}

declare type EGameplayAbilityInputBinds = 'Ability1' | 'Ability2' | 'Ability3' | 'Ability4' | 'Ability5' | 'Ability6' | 'Ability7' | 'Ability8' | 'Ability9' | 'EGameplayAbilityInputBinds_MAX';
declare var EGameplayAbilityInputBinds : { Ability1:'Ability1',Ability2:'Ability2',Ability3:'Ability3',Ability4:'Ability4',Ability5:'Ability5',Ability6:'Ability6',Ability7:'Ability7',Ability8:'Ability8',Ability9:'Ability9',EGameplayAbilityInputBinds_MAX:'EGameplayAbilityInputBinds_MAX', };
declare class GameplayAbilityBindInfo { 
	Command: EGameplayAbilityInputBinds;
	GameplayAbilityClass: UnrealEngineClass;
	clone() : GameplayAbilityBindInfo;
	static C(Other: UObject | any): GameplayAbilityBindInfo;
}

declare class GameplayAbilitySet extends DataAsset { 
	Abilities: GameplayAbilityBindInfo[];
	static Load(ResourceName: string): GameplayAbilitySet;
	static Find(Outer: UObject, ResourceName: string): GameplayAbilitySet;
	static GetDefaultObject(): GameplayAbilitySet;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilitySet;
	static C(Other: UObject | any): GameplayAbilitySet;
}

declare class GameplayAbilityTargetActor_Trace extends GameplayAbilityTargetActor { 
	MaxRange: number;
	TraceProfile: CollisionProfileName;
	bTraceAffectsAimPitch: boolean;
	static GetDefaultObject(): GameplayAbilityTargetActor_Trace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityTargetActor_Trace;
	static C(Other: UObject | any): GameplayAbilityTargetActor_Trace;
}

declare class GameplayAbilityTargetActor_GroundTrace extends GameplayAbilityTargetActor_Trace { 
	CollisionRadius: number;
	CollisionHeight: number;
	static GetDefaultObject(): GameplayAbilityTargetActor_GroundTrace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityTargetActor_GroundTrace;
	static C(Other: UObject | any): GameplayAbilityTargetActor_GroundTrace;
}

declare class GameplayAbilityTargetActor_ActorPlacement extends GameplayAbilityTargetActor_GroundTrace { 
	PlacedActorClass: UnrealEngineClass;
	PlacedActorMaterial: MaterialInterface;
	static GetDefaultObject(): GameplayAbilityTargetActor_ActorPlacement;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityTargetActor_ActorPlacement;
	static C(Other: UObject | any): GameplayAbilityTargetActor_ActorPlacement;
}

declare class GameplayAbilityTargetActor_Radius extends GameplayAbilityTargetActor { 
	Radius: number;
	static GetDefaultObject(): GameplayAbilityTargetActor_Radius;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityTargetActor_Radius;
	static C(Other: UObject | any): GameplayAbilityTargetActor_Radius;
}

declare class GameplayAbilityTargetActor_SingleLineTrace extends GameplayAbilityTargetActor_Trace { 
	static GetDefaultObject(): GameplayAbilityTargetActor_SingleLineTrace;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityTargetActor_SingleLineTrace;
	static C(Other: UObject | any): GameplayAbilityTargetActor_SingleLineTrace;
}

declare class GameplayAbilityWorldReticle_ActorVisualization extends GameplayAbilityWorldReticle { 
	CollisionComponent: CapsuleComponent;
	VisualizationComponents: ActorComponent[];
	static GetDefaultObject(): GameplayAbilityWorldReticle_ActorVisualization;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityWorldReticle_ActorVisualization;
	static C(Other: UObject | any): GameplayAbilityWorldReticle_ActorVisualization;
}

declare class GameplayCueInterface extends Interface { 
	static Load(ResourceName: string): GameplayCueInterface;
	static Find(Outer: UObject, ResourceName: string): GameplayCueInterface;
	static GetDefaultObject(): GameplayCueInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueInterface;
	ForwardGameplayCueToParent(): void;
	BlueprintCustomHandler(EventType: EGameplayCueEvent,Parameters: GameplayCueParameters): void;
	static C(Other: UObject | any): GameplayCueInterface;
}

declare class GameplayCueNotify_Static extends UObject { 
	GameplayCueTag: GameplayTag;
	ReferenceHelper: GameplayTagReferenceHelper;
	GameplayCueName: string;
	IsOverride: boolean;
	static Load(ResourceName: string): GameplayCueNotify_Static;
	static Find(Outer: UObject, ResourceName: string): GameplayCueNotify_Static;
	static GetDefaultObject(): GameplayCueNotify_Static;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueNotify_Static;
	WhileActive(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	OnRemove(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	OnExecute(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	OnActive(MyTarget: Actor,Parameters: GameplayCueParameters): boolean;
	K2_HandleGameplayCue(MyTarget: Actor,EventType: EGameplayCueEvent,Parameters: GameplayCueParameters): void;
	static C(Other: UObject | any): GameplayCueNotify_Static;
}

declare class GameplayCueNotify_HitImpact extends GameplayCueNotify_Static { 
	Sound: SoundBase;
	ParticleSystem: ParticleSystem;
	static Load(ResourceName: string): GameplayCueNotify_HitImpact;
	static Find(Outer: UObject, ResourceName: string): GameplayCueNotify_HitImpact;
	static GetDefaultObject(): GameplayCueNotify_HitImpact;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueNotify_HitImpact;
	static C(Other: UObject | any): GameplayCueNotify_HitImpact;
}

declare class GameplayCueTranslator extends UObject { 
	static Load(ResourceName: string): GameplayCueTranslator;
	static Find(Outer: UObject, ResourceName: string): GameplayCueTranslator;
	static GetDefaultObject(): GameplayCueTranslator;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueTranslator;
	static C(Other: UObject | any): GameplayCueTranslator;
}

declare class GameplayCueTranslator_Test extends GameplayCueTranslator { 
	static Load(ResourceName: string): GameplayCueTranslator_Test;
	static Find(Outer: UObject, ResourceName: string): GameplayCueTranslator_Test;
	static GetDefaultObject(): GameplayCueTranslator_Test;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayCueTranslator_Test;
	static C(Other: UObject | any): GameplayCueTranslator_Test;
}

declare class GameplayEffectUIData_TextOnly extends GameplayEffectUIData { 
	Description: string;
	static Load(ResourceName: string): GameplayEffectUIData_TextOnly;
	static Find(Outer: UObject, ResourceName: string): GameplayEffectUIData_TextOnly;
	static GetDefaultObject(): GameplayEffectUIData_TextOnly;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayEffectUIData_TextOnly;
	static C(Other: UObject | any): GameplayEffectUIData_TextOnly;
}

declare class TickableAttributeSetInterface extends Interface { 
	static Load(ResourceName: string): TickableAttributeSetInterface;
	static Find(Outer: UObject, ResourceName: string): TickableAttributeSetInterface;
	static GetDefaultObject(): TickableAttributeSetInterface;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TickableAttributeSetInterface;
	static C(Other: UObject | any): TickableAttributeSetInterface;
}

declare class ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable;
	static GetDefaultObject(): ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable;
	static C(Other: UObject | any): ActiveGameplayEffectQueryCustomMatch_Dynamic__PythonCallable;
}

declare class ApplyRootMotionConstantForceDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ApplyRootMotionConstantForceDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ApplyRootMotionConstantForceDelegate__PythonCallable;
	static GetDefaultObject(): ApplyRootMotionConstantForceDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ApplyRootMotionConstantForceDelegate__PythonCallable;
	static C(Other: UObject | any): ApplyRootMotionConstantForceDelegate__PythonCallable;
}

declare class ApplyRootMotionJumpForceDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ApplyRootMotionJumpForceDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ApplyRootMotionJumpForceDelegate__PythonCallable;
	static GetDefaultObject(): ApplyRootMotionJumpForceDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ApplyRootMotionJumpForceDelegate__PythonCallable;
	static C(Other: UObject | any): ApplyRootMotionJumpForceDelegate__PythonCallable;
}

declare class ApplyRootMotionMoveToActorForceDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ApplyRootMotionMoveToActorForceDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ApplyRootMotionMoveToActorForceDelegate__PythonCallable;
	static GetDefaultObject(): ApplyRootMotionMoveToActorForceDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ApplyRootMotionMoveToActorForceDelegate__PythonCallable;
	static C(Other: UObject | any): ApplyRootMotionMoveToActorForceDelegate__PythonCallable;
}

declare class ApplyRootMotionMoveToForceDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ApplyRootMotionMoveToForceDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ApplyRootMotionMoveToForceDelegate__PythonCallable;
	static GetDefaultObject(): ApplyRootMotionMoveToForceDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ApplyRootMotionMoveToForceDelegate__PythonCallable;
	static C(Other: UObject | any): ApplyRootMotionMoveToForceDelegate__PythonCallable;
}

declare class ApplyRootMotionRadialForceDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): ApplyRootMotionRadialForceDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): ApplyRootMotionRadialForceDelegate__PythonCallable;
	static GetDefaultObject(): ApplyRootMotionRadialForceDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): ApplyRootMotionRadialForceDelegate__PythonCallable;
	static C(Other: UObject | any): ApplyRootMotionRadialForceDelegate__PythonCallable;
}

declare class MoveToLocationDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MoveToLocationDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MoveToLocationDelegate__PythonCallable;
	static GetDefaultObject(): MoveToLocationDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MoveToLocationDelegate__PythonCallable;
	static C(Other: UObject | any): MoveToLocationDelegate__PythonCallable;
}

declare class NetworkSyncDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): NetworkSyncDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): NetworkSyncDelegate__PythonCallable;
	static GetDefaultObject(): NetworkSyncDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): NetworkSyncDelegate__PythonCallable;
	static C(Other: UObject | any): NetworkSyncDelegate__PythonCallable;
}

declare class MontageWaitSimpleDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MontageWaitSimpleDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MontageWaitSimpleDelegate__PythonCallable;
	static GetDefaultObject(): MontageWaitSimpleDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MontageWaitSimpleDelegate__PythonCallable;
	static C(Other: UObject | any): MontageWaitSimpleDelegate__PythonCallable;
}

declare class RepeatedActionDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): RepeatedActionDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): RepeatedActionDelegate__PythonCallable;
	static GetDefaultObject(): RepeatedActionDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): RepeatedActionDelegate__PythonCallable;
	static C(Other: UObject | any): RepeatedActionDelegate__PythonCallable;
}

declare class SpawnActorDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): SpawnActorDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): SpawnActorDelegate__PythonCallable;
	static GetDefaultObject(): SpawnActorDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SpawnActorDelegate__PythonCallable;
	static C(Other: UObject | any): SpawnActorDelegate__PythonCallable;
}

declare class AbilityStateDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AbilityStateDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AbilityStateDelegate__PythonCallable;
	static GetDefaultObject(): AbilityStateDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityStateDelegate__PythonCallable;
	static C(Other: UObject | any): AbilityStateDelegate__PythonCallable;
}

declare class VisualizeTargetingDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): VisualizeTargetingDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): VisualizeTargetingDelegate__PythonCallable;
	static GetDefaultObject(): VisualizeTargetingDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VisualizeTargetingDelegate__PythonCallable;
	static C(Other: UObject | any): VisualizeTargetingDelegate__PythonCallable;
}

declare class WaitAbilityActivateDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitAbilityActivateDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitAbilityActivateDelegate__PythonCallable;
	static GetDefaultObject(): WaitAbilityActivateDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitAbilityActivateDelegate__PythonCallable;
	static C(Other: UObject | any): WaitAbilityActivateDelegate__PythonCallable;
}

declare class WaitAbilityCommitDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitAbilityCommitDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitAbilityCommitDelegate__PythonCallable;
	static GetDefaultObject(): WaitAbilityCommitDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitAbilityCommitDelegate__PythonCallable;
	static C(Other: UObject | any): WaitAbilityCommitDelegate__PythonCallable;
}

declare class WaitAttributeChangeDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitAttributeChangeDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitAttributeChangeDelegate__PythonCallable;
	static GetDefaultObject(): WaitAttributeChangeDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitAttributeChangeDelegate__PythonCallable;
	static C(Other: UObject | any): WaitAttributeChangeDelegate__PythonCallable;
}

declare class WaitAttributeChangeRatioThresholdDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitAttributeChangeRatioThresholdDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitAttributeChangeRatioThresholdDelegate__PythonCallable;
	static GetDefaultObject(): WaitAttributeChangeRatioThresholdDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitAttributeChangeRatioThresholdDelegate__PythonCallable;
	static C(Other: UObject | any): WaitAttributeChangeRatioThresholdDelegate__PythonCallable;
}

declare class WaitAttributeChangeThresholdDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitAttributeChangeThresholdDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitAttributeChangeThresholdDelegate__PythonCallable;
	static GetDefaultObject(): WaitAttributeChangeThresholdDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitAttributeChangeThresholdDelegate__PythonCallable;
	static C(Other: UObject | any): WaitAttributeChangeThresholdDelegate__PythonCallable;
}

declare class WaitCancelDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitCancelDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitCancelDelegate__PythonCallable;
	static GetDefaultObject(): WaitCancelDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitCancelDelegate__PythonCallable;
	static C(Other: UObject | any): WaitCancelDelegate__PythonCallable;
}

declare class WaitConfirmCancelDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitConfirmCancelDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitConfirmCancelDelegate__PythonCallable;
	static GetDefaultObject(): WaitConfirmCancelDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitConfirmCancelDelegate__PythonCallable;
	static C(Other: UObject | any): WaitConfirmCancelDelegate__PythonCallable;
}

declare class WaitDelayDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitDelayDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitDelayDelegate__PythonCallable;
	static GetDefaultObject(): WaitDelayDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitDelayDelegate__PythonCallable;
	static C(Other: UObject | any): WaitDelayDelegate__PythonCallable;
}

declare class GameplayEffectAppliedSelfDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): GameplayEffectAppliedSelfDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): GameplayEffectAppliedSelfDelegate__PythonCallable;
	static GetDefaultObject(): GameplayEffectAppliedSelfDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayEffectAppliedSelfDelegate__PythonCallable;
	static C(Other: UObject | any): GameplayEffectAppliedSelfDelegate__PythonCallable;
}

declare class GameplayEffectAppliedTargetDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): GameplayEffectAppliedTargetDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): GameplayEffectAppliedTargetDelegate__PythonCallable;
	static GetDefaultObject(): GameplayEffectAppliedTargetDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayEffectAppliedTargetDelegate__PythonCallable;
	static C(Other: UObject | any): GameplayEffectAppliedTargetDelegate__PythonCallable;
}

declare class GameplayEffectBlockedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): GameplayEffectBlockedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): GameplayEffectBlockedDelegate__PythonCallable;
	static GetDefaultObject(): GameplayEffectBlockedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayEffectBlockedDelegate__PythonCallable;
	static C(Other: UObject | any): GameplayEffectBlockedDelegate__PythonCallable;
}

declare class WaitGameplayEffectRemovedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitGameplayEffectRemovedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitGameplayEffectRemovedDelegate__PythonCallable;
	static GetDefaultObject(): WaitGameplayEffectRemovedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitGameplayEffectRemovedDelegate__PythonCallable;
	static C(Other: UObject | any): WaitGameplayEffectRemovedDelegate__PythonCallable;
}

declare class WaitGameplayEffectStackChangeDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitGameplayEffectStackChangeDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitGameplayEffectStackChangeDelegate__PythonCallable;
	static GetDefaultObject(): WaitGameplayEffectStackChangeDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitGameplayEffectStackChangeDelegate__PythonCallable;
	static C(Other: UObject | any): WaitGameplayEffectStackChangeDelegate__PythonCallable;
}

declare class WaitGameplayEventDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitGameplayEventDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitGameplayEventDelegate__PythonCallable;
	static GetDefaultObject(): WaitGameplayEventDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitGameplayEventDelegate__PythonCallable;
	static C(Other: UObject | any): WaitGameplayEventDelegate__PythonCallable;
}

declare class WaitGameplayTagDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitGameplayTagDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitGameplayTagDelegate__PythonCallable;
	static GetDefaultObject(): WaitGameplayTagDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitGameplayTagDelegate__PythonCallable;
	static C(Other: UObject | any): WaitGameplayTagDelegate__PythonCallable;
}

declare class InputPressDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): InputPressDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): InputPressDelegate__PythonCallable;
	static GetDefaultObject(): InputPressDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputPressDelegate__PythonCallable;
	static C(Other: UObject | any): InputPressDelegate__PythonCallable;
}

declare class InputReleaseDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): InputReleaseDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): InputReleaseDelegate__PythonCallable;
	static GetDefaultObject(): InputReleaseDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): InputReleaseDelegate__PythonCallable;
	static C(Other: UObject | any): InputReleaseDelegate__PythonCallable;
}

declare class MovementModeChangedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MovementModeChangedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MovementModeChangedDelegate__PythonCallable;
	static GetDefaultObject(): MovementModeChangedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MovementModeChangedDelegate__PythonCallable;
	static C(Other: UObject | any): MovementModeChangedDelegate__PythonCallable;
}

declare class WaitOverlapDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitOverlapDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitOverlapDelegate__PythonCallable;
	static GetDefaultObject(): WaitOverlapDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitOverlapDelegate__PythonCallable;
	static C(Other: UObject | any): WaitOverlapDelegate__PythonCallable;
}

declare class WaitTargetDataDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitTargetDataDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitTargetDataDelegate__PythonCallable;
	static GetDefaultObject(): WaitTargetDataDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitTargetDataDelegate__PythonCallable;
	static C(Other: UObject | any): WaitTargetDataDelegate__PythonCallable;
}

declare class WaitVelocityChangeDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): WaitVelocityChangeDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): WaitVelocityChangeDelegate__PythonCallable;
	static GetDefaultObject(): WaitVelocityChangeDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WaitVelocityChangeDelegate__PythonCallable;
	static C(Other: UObject | any): WaitVelocityChangeDelegate__PythonCallable;
}

declare class AbilityAbilityKey__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AbilityAbilityKey__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AbilityAbilityKey__PythonCallable;
	static GetDefaultObject(): AbilityAbilityKey__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityAbilityKey__PythonCallable;
	static C(Other: UObject | any): AbilityAbilityKey__PythonCallable;
}

declare class AbilityConfirmOrCancel__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): AbilityConfirmOrCancel__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): AbilityConfirmOrCancel__PythonCallable;
	static GetDefaultObject(): AbilityConfirmOrCancel__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityConfirmOrCancel__PythonCallable;
	static C(Other: UObject | any): AbilityConfirmOrCancel__PythonCallable;
}

declare class GameplayAbilitiesBlueprintFactory extends Factory { 
	BlueprintType: EBlueprintType;
	ParentClass: UnrealEngineClass;
	static Load(ResourceName: string): GameplayAbilitiesBlueprintFactory;
	static Find(Outer: UObject, ResourceName: string): GameplayAbilitiesBlueprintFactory;
	static GetDefaultObject(): GameplayAbilitiesBlueprintFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilitiesBlueprintFactory;
	static C(Other: UObject | any): GameplayAbilitiesBlueprintFactory;
}

declare class GameplayAbilityGraph extends EdGraph { 
	static Load(ResourceName: string): GameplayAbilityGraph;
	static Find(Outer: UObject, ResourceName: string): GameplayAbilityGraph;
	static GetDefaultObject(): GameplayAbilityGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityGraph;
	static C(Other: UObject | any): GameplayAbilityGraph;
}

declare class GameplayAbilityGraphSchema extends EdGraphSchema_K2 { 
	static Load(ResourceName: string): GameplayAbilityGraphSchema;
	static Find(Outer: UObject, ResourceName: string): GameplayAbilityGraphSchema;
	static GetDefaultObject(): GameplayAbilityGraphSchema;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayAbilityGraphSchema;
	static C(Other: UObject | any): GameplayAbilityGraphSchema;
}

declare class GameplayEffectCreationData { 
	MenuPath: string;
	BaseName: string;
	ParentGameplayEffect: UnrealEngineClass;
	clone() : GameplayEffectCreationData;
	static C(Other: UObject | any): GameplayEffectCreationData;
}

declare class GameplayEffectCreationMenu extends UObject { 
	Definitions: GameplayEffectCreationData[];
	static Load(ResourceName: string): GameplayEffectCreationMenu;
	static Find(Outer: UObject, ResourceName: string): GameplayEffectCreationMenu;
	static GetDefaultObject(): GameplayEffectCreationMenu;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): GameplayEffectCreationMenu;
	static C(Other: UObject | any): GameplayEffectCreationMenu;
}

declare class K2Node_GameplayCueEvent extends K2Node_Event { 
	static Load(ResourceName: string): K2Node_GameplayCueEvent;
	static Find(Outer: UObject, ResourceName: string): K2Node_GameplayCueEvent;
	static GetDefaultObject(): K2Node_GameplayCueEvent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_GameplayCueEvent;
	static C(Other: UObject | any): K2Node_GameplayCueEvent;
}

declare class K2Node_LatentAbilityCall extends K2Node_LatentGameplayTaskCall { 
	static Load(ResourceName: string): K2Node_LatentAbilityCall;
	static Find(Outer: UObject, ResourceName: string): K2Node_LatentAbilityCall;
	static GetDefaultObject(): K2Node_LatentAbilityCall;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): K2Node_LatentAbilityCall;
	static C(Other: UObject | any): K2Node_LatentAbilityCall;
}

declare type ELocationAccuracy = 'LA_ThreeKilometers' | 'LA_OneKilometer' | 'LA_HundredMeters' | 'LA_TenMeters' | 'LA_Best' | 'LA_Navigation' | 'LA_MAX';
declare var ELocationAccuracy : { LA_ThreeKilometers:'LA_ThreeKilometers',LA_OneKilometer:'LA_OneKilometer',LA_HundredMeters:'LA_HundredMeters',LA_TenMeters:'LA_TenMeters',LA_Best:'LA_Best',LA_Navigation:'LA_Navigation',LA_MAX:'LA_MAX', };
declare class LocationServicesData { 
	Timestamp: number;
	Longitude: number;
	Latitude: number;
	HorizontalAccuracy: number;
	VerticalAccuracy: number;
	Altitude: number;
	clone() : LocationServicesData;
	static C(Other: UObject | any): LocationServicesData;
	static GetLastKnownLocation(): LocationServicesData;
}

declare class LocationServicesImpl extends UObject { 
	OnLocationChanged: UnrealEngineMulticastDelegate<(LocationData: LocationServicesData) => void>;
	static Load(ResourceName: string): LocationServicesImpl;
	static Find(Outer: UObject, ResourceName: string): LocationServicesImpl;
	static GetDefaultObject(): LocationServicesImpl;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServicesImpl;
	static C(Other: UObject | any): LocationServicesImpl;
}

declare class LocationServices extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): LocationServices;
	static Find(Outer: UObject, ResourceName: string): LocationServices;
	static GetDefaultObject(): LocationServices;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServices;
	static StopLocationServices(): boolean;
	static StartLocationServices(): boolean;
	static IsLocationAccuracyAvailable(Accuracy: ELocationAccuracy): boolean;
	static InitLocationServices(Accuracy: ELocationAccuracy,UpdateFrequency: number,MinDistanceFilter: number): boolean;
	static GetLocationServicesImpl(): LocationServicesImpl;
	static GetLastKnownLocation(): LocationServicesData;
	static AreLocationServicesEnabled(): boolean;
	static C(Other: UObject | any): LocationServices;
}

declare class LocationServicesData_OnLocationChanged__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): LocationServicesData_OnLocationChanged__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): LocationServicesData_OnLocationChanged__PythonCallable;
	static GetDefaultObject(): LocationServicesData_OnLocationChanged__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LocationServicesData_OnLocationChanged__PythonCallable;
	static C(Other: UObject | any): LocationServicesData_OnLocationChanged__PythonCallable;
}

declare class TireConfigMaterialFriction { 
	PhysicalMaterial: PhysicalMaterial;
	FrictionScale: number;
	clone() : TireConfigMaterialFriction;
	static C(Other: UObject | any): TireConfigMaterialFriction;
}

declare class TireConfig extends DataAsset { 
	FrictionScale: number;
	TireFrictionScales: TireConfigMaterialFriction[];
	static Load(ResourceName: string): TireConfig;
	static Find(Outer: UObject, ResourceName: string): TireConfig;
	static GetDefaultObject(): TireConfig;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): TireConfig;
	static C(Other: UObject | any): TireConfig;
}

declare type EWheelSweepType = 'SimpleAndComplex' | 'Simple' | 'Complex' | 'EWheelSweepType_MAX';
declare var EWheelSweepType : { SimpleAndComplex:'SimpleAndComplex',Simple:'Simple',Complex:'Complex',EWheelSweepType_MAX:'EWheelSweepType_MAX', };
declare class VehicleWheel extends UObject { 
	CollisionMesh: StaticMesh;
	bDontCreateShape: boolean;
	bAutoAdjustCollisionSize: boolean;
	Offset: Vector;
	ShapeRadius: number;
	ShapeWidth: number;
	Mass: number;
	DampingRate: number;
	SteerAngle: number;
	bAffectedByHandbrake: boolean;
	TireType: TireType;
	TireConfig: TireConfig;
	LatStiffMaxLoad: number;
	LatStiffValue: number;
	LongStiffValue: number;
	SuspensionForceOffset: number;
	SuspensionMaxRaise: number;
	SuspensionMaxDrop: number;
	SuspensionNaturalFrequency: number;
	SuspensionDampingRatio: number;
	SweepType: EWheelSweepType;
	MaxBrakeTorque: number;
	MaxHandBrakeTorque: number;
	VehicleSim: WheeledVehicleMovementComponent;
	WheelIndex: number;
	DebugLongSlip: number;
	DebugLatSlip: number;
	DebugNormalizedTireLoad: number;
	DebugWheelTorque: number;
	DebugLongForce: number;
	DebugLatForce: number;
	Location: Vector;
	OldLocation: Vector;
	Velocity: Vector;
	static Load(ResourceName: string): VehicleWheel;
	static Find(Outer: UObject, ResourceName: string): VehicleWheel;
	static GetDefaultObject(): VehicleWheel;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleWheel;
	IsInAir(): boolean;
	GetSuspensionOffset(): number;
	GetSteerAngle(): number;
	GetRotationAngle(): number;
	static C(Other: UObject | any): VehicleWheel;
}

declare class WheelSetup { 
	WheelClass: UnrealEngineClass;
	BoneName: string;
	AdditionalOffset: Vector;
	bDisableSteering: boolean;
	clone() : WheelSetup;
	static C(Other: UObject | any): WheelSetup;
}

declare class ReplicatedVehicleState { 
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	CurrentGear: number;
	clone() : ReplicatedVehicleState;
	static C(Other: UObject | any): ReplicatedVehicleState;
}

declare class VehicleInputRate { 
	RiseRate: number;
	FallRate: number;
	clone() : VehicleInputRate;
	static C(Other: UObject | any): VehicleInputRate;
}

declare class WheeledVehicleMovementComponent extends PawnMovementComponent { 
	bDeprecatedSpringOffsetMode: boolean;
	bReverseAsBrake: boolean;
	bUseRVOAvoidance: boolean;
	bRawHandbrakeInput: boolean;
	bRawGearUpInput: boolean;
	bRawGearDownInput: boolean;
	bWasAvoidanceUpdated: boolean;
	Mass: number;
	WheelSetups: WheelSetup[];
	DragCoefficient: number;
	ChassisWidth: number;
	ChassisHeight: number;
	DragArea: number;
	EstimatedMaxEngineSpeed: number;
	MaxEngineRPM: number;
	DebugDragMagnitude: number;
	InertiaTensorScale: Vector;
	MinNormalizedTireLoad: number;
	MinNormalizedTireLoadFiltered: number;
	MaxNormalizedTireLoad: number;
	MaxNormalizedTireLoadFiltered: number;
	ThresholdLongitudinalSpeed: number;
	LowForwardSpeedSubStepCount: number;
	HighForwardSpeedSubStepCount: number;
	Wheels: VehicleWheel[];
	RVOAvoidanceRadius: number;
	RVOAvoidanceHeight: number;
	AvoidanceConsiderationRadius: number;
	RVOSteeringStep: number;
	RVOThrottleStep: number;
	AvoidanceUID: number;
	AvoidanceGroup: NavAvoidanceMask;
	GroupsToAvoid: NavAvoidanceMask;
	GroupsToIgnore: NavAvoidanceMask;
	AvoidanceWeight: number;
	PendingLaunchVelocity: Vector;
	ReplicatedState: ReplicatedVehicleState;
	RawSteeringInput: number;
	RawThrottleInput: number;
	RawBrakeInput: number;
	SteeringInput: number;
	ThrottleInput: number;
	BrakeInput: number;
	HandbrakeInput: number;
	IdleBrakeInput: number;
	StopThreshold: number;
	WrongDirectionThreshold: number;
	ThrottleInputRate: VehicleInputRate;
	BrakeInputRate: VehicleInputRate;
	HandbrakeInputRate: VehicleInputRate;
	SteeringInputRate: VehicleInputRate;
	OverrideController: Controller;
	static Load(ResourceName: string): WheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent;
	SetUseAutoGears(bUseAuto: boolean): void;
	SetThrottleInput(Throttle: number): void;
	SetTargetGear(GearNum: number,bImmediate: boolean): void;
	SetSteeringInput(Steering: number): void;
	SetHandbrakeInput(bNewHandbrake: boolean): void;
	SetGroupsToIgnoreMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToIgnore(GroupFlags: number): void;
	SetGroupsToAvoidMask(GroupMask: NavAvoidanceMask): void;
	SetGroupsToAvoid(GroupFlags: number): void;
	SetGearUp(bNewGearUp: boolean): void;
	SetGearDown(bNewGearDown: boolean): void;
	SetBrakeInput(Brake: number): void;
	SetAvoidanceGroupMask(GroupMask: NavAvoidanceMask): void;
	SetAvoidanceGroup(GroupFlags: number): void;
	SetAvoidanceEnabled(bEnable: boolean): void;
	ServerUpdateState(InSteeringInput: number,InThrottleInput: number,InBrakeInput: number,InHandbrakeInput: number,CurrentGear: number): void;
	GetUseAutoGears(): boolean;
	GetTargetGear(): number;
	GetForwardSpeed(): number;
	GetEngineRotationSpeed(): number;
	GetEngineMaxRotationSpeed(): number;
	GetCurrentGear(): number;
	static C(Other: UObject | any): WheeledVehicleMovementComponent;
}

declare class SimpleWheeledVehicleMovementComponent extends WheeledVehicleMovementComponent { 
	static Load(ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static Find(Outer: UObject, ResourceName: string): SimpleWheeledVehicleMovementComponent;
	static GetDefaultObject(): SimpleWheeledVehicleMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): SimpleWheeledVehicleMovementComponent;
	SetSteerAngle(SteerAngle: number,WheelIndex: number): void;
	SetDriveTorque(DriveTorque: number,WheelIndex: number): void;
	SetBrakeTorque(BrakeTorque: number,WheelIndex: number): void;
	static C(Other: UObject | any): SimpleWheeledVehicleMovementComponent;
}

declare class WheeledVehicle extends Pawn { 
	Mesh: SkeletalMeshComponent;
	VehicleMovement: WheeledVehicleMovementComponent;
	static GetDefaultObject(): WheeledVehicle;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicle;
	static C(Other: UObject | any): WheeledVehicle;
}

declare class VehicleAnimInstance extends AnimInstance { 
	WheeledVehicleMovementComponent: WheeledVehicleMovementComponent;
	static Load(ResourceName: string): VehicleAnimInstance;
	static Find(Outer: UObject, ResourceName: string): VehicleAnimInstance;
	static GetDefaultObject(): VehicleAnimInstance;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VehicleAnimInstance;
	GetVehicle(): WheeledVehicle;
	static C(Other: UObject | any): VehicleAnimInstance;
}

declare class VehicleEngineData { 
	TorqueCurve: RuntimeFloatCurve;
	MaxRPM: number;
	MOI: number;
	DampingRateFullThrottle: number;
	DampingRateZeroThrottleClutchEngaged: number;
	DampingRateZeroThrottleClutchDisengaged: number;
	clone() : VehicleEngineData;
	static C(Other: UObject | any): VehicleEngineData;
}

declare type EVehicleDifferential4W = 'LimitedSlip_4W' | 'LimitedSlip_FrontDrive' | 'LimitedSlip_RearDrive' | 'Open_4W' | 'Open_FrontDrive' | 'Open_RearDrive' | 'EVehicleDifferential4W_MAX';
declare var EVehicleDifferential4W : { LimitedSlip_4W:'LimitedSlip_4W',LimitedSlip_FrontDrive:'LimitedSlip_FrontDrive',LimitedSlip_RearDrive:'LimitedSlip_RearDrive',Open_4W:'Open_4W',Open_FrontDrive:'Open_FrontDrive',Open_RearDrive:'Open_RearDrive',EVehicleDifferential4W_MAX:'EVehicleDifferential4W_MAX', };
declare class VehicleDifferential4WData { 
	DifferentialType: EVehicleDifferential4W;
	FrontRearSplit: number;
	FrontLeftRightSplit: number;
	RearLeftRightSplit: number;
	CentreBias: number;
	FrontBias: number;
	RearBias: number;
	clone() : VehicleDifferential4WData;
	static C(Other: UObject | any): VehicleDifferential4WData;
}

declare class VehicleGearData { 
	Ratio: number;
	DownRatio: number;
	UpRatio: number;
	clone() : VehicleGearData;
	static C(Other: UObject | any): VehicleGearData;
}

declare class VehicleTransmissionData { 
	bUseGearAutoBox: boolean;
	GearSwitchTime: number;
	GearAutoBoxLatency: number;
	FinalRatio: number;
	ForwardGears: VehicleGearData[];
	ReverseGearRatio: number;
	NeutralGearUpRatio: number;
	ClutchStrength: number;
	clone() : VehicleTransmissionData;
	static C(Other: UObject | any): VehicleTransmissionData;
}

declare class WheeledVehicleMovementComponent4W extends WheeledVehicleMovementComponent { 
	EngineSetup: VehicleEngineData;
	DifferentialSetup: VehicleDifferential4WData;
	AckermannAccuracy: number;
	TransmissionSetup: VehicleTransmissionData;
	SteeringCurve: RuntimeFloatCurve;
	static Load(ResourceName: string): WheeledVehicleMovementComponent4W;
	static Find(Outer: UObject, ResourceName: string): WheeledVehicleMovementComponent4W;
	static GetDefaultObject(): WheeledVehicleMovementComponent4W;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WheeledVehicleMovementComponent4W;
	static C(Other: UObject | any): WheeledVehicleMovementComponent4W;
}

declare class AnimNode_WheelHandler extends AnimNode_SkeletalControlBase { 
	clone() : AnimNode_WheelHandler;
	static C(Other: UObject | any): AnimNode_WheelHandler;
}

declare class AnimGraphNode_WheelHandler extends AnimGraphNode_SkeletalControlBase { 
	UNode: AnimNode_WheelHandler;
	static Load(ResourceName: string): AnimGraphNode_WheelHandler;
	static Find(Outer: UObject, ResourceName: string): AnimGraphNode_WheelHandler;
	static GetDefaultObject(): AnimGraphNode_WheelHandler;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AnimGraphNode_WheelHandler;
	static C(Other: UObject | any): AnimGraphNode_WheelHandler;
}

declare class AbilityCooldownMMC extends GameplayModMagnitudeCalculation { 
	static Load(ResourceName: string): AbilityCooldownMMC;
	static Find(Outer: UObject, ResourceName: string): AbilityCooldownMMC;
	static GetDefaultObject(): AbilityCooldownMMC;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityCooldownMMC;
	static C(Other: UObject | any): AbilityCooldownMMC;
}

declare class AbilityCostMMC extends GameplayModMagnitudeCalculation { 
	static Load(ResourceName: string): AbilityCostMMC;
	static Find(Outer: UObject, ResourceName: string): AbilityCostMMC;
	static GetDefaultObject(): AbilityCostMMC;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AbilityCostMMC;
	static C(Other: UObject | any): AbilityCostMMC;
}

declare class BasicAttackCooldownEffect extends GameplayEffect { 
	static Load(ResourceName: string): BasicAttackCooldownEffect;
	static Find(Outer: UObject, ResourceName: string): BasicAttackCooldownEffect;
	static GetDefaultObject(): BasicAttackCooldownEffect;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): BasicAttackCooldownEffect;
	static C(Other: UObject | any): BasicAttackCooldownEffect;
}

declare class MLCameraComponent extends CameraComponent { 
	CameraSpeed: number;
	static Load(ResourceName: string): MLCameraComponent;
	static Find(Outer: UObject, ResourceName: string): MLCameraComponent;
	static GetDefaultObject(): MLCameraComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLCameraComponent;
	static C(Other: UObject | any): MLCameraComponent;
}

declare class MLBasicAttackAbilityBase extends GameplayAbility { 
	static Load(ResourceName: string): MLBasicAttackAbilityBase;
	static Find(Outer: UObject, ResourceName: string): MLBasicAttackAbilityBase;
	static GetDefaultObject(): MLBasicAttackAbilityBase;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLBasicAttackAbilityBase;
	static C(Other: UObject | any): MLBasicAttackAbilityBase;
}

declare type ECauseOfDeath = 'UnitDamage' | 'Execution' | 'SelfInflictedDamage' | 'ECauseOfDeath_MAX';
declare var ECauseOfDeath : { UnitDamage:'UnitDamage',Execution:'Execution',SelfInflictedDamage:'SelfInflictedDamage',ECauseOfDeath_MAX:'ECauseOfDeath_MAX', };
declare type EDamageType = 'PhysicalDamage' | 'MagicalDamage' | 'TrueDamage' | 'PureDamage' | 'EDamageType_MAX';
declare var EDamageType : { PhysicalDamage:'PhysicalDamage',MagicalDamage:'MagicalDamage',TrueDamage:'TrueDamage',PureDamage:'PureDamage',EDamageType_MAX:'EDamageType_MAX', };
declare type EDamageEffects = 'None' | 'OnHit' | 'OnAttack' | 'Spell' | 'EDamageEffects_MAX';
declare var EDamageEffects : { None:'None',OnHit:'OnHit',OnAttack:'OnAttack',Spell:'Spell',EDamageEffects_MAX:'EDamageEffects_MAX', };
declare type ETeam = 'Neutral' | 'Green' | 'Purple' | 'ETeam_MAX';
declare var ETeam : { Neutral:'Neutral',Green:'Green',Purple:'Purple',ETeam_MAX:'ETeam_MAX', };
declare type EMLStatType = 'CurrentHealth' | 'MaximumHealth' | 'AttackDamage' | 'AttackSpeed' | 'FlatPhysicalArmorPen' | 'FlatMagicalArmorPen' | 'PhysicalArmor' | 'MagicalArmor' | 'MovementSpeed' | 'AbilityPower' | 'CurrentResource' | 'MaximumResource' | 'CooldownReduction' | 'EMLStatType_MAX';
declare var EMLStatType : { CurrentHealth:'CurrentHealth',MaximumHealth:'MaximumHealth',AttackDamage:'AttackDamage',AttackSpeed:'AttackSpeed',FlatPhysicalArmorPen:'FlatPhysicalArmorPen',FlatMagicalArmorPen:'FlatMagicalArmorPen',PhysicalArmor:'PhysicalArmor',MagicalArmor:'MagicalArmor',MovementSpeed:'MovementSpeed',AbilityPower:'AbilityPower',CurrentResource:'CurrentResource',MaximumResource:'MaximumResource',CooldownReduction:'CooldownReduction',EMLStatType_MAX:'EMLStatType_MAX', };
declare type EStatGroup = 'Base' | 'Bonus' | 'Total' | 'EStatGroup_MAX';
declare var EStatGroup : { Base:'Base',Bonus:'Bonus',Total:'Total',EStatGroup_MAX:'EStatGroup_MAX', };
declare class MLAbilitySystemComponent extends AbilitySystemComponent { 
	bHasMovementAttributes: boolean;
	bHasDefenseAttributes: boolean;
	bHasOffenseAttributes: boolean;
	static Load(ResourceName: string): MLAbilitySystemComponent;
	static Find(Outer: UObject, ResourceName: string): MLAbilitySystemComponent;
	static GetDefaultObject(): MLAbilitySystemComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLAbilitySystemComponent;
	SetLevel(NewLevel: number): number;
	GetStat(StatType: EMLStatType,StatGroup: EStatGroup): number;
	GetLevel(): number;
	static C(Other: UObject | any): MLAbilitySystemComponent;
}

declare class UnitCapsuleComponent extends CapsuleComponent { 
	static Load(ResourceName: string): UnitCapsuleComponent;
	static Find(Outer: UObject, ResourceName: string): UnitCapsuleComponent;
	static GetDefaultObject(): UnitCapsuleComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): UnitCapsuleComponent;
	static C(Other: UObject | any): UnitCapsuleComponent;
}

declare class MLProjectileInteractionComponent extends SphereComponent { 
	static Load(ResourceName: string): MLProjectileInteractionComponent;
	static Find(Outer: UObject, ResourceName: string): MLProjectileInteractionComponent;
	static GetDefaultObject(): MLProjectileInteractionComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLProjectileInteractionComponent;
	static C(Other: UObject | any): MLProjectileInteractionComponent;
}

declare class MLProjectileMovementComponent extends ProjectileMovementComponent { 
	ProjectileSpeed: number;
	static Load(ResourceName: string): MLProjectileMovementComponent;
	static Find(Outer: UObject, ResourceName: string): MLProjectileMovementComponent;
	static GetDefaultObject(): MLProjectileMovementComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MLProjectileMovementComponent;
	static C(Other: UObject | any): MLProjectileMovementComponent;
}

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
	static RemoveActorFromLayer(InActor: Actor,Layer: ActorLayer): void;
	static GetActors(WorldContextObject: UObject,ActorLayer: ActorLayer): Actor[];
	static AddActorToLayer(InActor: Actor,Layer: ActorLayer): void;
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

declare class LevelVariantSetsActorFactory extends ActorFactory { 
	static Load(ResourceName: string): LevelVariantSetsActorFactory;
	static Find(Outer: UObject, ResourceName: string): LevelVariantSetsActorFactory;
	static GetDefaultObject(): LevelVariantSetsActorFactory;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LevelVariantSetsActorFactory;
	static C(Other: UObject | any): LevelVariantSetsActorFactory;
}

declare class VariantManagerFactoryNew extends Factory { 
	static Load(ResourceName: string): VariantManagerFactoryNew;
	static Find(Outer: UObject, ResourceName: string): VariantManagerFactoryNew;
	static GetDefaultObject(): VariantManagerFactoryNew;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantManagerFactoryNew;
	static C(Other: UObject | any): VariantManagerFactoryNew;
}

declare type EVariantManagerTestEnum = 'None' | 'FirstOption' | 'SecondOption' | 'ThirdOption' | 'EVariantManagerTestEnum_MAX';
declare var EVariantManagerTestEnum : { None:'None',FirstOption:'FirstOption',SecondOption:'SecondOption',ThirdOption:'ThirdOption',EVariantManagerTestEnum_MAX:'EVariantManagerTestEnum_MAX', };
declare class VariantManagerTestActor extends Actor { 
	EnumWithNoDefault: EVariantManagerTestEnum;
	EnumWithSecondDefault: EVariantManagerTestEnum;
	CapturedByteProperty: number;
	CapturedIntProperty: number;
	CapturedFloatProperty: number;
	bCapturedBoolProperty: boolean;
	CapturedObjectProperty: UObject;
	CapturedInterfaceProperty: any;
	CapturedNameProperty: string;
	CapturedStrProperty: string;
	CapturedTextProperty: string;
	CapturedRotatorProperty: Rotator;
	CapturedColorProperty: Color;
	CapturedLinearColorProperty: LinearColor;
	CapturedVectorProperty: Vector;
	CapturedQuatProperty: Quat;
	CapturedVector4Property: Vector4;
	CapturedVector2DProperty: Vector2D;
	CapturedIntPointProperty: IntPoint;
	CapturedUObjectArrayProperty: UObject[];
	CapturedVectorArrayProperty: Vector[];
	static GetDefaultObject(): VariantManagerTestActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): VariantManagerTestActor;
	static C(Other: UObject | any): VariantManagerTestActor;
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

declare type EBaseCalculationType = 'None' | 'PercentageBased' | 'FixedNumber' | 'EBaseCalculationType_MAX';
declare var EBaseCalculationType : { None:'None',PercentageBased:'PercentageBased',FixedNumber:'FixedNumber',EBaseCalculationType_MAX:'EBaseCalculationType_MAX', };
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
	FirstLoopStartFrameOffset: FrameNumber;
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

declare class MagicLeapAudioFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): MagicLeapAudioFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): MagicLeapAudioFunctionLibrary;
	static GetDefaultObject(): MagicLeapAudioFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapAudioFunctionLibrary;
	static C(Other: UObject | any): MagicLeapAudioFunctionLibrary;
}

declare class MagicLeapAudioJackPluggedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MagicLeapAudioJackPluggedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MagicLeapAudioJackPluggedDelegate__PythonCallable;
	static GetDefaultObject(): MagicLeapAudioJackPluggedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapAudioJackPluggedDelegate__PythonCallable;
	static C(Other: UObject | any): MagicLeapAudioJackPluggedDelegate__PythonCallable;
}

declare class MagicLeapAudioJackPluggedDelegateMulti__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MagicLeapAudioJackPluggedDelegateMulti__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MagicLeapAudioJackPluggedDelegateMulti__PythonCallable;
	static GetDefaultObject(): MagicLeapAudioJackPluggedDelegateMulti__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapAudioJackPluggedDelegateMulti__PythonCallable;
	static C(Other: UObject | any): MagicLeapAudioJackPluggedDelegateMulti__PythonCallable;
}

declare class MagicLeapAudioJackUnpluggedDelegate__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MagicLeapAudioJackUnpluggedDelegate__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MagicLeapAudioJackUnpluggedDelegate__PythonCallable;
	static GetDefaultObject(): MagicLeapAudioJackUnpluggedDelegate__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapAudioJackUnpluggedDelegate__PythonCallable;
	static C(Other: UObject | any): MagicLeapAudioJackUnpluggedDelegate__PythonCallable;
}

declare class MagicLeapAudioJackUnpluggedDelegateMulti__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): MagicLeapAudioJackUnpluggedDelegateMulti__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): MagicLeapAudioJackUnpluggedDelegateMulti__PythonCallable;
	static GetDefaultObject(): MagicLeapAudioJackUnpluggedDelegateMulti__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): MagicLeapAudioJackUnpluggedDelegateMulti__PythonCallable;
	static C(Other: UObject | any): MagicLeapAudioJackUnpluggedDelegateMulti__PythonCallable;
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

declare class WebSocketClient extends IPClient { 
	static Load(ResourceName: string): WebSocketClient;
	static Find(Outer: UObject, ResourceName: string): WebSocketClient;
	static GetDefaultObject(): WebSocketClient;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): WebSocketClient;
	static C(Other: UObject | any): WebSocketClient;
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

declare type ECollectionScriptingShareType = 'Local' | 'Private' | 'Shared' | 'ECollectionScriptingShareType_MAX';
declare var ECollectionScriptingShareType : { Local:'Local',Private:'Private',Shared:'Shared',ECollectionScriptingShareType_MAX:'ECollectionScriptingShareType_MAX', };
declare class AssetTagsSubsystem extends EngineSubsystem { 
	static Load(ResourceName: string): AssetTagsSubsystem;
	static Find(Outer: UObject, ResourceName: string): AssetTagsSubsystem;
	static GetDefaultObject(): AssetTagsSubsystem;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AssetTagsSubsystem;
	ReparentCollection(Name: string,NewParentName: string): boolean;
	RenameCollection(Name: string,NewName: string): boolean;
	RemoveAssetsFromCollection(Name: string,AssetPathNames: string[]): boolean;
	RemoveAssetPtrsFromCollection(Name: string,AssetPtrs: UObject[]): boolean;
	RemoveAssetPtrFromCollection(Name: string,AssetPtr: UObject): boolean;
	RemoveAssetFromCollection(Name: string,AssetPathName: string): boolean;
	RemoveAssetDatasFromCollection(Name: string,AssetDatas: AssetData[]): boolean;
	RemoveAssetDataFromCollection(Name: string,AssetData: AssetData): boolean;
	GetCollectionsContainingAssetPtr(AssetPtr: UObject): string[];
	GetCollectionsContainingAssetData(AssetData: AssetData): string[];
	GetCollectionsContainingAsset(AssetPathName: string): string[];
	GetCollections(): string[];
	GetAssetsInCollection(Name: string): AssetData[];
	EmptyCollection(Name: string): boolean;
	DestroyCollection(Name: string): boolean;
	CreateCollection(Name: string,ShareType: ECollectionScriptingShareType): boolean;
	CollectionExists(Name: string): boolean;
	AddAssetToCollection(Name: string,AssetPathName: string): boolean;
	AddAssetsToCollection(Name: string,AssetPathNames: string[]): boolean;
	AddAssetPtrToCollection(Name: string,AssetPtr: UObject): boolean;
	AddAssetPtrsToCollection(Name: string,AssetPtrs: UObject[]): boolean;
	AddAssetDataToCollection(Name: string,AssetData: AssetData): boolean;
	AddAssetDatasToCollection(Name: string,AssetDatas: AssetData[]): boolean;
	static C(Other: UObject | any): AssetTagsSubsystem;
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

declare type ECollisionTypeEnum = 'Chaos_Volumetric' | 'Chaos_Surface_Volumetric' | 'Chaos_Max';
declare var ECollisionTypeEnum : { Chaos_Volumetric:'Chaos_Volumetric',Chaos_Surface_Volumetric:'Chaos_Surface_Volumetric',Chaos_Max:'Chaos_Max', };
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

declare type EObjectStateTypeEnum = 'Chaos_NONE' | 'Chaos_Object_Sleeping' | 'Chaos_Object_Kinematic' | 'Chaos_Object_Static' | 'Chaos_Object_Dynamic' | 'Chaos_Object_UserDefined' | 'Chaos_Max';
declare var EObjectStateTypeEnum : { Chaos_NONE:'Chaos_NONE',Chaos_Object_Sleeping:'Chaos_Object_Sleeping',Chaos_Object_Kinematic:'Chaos_Object_Kinematic',Chaos_Object_Static:'Chaos_Object_Static',Chaos_Object_Dynamic:'Chaos_Object_Dynamic',Chaos_Object_UserDefined:'Chaos_Object_UserDefined',Chaos_Max:'Chaos_Max', };
declare type EInitialVelocityTypeEnum = 'Chaos_Initial_Velocity_User_Defined' | 'Chaos_Initial_Velocity_None' | 'Chaos_Max';
declare var EInitialVelocityTypeEnum : { Chaos_Initial_Velocity_User_Defined:'Chaos_Initial_Velocity_User_Defined',Chaos_Initial_Velocity_None:'Chaos_Initial_Velocity_None',Chaos_Max:'Chaos_Max', };
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
	Simulating: boolean;
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
	Simulating: boolean;
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

declare type EInsetPolygonsMode = 'All' | 'CenterPolygonOnly' | 'SidePolygonsOnly' | 'EInsetPolygonsMode_MAX';
declare var EInsetPolygonsMode : { All:'All',CenterPolygonOnly:'CenterPolygonOnly',SidePolygonsOnly:'SidePolygonsOnly',EInsetPolygonsMode_MAX:'EInsetPolygonsMode_MAX', };
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

declare class VertexAndAttributes { 
	VertexInstanceID: VertexInstanceID;
	VertexID: VertexID;
	PolygonVertexAttributes: MeshElementAttributeList;
	clone() : VertexAndAttributes;
	static C(Other: UObject | any): VertexAndAttributes;
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
	GetPolygonTriangulatedTriangle(PolygonID: PolygonID,PolygonTriangleNumber: number): TriangleID;
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
	ComputePolygonsSharedEdges(PolygonIDs: PolygonID[],OutSharedEdgeIDs?: EdgeID[]): {OutSharedEdgeIDs: EdgeID[]};
	ComputePolygonPlane(PolygonID: PolygonID): Plane;
	ComputePolygonNormal(PolygonID: PolygonID): Vector;
	ComputePolygonCenter(PolygonID: PolygonID): Vector;
	ComputeBoundingBoxAndSphere(): BoxSphereBounds;
	ComputeBoundingBox(): Box;
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

declare type EOculusMR_BoundaryType = 'BT_OuterBoundary' | 'BT_PlayArea' | 'BT_MAX';
declare var EOculusMR_BoundaryType : { BT_OuterBoundary:'BT_OuterBoundary',BT_PlayArea:'BT_PlayArea',BT_MAX:'BT_MAX', };
declare class OculusMR_PlaneMeshTriangle { 
	Vertex0: Vector;
	UV0: Vector2D;
	Vertex1: Vector;
	UV1: Vector2D;
	Vertex2: Vector;
	UV2: Vector2D;
	clone() : OculusMR_PlaneMeshTriangle;
	static C(Other: UObject | any): OculusMR_PlaneMeshTriangle;
}

declare class OculusMR_PlaneMeshComponent extends MeshComponent { 
	static Load(ResourceName: string): OculusMR_PlaneMeshComponent;
	static Find(Outer: UObject, ResourceName: string): OculusMR_PlaneMeshComponent;
	static GetDefaultObject(): OculusMR_PlaneMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_PlaneMeshComponent;
	SetCustomMeshTriangles(Triangles: OculusMR_PlaneMeshTriangle[]): boolean;
	ClearCustomMeshTriangles(): void;
	AddCustomMeshTriangles(Triangles: OculusMR_PlaneMeshTriangle[]): void;
	static C(Other: UObject | any): OculusMR_PlaneMeshComponent;
}

declare type EOculusMR_ClippingReference = 'CR_TrackingReference' | 'CR_Head' | 'CR_MAX';
declare var EOculusMR_ClippingReference : { CR_TrackingReference:'CR_TrackingReference',CR_Head:'CR_Head',CR_MAX:'CR_MAX', };
declare type EOculusMR_VirtualGreenScreenType = 'VGS_Off' | 'VGS_OuterBoundary' | 'VGS_PlayArea' | 'VGS_MAX';
declare var EOculusMR_VirtualGreenScreenType : { VGS_Off:'VGS_Off',VGS_OuterBoundary:'VGS_OuterBoundary',VGS_PlayArea:'VGS_PlayArea',VGS_MAX:'VGS_MAX', };
declare type EOculusMR_PostProcessEffects = 'PPE_Off' | 'PPE_On' | 'PPE_MAX';
declare var EOculusMR_PostProcessEffects : { PPE_Off:'PPE_Off',PPE_On:'PPE_On',PPE_MAX:'PPE_MAX', };
declare type EOculusMR_CompositionMethod = 'ExternalComposition' | 'DirectComposition' | 'EOculusMR_MAX';
declare var EOculusMR_CompositionMethod : { ExternalComposition:'ExternalComposition',DirectComposition:'DirectComposition',EOculusMR_MAX:'EOculusMR_MAX', };
declare type EOculusMR_CameraDeviceEnum = 'CD_None' | 'CD_WebCamera0' | 'CD_WebCamera1' | 'CD_ZEDCamera' | 'CD_MAX';
declare var EOculusMR_CameraDeviceEnum : { CD_None:'CD_None',CD_WebCamera0:'CD_WebCamera0',CD_WebCamera1:'CD_WebCamera1',CD_ZEDCamera:'CD_ZEDCamera',CD_MAX:'CD_MAX', };
declare type EOculusMR_DepthQuality = 'DQ_Low' | 'DQ_Medium' | 'DQ_High' | 'DQ_MAX';
declare var EOculusMR_DepthQuality : { DQ_Low:'DQ_Low',DQ_Medium:'DQ_Medium',DQ_High:'DQ_High',DQ_MAX:'DQ_MAX', };
declare class OculusMR_Settings extends UObject { 
	ClippingReference: EOculusMR_ClippingReference;
	bUseTrackedCameraResolution: boolean;
	WidthPerView: number;
	HeightPerView: number;
	CastingLatency: number;
	BackdropColor: Color;
	HandPoseStateLatency: number;
	ChromaKeyColor: Color;
	ChromaKeySimilarity: number;
	ChromaKeySmoothRange: number;
	ChromaKeySpillRange: number;
	VirtualGreenScreenType: EOculusMR_VirtualGreenScreenType;
	DynamicLightingDepthSmoothFactor: number;
	DynamicLightingDepthVariationClampingValue: number;
	ExternalCompositionPostProcessEffects: EOculusMR_PostProcessEffects;
	bIsCasting: boolean;
	CompositionMethod: EOculusMR_CompositionMethod;
	CapturingCamera: EOculusMR_CameraDeviceEnum;
	bUseDynamicLighting: boolean;
	DepthQuality: EOculusMR_DepthQuality;
	static Load(ResourceName: string): OculusMR_Settings;
	static Find(Outer: UObject, ResourceName: string): OculusMR_Settings;
	static GetDefaultObject(): OculusMR_Settings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_Settings;
	SetUseDynamicLighting(Val: boolean): void;
	SetIsCasting(Val: boolean): void;
	SetDepthQuality(Val: EOculusMR_DepthQuality): void;
	SetCompositionMethod(Val: EOculusMR_CompositionMethod): void;
	SetCapturingCamera(Val: EOculusMR_CameraDeviceEnum): void;
	SaveToIni(): void;
	LoadFromIni(): void;
	GetUseDynamicLighting(): boolean;
	GetIsCasting(): boolean;
	GetDepthQuality(): EOculusMR_DepthQuality;
	GetCompositionMethod(): EOculusMR_CompositionMethod;
	GetCapturingCamera(): EOculusMR_CameraDeviceEnum;
	GetBindToTrackedCameraIndex(): number;
	BindToTrackedCameraIndexIfAvailable(InTrackedCameraIndex: number): void;
	static C(Other: UObject | any): OculusMR_Settings;
}

declare class TrackedCamera { 
	index: number;
	Name: string;
	FieldOfView: number;
	SizeX: number;
	SizeY: number;
	AttachedTrackedDevice: ETrackedDeviceType;
	CalibratedRotation: Rotator;
	CalibratedOffset: Vector;
	UserRotation: Rotator;
	UserOffset: Vector;
	RawRotation: Rotator;
	RawOffset: Vector;
	clone() : TrackedCamera;
	static C(Other: UObject | any): TrackedCamera;
}

declare class OculusMR_State extends UObject { 
	TrackedCamera: TrackedCamera;
	TrackingReferenceComponent: SceneComponent;
	ChangeCameraStateRequested: boolean;
	BindToTrackedCameraIndexRequested: boolean;
	static Load(ResourceName: string): OculusMR_State;
	static Find(Outer: UObject, ResourceName: string): OculusMR_State;
	static GetDefaultObject(): OculusMR_State;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_State;
	static C(Other: UObject | any): OculusMR_State;
}

declare class OculusMR_CastingCameraActor extends SceneCapture2D { 
	VRNotificationComponent: VRNotificationsComponent;
	CameraColorTexture: Texture2D;
	CameraDepthTexture: Texture2D;
	PlaneMeshComponent: OculusMR_PlaneMeshComponent;
	ChromaKeyMaterial: Material;
	ChromaKeyLitMaterial: Material;
	OpaqueColoredMaterial: Material;
	ChromaKeyMaterialInstance: MaterialInstanceDynamic;
	ChromaKeyLitMaterialInstance: MaterialInstanceDynamic;
	CameraFrameMaterialInstance: MaterialInstanceDynamic;
	BackdropMaterialInstance: MaterialInstanceDynamic;
	BoundaryActor: OculusMR_BoundaryActor;
	BoundarySceneCaptureActor: SceneCapture2D;
	DefaultTexture_White: Texture2D;
	BackgroundRenderTargets: TextureRenderTarget2D[];
	ForegroundCaptureActor: SceneCapture2D;
	ForegroundRenderTargets: TextureRenderTarget2D[];
	MRSettings: OculusMR_Settings;
	MRState: OculusMR_State;
	static GetDefaultObject(): OculusMR_CastingCameraActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_CastingCameraActor;
	static C(Other: UObject | any): OculusMR_CastingCameraActor;
}

declare class OculusMR_BoundaryMeshComponent extends MeshComponent { 
	BoundaryType: EOculusMR_BoundaryType;
	BottomZ: number;
	TopZ: number;
	WhiteMaterial: Material;
	CastingCameraActor: OculusMR_CastingCameraActor;
	static Load(ResourceName: string): OculusMR_BoundaryMeshComponent;
	static Find(Outer: UObject, ResourceName: string): OculusMR_BoundaryMeshComponent;
	static GetDefaultObject(): OculusMR_BoundaryMeshComponent;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_BoundaryMeshComponent;
	static C(Other: UObject | any): OculusMR_BoundaryMeshComponent;
}

declare class OculusMR_BoundaryActor extends Actor { 
	BoundaryMeshComponent: OculusMR_BoundaryMeshComponent;
	static GetDefaultObject(): OculusMR_BoundaryActor;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMR_BoundaryActor;
	static C(Other: UObject | any): OculusMR_BoundaryActor;
}

declare class OculusMRFunctionLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): OculusMRFunctionLibrary;
	static Find(Outer: UObject, ResourceName: string): OculusMRFunctionLibrary;
	static GetDefaultObject(): OculusMRFunctionLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusMRFunctionLibrary;
	static SetTrackingReferenceComponent(Component: SceneComponent): void;
	static IsMrcEnabled(): boolean;
	static IsMrcActive(): boolean;
	static GetTrackingReferenceComponent(): SceneComponent;
	static GetOculusMRSettings(): OculusMR_Settings;
	static C(Other: UObject | any): OculusMRFunctionLibrary;
}

declare type EAndroidInstallLocation = 'InternalOnly' | 'PreferExternal' | 'Auto' | 'EAndroidInstallLocation_MAX';
declare var EAndroidInstallLocation : { InternalOnly:'InternalOnly',PreferExternal:'PreferExternal',Auto:'Auto',EAndroidInstallLocation_MAX:'EAndroidInstallLocation_MAX', };
declare type EAndroidScreenOrientation = 'Portrait' | 'ReversePortrait' | 'SensorPortrait' | 'Landscape' | 'ReverseLandscape' | 'SensorLandscape' | 'Sensor' | 'FullSensor' | 'EAndroidScreenOrientation_MAX';
declare var EAndroidScreenOrientation : { Portrait:'Portrait',ReversePortrait:'ReversePortrait',SensorPortrait:'SensorPortrait',Landscape:'Landscape',ReverseLandscape:'ReverseLandscape',SensorLandscape:'SensorLandscape',Sensor:'Sensor',FullSensor:'FullSensor',EAndroidScreenOrientation_MAX:'EAndroidScreenOrientation_MAX', };
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
	bPublicLogFiles: boolean;
	Orientation: EAndroidScreenOrientation;
	MaxAspectRatio: number;
	bUseDisplayCutout: boolean;
	bRestoreNotificationsOnReboot: boolean;
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
	ChunkSizeKB: number;
	bUseAudioStreamCaching: boolean;
	CacheSizeKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
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

declare class RedistPackage { 
	Included: boolean;
	Name: string;
	ID: string;
	clone() : RedistPackage;
	static C(Other: UObject | any): RedistPackage;
}

declare type EOculusPlatformTarget = 'Rift' | 'Quest' | 'Mobile' | 'Length' | 'EOculusPlatformTarget_MAX';
declare var EOculusPlatformTarget : { Rift:'Rift',Quest:'Quest',Mobile:'Mobile',Length:'Length',EOculusPlatformTarget_MAX:'EOculusPlatformTarget_MAX', };
declare type EOculusGamepadEmulation = 'Off' | 'Twinstick' | 'RightDPad' | 'LeftDPad' | 'Length' | 'EOculusGamepadEmulation_MAX';
declare var EOculusGamepadEmulation : { Off:'Off',Twinstick:'Twinstick',RightDPad:'RightDPad',LeftDPad:'LeftDPad',Length:'Length',EOculusGamepadEmulation_MAX:'EOculusGamepadEmulation_MAX', };
declare type EOculusAssetType = 'Default' | 'Store' | 'Language_Pack' | 'Length' | 'EOculusAssetType_MAX';
declare var EOculusAssetType : { Default:'Default',Store:'Store',Language_Pack:'Language_Pack',Length:'Length',EOculusAssetType_MAX:'EOculusAssetType_MAX', };
declare class AssetConfig { 
	AssetType: EOculusAssetType;
	required: boolean;
	Name: string;
	Sku: string;
	clone() : AssetConfig;
	static C(Other: UObject | any): AssetConfig;
}

declare class AssetConfigArray { 
	ConfigArray: AssetConfig[];
	clone() : AssetConfigArray;
	static C(Other: UObject | any): AssetConfigArray;
}

declare class OculusPlatformToolSettings extends UObject { 
	OculusRiftBuildDirectory: string;
	OculusRiftBuildVersion: string;
	OculusRiftLaunchParams: string;
	OculusRiftFireWallException: boolean;
	OculusRift2DLaunchPath: string;
	OculusRift2DLaunchParams: string;
	OculusRedistPackages: RedistPackage[];
	OculusTargetPlatform: EOculusPlatformTarget;
	OculusApplicationID: string[];
	OculusApplicationToken: string[];
	OculusReleaseChannel: string[];
	OculusReleaseNote: string[];
	OculusLaunchFilePath: string[];
	OculusRiftGamepadEmulation: EOculusGamepadEmulation;
	OculusLanguagePacksPath: string[];
	OculusExpansionFilesPath: string[];
	OculusAssetConfigs: AssetConfigArray[];
	static Load(ResourceName: string): OculusPlatformToolSettings;
	static Find(Outer: UObject, ResourceName: string): OculusPlatformToolSettings;
	static GetDefaultObject(): OculusPlatformToolSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OculusPlatformToolSettings;
	static C(Other: UObject | any): OculusPlatformToolSettings;
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

declare class JavascriptUICommandInfo { 
	clone() : JavascriptUICommandInfo;
	static C(Other: UObject | any): JavascriptUICommandInfo;
	static GenericCommand(What: string): JavascriptUICommandInfo;
}

declare class JavascriptUICommand { 
	ID: string;
	FriendlyName: string;
	Description: string;
	DefaultChord: InputChord;
	ActionType: EJavasrciptUserInterfaceActionType;
	CommandInfo: JavascriptUICommandInfo;
	IconStyleName: string;
	clone() : JavascriptUICommand;
	static C(Other: UObject | any): JavascriptUICommand;
}

declare class JavascriptBindingContext { 
	clone() : JavascriptBindingContext;
	static C(Other: UObject | any): JavascriptBindingContext;
	Destroy(): void;
	UI_COMMAND_Function(Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static Destroy(Context: JavascriptBindingContext): void;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
}

declare class JavascriptUICommandList { 
	clone() : JavascriptUICommandList;
	static C(Other: UObject | any): JavascriptUICommandList;
	CreateMenuBarBuilder(UFunction: JavascriptFunction): void;
	CreateMenuBuilder(bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	CreateToolbarBuilder(Orientation: EOrientation,UFunction: JavascriptFunction): void;
	ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): boolean;
	ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): boolean;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static CreateUICommandList(): JavascriptUICommandList;
	static GetLevelEditorActions(): JavascriptUICommandList;
}

declare class JavascriptUICommands extends UObject { 
	OnExecuteAction: UnrealEngineDelegate<(ID: string) => void>;
	OnCanExecuteAction: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionChecked: UnrealEngineDelegate<(ID: string) => boolean>;
	OnIsActionButtonVisible: UnrealEngineDelegate<(ID: string) => boolean>;
	Commands: JavascriptUICommand[];
	ContextName: string;
	ContextDesc: string;
	ContextNameParent: string;
	StyleSetName: string;
	TextSubNamespace: string;
	CommandInfos: JavascriptUICommandInfo[];
	BindingContext: JavascriptBindingContext;
	static Load(ResourceName: string): JavascriptUICommands;
	static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
	static GetDefaultObject(): JavascriptUICommands;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptUICommands;
	Uninitialize(): void;
	Unbind(List: JavascriptUICommandList): void;
	Refresh(): void;
	Initialize(): void;
	GetAction(ID: string): JavascriptUICommandInfo;
	Discard(): void;
	Commit(): void;
	static BroadcastCommandsChanged(InContextName: string): void;
	Bind(List: JavascriptUICommandList): void;
	static C(Other: UObject | any): JavascriptUICommands;
}

declare type EJavascriptExtensionHook = 'Before' | 'After' | 'First' | 'EJavascriptExtensionHook_MAX';
declare var EJavascriptExtensionHook : { Before:'Before',After:'After',First:'First',EJavascriptExtensionHook_MAX:'EJavascriptExtensionHook_MAX', };
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
	PostPIEStarted(bIsSimulating: boolean): void;
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

declare class JavascriptExtensionBase { 
	clone() : JavascriptExtensionBase;
	static C(Other: UObject | any): JavascriptExtensionBase;
}

declare class JavascriptMenuBuilder { 
	clone() : JavascriptMenuBuilder;
	static C(Other: UObject | any): JavascriptMenuBuilder;
	AddComboButton(UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	AddMenuByCommands(UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	AddMenuEntry(UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	AddSeparator(): {Builder: JavascriptMenuBuilder};
	AddSubMenu(Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	AddToolBarButton(CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	AddToolBarButtonByContext(Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	AddWidget(Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	BeginSection(InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	EndSection(): {Builder: JavascriptMenuBuilder};
	PopCommandList(): {Builder: JavascriptMenuBuilder};
	PushCommandList(List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
}

declare class JavascriptExtender { 
	clone() : JavascriptExtender;
	static C(Other: UObject | any): JavascriptExtender;
	AddMenubarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddMenuExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	AddToolBarExtension(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	Apply(ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	RemoveExtension(Extension: JavascriptExtensionBase): void;
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
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
	static ToggleIsExecuteTestModePIE(): boolean;
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
	static GetUniqueID(InObject: UObject): number;
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
	static GetIsShiftDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsExecuteTestModePIE(): boolean;
	static GetIsControlDownByKeyEvent(Event: KeyEvent): boolean;
	static GetIsAltDownByKeyEvent(Event: KeyEvent): boolean;
	static GetHeightmapDataToMemory(LandscapeInfo: LandscapeInfo,MinX: number,MinY: number,MaxX: number,MaxY: number): void;
	static GetGroup(Name: string): JavascriptWorkspaceItem;
	static GetFolderPath(Actor: Actor): string;
	static GetEvent(Click: JavascriptViewportClick): EInputEvent;
	static GetEngine(): EditorEngine;
	static GetEditorPlayWorld(): World;
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
	SetLightLocation(InLightPos: Vector): void;
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

declare class JavascriptMenuLibrary extends BlueprintFunctionLibrary { 
	static Load(ResourceName: string): JavascriptMenuLibrary;
	static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
	static GetDefaultObject(): JavascriptMenuLibrary;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMenuLibrary;
	static UI_COMMAND_Function(This: JavascriptBindingContext,Command: JavascriptUICommand,InTextSubNamespace: string): JavascriptUICommandInfo;
	static RemoveExtension(Extender: JavascriptExtender,Extension: JavascriptExtensionBase): void;
	static PushCommandList(Builder?: JavascriptMenuBuilder,List?: JavascriptUICommandList): {Builder: JavascriptMenuBuilder};
	static ProcessCommandBindings_PointerEvent(CommandList: JavascriptUICommandList,InMouseEvent: UPointerEvent): boolean;
	static ProcessCommandBindings_KeyEvent(CommandList: JavascriptUICommandList,InKeyEvent: KeyEvent): boolean;
	static PopCommandList(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static NewBindingContext(InContextName: string,InContextDesc: string,InContextParent: string,InStyleSetName: string): JavascriptBindingContext;
	static GenericCommand(What: string): JavascriptUICommandInfo;
	static EndSection(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static Destroy(Context: JavascriptBindingContext): void;
	static CreateUICommandList(): JavascriptUICommandList;
	static CreateToolbarBuilder(CommandList: JavascriptUICommandList,Orientation: EOrientation,UFunction: JavascriptFunction): void;
	static CreateMenuBuilder(CommandList: JavascriptUICommandList,bInShouldCloseWindowAfterMenuSelection: boolean,UFunction: JavascriptFunction): void;
	static CreateMenuBarBuilder(CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): void;
	static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
	static BeginSection(Builder?: JavascriptMenuBuilder,InExtensionHook?: string,MenuHeadingText?: string): {Builder: JavascriptMenuBuilder};
	static Apply(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,MenuBuilder?: JavascriptMenuBuilder): {MenuBuilder: JavascriptMenuBuilder};
	static AddWidget(Builder?: JavascriptMenuBuilder,Widget?: Widget,Label?: string,bNoIndent?: boolean,InTutorialHighlightName?: string,bSearchable?: boolean): {Builder: JavascriptMenuBuilder};
	static AddToolBarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddToolBarButtonByContext(Builder?: JavascriptMenuBuilder,Context?: JavascriptToolbarButtonContext,EditingObject?: UObject): {Builder: JavascriptMenuBuilder};
	static AddToolBarButton(Builder?: JavascriptMenuBuilder,CommandInfo?: JavascriptUICommandInfo): {Builder: JavascriptMenuBuilder};
	static AddSubMenu(Builder?: JavascriptMenuBuilder,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean,UFunction?: JavascriptFunction): {Builder: JavascriptMenuBuilder};
	static AddSeparator(Builder?: JavascriptMenuBuilder): {Builder: JavascriptMenuBuilder};
	static AddPullDownMenu(MenuBuilder?: JavascriptMenuBuilder,InMenuLabel?: string,InToolTip?: string,InPullDownMenu?: JavascriptFunction,InExtensionHook?: string,InTutorialHighlightName?: string): {MenuBuilder: JavascriptMenuBuilder};
	static AddMenuExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddMenuEntry(Builder?: JavascriptMenuBuilder,UObject?: JavascriptMenuContext): {Builder: JavascriptMenuBuilder};
	static AddMenuByCommands(Builder?: JavascriptMenuBuilder,UICommands?: JavascriptUICommands): {Builder: JavascriptMenuBuilder};
	static AddMenubarExtension(Extender: JavascriptExtender,ExtensionHook: string,HookPosition: EJavascriptExtensionHook,CommandList: JavascriptUICommandList,UFunction: JavascriptFunction): JavascriptExtensionBase;
	static AddComboButton(Builder?: JavascriptMenuBuilder,UObject?: JavascriptComboButtonContext): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMenuLibrary;
}

declare class JavascriptMultiBox extends Widget { 
	OnHook: UnrealEngineDelegate<(ID: string, Self: JavascriptMultiBox, CurrentBuilder: JavascriptMenuBuilder) => void>;
	static Load(ResourceName: string): JavascriptMultiBox;
	static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
	static GetDefaultObject(): JavascriptMultiBox;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptMultiBox;
	static Bind(Builder: JavascriptMenuBuilder): void;
	AddSubMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string,bInOpenSubMenuOnClick?: boolean): {Builder: JavascriptMenuBuilder};
	AddPullDownMenu(Builder?: JavascriptMenuBuilder,ID?: string,Label?: string,Tooltip?: string): {Builder: JavascriptMenuBuilder};
	static C(Other: UObject | any): JavascriptMultiBox;
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
	GeneratePathToProperty(): string;
	GetChildHandle(Name: string): JavascriptPropertyHandle;
	GetIndexInArray(): number;
	GetJavascriptRefValue(OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	GetKeyHandle(): JavascriptPropertyHandle;
	GetMetaData(Key: string): string;
	GetObjectValue(OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	GetOuterObjects(): UObject[];
	GetParentHandle(): JavascriptPropertyHandle;
	GetProperty(): Property;
	GetValueAsFormattedString(OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	IsArrayProperty(): boolean;
	IsArrayPropertyWithValueType(): boolean;
	IsEditConst(): boolean;
	IsValidHandle(): boolean;
	SetJavascriptRefValue(InValue: JavascriptRef): EPropertyAccessResult;
	SetObjectValue(InValue: UObject): EPropertyAccessResult;
	SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization): void;
	SetValueFromFormattedString(InValue: string): EPropertyAccessResult;
	static CreatePropertyNameWidget(Handle: JavascriptPropertyHandle,NameOverride: string,ToolTipOverride: string,bDisplayResetToDefault: boolean,bHideText: boolean,bHideThumbnail: boolean): JavascriptSlateWidget;
	static CreatePropertyValueWidget(Handle: JavascriptPropertyHandle,bHideDefaultPropertyButtons: boolean): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
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
	static SetObjectValue(Handle: JavascriptPropertyHandle,InValue: UObject): EPropertyAccessResult;
	static SetMinDesiredWidth(Decl: JavascriptDetailWidgetDecl,MinWidth: number): void;
	static SetMaxDesiredWidth(Decl: JavascriptDetailWidgetDecl,MaxWidth: number): void;
	static SetJavascriptRefValue(Handle: JavascriptPropertyHandle,InValue: JavascriptRef): EPropertyAccessResult;
	static SetHAlign(Decl: JavascriptDetailWidgetDecl,InAlignment: EHorizontalAlignment): void;
	static SetFilterString(Row: JavascriptDetailWidgetRow,InFilterString: string): void;
	static SetContent(Decl: JavascriptDetailWidgetDecl,Widget: JavascriptSlateWidget): void;
	static RequestRefresh(CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,bForce: boolean): void;
	static NameContent(Row: JavascriptDetailWidgetRow): JavascriptDetailWidgetDecl;
	static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
	static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayPropertyWithValueType(Handle: JavascriptPropertyHandle): boolean;
	static IsArrayProperty(Handle: JavascriptPropertyHandle): boolean;
	static GetValueAsFormattedString(Handle: JavascriptPropertyHandle,OutValue?: string): {OutValue: string, $: EPropertyAccessResult};
	static GetProperty(Handle: JavascriptPropertyHandle): Property;
	static GetParentHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetOuterObjects(Handle: JavascriptPropertyHandle): UObject[];
	static GetObjectValue(Handle: JavascriptPropertyHandle,OutValue?: UObject): {OutValue: UObject, $: EPropertyAccessResult};
	static GetMetaData(Handle: JavascriptPropertyHandle,Key: string): string;
	static GetKeyHandle(Handle: JavascriptPropertyHandle): JavascriptPropertyHandle;
	static GetJavascriptRefValue(Handle: JavascriptPropertyHandle,OutValue?: JavascriptRef): {OutValue: JavascriptRef, $: EPropertyAccessResult};
	static GetIndexInArray(Handle: JavascriptPropertyHandle): number;
	static GetChildHandle(Parent: JavascriptPropertyHandle,Name: string): JavascriptPropertyHandle;
	static GenerateStructValueWidget(ChildBuilder: JavascriptDetailChildrenBuilder,StructPropertyHandle: JavascriptPropertyHandle): JavascriptSlateWidget;
	static GeneratePathToProperty(Handle: JavascriptPropertyHandle): string;
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
	ForceRefresh(): void;
	Destruct(): void;
	Construct(): void;
	static C(Other: UObject | any): PropertyEditor;
}

declare class JavascriptPropertyTable extends Widget { 
	OnGenerateInvalidCellWidget: UnrealEngineDelegate<() => JavascriptSlateWidget>;
	bUseCustomColumns: boolean;
	static Load(ResourceName: string): JavascriptPropertyTable;
	static Find(Outer: UObject, ResourceName: string): JavascriptPropertyTable;
	static GetDefaultObject(): JavascriptPropertyTable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptPropertyTable;
	SetEditingObjects(InEditingObjects: UObject[]): void;
	GetSelectedTableObjects(): UObject[];
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
	IsCustomNode: boolean;
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
	GetOwnerPanel(): JavascriptSlateWidget;
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
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
	OnGetValueWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => Widget>;
	OnGetActualPinWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => Widget>;
	OnGetPinStatusIndicator: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => Widget>;
	OnDisableMakePins: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => boolean>;
	OnUsingDefaultPin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetPinLabelVisibility: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => boolean>;
	OnGetCustomPinBoxWidget: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => JavascriptSlateWidget>;
	OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
	OnDetermineWiringStyle: UnrealEngineDelegate<(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => void>;
	OnComputeSplineTangent: UnrealEngineDelegate<(A: Vector2D, B: Vector2D) => Vector2D>;
	OnDrawSplineWithArrow: UnrealEngineDelegate<(A: Vector2D, B: Vector2D, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer, ArrowRadius: Vector2D) => boolean>;
	OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<(A: Geometry, B: Geometry, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnDrawPreviewConnector: UnrealEngineDelegate<(PinGeometry: Geometry, StartPoint: Vector2D, Endpoint: Vector2D, Pin: JavascriptEdGraphPin, Params: JavascriptConnectionParams, Container: JavascriptGraphConnectionDrawingPolicyContainer) => boolean>;
	OnTakeUserWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => Widget>;
	OnTakeTitleAreaWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => Widget>;
	OnTakeErrorReportingWidget: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode) => Widget>;
	OnGetString: UnrealEngineDelegate<(Instance: JavascriptGraphEdNode, Query: EGraphSchemaGetStringQuery) => string>;
	OnBuildMenu: UnrealEngineDelegate<(Builder: JavascriptGraphMenuBuilder) => void>;
	OnAllocateDefaultPins: UnrealEngineDelegate<(UNode: JavascriptGraphEdNode) => void>;
	OnCreatePin: UnrealEngineDelegate<(Pin: JavascriptEdGraphPin) => Widget>;
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

declare class JavascriptGraphEdCustomNodeWidget extends Widget { 
	EdNode: JavascriptGraphEdNode;
	static Load(ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdCustomNodeWidget;
	static GetDefaultObject(): JavascriptGraphEdCustomNodeWidget;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdCustomNodeWidget;
	SetNode(InEdNode: JavascriptGraphEdNode): void;
	SetGraphPanel(InGraphPanel: JavascriptSlateWidget): void;
	static C(Other: UObject | any): JavascriptGraphEdCustomNodeWidget;
}

declare class JavascriptNodeCreator { 
	UNode: JavascriptGraphEdNode;
	clone() : JavascriptNodeCreator;
	static C(Other: UObject | any): JavascriptNodeCreator;
	Finalize(): {Creator: JavascriptNodeCreator};
	static Finalize(Creator?: JavascriptNodeCreator): {Creator: JavascriptNodeCreator};
}

declare class JavascriptGraphEdGraph extends EdGraph { 
	CustomNodes: JavascriptGraphEdNode[];
	static Load(ResourceName: string): JavascriptGraphEdGraph;
	static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
	static GetDefaultObject(): JavascriptGraphEdGraph;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptGraphEdGraph;
	RebuildGenericGraph(): void;
	static C(Other: UObject | any): JavascriptGraphEdGraph;
	CustomNodeCreator(): JavascriptNodeCreator;
	NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
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
	static SetPinContainerType(A: JavascriptEdGraphPin,ContainerType: EJavascriptPinContainerType): void;
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
	static GetOwnerPanel(UNode: JavascriptGraphEdNode): JavascriptSlateWidget;
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
	static CustomNodeCreator(Graph: JavascriptGraphEdGraph): JavascriptNodeCreator;
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

declare type EPinVisibility = 'Pin_Show' | 'Pin_HideNoConnection' | 'Pin_HideNoConnectionNoDefault' | 'Pin_MAX';
declare var EPinVisibility : { Pin_Show:'Pin_Show',Pin_HideNoConnection:'Pin_HideNoConnection',Pin_HideNoConnectionNoDefault:'Pin_HideNoConnectionNoDefault',Pin_MAX:'Pin_MAX', };
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
	SetPinVisibility(InVisibility: EPinVisibility): void;
	SetNodeSelection(UNode: EdGraphNode,bSelect: boolean): void;
	SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
	SelectAllNodes(): void;
	NotifyGraphChanged(): void;
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

declare class OnGetCustomPinBoxWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGetCustomPinBoxWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGetCustomPinBoxWidget__PythonCallable;
	static GetDefaultObject(): OnGetCustomPinBoxWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGetCustomPinBoxWidget__PythonCallable;
	static C(Other: UObject | any): OnGetCustomPinBoxWidget__PythonCallable;
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

declare class OnGenerateInvalidCellWidget__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnGenerateInvalidCellWidget__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnGenerateInvalidCellWidget__PythonCallable;
	static GetDefaultObject(): OnGenerateInvalidCellWidget__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnGenerateInvalidCellWidget__PythonCallable;
	static C(Other: UObject | any): OnGenerateInvalidCellWidget__PythonCallable;
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

declare class OnHook__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): OnHook__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): OnHook__PythonCallable;
	static GetDefaultObject(): OnHook__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): OnHook__PythonCallable;
	static C(Other: UObject | any): OnHook__PythonCallable;
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

declare class JavascriptCanExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptCanExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptCanExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptCanExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptCanExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptCanExecuteAction__PythonCallable;
}

declare class JavascriptExecuteAction__PythonCallable extends PythonCallableForDelegate { 
	static Load(ResourceName: string): JavascriptExecuteAction__PythonCallable;
	static Find(Outer: UObject, ResourceName: string): JavascriptExecuteAction__PythonCallable;
	static GetDefaultObject(): JavascriptExecuteAction__PythonCallable;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): JavascriptExecuteAction__PythonCallable;
	static C(Other: UObject | any): JavascriptExecuteAction__PythonCallable;
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

declare class EdModeInteractiveToolsContext extends InteractiveToolsContext { 
	StandardVertexColorMaterial: MaterialInterface;
	static Load(ResourceName: string): EdModeInteractiveToolsContext;
	static Find(Outer: UObject, ResourceName: string): EdModeInteractiveToolsContext;
	static GetDefaultObject(): EdModeInteractiveToolsContext;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): EdModeInteractiveToolsContext;
	static C(Other: UObject | any): EdModeInteractiveToolsContext;
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
	bBuildAsFramework: boolean;
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
	IndirectArgumentTier: number;
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
	ChunkSizeKB: number;
	bUseAudioStreamCaching: boolean;
	CacheSizeKB: number;
	bResampleForDevice: boolean;
	SoundCueCookQualityIndex: number;
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
declare type ELuminPrivilege = 'Invalid' | 'BatteryInfo' | 'CameraCapture' | 'WorldReconstruction' | 'InAppPurchase' | 'AudioCaptureMic' | 'DrmCertificates' | 'Occlusion' | 'LowLatencyLightwear' | 'Internet' | 'IdentityRead' | 'BackgroundDownload' | 'BackgroundUpload' | 'MediaDrm' | 'Media' | 'MediaMetadata' | 'PowerInfo' | 'LocalAreaNetwork' | 'VoiceInput' | 'Documents' | 'ConnectBackgroundMusicService' | 'RegisterBackgroundMusicService' | 'PwFoundObjRead' | 'NormalNotificationsUsage' | 'MusicService' | 'ControllerPose' | 'ScreensProvider' | 'GesturesSubscribe' | 'GesturesConfig' | 'AddressBookRead' | 'AddressBookWrite' | 'CoarseLocation' | 'HandMesh' | 'WifiStatusRead' | 'ELuminPrivilege_MAX';
declare var ELuminPrivilege : { Invalid:'Invalid',BatteryInfo:'BatteryInfo',CameraCapture:'CameraCapture',WorldReconstruction:'WorldReconstruction',InAppPurchase:'InAppPurchase',AudioCaptureMic:'AudioCaptureMic',DrmCertificates:'DrmCertificates',Occlusion:'Occlusion',LowLatencyLightwear:'LowLatencyLightwear',Internet:'Internet',IdentityRead:'IdentityRead',BackgroundDownload:'BackgroundDownload',BackgroundUpload:'BackgroundUpload',MediaDrm:'MediaDrm',Media:'Media',MediaMetadata:'MediaMetadata',PowerInfo:'PowerInfo',LocalAreaNetwork:'LocalAreaNetwork',VoiceInput:'VoiceInput',Documents:'Documents',ConnectBackgroundMusicService:'ConnectBackgroundMusicService',RegisterBackgroundMusicService:'RegisterBackgroundMusicService',PwFoundObjRead:'PwFoundObjRead',NormalNotificationsUsage:'NormalNotificationsUsage',MusicService:'MusicService',ControllerPose:'ControllerPose',ScreensProvider:'ScreensProvider',GesturesSubscribe:'GesturesSubscribe',GesturesConfig:'GesturesConfig',AddressBookRead:'AddressBookRead',AddressBookWrite:'AddressBookWrite',CoarseLocation:'CoarseLocation',HandMesh:'HandMesh',WifiStatusRead:'WifiStatusRead',ELuminPrivilege_MAX:'ELuminPrivilege_MAX', };
declare type ELuminComponentSubElementType = 'FileExtension' | 'MimeType' | 'Mode' | 'MusicAttribute' | 'Schema' | 'ELuminComponentSubElementType_MAX';
declare var ELuminComponentSubElementType : { FileExtension:'FileExtension',MimeType:'MimeType',Mode:'Mode',MusicAttribute:'MusicAttribute',Schema:'Schema',ELuminComponentSubElementType_MAX:'ELuminComponentSubElementType_MAX', };
declare class LuminComponentSubElement { 
	ElementType: ELuminComponentSubElementType;
	Value: string;
	clone() : LuminComponentSubElement;
	static C(Other: UObject | any): LuminComponentSubElement;
}

declare type ELuminComponentType = 'Universe' | 'Fullscreen' | 'SearchProvider' | 'MusicService' | 'Screens' | 'ScreensImmersive' | 'Console' | 'SystemUI' | 'ELuminComponentType_MAX';
declare var ELuminComponentType : { Universe:'Universe',Fullscreen:'Fullscreen',SearchProvider:'SearchProvider',MusicService:'MusicService',Screens:'Screens',ScreensImmersive:'ScreensImmersive',Console:'Console',SystemUI:'SystemUI',ELuminComponentType_MAX:'ELuminComponentType_MAX', };
declare class LuminComponentElement { 
	Name: string;
	VisibleName: string;
	ExecutableName: string;
	ComponentType: ELuminComponentType;
	ExtraComponentSubElements: LuminComponentSubElement[];
	clone() : LuminComponentElement;
	static C(Other: UObject | any): LuminComponentElement;
}

declare class LuminRuntimeSettings extends UObject { 
	PackageName: string;
	ApplicationDisplayName: string;
	bIsScreensApp: boolean;
	FrameTimingHint: ELuminFrameTimingHint;
	bProtectedContent: boolean;
	bUseMobileRendering: boolean;
	bUseVulkan: boolean;
	Certificate: FilePath;
	IconModelPath: DirectoryPath;
	IconPortalPath: DirectoryPath;
	VersionCode: number;
	MinimumAPILevel: number;
	AppPrivileges: ELuminPrivilege[];
	ExtraComponentSubElements: LuminComponentSubElement[];
	ExtraComponentElements: LuminComponentElement[];
	SpatializationPlugin: string;
	ReverbPlugin: string;
	OcclusionPlugin: string;
	SoundCueCookQualityIndex: number;
	bRemoveDebugInfo: boolean;
	VulkanValidationLayerLibs: DirectoryPath;
	bFrameVignette: boolean;
	static Load(ResourceName: string): LuminRuntimeSettings;
	static Find(Outer: UObject, ResourceName: string): LuminRuntimeSettings;
	static GetDefaultObject(): LuminRuntimeSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): LuminRuntimeSettings;
	static C(Other: UObject | any): LuminRuntimeSettings;
}

declare class AndroidSDKSettings extends UObject { 
	SDKPath: DirectoryPath;
	NDKPath: DirectoryPath;
	JavaPath: DirectoryPath;
	SDKAPILevel: string;
	NDKAPILevel: string;
	static Load(ResourceName: string): AndroidSDKSettings;
	static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
	static GetDefaultObject(): AndroidSDKSettings;
	static CreateDefaultSubobject(Name: string, Transient?: boolean, Required?: boolean, Abstract?: boolean): AndroidSDKSettings;
	static C(Other: UObject | any): AndroidSDKSettings;
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
	bConstrainGraphToLocalMinMax: boolean;
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
	ClothingAssets: ClothingAssetCommon[];
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

