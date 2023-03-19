import "../CSS/styles.css";
import Card from "./Card.jsx";
import Data from "../javaScript/data.js";
export default function Cards() {
  const CardsComponents = Data.map((CardData) => {
    return(
      <Card key={CardData.Key} data={CardData} />
    )
  });
  return <div className="Cards-Container">
    {CardsComponents}
  </div>;
}
