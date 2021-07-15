import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Icon = styled.div`
  display: flex;
  flex-direction: row;
`;
const Img = styled.img`
  margin-right: 40px;
`;
const Iconcontainer = styled.div`
  position: relative;
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50px;
  width: 25px;
`;
const KeyTool = () => {
  const intiallist = [
    {
      id: 1,
      icon: "Assets/progress.png"
    },
    {
      id: 2,
      icon: "Assets/progress.png"
    }
  ];
  const [list, setList] = useState([]);
  const [image, setImage] = useState({});
  useEffect(() => {
    setList(intiallist);
  }, []);
  // const handleChange = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     let reader = new FileReader();
  //     let file = e.target.files[0];
  //     reader.onloadend = () => {
  //       setList(file);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  // const handleAdd = () => {
  //   const newList = list.concat({ image });
  //   setList(newList);
  //   console.log(list);
  // };
  const removeImage = (id) => {
    setList((oldState) => oldState.filter((item) => item.id !== id));
  };
  return (
    <Icon>
      {list.map((item) => {
        return (
          <Iconcontainer>
            <Img key={item.id} src={item.icon} />
            <Button onClick={() => removeImage(item.id)}>X</Button>
          </Iconcontainer>
        );
      })}
      {/* <div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleAdd}>+</button>
      </div> */}
    </Icon>
  );
};
export default KeyTool;
