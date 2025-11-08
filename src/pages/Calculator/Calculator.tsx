import type { ComponentChildren } from "preact";
import { useContext } from "preact/hooks";
import RootStoreContext from "@/contexts/RootStoreContext";
import { observer } from "mobx-react";
import { Region } from "@/stores/RootStore";

function Calculator(): ComponentChildren {
  const context = useContext(RootStoreContext)!;

  return (
    <div>
      <label>
        <b>Регион: </b>
        <select
          value={
            Object.keys(Region)[Object.values(Region).indexOf(context.region)]
          }
          onChange={(event) =>
            context.setRegion(
              Region[
                (event.target as HTMLSelectElement).value as keyof typeof Region
              ],
            )
          }
        >
          {Object.entries(Region).map(([value, region], index) => (
            <option key={index} children={region.toString()} value={value} />
          ))}
        </select>
        <br />
      </label>

      <label>
        <b>Сумма заказа: </b>
        <input
          type="number"
          value={context.orderPrice}
          onChange={(event) =>
            context.setPrice(Number((event.target as HTMLInputElement).value))
          }
        />
        <br />
      </label>

      <hr/>

      {!context.valid ? (
        <b style={{ color: "red" }}>Введите корректную сумму заказа</b>
      ) : (
        <div>
          <label>
            <b>Стоимость доствки: </b>
            <span>{context.deliveryPrice} руб.</span>
            <br/>
          </label>
          <label>
            <b>Итоговая стоймость: </b>
            <span>{context.totalPrice} руб.</span>
            <br/>
          </label>
        </div>
      )}
    </div>
  );
}

export default observer(Calculator);
