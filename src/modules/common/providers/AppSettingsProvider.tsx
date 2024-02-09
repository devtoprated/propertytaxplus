import { fetchSettings } from "../modules/common/services/fetchSettings";
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQuery } from '@tanstack/react-query';
import { TypeSettings } from "../types/TypeSettings";
import { ModalLoadingIndicator } from "../components/ModalLoadingIndicator";

interface AppSettingsContextValue {
  settings?: TypeSettings;
  setSettings?: React.Dispatch<React.SetStateAction<TypeSettings | undefined>>;
}

const AppSettingsContext = React.createContext<AppSettingsContextValue>({});

export const AppSettingsProvider = ({ children }: PropsWithChildren) => {
  const {
    data: sett,
    isFetching,
    isSuccess,
  } = useQuery<TypeSettings>(['settings'], fetchSettings, {
    refetchInterval: false,
  });
  const [settings, setSettings] = useState(sett);
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    setSettings(sett);
  }, [sett]);

  useEffect(() => {
    setIsDomLoaded(true);
  }, []);

  return (
    <AppSettingsContext.Provider value={{ settings, setSettings }}>
      {isDomLoaded && isFetching && <ModalLoadingIndicator open={isFetching} />}
      {isSuccess && children}
    </AppSettingsContext.Provider>
  );
};

export const useAppSettings = () => {
  const values = useContext(AppSettingsContext);
  return values;
};
