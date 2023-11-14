import React, { useContext } from "react";
import { SettingsContext, SettingsProvider } from "./settings";

const composeProviders =
  (...providers: any) =>
  (props: any) =>
    providers.reduceRight(
      (children: React.ReactNode, Provider: React.ComponentType<any>) => (
        <Provider {...props}>{children}</Provider>
      ),
      props.children
    );

export const ContextProviders = composeProviders(SettingsProvider);

export function useSettings() {
  return useContext(SettingsContext);
}
