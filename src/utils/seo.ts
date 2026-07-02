export interface OgImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string; 
}

export interface OpenGraphConfig {
  type: "website" | "article" | "profile" | string;
  siteName: string;
  locale: string;
  alternateLocales?: string[];
  url: string;
  images: OgImage[];
}

export interface TwitterConfig {
  card: "summary" | "summary_large_image" | "app" | "player";
  site?: string; 
  creator?: string; 
}

export interface RobotsConfig {
  index: boolean;
  follow: boolean;
  maxSnippet?: number; 
  maxImagePreview?: "none" | "standard" | "large";
  maxVideoPreview?: number;
  noarchive?: boolean;
  notranslate?: boolean;
}

export interface ExtraMetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface ExtraLinkTag {
  rel: string;
  href: string;
  [key: string]: string;
}

export interface GlobalSEOConfig {
  /** Pattern applied to every page title. %s is replaced by the page title. */
  titleTemplate: string;
  siteName: string;
  siteUrl: string;
  defaultDescription: string;
  keywords: string[];
  themeColor: string;
  language: string;
  openGraph: OpenGraphConfig;
  twitter: TwitterConfig;
  robots: RobotsConfig;
  additionalMetaTags?: ExtraMetaTag[];
  additionalLinkTags?: ExtraLinkTag[];
}

const SITE_URL = "https://ui-forms.netlify.app";

export const globalSEO: GlobalSEOConfig = {
  titleTemplate: "%s | UI FORMS",
  siteName: "UI FORMS",
  siteUrl: SITE_URL,
  defaultDescription:
    "UI FORMS provides beautiful, accessible, and customizable form components for modern web applications. Streamline your user input and build responsive interfaces effortlessly.",
  keywords: [
    "UI FORMS", 
    "form components", 
    "web forms", 
    "UI library", 
    "frontend development", 
    "accessible forms", 
    "form builder", 
    "UI design"
  ],
  themeColor: "#f8f7ff",
  language: "en",

  openGraph: {
    type: "website",
    siteName: "UI FORMS",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/img/og-default.png`,
        width: 1200,
        height: 630,
        alt: "UI FORMS - Modern Form Components",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@uiforms", // Update this to your actual Twitter handle if you have one
    creator: "@uiforms",
  },

  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },

  additionalMetaTags: [
    { name: "author", content: "UI FORMS Team" },
    { name: "format-detection", content: "telephone=no" },
  ],

  additionalLinkTags: [{ rel: "icon", href: "/img/trademark.png", type: "image/png" }],
};

/** Builds the `robots` meta content string from config (or an override). */
export function buildRobotsContent(robots: RobotsConfig = globalSEO.robots): string {
  const parts = [robots.index ? "index" : "noindex", robots.follow ? "follow" : "nofollow"];
  if (robots.maxSnippet !== undefined) parts.push(`max-snippet:${robots.maxSnippet}`);
  if (robots.maxImagePreview) parts.push(`max-image-preview:${robots.maxImagePreview}`);
  if (robots.maxVideoPreview !== undefined) parts.push(`max-video-preview:${robots.maxVideoPreview}`);
  if (robots.noarchive) parts.push("noarchive");
  if (robots.notranslate) parts.push("notranslate");
  return parts.join(", ");
}

/** Resolves an absolute canonical URL for the given (or current) path. */
export function getCanonicalUrl(pathname?: string): string {
  const path = pathname ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const normalized = path === "/" ? "" : path.replace(/\/+$/, "");
  return `${globalSEO.siteUrl}${normalized}`;
}

/**
 * Applies the global title template to a page-specific title.
 * react-helmet-async does this automatically for <title>, but this is
 * exposed for any other tag that should mirror it (og:title, twitter:title).
 */
export function formatTitle(pageTitle?: string): string {
  if (!pageTitle) return globalSEO.siteName;
  return globalSEO.titleTemplate.replace("%s", pageTitle);
}
