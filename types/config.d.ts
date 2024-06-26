import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';

import { CacheTypeEnum } from '/@/enums/cacheEnum';

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  siderHidden: boolean;
  canDrag: boolean;
  show: boolean;
  hidden: boolean;
  split: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  topMenuAlign: 'start' | 'center' | 'end';
  trigger: TriggerEnum;
  accordion: boolean;
  closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}

export interface MultiTabsSetting {
  cache: boolean;
  show: boolean;
  showQuick: boolean;
  canDrag: boolean;
  showRedo: boolean;
  showFold: boolean;
  theme: string;
}

export interface HeaderSetting {
  bgColor: string;
  fixed: boolean;
  show: boolean;
  theme: ThemeEnum;
  // Turn on full screen
  showFullScreen: boolean;
  // Whether to show the lock screen
  useLockPage: boolean;
  // Show document button
  showDoc: boolean;
  // Show message center button
  showNotice: boolean;
  showSearch: boolean;
}

export interface LocaleSetting {
  showPicker: boolean;
  // Current language
  locale: LocaleType;
  // default language
  fallback: LocaleType;
  // available Locales
  availableLocales: LocaleType[];
}

export interface TransitionSetting {
  //  Whether to open the page switching animation
  enable: boolean;
  // Route basic switching animation
  basicTransition: RouterTransitionEnum;
  // Whether to open page switching loading
  openPageLoading: boolean;
  // Whether to open the top progress bar
  openNProgress: boolean;
}

export interface ProjectConfig {
  // Storage location of permission related information
  permissionCacheType: CacheTypeEnum;
  // Whether to show the configuration button
  showSettingButton: boolean;
  // Whether to show the theme switch button
  showDarkModeToggle: boolean;
  // Configure where the button is displayed
  settingButtonPosition: SettingButtonPositionEnum;
  // Permission mode
  permissionMode: PermissionModeEnum;
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
  // Website gray mode, open for possible mourning dates
  grayMode: boolean;
  // Whether to turn on the color weak mode
  colorWeak: boolean;
  // Theme color
  themeColor: string;

  // The main interface is displayed in full screen, the menu is not displayed, and the top
  fullContent: boolean;
  // content width
  contentMode: ContentEnum;
  // Whether to display the logo
  showLogo: boolean;
  // Whether to show the global footer
  showFooter: boolean;
  // menuType: MenuTypeEnum;
  headerSetting: HeaderSetting;
  // menuSetting
  menuSetting: MenuSetting;
  // Multi-tab settings
  multiTabsSetting: MultiTabsSetting;
  // Animation configuration
  transitionSetting: TransitionSetting;
  // pageLayout whether to enable keep-alive
  openKeepAlive: boolean;
  // Lock screen time
  lockTime: number;
  // Show breadcrumbs
  showBreadCrumb: boolean;
  // Show breadcrumb icon
  showBreadCrumbIcon: boolean;
  // Use error-handler-plugin
  useErrorHandle: boolean;
  // Whether to open back to top
  useOpenBackTop: boolean;
  // 是否可以嵌入iframe页面
  canEmbedIFramePage: boolean;
  // Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: boolean;
  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  removeAllHttpPending: boolean;
}

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
  // 客户端ID
  clientId: string;
  // 客户端秘钥
  clientSecret: string;
  // 多租户模式
  multiTenantType?: string;
  // 是否显示验证码
  showCaptcha?: string;
  // 网站header栏红色提示文字
  tips?: string;
  // 默认登录时加载的默认应用ID，此ID需要事先在def_application中配置
  defApplicationId: string;
  // 基础平台的应用ID，此ID需要事先在def_application中配置
  baseApplicationId: string;
  // 开发运营系统的应用ID，此ID需要事先在def_application中配置
  devApplicationId: string;
  // 第三方文件预览服务 需要自行安装kkFileView（https://gitee.com/kekingcn/file-online-preview）
  previewUrlPrefix?: string;
  // 请求头中携带的token(用户身份信息) key名称
  tokenKey: string;
  // 请求头中携带的租户ID key名称
  tenantIdKey: string;
  // 请求头中携带的应用ID key名称
  applicationIdKey: string;
  // 请求头中携带的客户端信息 key名称
  authorizationKey: string;
  // axios 请求默认超时间： 10s
  axiosTimeout?: number;
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // 客户端ID
  VITE_GLOB_CLIENT_ID: string;
  // 客户端秘钥
  VITE_GLOB_CLIENT_SECRET: string;
  // 是否显示验证码
  VITE_GLOB_SHOW_CAPTCHA?: string;
  // 多租户模式
  VITE_GLOB_MULTI_TENANT_TYPE?: string;
  // 网站header栏红色提示文字
  VITE_GLOB_TIPS?: string;
  // 默认登录时加载的默认应用ID，此ID需要事先在def_application中配置
  VITE_GLOB_DEF_APPLICATION_ID: string;
  // 基础平台的应用ID，此ID需要事先在def_application中配置
  VITE_GLOB_BASE_APPLICATION_ID: string;
  // 开发运营系统的应用ID，此ID需要事先在def_application中配置
  VITE_GLOB_DEV_APPLICATION_ID: string;
  // 第三方文件预览服务 需要自行安装kkFileView（https://gitee.com/kekingcn/file-online-preview）
  VITE_GLOB_PREVIEW_URL_PREFIX?: string;
  // 请求头中携带的token(用户身份信息) key名称
  VITE_GLOB_TOKEN_KEY: string;
  // 请求头中携带的租户ID key名称
  VITE_GLOB_TENANT_ID_KEY: string;
  // 请求头中携带的应用ID key名称
  VITE_GLOB_APPLICATION_ID_KEY: string;
  // 请求头中携带的客户端信息 key名称
  VITE_GLOB_AUTHORIZATION_KEY: string;
  // axios 请求默认超时间： 10s
  VITE_GLOB_AXIOS_TIMEOUT?: string;
}
