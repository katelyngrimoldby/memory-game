function Card({ imgsrc, value, callback }) {
  return <img src={imgsrc} alt={value} onClick={() => callback(value)} />;
}

export default Card;
