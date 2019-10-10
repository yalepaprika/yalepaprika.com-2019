const dev = process.env.NODE_ENV === 'development';

export function sendPageView() {
  if (window.fbq) {
    fbq('track', 'PageView');
    if (dev) console.log('FB: page view')
  }

  if (window.fathom) {
    fathom('trackPageview');
    if (dev) console.log('Fathom: page view')
  }
}
