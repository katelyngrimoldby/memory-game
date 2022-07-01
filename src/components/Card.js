function Card({ value, callback }) {
  return (
    <div className="card" onClick={() => callback(value)}>
      <span>{value}</span>
    </div>
  );
}

export default Card;
