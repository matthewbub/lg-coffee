import { useEffect } from 'react';
import { useRouter } from 'next/router';

const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function FacebookPixel({ children }) {
  const router = useRouter();
  useEffect(() => {
    if (!pixelId) return;
    let fb;
    function onRouteChange() {
      fb.pageView();
    }
    import('react-facebook-pixel')
      // eslint-disable-next-line no-return-assign
      .then((module) => (fb = module.default))
      .then(() => {
        fb.init(pixelId, {
          autoConfig: true,
          debug: true,
        });
        fb.pageView();
      });
    router.events.on('routeChangeComplete', onRouteChange);
    // eslint-disable-next-line consistent-return
    return () => router.events.off('routeChangeComplete', onRouteChange);
  }, [router.events]);
  return children;
}
