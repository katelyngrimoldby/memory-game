import styled from 'styled-components';

function Scoreboard({ score, bestScore }) {
  return (
    <ScoreboardWrapper>
      <ScoreCounter>{score}</ScoreCounter>
      <ScoreCounter>{bestScore}</ScoreCounter>
    </ScoreboardWrapper>
  );
}

const ScoreboardWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: left;
  align-items: center;
  background-color: #353535;
  padding: 10px 50px;
`;

const ScoreCounter = styled.span`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export default Scoreboard;
