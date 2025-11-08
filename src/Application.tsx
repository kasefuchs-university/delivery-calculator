import ApplicationProvider from "@/providers/ApplicationProvider";
import type { ComponentChildren } from "preact";
import Calculator from "@/pages/Calculator";

export default function Application(): ComponentChildren {
  return (
    <ApplicationProvider>
      <Calculator />
    </ApplicationProvider>
  );
}
