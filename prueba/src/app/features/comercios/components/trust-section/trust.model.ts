export interface TrustStat {
  icon: string;
  iconAlt: string;
  color: string;
  value: string;
  unit: string;
  label: string;
}

export interface TrustData {
  title: string;
  description: string;
  characterImage: string;
  characterAlt: string;
  stats: TrustStat[];
}
