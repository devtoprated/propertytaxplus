
import * as React from 'react';
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppWrapper from "@/modules/common/components/AppWrapper";
import "../modules/common/styles/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchInterval: false, refetchOnWindowFocus: false },
  },
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppWrapper>{getLayout(<Component {...pageProps} />)}</AppWrapper>
      </QueryClientProvider>
    </>
  );
}
