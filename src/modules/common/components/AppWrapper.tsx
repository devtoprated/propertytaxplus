import { PropsWithChildren, useEffect } from "react";
import { useQueryClient } from '@tanstack/react-query';
import { BaseThemeProvider } from "../providers/BaseThemeProvider";
import { AppSettingsProvider } from "../providers/AppSettingsProvider";
import { ReactIntlProvider } from "../providers/ReactIntlProvider";

export default function AppWrapper({ children }: PropsWithChildren) {
  const queryCilent = useQueryClient();

  useEffect(() => {
    queryCilent.prefetchQuery(['settings']);
  }, [queryCilent]);

  return (
    <>
      <BaseThemeProvider>
        <AppSettingsProvider>
            <ReactIntlProvider defaultLocale="en">
                {children}
            </ReactIntlProvider>
        </AppSettingsProvider>
      </BaseThemeProvider>
    </>
  );
}
