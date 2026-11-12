// Gebruik het huidige jaar, zodat de footer automatisch actueel blijft.
export function renderFooter() {
  const year = new Date().getFullYear();
  return `© ${year} Howest MCT`;
}
