import React from "react";
import { Tabs } from "antd";

const App = ({ data }) => {
  let tabItems = [
    {
      label: `Описание`,
      key: 1,
      disabled: 1 === 2,
      children: data.description,
    },
    {
      label: `Характеристики`,
      key: 2,
      disabled: 1 === 2,
      children: data.detail,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" style={{ height: 220 }} items={tabItems} />
    </div>
  );
};

export default App;
