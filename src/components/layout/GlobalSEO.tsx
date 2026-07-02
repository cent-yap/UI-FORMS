import { Helmet } from "react-helmet-async";
import { globalSEO, buildRobotsContent, getCanonicalUrl } from "../../utils/seo";

export function GlobalSEO() {
  const canonical = getCanonicalUrl();
  const { openGraph, twitter } = globalSEO;
  const primaryImage = openGraph.images[0];

  return (
    <Helmet titleTemplate={globalSEO.titleTemplate}>
      <html lang={globalSEO.language} />

      <meta name="description" content={globalSEO.defaultDescription} />
      <meta name="keywords" content={globalSEO.keywords.join(", ")} />
      <meta name="robots" content={buildRobotsContent()} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:site_name" content={openGraph.siteName} />
      <meta property="og:locale" content={openGraph.locale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:description" content={globalSEO.defaultDescription} />
      {openGraph.images.map((img) => (
        <meta key={img.url} property="og:image" content={img.url} />
      ))}
      {primaryImage?.width && (
        <meta property="og:image:width" content={String(primaryImage.width)} />
      )}
      {primaryImage?.height && (
        <meta property="og:image:height" content={String(primaryImage.height)} />
      )}
      {primaryImage?.alt && <meta property="og:image:alt" content={primaryImage.alt} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitter.card} />
      {twitter.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter.creator && <meta name="twitter:creator" content={twitter.creator} />}
      <meta name="twitter:description" content={globalSEO.defaultDescription} />

      {/* Any additional one-off tags from config */}
      {globalSEO.additionalMetaTags?.map((tag) => (
        <meta
          key={tag.name ?? tag.property}
          {...(tag.name ? { name: tag.name } : { property: tag.property })}
          content={tag.content}
        />
      ))}
      {globalSEO.additionalLinkTags?.map((link) => (
        <link key={link.href} {...link} />
      ))}

      {/* Structured data: helps search engines understand the site itself */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: globalSEO.siteName,
          url: globalSEO.siteUrl,
        })}
      </script>
    </Helmet>
  );
}
