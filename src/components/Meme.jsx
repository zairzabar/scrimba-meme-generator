import { useState } from "react";
import memesData from "./memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);
  //   const [memeImage, setMemeImage] = useState("");

  function handleClick() {
    const memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }

  return (
    <main className="meme__container">
      <div className="form">
        <input className="form__input" type="text" placeholder="Top text" />
        <input className="form__input" type="text" placeholder="Bottom text" />
        <button onClick={handleClick}>Get a new meme image</button>
      </div>
      <img src={meme.randomImage} alt="meme" className="meme__image" />
    </main>
  );
}

export default Meme;
