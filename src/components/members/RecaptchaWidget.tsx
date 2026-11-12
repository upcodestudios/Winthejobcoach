// The visible reCAPTCHA checkbox — rendered only after Wix answers USER_CAPTCHA_REQUIRED, i.e. the
// site owner set signup reCAPTCHA to "Always". Google's script draws into this div; `onToken` gets
// the token on success, "" when it expires or fails (the form then asks the visitor to try again).
import { useEffect, useRef } from "react";
import { WIX_RECAPTCHA_VISIBLE_SITE_KEY, loadRecaptcha } from "./recaptcha";

export default function RecaptchaWidget({ onToken }: { onToken: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null);
  const callback = useRef(onToken);
  callback.current = onToken;
  const widget = useRef<number | null>(null);

  useEffect(() => {
    let live = true;
    void loadRecaptcha()
      .then((enterprise) => {
        if (!live || !container.current || widget.current !== null) return;
        widget.current = enterprise.render(container.current, {
          sitekey: WIX_RECAPTCHA_VISIBLE_SITE_KEY,
          callback: (token: string) => callback.current(token),
          "expired-callback": () => callback.current(""),
          "error-callback": () => callback.current(""),
        });
      })
      .catch(() => callback.current(""));
    return () => {
      live = false;
    };
  }, []);

  return <div ref={container} className="min-h-[78px]" />;
}
