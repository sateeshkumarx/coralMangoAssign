"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import TableList from "./tableList";
import CardList from "./cardList";
import Login from "./login";

const items = [
  {
    label: "Table Veiw",
    key: "table",
  },
  {
    label: "Card Veiw",
    key: "card",
  },
];
export default function Home() {
  const [current, setCurrent] = React.useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    setCurrent("table");
  }, [isLoggedIn]);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          {" "}
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
          {current == "table" ? <TableList /> : <CardList />}
        </>
      ) : (
        <Login logincheck={setisLoggedIn} />
      )}
    </>
  );
}
