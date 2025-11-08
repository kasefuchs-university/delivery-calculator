export enum Region {
  Other = "Другой",
  Moscow = "Москва",
  SPB = "Санкт-Петербург",
}

export const PRICE_THRESHOLD = 5000;

export const DeliveryPrice: Record<Region, number> = {
  [Region.Other]: 500,
  [Region.Moscow]: 300,
  [Region.SPB]: 250,
};
