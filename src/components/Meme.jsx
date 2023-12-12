import { useState } from "react";
import memesData from "./memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleClick() {
    const memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    event.preventDefault();
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="meme__container">
      <div className="form">
        <input
          className="form__input"
          name="topText"
          type="text"
          value={meme.topText}
          onChange={handleChange}
          placeholder="Top text"
        />
        <input
          className="form__input"
          name="bottomText"
          type="text"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder="Bottom text"
        />
        <button onClick={handleClick}>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme__image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
