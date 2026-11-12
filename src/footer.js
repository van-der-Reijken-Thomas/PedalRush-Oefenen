// Let op: het jaartal staat hard-coded. Dit is een bewuste fout (oefening 4).
export function renderFooter() {
  return '© ' + new Date().getFullYear() + ' Howest MCT';
}
