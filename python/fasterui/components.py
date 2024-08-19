from __future__ import annotations

from typing import Annotated, Literal, Union
from pydantic import BaseModel, Field, RootModel


class Action(BaseModel):
    action_model: Literal["Action"] = Field(default="Action")
    go_to_url: str = None

    @staticmethod
    def navigate_to(url: str) -> Action:
        return Action(go_to_url=url)


class Button(BaseModel):
    component_type: Literal["Button"] = Field(default="Button")
    primary: bool | None = Field(default=False)
    size: Literal["small", "medium", "large"] = None
    href: str = None
    label: str


class ButtonGroupItem(BaseModel):
    label: str
    is_active: bool = False
    href: str = None


class ButtonGroup(BaseModel):
    component_type: Literal["ButtonGroup"] = Field(default="ButtonGroup")
    items: list[ButtonGroupItem]


class DatePicker(BaseModel):
    component_type: Literal["DatePicker"] = Field(default="DatePicker")


class FlexBox(BaseModel):
    """FlexBox is a stack of components in a specific direction.

    If you want the flexbox to wrap after a certain number of items, you can use the `Grid` component.
    """

    component_type: Literal["FlexBox"] = Field(default="FlexBox")
    """Component type."""

    gap: int = None
    """Gap between items."""

    dir: Literal["horizontal", "vertical"]
    """Direction of the flexbox. Either horizontal or vertical."""

    children: list[Component]
    """List of components in the flexbox."""


class Grid(BaseModel):
    """A Grid of components.

    If you want to have an infinite number of items in a row or column, you can use the `FlexBox` component.
    """

    component_type: Literal["Grid"] = Field(default="Grid")
    cols: int
    gapX: int = None
    gapY: int = None
    children: list[Component]


class Icon(BaseModel):
    component_type: Literal["Icon"] = Field(default="Icon")
    name: IconName
    size: Literal["small", "medium", "large"] = None


class Markdown(BaseModel):
    component_type: Literal["Markdown"] = Field(default="Markdown")
    markdown: str = None


class KeyValueString(BaseModel):
    key: str
    value: str


class PropertyCard(BaseModel):
    component_type: Literal["PropertyCard"] = Field(default="PropertyCard")
    title: str
    key_value_pairs: list[KeyValueString] = None
    condensed: bool = None
    is_active: bool = None
    href: str = None


class SectionHeader(BaseModel):
    component_type: Literal["SectionHeader"] = Field(default="SectionHeader")
    title: str
    subtitle: str = None
    size: Literal["small", "medium", "large"] = None

    children: Component | None = None


class Table(BaseModel):
    component_type: Literal["Table"] = Field(default="Table")
    columns: list[str]
    data: list[list[str]]


class Page(BaseModel):
    component_type: Literal["Page"] = Field(default="Page")
    sidebar: Component
    children: list[Component]


class Sidebar(BaseModel):
    component_type: Literal["Sidebar"] = Field(default="Sidebar")
    last_component_sticks_to_bottom: bool = None
    children: list[Component]


class NavigationSection(BaseModel):
    component_type: Literal["NavigationSection"] = Field(default="NavigationSection")
    title: str = None
    children: list[Component]


class NavigationButton(BaseModel):
    component_type: Literal["NavigationButton"] = Field(default="NavigationButton")
    is_active: bool = False
    icon: IconName
    label: str
    href: str = None


ComponentUnion = Union[
    Button,
    ButtonGroup,
    DatePicker,
    FlexBox,
    Grid,
    Icon,
    Markdown,
    PropertyCard,
    SectionHeader,
    Table,
    Page,
    Sidebar,
    NavigationButton,
    NavigationSection,
]


class Component(
    RootModel[Annotated[ComponentUnion, Field(discriminator="component_type")]]
): ...


