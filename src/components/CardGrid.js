import styled from 'styled-components';
import Card from './Card';
function CardGrid({ arr, callback }) {
  return (
    <CardGridWrapper>
      {arr.map((e, i) => {
        return (
          <Card
            key={i + Date()}
            imgsrc={e[0]}
            value={e[1]}
            callback={() => callback(e)}
          />
        );
      })}
    </CardGridWrapper>
  );
}

const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 50px;
  justify-items: center;
  background-color: #ff1801;
`;

export default CardGrid;
