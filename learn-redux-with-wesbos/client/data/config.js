import Raven from 'raven-js';

const sentry_key = '5eceb800f01841479baff13d0036b3048cd8349ee4144f058f7f9a35ec06b1d0';
const secret_key = 'af2636e14f1c474da1616cfabbf75a0c42e7732992754bc489bf731f607798c0';
const sentry_app = '61499';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