IconName = Literal[
    "AcademicCapIcon",
    "AdjustmentsHorizontalIcon",
    "AdjustmentsVerticalIcon",
    "ArchiveBoxArrowDownIcon",
    "ArchiveBoxXMarkIcon",
    "ArchiveBoxIcon",
    "ArrowDownCircleIcon",
    "ArrowDownLeftIcon",
    "ArrowDownOnSquareStackIcon",
    "ArrowDownOnSquareIcon",
    "ArrowDownRightIcon",
    "ArrowDownTrayIcon",
    "ArrowDownIcon",
    "ArrowLeftCircleIcon",
    "ArrowLeftEndOnRectangleIcon",
    "ArrowLeftOnRectangleIcon",
    "ArrowLeftStartOnRectangleIcon",
    "ArrowLeftIcon",
    "ArrowLongDownIcon",
    "ArrowLongLeftIcon",
    "ArrowLongRightIcon",
    "ArrowLongUpIcon",
    "ArrowPathRoundedSquareIcon",
    "ArrowPathIcon",
    "ArrowRightCircleIcon",
    "ArrowRightEndOnRectangleIcon",
    "ArrowRightOnRectangleIcon",
    "ArrowRightStartOnRectangleIcon",
    "ArrowRightIcon",
    "ArrowSmallDownIcon",
    "ArrowSmallLeftIcon",
    "ArrowSmallRightIcon",
    "ArrowSmallUpIcon",
    "ArrowTopRightOnSquareIcon",
    "ArrowTrendingDownIcon",
    "ArrowTrendingUpIcon",
    "ArrowTurnDownLeftIcon",
    "ArrowTurnDownRightIcon",
    "ArrowTurnLeftDownIcon",
    "ArrowTurnLeftUpIcon",
    "ArrowTurnRightDownIcon",
    "ArrowTurnRightUpIcon",
    "ArrowTurnUpLeftIcon",
    "ArrowTurnUpRightIcon",
    "ArrowUpCircleIcon",
    "ArrowUpLeftIcon",
    "ArrowUpOnSquareStackIcon",
    "ArrowUpOnSquareIcon",
    "ArrowUpRightIcon",
    "ArrowUpTrayIcon",
    "ArrowUpIcon",
    "ArrowUturnDownIcon",
    "ArrowUturnLeftIcon",
    "ArrowUturnRightIcon",
    "ArrowUturnUpIcon",
    "ArrowsPointingInIcon",
    "ArrowsPointingOutIcon",
    "ArrowsRightLeftIcon",
    "ArrowsUpDownIcon",
    "AtSymbolIcon",
    "BackspaceIcon",
    "BackwardIcon",
    "BanknotesIcon",
    "Bars2Icon",
    "Bars3BottomLeftIcon",
    "Bars3BottomRightIcon",
    "Bars3CenterLeftIcon",
    "Bars3Icon",
    "Bars4Icon",
    "BarsArrowDownIcon",
    "BarsArrowUpIcon",
    "Battery0Icon",
    "Battery100Icon",
    "Battery50Icon",
    "BeakerIcon",
    "BellAlertIcon",
    "BellSlashIcon",
    "BellSnoozeIcon",
    "BellIcon",
    "BoldIcon",
    "BoltSlashIcon",
    "BoltIcon",
    "BookOpenIcon",
    "BookmarkSlashIcon",
    "BookmarkSquareIcon",
    "BookmarkIcon",
    "BriefcaseIcon",
    "BugAntIcon",
    "BuildingLibraryIcon",
    "BuildingOffice2Icon",
    "BuildingOfficeIcon",
    "BuildingStorefrontIcon",
    "CakeIcon",
    "CalculatorIcon",
    "CalendarDateRangeIcon",
    "CalendarDaysIcon",
    "CalendarIcon",
    "CameraIcon",
    "ChartBarSquareIcon",
    "ChartBarIcon",
    "ChartPieIcon",
    "ChatBubbleBottomCenterTextIcon",
    "ChatBubbleBottomCenterIcon",
    "ChatBubbleLeftEllipsisIcon",
    "ChatBubbleLeftRightIcon",
    "ChatBubbleLeftIcon",
    "ChatBubbleOvalLeftEllipsisIcon",
    "ChatBubbleOvalLeftIcon",
    "CheckBadgeIcon",
    "CheckCircleIcon",
    "CheckIcon",
    "ChevronDoubleDownIcon",
    "ChevronDoubleLeftIcon",
    "ChevronDoubleRightIcon",
    "ChevronDoubleUpIcon",
    "ChevronDownIcon",
    "ChevronLeftIcon",
    "ChevronRightIcon",
    "ChevronUpDownIcon",
    "ChevronUpIcon",
    "CircleStackIcon",
    "ClipboardDocumentCheckIcon",
    "ClipboardDocumentListIcon",
    "ClipboardDocumentIcon",
    "ClipboardIcon",
    "ClockIcon",
    "CloudArrowDownIcon",
    "CloudArrowUpIcon",
    "CloudIcon",
    "CodeBracketSquareIcon",
    "CodeBracketIcon",
    "Cog6ToothIcon",
    "Cog8ToothIcon",
    "CogIcon",
    "CommandLineIcon",
    "ComputerDesktopIcon",
    "CpuChipIcon",
    "CreditCardIcon",
    "CubeTransparentIcon",
    "CubeIcon",
    "CurrencyBangladeshiIcon",
    "CurrencyDollarIcon",
    "CurrencyEuroIcon",
    "CurrencyPoundIcon",
    "CurrencyRupeeIcon",
    "CurrencyYenIcon",
    "CursorArrowRaysIcon",
    "CursorArrowRippleIcon",
    "DevicePhoneMobileIcon",
    "DeviceTabletIcon",
    "DivideIcon",
    "DocumentArrowDownIcon",
    "DocumentArrowUpIcon",
    "DocumentChartBarIcon",
    "DocumentCheckIcon",
    "DocumentCurrencyBangladeshiIcon",
    "DocumentCurrencyDollarIcon",
    "DocumentCurrencyEuroIcon",
    "DocumentCurrencyPoundIcon",
    "DocumentCurrencyRupeeIcon",
    "DocumentCurrencyYenIcon",
    "DocumentDuplicateIcon",
    "DocumentMagnifyingGlassIcon",
    "DocumentMinusIcon",
    "DocumentPlusIcon",
    "DocumentTextIcon",
    "DocumentIcon",
    "EllipsisHorizontalCircleIcon",
    "EllipsisHorizontalIcon",
    "EllipsisVerticalIcon",
    "EnvelopeOpenIcon",
    "EnvelopeIcon",
    "EqualsIcon",
    "ExclamationCircleIcon",
    "ExclamationTriangleIcon",
    "EyeDropperIcon",
    "EyeSlashIcon",
    "EyeIcon",
    "FaceFrownIcon",
    "FaceSmileIcon",
    "FilmIcon",
    "FingerPrintIcon",
    "FireIcon",
    "FlagIcon",
    "FolderArrowDownIcon",
    "FolderMinusIcon",
    "FolderOpenIcon",
    "FolderPlusIcon",
    "FolderIcon",
    "ForwardIcon",
    "FunnelIcon",
    "GifIcon",
    "GiftTopIcon",
    "GiftIcon",
    "GlobeAltIcon",
    "GlobeAmericasIcon",
    "GlobeAsiaAustraliaIcon",
    "GlobeEuropeAfricaIcon",
    "H1Icon",
    "H2Icon",
    "H3Icon",
    "HandRaisedIcon",
    "HandThumbDownIcon",
    "HandThumbUpIcon",
    "HashtagIcon",
    "HeartIcon",
    "HomeModernIcon",
    "HomeIcon",
    "IdentificationIcon",
    "InboxArrowDownIcon",
    "InboxStackIcon",
    "InboxIcon",
    "InformationCircleIcon",
    "ItalicIcon",
    "KeyIcon",
    "LanguageIcon",
    "LifebuoyIcon",
    "LightBulbIcon",
    "LinkSlashIcon",
    "LinkIcon",
    "ListBulletIcon",
    "LockClosedIcon",
    "LockOpenIcon",
    "MagnifyingGlassCircleIcon",
    "MagnifyingGlassMinusIcon",
    "MagnifyingGlassPlusIcon",
    "MagnifyingGlassIcon",
    "MapPinIcon",
    "MapIcon",
    "MegaphoneIcon",
    "MicrophoneIcon",
    "MinusCircleIcon",
    "MinusSmallIcon",
    "MinusIcon",
    "MoonIcon",
    "MusicalNoteIcon",
    "NewspaperIcon",
    "NoSymbolIcon",
    "NumberedListIcon",
    "PaintBrushIcon",
    "PaperAirplaneIcon",
    "PaperClipIcon",
    "PauseCircleIcon",
    "PauseIcon",
    "PencilSquareIcon",
    "PencilIcon",
    "PercentBadgeIcon",
    "PhoneArrowDownLeftIcon",
    "PhoneArrowUpRightIcon",
    "PhoneXMarkIcon",
    "PhoneIcon",
    "PhotoIcon",
    "PlayCircleIcon",
    "PlayPauseIcon",
    "PlayIcon",
    "PlusCircleIcon",
    "PlusSmallIcon",
    "PlusIcon",
    "PowerIcon",
    "PresentationChartBarIcon",
    "PresentationChartLineIcon",
    "PrinterIcon",
    "PuzzlePieceIcon",
    "QrCodeIcon",
    "QuestionMarkCircleIcon",
    "QueueListIcon",
    "RadioIcon",
    "ReceiptPercentIcon",
    "ReceiptRefundIcon",
    "RectangleGroupIcon",
    "RectangleStackIcon",
    "RocketLaunchIcon",
    "RssIcon",
    "ScaleIcon",
    "ScissorsIcon",
    "ServerStackIcon",
    "ServerIcon",
    "ShareIcon",
    "ShieldCheckIcon",
    "ShieldExclamationIcon",
    "ShoppingBagIcon",
    "ShoppingCartIcon",
    "SignalSlashIcon",
    "SignalIcon",
    "SlashIcon",
    "SparklesIcon",
    "SpeakerWaveIcon",
    "SpeakerXMarkIcon",
    "Square2StackIcon",
    "Square3Stack3DIcon",
    "Squares2X2Icon",
    "SquaresPlusIcon",
    "StarIcon",
    "StopCircleIcon",
    "StopIcon",
    "StrikethroughIcon",
    "SunIcon",
    "SwatchIcon",
    "TableCellsIcon",
    "TagIcon",
    "TicketIcon",
    "TrashIcon",
    "TrophyIcon",
    "TruckIcon",
    "TvIcon",
    "UnderlineIcon",
    "UserCircleIcon",
    "UserGroupIcon",
    "UserMinusIcon",
    "UserPlusIcon",
    "UserIcon",
    "UsersIcon",
    "VariableIcon",
    "VideoCameraSlashIcon",
    "VideoCameraIcon",
    "ViewColumnsIcon",
    "ViewfinderCircleIcon",
    "WalletIcon",
    "WifiIcon",
    "WindowIcon",
    "WrenchScrewdriverIcon",
    "WrenchIcon",
    "XCircleIcon",
    "XMarkIcon",
]
