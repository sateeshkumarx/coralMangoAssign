import Raect, { useEffect, useState } from "react";
import { Table, Input } from "antd";

const TableList = () => {
  const [userList, setUserList] = useState([]);
  const [serchedTest, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      filteredValue: [serchedTest],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
  ];
  const fetchData = async () => {
    const response = await fetch("https://coralmango.com/api/react-test");
    let data = await response.json();
    if (data.length > 0) {
      setUserList([...data]);
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            margin: "20px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <p>User List</p>
          <Input.Search
            placeholder="Type Name..."
            style={{ width: "20%" }}
            onSearch={(value) => {
              setSearchText(value);
            }}
          ></Input.Search>
        </div>

        {userList.length > 0 ? (
          <Table dataSource={userList} columns={columns} />
        ) : (
          "No data to display."
        )}
      </div>
    </>
  );
};
export default TableList;
