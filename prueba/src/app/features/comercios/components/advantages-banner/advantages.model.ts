export interface AdvantageBullet {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export interface AdvantageStep {
  number: string;
  text: string;
}

export interface AdvantagesData {
  title: string;
  backgroundImage: string;
  backgroundAlt: string;
  bullets: AdvantageBullet[];
  stepsTitle: string;
  steps: AdvantageStep[];
}
