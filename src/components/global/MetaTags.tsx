import type { MetaTagProps } from "../../types"

export default function MetaTags({ title = "", keywords = "", description = "", name = "" }: MetaTagProps) {
  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={window.location.href} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="author" content={name} />
      {/* Open Graph tags (OG) */}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
