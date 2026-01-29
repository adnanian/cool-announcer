// src/utils/favicon.ts
export function setFavicons() {
  const base = import.meta.env.BASE_URL;

  // Set main favicon
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (favicon) {
    favicon.href = `${base}applogo-192x192.png`;
  }

  // Set apple touch icons
  const sizes = [180, 152, 144, 120, 114, 76, 57];
  sizes.forEach((size) => {
    const link = document.createElement("link");
    link.rel = "apple-touch-icon";
    link.sizes = `${size}x${size}`;
    link.href = `${base}applogo-${size}x${size}.png`;
    document.head.appendChild(link);
  });
}
