export interface SubMenuItem {
  label: string;
  url: string;
  iconClass: string;
}

export interface SubMenuData {
  title: string;
  imageUrl: string;
  items: SubMenuItem[];
  buttonText: string;
  buttonUrl: string;
}