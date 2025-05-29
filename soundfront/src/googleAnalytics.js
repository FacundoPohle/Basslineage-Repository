// src/googleAnalytics.js

export const initGA = () => {
  if (!window.gtag) {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-CNXJY3483Z';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CNXJY3483Z');
      gtag("config", "AW-17110054214");
    `;
    document.head.appendChild(script2);
  }
};

export const logPageView = () => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: window.location.pathname + window.location.search,
    });
  }
};
