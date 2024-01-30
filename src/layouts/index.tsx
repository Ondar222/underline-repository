import PageFooter from "@/components/Footer";
import MainHeader from "@/components/Header";
import { Layout } from "antd";
import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const MainLayout = ({ children }: IChildren) => {
  return (
    <>
      <MainHeader />
      <Layout>
        {children}
      </Layout>
      <PageFooter />
    </>
  );
};

export default MainLayout;
