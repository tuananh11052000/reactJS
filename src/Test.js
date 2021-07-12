import React, {useState} from "react";
function Test()
{
  const [listProduct, setListProduct] = useState(0);
  console.log(listProduct);
  const changeState =  () => {
    setListProduct(1);
  };
  changeState();
  return(<div>ok</div>);
}

export default Test