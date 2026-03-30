export interface SubmenuData {
  title: string;
  imageUrl: string;
  items: SubmenuItem[];
  buttonText: string;
  buttonUrl: string;
}

export interface SubmenuItem {
  label: string;
  url: string;
  iconClass: string;
}

export interface MenuMobileItem {
  label: string;
  url?: string;
  iconClass?: string;
  items?: MenuMobileItem[]; // Estructura recursiva
}
