export const menuItems = [
  "Home",
  "Over ons",
];

export function renderMenu() {
  return `<ul>${menuItems.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}
