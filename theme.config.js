// theme.config.js
export default {
  projectLink: "https://github.com/has9800", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/has9800", // base URL for the docs repository
  titleSuffix: "MyDocs",
  nextLinks: false,
  prevLinks: false,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `H9800 - Hasan Ahmed ${new Date().getFullYear()}.`,
  footerEditLink: ``,
  logo: (
    <>
      <span>
        <b>My Docs</b> (preview mode)
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
};
