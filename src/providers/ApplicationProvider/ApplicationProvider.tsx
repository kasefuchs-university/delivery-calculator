import type { Props } from "./types";
import type { ComponentChildren } from "preact";
import StoreProvider from "@/providers/StoreProvider";

export default function ApplicationProvider(props: Props): ComponentChildren {
  return <StoreProvider children={props.children} />;
}
