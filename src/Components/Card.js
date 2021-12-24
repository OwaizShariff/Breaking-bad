import "./Card.css";


function Card(props) {
    console.log("props", props);
return (
    <div className="Card">
     <img className="img" src={props.img} alt="" />
       <p className="char1">{props.name}</p>
        <p className="char2">{props.birthday}</p>
       <p className="char3">{props.category}</p>
        <p className="char4">{props.occupation}</p>
        <p className="char5">{props.nickname}</p>
        <p className="char6">{props.portrayed}</p>
    
    </div>
);
}

export default Card;