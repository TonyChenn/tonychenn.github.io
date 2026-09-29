# HomePage
网站主页

## CocosEditor official website

- English (default): `/cocoseditor/`
- 简体中文：`/zh/cocoseditor/`
- Shared styles and screenshot: `cocoseditor/assets/`

Both pages are standalone static HTML. Language links navigate to separate URLs;
there is no IP, browser-language, or stored-preference redirect. Each translation
has its own canonical URL and reciprocal `en`, `zh-CN`, and `x-default` alternates.
English is the default entry. Keep both pages and `sitemap.xml` in sync when adding
languages or changing paths.

Supported architectures: the editor runs on Windows x86 / x64; game runtimes
support Windows x86 / x64 and Android ARM64. Select the .NET Desktop Runtime for
the editor architecture and the native Runtime SDK for the game architecture.

There is currently no public installation package. Direct visitors to contact the
author by email to request the editor and a matching Runtime SDK. GitHub Releases
is a secondary version-history link. The pages do not load the legacy release
helper or query GitHub's release API. SDK requirements, platform claims, and
license answers must match the release documentation.

Contact: [email@tonychenn.cn](mailto:email@tonychenn.cn).
Alternative: [gogle.huiy@gmail.com](mailto:gogle.huiy@gmail.com).

The overview image is a lossless WebP of the actual screenshot in
`CocosEditor-Releases/docs/images/editor-overview.png`. Hierarchy and Inspector
details use CSS crops of the same image. Update those crop positions and the image
dimensions in both pages if the source screenshot changes.

No build is required. Preview this repository with any static HTTP server.
