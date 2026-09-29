// Legacy helper: the product pages no longer load this file.
// Installation packages currently require contacting the author by email.
(() => {
  'use strict';

  const button = document.getElementById('release-download');
  const status = document.getElementById('release-status');
  const note = document.getElementById('release-note');
  if (!button || !status || !note) return;

  const chinese = document.documentElement.lang === 'zh-CN';
  const releases = 'https://github.com/TonyChenn/CocosEditor-Releases/releases';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  // Enhance the static Releases link once. Offline visits and API failures keep it usable.
  fetch('https://api.github.com/repos/TonyChenn/CocosEditor-Releases/releases/latest', {
    headers: { Accept: 'application/vnd.github+json' },
    signal: controller.signal,
    credentials: 'omit',
    referrerPolicy: 'no-referrer'
  })
    .then(response => {
      if (response.status === 404) {
        status.textContent = chinese ? '尚无公开发行版' : 'No public release available yet';
        note.textContent = chinese
          ? '公开 Windows 安装包发布后，可在这里下载。你也可以前往 GitHub Releases 查看版本发布情况。'
          : 'Public Windows downloads will appear here when a build is published. You can also check GitHub Releases for release availability.';
      }
      return response.ok ? response.json() : null;
    })
    .then(release => {
      if (!release || release.draft || release.prerelease || !Array.isArray(release.assets)) return;
      const asset = release.assets.find(item =>
        /^CocosEditor-[0-9][\w.+-]*-win-x64\.zip$/i.test(item.name || '') &&
        item.state === 'uploaded' && item.size > 0
      );
      if (!asset) return;

      const url = new URL(asset.browser_download_url);
      if (url.origin !== 'https://github.com' ||
          !url.pathname.startsWith('/TonyChenn/CocosEditor-Releases/releases/download/')) return;

      button.href = url.href;
      status.textContent = `${release.tag_name} · Windows x64`;
      status.classList.add('available');
      note.textContent = chinese
        ? '直接下载 Windows 编辑器 ZIP。接入时请使用同一 Release 中版本匹配的 Runtime SDK。'
        : 'Direct Windows editor ZIP download. Use the matching Runtime SDK from the same release.';
      document.getElementById('release-notes').href = `${releases}/tag/${encodeURIComponent(release.tag_name)}`;
    })
    .catch(() => {
      // Do not turn network errors into a claim about release availability.
    })
    .finally(() => clearTimeout(timeout));
})();
