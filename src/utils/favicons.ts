// src/utils/favicon.ts
/**
 * Sets the favicons for the application dynamically based on the BASE_URL.
 * Notes:
 * 1. This function should be called once during the app's initialization.
 * 2. This function was generated using Claude.
 */
export function setFavicons() {
  const base = import.meta.env.BASE_URL;
  console.log("Setting favicons with BASE_URL:", base);

  // Set main favicon
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (favicon) {
    favicon.href = `${base}applogo-192x192.png`;
    console.log("Favicon href set to:", favicon.href);
  } else {
    console.log("No favicon link found in HTML!");
  }

  // Set apple touch icons
  const sizes = [180, 152, 144, 120, 114, 76, 57];
  sizes.forEach((size) => {
    const link = document.createElement("link");
    link.rel = "apple-touch-icon";
    link.sizes = `${size}x${size}`;
    link.href = `${base}applogo-${size}x${size}.png`;
    console.log(`Created apple-touch-icon ${size}x${size}:`, link.href);
    document.head.appendChild(link);
  });
}
