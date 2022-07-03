import styled from 'styled-components';
function Card({ imgsrc, value, callback }) {
  return (
    <CardWrapper>
      <img src={imgsrc} alt={value} onClick={() => callback(value)} />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: block;
  border: 5px solid #353535;
  margin-top: 10px;
  border-radius: 15px;
  background-color: white;
`;

export default Card;
