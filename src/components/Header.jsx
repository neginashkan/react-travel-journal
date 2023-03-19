import "../CSS/styles.css"
export default function Header(){
    return (
      <header className="Header">
        <h1 className="heading">
          <i class="fa-solid fa-earth-americas header-icon"></i> {""}
          <span className="header-text"> my travel journal</span>
        </h1>
      </header>
    );
}