export interface Box {
  id: string;
  receiverName: string;
  weight: number;
  boxColor: string;
  destinationCountry: string;
  shippingCost: number;
}

export type DestinationCountry = 'Sweden' | 'China' | 'Brazil' | 'Australia';

export interface CountryMultiplier {
  country: DestinationCountry;
  multiplier: number;
}

export const COUNTRY_MULTIPLIERS: Record<DestinationCountry, number> = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};

