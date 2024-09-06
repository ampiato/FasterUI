#  # mypy: ignore-errors
from __future__ import annotations

from dataclasses import Field, dataclass
from typing import Literal, Union



@dataclass
class AmpiatoLogo: ...


@dataclass
class Action:
    action: Literal["navigate_to", "open_modal", "close_modal", "submit_form", "reset_form"] = "navigate_to"
    go_to_url: str | None = None
    modal_component: Component | None = None

    @staticmethod
    def navigate_to(url: str) -> Action:
        return Action(go_to_url=url)

    @staticmethod
    def open_modal(c: Component) -> Action:
        return Action(action="open_modal", modal_component=c)

    @staticmethod
    def close_modal() -> Action:
        return Action(action="close_modal")

    @staticmethod
    def submit_form() -> Action:
        return Action(action="submit_form")

    @staticmethod
    def reset_form() -> Action:
        return Action(action="reset_form")


@dataclass
class Button:
    label: str
    action: Action | None = None
    primary: bool = False
    size: Literal["small", "medium", "large"] = "medium"


@dataclass
class ButtonGroupItem:
    label: str
    action: Action | None = None
    is_active: bool = False


@dataclass
class ButtonGroup:
    items: list[ButtonGroupItem]
    size: Literal["small", "medium", "large"] = "medium"


@dataclass
class DatePicker: ...


@dataclass
class FlexBox:
    children: list[Component]
    gap: int = 4
    dir: Literal["horizontal", "vertical"] = "vertical"


@dataclass
class Grid:
    children: list[Component]
    cols: int = 2
    gapX: int = 4
    gapY: int = 4


@dataclass
class Icon:
    name: IconName
    size: Literal["small", "medium", "large"] = "medium"


@dataclass
class Markdown:
    markdown: str = ""


@dataclass
class PropertyCard:
    title: str
    key_value_pairs: list[tuple[str, str]]
    condensed: bool = False
    is_active: bool = False
    action: Action | None = None


@dataclass
class SectionHeader:
    title: str
    subtitle: str = ""
    size: Literal["small", "medium", "large"] = "medium"
    children: Component | None = None


@dataclass
class TableCell:
    value: str
    bold: bool = False
    italic: bool = False


@dataclass
class Table:
    columns: list[str]
    data: list[list[str | TableCell | Component]]


@dataclass
class Page:
    children: list[Component]
    sidebar: Component | None = None


@dataclass
class Sidebar:
    children: list[Component]
    last_component_sticks_to_bottom: bool = False


@dataclass
class NavigationSection:
    children: list[Component]
    title: str = ""


@dataclass
class NavigationButton:
    label: str
    icon: IconName
    action: Action | None = None
    is_active: bool = False


Component = Union[
    AmpiatoLogo,
    Button,
    ButtonGroup,
    DatePicker,
    FlexBox,
    Grid,
    Icon,
    Markdown,
    NavigationButton,
    NavigationSection,
    Page,
    PropertyCard,
    SectionHeader,
    Sidebar,
    Table,
]


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

