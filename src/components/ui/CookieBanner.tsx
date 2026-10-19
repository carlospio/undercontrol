"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/constants";

const STORAGE_KEY = "uc-cookie-consent";

type Consent = "accepted" | "rejected" | null;

function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lê o localStorage só no cliente
    setConsent(readConsent());
    setReady(true);
  }, []);

  function choose(value: Exclude<Consent, null>) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // sem localStorage: a escolha vale apenas para esta visita
    }
    setConsent(value);
  }

  const gtmId = siteConfig.gtmId;

  return (
    <>
      {consent === "accepted" && gtmId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      ) : null}

      {ready && consent === null ? (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl bg-ink p-5 text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:flex sm:items-center sm:gap-6"
        >
          <p className="text-sm leading-relaxed text-white/80">
            Usamos cookies para melhorar a sua experiência e entender como o site é utilizado. Ao
            aceitar, você concorda com o uso conforme a nossa{" "}
            <Link href="/politica-de-privacidade" className="font-semibold text-gold underline-offset-4 hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="mt-4 flex shrink-0 gap-3 sm:mt-0">
            <button
              type="button"
              onClick={() => choose("rejected")}
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink transition-opacity hover:opacity-90"
            >
              Aceitar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
