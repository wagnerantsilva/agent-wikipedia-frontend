export const Screens = {
  HOME: 'HomeScreen',
  CHAT_VALIDATION: 'ChatValidationScreen',
  ARTICLE_DETAIL: 'ArticleDetailScreen',
  SETTINGS: 'SettingsScreen',
} as const;

export type ScreenName =
  (typeof Screens)[keyof typeof Screens];