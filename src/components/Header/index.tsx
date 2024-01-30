import { Avatar, Col, Layout, Menu, Row, Typography } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
const items = [
  {
    label: "Главная",
    key: "/",
  },
  {
    label: "Новости",
    key: "/news",
  },
  {
    label: "О проекте",
    key: "/about",
  },
];
const MainHeader = () => {
  const [current, setCurrent] = useState("main");
  const router = useRouter();
  return (
    <header className="header">
      <Layout>
        <Row className="header" align="middle">
          <Col span={17}>
            <Row align="middle">
              <Avatar src="/favicon.ico" />
              <Typography.Title level={4}>
                Интерактивная карта угольных складов Республики Тыва
              </Typography.Title>
            </Row>
          </Col>

          <Col span={6}>
            <Menu
              // className="header__menu"
              mode="horizontal"
              onClick={(e) => setCurrent(e.key)}
              selectedKeys={[current]}
              items={items}
              onSelect={({ key }) => {
                router.push(key);
              }}
            />
          </Col>
        </Row>
      </Layout>
    </header>
  );
};

export default MainHeader;
