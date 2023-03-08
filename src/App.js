import React from "react";
import "./App.css";
import Photo from "./component/Photo";
import data from "./data";
import dark from "./images/image-about-dark.jpg";
import light from "./images/image-about-light.jpg";

function App() {
  const [imgData, setImgData] = React.useState({
    id: data[0].id,
    title: data[0].title,
    text: data[0].text,
    src: data[0].src,
    on: false,
  });
  function handleAdd() {
    setImgData((image) => {
      const newArr = data.filter((img) => img.id > imgData.id);
      if (imgData.id === data[data.length - 1].id) {
        return { ...image, ...data[0] };
      }
      return { ...image, ...newArr[0] };
    });
  }

  function handlePare() {
    setImgData((image) => {
      const newArr = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === image.id) {
          let num = i - 1;
          if (num < 0) {
            newArr.push(data[data.length - 1]);
          } else {
            newArr.push(data[num]);
          }
        }
      }
      return { ...image, ...newArr[0] };
    });
  }
  return (
    <div className="App">
      <Photo
        imgLeft={dark}
        imgRight={light}
        src={imgData.src}
        title={imgData.title}
        text={imgData.text}
        handleAdd={handleAdd}
        handlePare={handlePare}
      />
    </div>
  );
}

export default App;
