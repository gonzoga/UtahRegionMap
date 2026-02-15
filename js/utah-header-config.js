document.addEventListener('utahHeaderLoaded', () => {
  window["@utahdts/utah-design-system-header"].setUtahHeaderSettings({
    footer: {
      linkTextPrivacyPolicy: 'Privacy Policy',
      linkPrivacyPolicy: 'https://dhhs.utah.gov/website-privacy/',
      showHorizontalRule : 'true'
    }
  });
});
