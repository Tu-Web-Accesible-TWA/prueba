export interface MenuMobileItem {
  label: string;
  url?: string;
  iconClass?: string;
  items?: MenuMobileItem[]; // Estructura recursiva
}
