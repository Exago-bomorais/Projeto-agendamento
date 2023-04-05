import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  margin: 25px auto;
  width: 1400px;
  gap: 20px;
  align-itens: center;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  padding: 16px 8px 20px 8px;
  background-color: #ffffff;
  width: 195px;
  height: 211px;
  box-shadow: 0px 4px #2f456a;
`;

export const CardContent = styled.div`
  font-family: 'Inter', sans-serif;
  padding: 0px 8px 0px 8px;
  width: 179px;
  height: 175px;

  .cardHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    span {
      color: #2f456a;
    }
  }

  .pOne {
    margin-top: 27px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.15em;
    color: #343a40;
    margin-bottom: 2px;
    line-height: 120%;
  }

  .pTwo {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #5c6670;
    line-height: 150%;
  }

  .peopleQuantity {
    margin-top: 16px;
    display: flex;
    align-items: center;

    .circleBlue {
      width: 6px;
      height: 6px;
      background-color: #3d557d;
      border-radius: 15px;
      margin-right: 8px;
    }

    .textPeople {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.02em;
      color: #5c6670;
    }
  }

  .button {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
    button {
      font-family: 'Inter';
      width: 107px;
      height: 26px;
      cursor: pointer;
      background-color: #f0faf4;
      border: none;
      border-radius: 16px;
      padding: 4px 16px;
      color: #006735;
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.02em;
    }
  }
`;
