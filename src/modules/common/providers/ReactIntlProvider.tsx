import { fetchLocaleMessages } from "../modules/common/services/fetchLocaleMessages";

import { useRouter } from "next/router";
import React, {
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { IntlProvider } from "react-intl";
import { useQuery } from '@tanstack/react-query';
import { ModalLoadingIndicator } from "../components/ModalLoadingIndicator";
import { TypeSettings } from "../types/TypeSettings";

interface ReactIntlContextValue {
  messages?: TypeSettings;
  setMessages?: React.Dispatch<React.SetStateAction<TypeSettings | undefined>>;
}
interface ReactIntlProviderProps {
  defaultLocale: string;
}

const ReactIntlContext = React.createContext<ReactIntlContextValue>({});

export const useResolvedUserLanguage = (fallbackLocale?: string) => {
  const router = useRouter();

  const { setlocale: urlLocale } = router.query;
  if (typeof window !== "undefined") {
    const userLocale = (
      (urlLocale as string) ||
      localStorage?.getItem("locale") ||
      ""
    ).toLowerCase();
    if (!userLocale) {
      return fallbackLocale || "en";
    }
    const locale = userLocale.replace("_", "-");
    return locale;
  }
  return fallbackLocale || "en";
};

export const ReactIntlProvider = ({
  children,
  defaultLocale,
}: PropsWithChildren<ReactIntlProviderProps>) => {
  const locale = useResolvedUserLanguage(defaultLocale);
  const {
    data: msg,
    isFetching,
    isSuccess,
  } = useQuery<Record<string, string>>(
    ["locale", locale],
    () => fetchLocaleMessages(locale),
    { refetchInterval: false, refetchOnWindowFocus: false }
  );
  const [messages, setMessages] = useState(msg);
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    if (!isFetching) {
      setMessages(msg);
    }
  }, [msg, isFetching]);

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);
  return (
    <>
      <IntlProvider
        messages={messages}
        locale={locale}
        defaultLocale={defaultLocale}
      >
        <>
          {isDomLoaded && isFetching && (
            <ModalLoadingIndicator open={isFetching} />
          )}
          {isSuccess && children}
        </>
      </IntlProvider>
    </>
  );
};
