import { ConfigProvider } from "antd";
import React, { PropsWithChildren } from "react";

export const BaseThemeProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider theme={{}}>{children}</ConfigProvider>;
};
