export const LOCALES = ['en-US', 'ko-KR'] as const;

export const DEFAULT_LOCALE = LOCALES[0];

export type SupportedLocale = typeof LOCALES[number];