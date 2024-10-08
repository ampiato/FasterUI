/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Icon
 */
export interface Icon {
    /**
     * 
     * @type {string}
     * @memberof Icon
     */
    componentType?: IconComponentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Icon
     */
    name: IconNameEnum;
    /**
     * 
     * @type {string}
     * @memberof Icon
     */
    size?: IconSizeEnum;
}


/**
 * @export
 */
export const IconComponentTypeEnum = {
    Icon: 'Icon'
} as const;
export type IconComponentTypeEnum = typeof IconComponentTypeEnum[keyof typeof IconComponentTypeEnum];

/**
 * @export
 */
export const IconNameEnum = {
    AcademicCapIcon: 'AcademicCapIcon',
    AdjustmentsHorizontalIcon: 'AdjustmentsHorizontalIcon',
    AdjustmentsVerticalIcon: 'AdjustmentsVerticalIcon',
    ArchiveBoxArrowDownIcon: 'ArchiveBoxArrowDownIcon',
    ArchiveBoxXMarkIcon: 'ArchiveBoxXMarkIcon',
    ArchiveBoxIcon: 'ArchiveBoxIcon',
    ArrowDownCircleIcon: 'ArrowDownCircleIcon',
    ArrowDownLeftIcon: 'ArrowDownLeftIcon',
    ArrowDownOnSquareStackIcon: 'ArrowDownOnSquareStackIcon',
    ArrowDownOnSquareIcon: 'ArrowDownOnSquareIcon',
    ArrowDownRightIcon: 'ArrowDownRightIcon',
    ArrowDownTrayIcon: 'ArrowDownTrayIcon',
    ArrowDownIcon: 'ArrowDownIcon',
    ArrowLeftCircleIcon: 'ArrowLeftCircleIcon',
    ArrowLeftEndOnRectangleIcon: 'ArrowLeftEndOnRectangleIcon',
    ArrowLeftOnRectangleIcon: 'ArrowLeftOnRectangleIcon',
    ArrowLeftStartOnRectangleIcon: 'ArrowLeftStartOnRectangleIcon',
    ArrowLeftIcon: 'ArrowLeftIcon',
    ArrowLongDownIcon: 'ArrowLongDownIcon',
    ArrowLongLeftIcon: 'ArrowLongLeftIcon',
    ArrowLongRightIcon: 'ArrowLongRightIcon',
    ArrowLongUpIcon: 'ArrowLongUpIcon',
    ArrowPathRoundedSquareIcon: 'ArrowPathRoundedSquareIcon',
    ArrowPathIcon: 'ArrowPathIcon',
    ArrowRightCircleIcon: 'ArrowRightCircleIcon',
    ArrowRightEndOnRectangleIcon: 'ArrowRightEndOnRectangleIcon',
    ArrowRightOnRectangleIcon: 'ArrowRightOnRectangleIcon',
    ArrowRightStartOnRectangleIcon: 'ArrowRightStartOnRectangleIcon',
    ArrowRightIcon: 'ArrowRightIcon',
    ArrowSmallDownIcon: 'ArrowSmallDownIcon',
    ArrowSmallLeftIcon: 'ArrowSmallLeftIcon',
    ArrowSmallRightIcon: 'ArrowSmallRightIcon',
    ArrowSmallUpIcon: 'ArrowSmallUpIcon',
    ArrowTopRightOnSquareIcon: 'ArrowTopRightOnSquareIcon',
    ArrowTrendingDownIcon: 'ArrowTrendingDownIcon',
    ArrowTrendingUpIcon: 'ArrowTrendingUpIcon',
    ArrowTurnDownLeftIcon: 'ArrowTurnDownLeftIcon',
    ArrowTurnDownRightIcon: 'ArrowTurnDownRightIcon',
    ArrowTurnLeftDownIcon: 'ArrowTurnLeftDownIcon',
    ArrowTurnLeftUpIcon: 'ArrowTurnLeftUpIcon',
    ArrowTurnRightDownIcon: 'ArrowTurnRightDownIcon',
    ArrowTurnRightUpIcon: 'ArrowTurnRightUpIcon',
    ArrowTurnUpLeftIcon: 'ArrowTurnUpLeftIcon',
    ArrowTurnUpRightIcon: 'ArrowTurnUpRightIcon',
    ArrowUpCircleIcon: 'ArrowUpCircleIcon',
    ArrowUpLeftIcon: 'ArrowUpLeftIcon',
    ArrowUpOnSquareStackIcon: 'ArrowUpOnSquareStackIcon',
    ArrowUpOnSquareIcon: 'ArrowUpOnSquareIcon',
    ArrowUpRightIcon: 'ArrowUpRightIcon',
    ArrowUpTrayIcon: 'ArrowUpTrayIcon',
    ArrowUpIcon: 'ArrowUpIcon',
    ArrowUturnDownIcon: 'ArrowUturnDownIcon',
    ArrowUturnLeftIcon: 'ArrowUturnLeftIcon',
    ArrowUturnRightIcon: 'ArrowUturnRightIcon',
    ArrowUturnUpIcon: 'ArrowUturnUpIcon',
    ArrowsPointingInIcon: 'ArrowsPointingInIcon',
    ArrowsPointingOutIcon: 'ArrowsPointingOutIcon',
    ArrowsRightLeftIcon: 'ArrowsRightLeftIcon',
    ArrowsUpDownIcon: 'ArrowsUpDownIcon',
    AtSymbolIcon: 'AtSymbolIcon',
    BackspaceIcon: 'BackspaceIcon',
    BackwardIcon: 'BackwardIcon',
    BanknotesIcon: 'BanknotesIcon',
    Bars2Icon: 'Bars2Icon',
    Bars3BottomLeftIcon: 'Bars3BottomLeftIcon',
    Bars3BottomRightIcon: 'Bars3BottomRightIcon',
    Bars3CenterLeftIcon: 'Bars3CenterLeftIcon',
    Bars3Icon: 'Bars3Icon',
    Bars4Icon: 'Bars4Icon',
    BarsArrowDownIcon: 'BarsArrowDownIcon',
    BarsArrowUpIcon: 'BarsArrowUpIcon',
    Battery0Icon: 'Battery0Icon',
    Battery100Icon: 'Battery100Icon',
    Battery50Icon: 'Battery50Icon',
    BeakerIcon: 'BeakerIcon',
    BellAlertIcon: 'BellAlertIcon',
    BellSlashIcon: 'BellSlashIcon',
    BellSnoozeIcon: 'BellSnoozeIcon',
    BellIcon: 'BellIcon',
    BoldIcon: 'BoldIcon',
    BoltSlashIcon: 'BoltSlashIcon',
    BoltIcon: 'BoltIcon',
    BookOpenIcon: 'BookOpenIcon',
    BookmarkSlashIcon: 'BookmarkSlashIcon',
    BookmarkSquareIcon: 'BookmarkSquareIcon',
    BookmarkIcon: 'BookmarkIcon',
    BriefcaseIcon: 'BriefcaseIcon',
    BugAntIcon: 'BugAntIcon',
    BuildingLibraryIcon: 'BuildingLibraryIcon',
    BuildingOffice2Icon: 'BuildingOffice2Icon',
    BuildingOfficeIcon: 'BuildingOfficeIcon',
    BuildingStorefrontIcon: 'BuildingStorefrontIcon',
    CakeIcon: 'CakeIcon',
    CalculatorIcon: 'CalculatorIcon',
    CalendarDateRangeIcon: 'CalendarDateRangeIcon',
    CalendarDaysIcon: 'CalendarDaysIcon',
    CalendarIcon: 'CalendarIcon',
    CameraIcon: 'CameraIcon',
    ChartBarSquareIcon: 'ChartBarSquareIcon',
    ChartBarIcon: 'ChartBarIcon',
    ChartPieIcon: 'ChartPieIcon',
    ChatBubbleBottomCenterTextIcon: 'ChatBubbleBottomCenterTextIcon',
    ChatBubbleBottomCenterIcon: 'ChatBubbleBottomCenterIcon',
    ChatBubbleLeftEllipsisIcon: 'ChatBubbleLeftEllipsisIcon',
    ChatBubbleLeftRightIcon: 'ChatBubbleLeftRightIcon',
    ChatBubbleLeftIcon: 'ChatBubbleLeftIcon',
    ChatBubbleOvalLeftEllipsisIcon: 'ChatBubbleOvalLeftEllipsisIcon',
    ChatBubbleOvalLeftIcon: 'ChatBubbleOvalLeftIcon',
    CheckBadgeIcon: 'CheckBadgeIcon',
    CheckCircleIcon: 'CheckCircleIcon',
    CheckIcon: 'CheckIcon',
    ChevronDoubleDownIcon: 'ChevronDoubleDownIcon',
    ChevronDoubleLeftIcon: 'ChevronDoubleLeftIcon',
    ChevronDoubleRightIcon: 'ChevronDoubleRightIcon',
    ChevronDoubleUpIcon: 'ChevronDoubleUpIcon',
    ChevronDownIcon: 'ChevronDownIcon',
    ChevronLeftIcon: 'ChevronLeftIcon',
    ChevronRightIcon: 'ChevronRightIcon',
    ChevronUpDownIcon: 'ChevronUpDownIcon',
    ChevronUpIcon: 'ChevronUpIcon',
    CircleStackIcon: 'CircleStackIcon',
    ClipboardDocumentCheckIcon: 'ClipboardDocumentCheckIcon',
    ClipboardDocumentListIcon: 'ClipboardDocumentListIcon',
    ClipboardDocumentIcon: 'ClipboardDocumentIcon',
    ClipboardIcon: 'ClipboardIcon',
    ClockIcon: 'ClockIcon',
    CloudArrowDownIcon: 'CloudArrowDownIcon',
    CloudArrowUpIcon: 'CloudArrowUpIcon',
    CloudIcon: 'CloudIcon',
    CodeBracketSquareIcon: 'CodeBracketSquareIcon',
    CodeBracketIcon: 'CodeBracketIcon',
    Cog6ToothIcon: 'Cog6ToothIcon',
    Cog8ToothIcon: 'Cog8ToothIcon',
    CogIcon: 'CogIcon',
    CommandLineIcon: 'CommandLineIcon',
    ComputerDesktopIcon: 'ComputerDesktopIcon',
    CpuChipIcon: 'CpuChipIcon',
    CreditCardIcon: 'CreditCardIcon',
    CubeTransparentIcon: 'CubeTransparentIcon',
    CubeIcon: 'CubeIcon',
    CurrencyBangladeshiIcon: 'CurrencyBangladeshiIcon',
    CurrencyDollarIcon: 'CurrencyDollarIcon',
    CurrencyEuroIcon: 'CurrencyEuroIcon',
    CurrencyPoundIcon: 'CurrencyPoundIcon',
    CurrencyRupeeIcon: 'CurrencyRupeeIcon',
    CurrencyYenIcon: 'CurrencyYenIcon',
    CursorArrowRaysIcon: 'CursorArrowRaysIcon',
    CursorArrowRippleIcon: 'CursorArrowRippleIcon',
    DevicePhoneMobileIcon: 'DevicePhoneMobileIcon',
    DeviceTabletIcon: 'DeviceTabletIcon',
    DivideIcon: 'DivideIcon',
    DocumentArrowDownIcon: 'DocumentArrowDownIcon',
    DocumentArrowUpIcon: 'DocumentArrowUpIcon',
    DocumentChartBarIcon: 'DocumentChartBarIcon',
    DocumentCheckIcon: 'DocumentCheckIcon',
    DocumentCurrencyBangladeshiIcon: 'DocumentCurrencyBangladeshiIcon',
    DocumentCurrencyDollarIcon: 'DocumentCurrencyDollarIcon',
    DocumentCurrencyEuroIcon: 'DocumentCurrencyEuroIcon',
    DocumentCurrencyPoundIcon: 'DocumentCurrencyPoundIcon',
    DocumentCurrencyRupeeIcon: 'DocumentCurrencyRupeeIcon',
    DocumentCurrencyYenIcon: 'DocumentCurrencyYenIcon',
    DocumentDuplicateIcon: 'DocumentDuplicateIcon',
    DocumentMagnifyingGlassIcon: 'DocumentMagnifyingGlassIcon',
    DocumentMinusIcon: 'DocumentMinusIcon',
    DocumentPlusIcon: 'DocumentPlusIcon',
    DocumentTextIcon: 'DocumentTextIcon',
    DocumentIcon: 'DocumentIcon',
    EllipsisHorizontalCircleIcon: 'EllipsisHorizontalCircleIcon',
    EllipsisHorizontalIcon: 'EllipsisHorizontalIcon',
    EllipsisVerticalIcon: 'EllipsisVerticalIcon',
    EnvelopeOpenIcon: 'EnvelopeOpenIcon',
    EnvelopeIcon: 'EnvelopeIcon',
    EqualsIcon: 'EqualsIcon',
    ExclamationCircleIcon: 'ExclamationCircleIcon',
    ExclamationTriangleIcon: 'ExclamationTriangleIcon',
    EyeDropperIcon: 'EyeDropperIcon',
    EyeSlashIcon: 'EyeSlashIcon',
    EyeIcon: 'EyeIcon',
    FaceFrownIcon: 'FaceFrownIcon',
    FaceSmileIcon: 'FaceSmileIcon',
    FilmIcon: 'FilmIcon',
    FingerPrintIcon: 'FingerPrintIcon',
    FireIcon: 'FireIcon',
    FlagIcon: 'FlagIcon',
    FolderArrowDownIcon: 'FolderArrowDownIcon',
    FolderMinusIcon: 'FolderMinusIcon',
    FolderOpenIcon: 'FolderOpenIcon',
    FolderPlusIcon: 'FolderPlusIcon',
    FolderIcon: 'FolderIcon',
    ForwardIcon: 'ForwardIcon',
    FunnelIcon: 'FunnelIcon',
    GifIcon: 'GifIcon',
    GiftTopIcon: 'GiftTopIcon',
    GiftIcon: 'GiftIcon',
    GlobeAltIcon: 'GlobeAltIcon',
    GlobeAmericasIcon: 'GlobeAmericasIcon',
    GlobeAsiaAustraliaIcon: 'GlobeAsiaAustraliaIcon',
    GlobeEuropeAfricaIcon: 'GlobeEuropeAfricaIcon',
    H1Icon: 'H1Icon',
    H2Icon: 'H2Icon',
    H3Icon: 'H3Icon',
    HandRaisedIcon: 'HandRaisedIcon',
    HandThumbDownIcon: 'HandThumbDownIcon',
    HandThumbUpIcon: 'HandThumbUpIcon',
    HashtagIcon: 'HashtagIcon',
    HeartIcon: 'HeartIcon',
    HomeModernIcon: 'HomeModernIcon',
    HomeIcon: 'HomeIcon',
    IdentificationIcon: 'IdentificationIcon',
    InboxArrowDownIcon: 'InboxArrowDownIcon',
    InboxStackIcon: 'InboxStackIcon',
    InboxIcon: 'InboxIcon',
    InformationCircleIcon: 'InformationCircleIcon',
    ItalicIcon: 'ItalicIcon',
    KeyIcon: 'KeyIcon',
    LanguageIcon: 'LanguageIcon',
    LifebuoyIcon: 'LifebuoyIcon',
    LightBulbIcon: 'LightBulbIcon',
    LinkSlashIcon: 'LinkSlashIcon',
    LinkIcon: 'LinkIcon',
    ListBulletIcon: 'ListBulletIcon',
    LockClosedIcon: 'LockClosedIcon',
    LockOpenIcon: 'LockOpenIcon',
    MagnifyingGlassCircleIcon: 'MagnifyingGlassCircleIcon',
    MagnifyingGlassMinusIcon: 'MagnifyingGlassMinusIcon',
    MagnifyingGlassPlusIcon: 'MagnifyingGlassPlusIcon',
    MagnifyingGlassIcon: 'MagnifyingGlassIcon',
    MapPinIcon: 'MapPinIcon',
    MapIcon: 'MapIcon',
    MegaphoneIcon: 'MegaphoneIcon',
    MicrophoneIcon: 'MicrophoneIcon',
    MinusCircleIcon: 'MinusCircleIcon',
    MinusSmallIcon: 'MinusSmallIcon',
    MinusIcon: 'MinusIcon',
    MoonIcon: 'MoonIcon',
    MusicalNoteIcon: 'MusicalNoteIcon',
    NewspaperIcon: 'NewspaperIcon',
    NoSymbolIcon: 'NoSymbolIcon',
    NumberedListIcon: 'NumberedListIcon',
    PaintBrushIcon: 'PaintBrushIcon',
    PaperAirplaneIcon: 'PaperAirplaneIcon',
    PaperClipIcon: 'PaperClipIcon',
    PauseCircleIcon: 'PauseCircleIcon',
    PauseIcon: 'PauseIcon',
    PencilSquareIcon: 'PencilSquareIcon',
    PencilIcon: 'PencilIcon',
    PercentBadgeIcon: 'PercentBadgeIcon',
    PhoneArrowDownLeftIcon: 'PhoneArrowDownLeftIcon',
    PhoneArrowUpRightIcon: 'PhoneArrowUpRightIcon',
    PhoneXMarkIcon: 'PhoneXMarkIcon',
    PhoneIcon: 'PhoneIcon',
    PhotoIcon: 'PhotoIcon',
    PlayCircleIcon: 'PlayCircleIcon',
    PlayPauseIcon: 'PlayPauseIcon',
    PlayIcon: 'PlayIcon',
    PlusCircleIcon: 'PlusCircleIcon',
    PlusSmallIcon: 'PlusSmallIcon',
    PlusIcon: 'PlusIcon',
    PowerIcon: 'PowerIcon',
    PresentationChartBarIcon: 'PresentationChartBarIcon',
    PresentationChartLineIcon: 'PresentationChartLineIcon',
    PrinterIcon: 'PrinterIcon',
    PuzzlePieceIcon: 'PuzzlePieceIcon',
    QrCodeIcon: 'QrCodeIcon',
    QuestionMarkCircleIcon: 'QuestionMarkCircleIcon',
    QueueListIcon: 'QueueListIcon',
    RadioIcon: 'RadioIcon',
    ReceiptPercentIcon: 'ReceiptPercentIcon',
    ReceiptRefundIcon: 'ReceiptRefundIcon',
    RectangleGroupIcon: 'RectangleGroupIcon',
    RectangleStackIcon: 'RectangleStackIcon',
    RocketLaunchIcon: 'RocketLaunchIcon',
    RssIcon: 'RssIcon',
    ScaleIcon: 'ScaleIcon',
    ScissorsIcon: 'ScissorsIcon',
    ServerStackIcon: 'ServerStackIcon',
    ServerIcon: 'ServerIcon',
    ShareIcon: 'ShareIcon',
    ShieldCheckIcon: 'ShieldCheckIcon',
    ShieldExclamationIcon: 'ShieldExclamationIcon',
    ShoppingBagIcon: 'ShoppingBagIcon',
    ShoppingCartIcon: 'ShoppingCartIcon',
    SignalSlashIcon: 'SignalSlashIcon',
    SignalIcon: 'SignalIcon',
    SlashIcon: 'SlashIcon',
    SparklesIcon: 'SparklesIcon',
    SpeakerWaveIcon: 'SpeakerWaveIcon',
    SpeakerXMarkIcon: 'SpeakerXMarkIcon',
    Square2StackIcon: 'Square2StackIcon',
    Square3Stack3DIcon: 'Square3Stack3DIcon',
    Squares2X2Icon: 'Squares2X2Icon',
    SquaresPlusIcon: 'SquaresPlusIcon',
    StarIcon: 'StarIcon',
    StopCircleIcon: 'StopCircleIcon',
    StopIcon: 'StopIcon',
    StrikethroughIcon: 'StrikethroughIcon',
    SunIcon: 'SunIcon',
    SwatchIcon: 'SwatchIcon',
    TableCellsIcon: 'TableCellsIcon',
    TagIcon: 'TagIcon',
    TicketIcon: 'TicketIcon',
    TrashIcon: 'TrashIcon',
    TrophyIcon: 'TrophyIcon',
    TruckIcon: 'TruckIcon',
    TvIcon: 'TvIcon',
    UnderlineIcon: 'UnderlineIcon',
    UserCircleIcon: 'UserCircleIcon',
    UserGroupIcon: 'UserGroupIcon',
    UserMinusIcon: 'UserMinusIcon',
    UserPlusIcon: 'UserPlusIcon',
    UserIcon: 'UserIcon',
    UsersIcon: 'UsersIcon',
    VariableIcon: 'VariableIcon',
    VideoCameraSlashIcon: 'VideoCameraSlashIcon',
    VideoCameraIcon: 'VideoCameraIcon',
    ViewColumnsIcon: 'ViewColumnsIcon',
    ViewfinderCircleIcon: 'ViewfinderCircleIcon',
    WalletIcon: 'WalletIcon',
    WifiIcon: 'WifiIcon',
    WindowIcon: 'WindowIcon',
    WrenchScrewdriverIcon: 'WrenchScrewdriverIcon',
    WrenchIcon: 'WrenchIcon',
    XCircleIcon: 'XCircleIcon',
    XMarkIcon: 'XMarkIcon'
} as const;
export type IconNameEnum = typeof IconNameEnum[keyof typeof IconNameEnum];

/**
 * @export
 */
export const IconSizeEnum = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large'
} as const;
export type IconSizeEnum = typeof IconSizeEnum[keyof typeof IconSizeEnum];


/**
 * Check if a given object implements the Icon interface.
 */
export function instanceOfIcon(value: object): value is Icon {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function IconFromJSON(json: any): Icon {
    return IconFromJSONTyped(json, false);
}

export function IconFromJSONTyped(json: any, ignoreDiscriminator: boolean): Icon {
    if (json == null) {
        return json;
    }
    return {
        
        'componentType': json['component_type'] == null ? undefined : json['component_type'],
        'name': json['name'],
        'size': json['size'] == null ? undefined : json['size'],
    };
}

export function IconToJSON(value?: Icon | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'component_type': value['componentType'],
        'name': value['name'],
        'size': value['size'],
    };
}

