function utahHeaderFallback() {
  const fallbackTimeout = setTimeout(function() {
    if (!window["@utahdts/utah-design-system-header"]) {
      console.warn("Utah Header not loaded! Falling back.");

      const originalUnpkgJS = document.querySelector('script[src*="unpkg.com/@utahdts/utah-design-system-header"]');
      const originalCdnJS = document.querySelector('script[src*="cdn.utah.gov/dts-ds-custom-header-plugin/header-dist"]');
      const originalUnpkgCSS = document.querySelector('link[href*="unpkg.com/@utahdts/utah-design-system-header"]');
      const originalCdnCSS = document.querySelector('link[href*="cdn.utah.gov/dts-ds-custom-header-plugin/header-dist"]');

      const utahHeaderJs = document.createElement('script');
      const utahHeaderCss = document.createElement('link');
      utahHeaderCss.setAttribute('rel', 'stylesheet');

      if (originalUnpkgJS) {
        // fallback to cdn.utah.gov
        utahHeaderJs.setAttribute('src', DTS_DS_CDN_UTAH_JS_URL);
        utahHeaderCss.setAttribute('href', DTS_DS_CDN_UTAH_CSS_URL);
        originalUnpkgCSS.insertAdjacentElement('afterend', utahHeaderCss);
        originalUnpkgJS.insertAdjacentElement('afterend', utahHeaderJs);
      } else {
        // fallback to unpkg.com
        utahHeaderJs.setAttribute('src', DTS_DS_CDN_UNPKG_JS_URL);
        utahHeaderCss.setAttribute('href', DTS_DS_CDN_UNPKG_CSS_URL);
        originalCdnCSS.insertAdjacentElement('afterend', utahHeaderCss);
        originalCdnJS.insertAdjacentElement('afterend', utahHeaderJs);
      }
    }
  }, 500)
}
utahHeaderFallback();
