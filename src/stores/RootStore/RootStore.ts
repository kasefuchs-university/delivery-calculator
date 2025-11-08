import { action, computed, observable } from "mobx";
import { Region, DeliveryPrice, PRICE_THRESHOLD } from "./types.ts";

export default class RootStore {
  @observable
  public accessor region: Region = Region.Other;

  @observable
  public accessor orderPrice: number = 0;

  @action
  public setPrice(value: number): number {
    return (this.orderPrice = value);
  }

  @action
  public setRegion(value: Region): Region {
    return (this.region = value);
  }

  @computed
  public get deliveryPrice(): number {
    if (this.orderPrice >= PRICE_THRESHOLD) return 0;

    return DeliveryPrice[this.region];
  }

  @computed
  public get totalPrice(): number {
    return this.deliveryPrice + this.orderPrice;
  }

  @computed
  public get valid(): boolean {
    return this.orderPrice > 0;
  }
}
