import { siteConfig } from "@/lib/constants";

const { street, neighborhood, city, state, zipCode, mapUrl } = siteConfig.address;
const query = encodeURIComponent(`${street}, ${neighborhood}, ${city} - ${state}, ${zipCode}`);

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title="Localização da Under Control no Google Maps"
        src={`https://maps.google.com/maps?q=${query}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full rounded-2xl border-0 sm:h-72"
        allowFullScreen
      />
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm font-semibold underline-offset-4 hover:underline"
      >
        Abrir no Google Maps
      </a>
    </div>
  );
}
