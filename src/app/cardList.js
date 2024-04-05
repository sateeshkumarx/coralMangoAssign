import Raect, { useEffect, useState } from "react";

const CardList = ({}) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://coralmango.com/api/react-test");
    let data = await response.json();
    if (data.length > 0) {
      setUserList([...data]);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "70%",
      }}
    >
      {userList.length
        ? userList.map((item) => (
            <>
              {" "}
              <div
                style={{
                  width: 190,
                  height: 190,
                  border: "1px solid grey",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: 20,
                }}
              >
                <img
                  src=""
                  alt="Hello"
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    background: "blue",
                    marginTop: "10px",
                  }}
                ></img>
                <p
                  style={{
                    color: "blue",
                    fontWeight: 800,
                    fontSize: 20,
                    margin: "0px",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    color: "blue",
                    fontWeight: 700,
                    fontSize: 18,
                    margin: "0px",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  {item.age}
                </p>
                <p
                  style={{
                    color: "blue",
                    fontWeight: 600,
                    fontSize: 16,
                    margin: "0px",
                    padding: "10px 0px 0px 0px",
                  }}
                >
                  {item.occupation}
                </p>
              </div>
            </>
          ))
        : "There is No card to display"}
    </div>
  );
};
export default CardList;
