import troll from "/images/troll-face.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={troll} alt="meme generator" />
        <h3>Meme Generator</h3>
      </div>
      <p>React - project 3</p>
    </header>
  );
}

export default Header;
