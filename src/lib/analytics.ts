declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsEvent =
  | "whatsapp_click"
  | "phone_click"
  | "form_start"
  | "form_submit"
  | "cta_click"
  | "service_view";

export function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
