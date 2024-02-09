import styles from "@/styles/Home.module.css";
import { NextPageWithLayout } from "./_app";
import AppGlobalLayout from "@/modules/common/layouts/AppGlobalLayout";
import { ReactElement } from "react";
import Typography from "antd/es/typography/Typography";
import AppealMainPage from "@/modules/appeal/AppealMainPage";

const Home: NextPageWithLayout = () => {
  return (
    <>
     <AppealMainPage/>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppGlobalLayout>{page}</AppGlobalLayout>;
};

export default Home;
