import styled from 'styled-components';

export const Container = styled.div`
.Card:hover {
  transform: translateY(-5px);
  cursor: pointer;
}

a {
    color: black;
    font-size: 25px;
}
 
.Card p {
  color: #0b0524;
  font-size: 16px;
}
 
.Leitor {
  display: flex;
  justify-content:space-between;
  margin-top: 0px;
  flex-wrap: wrap;
}

.blue {
  border-left: 3px solid #4895ff;
}
 
.green {
  border-left: 3px solid #3bb54a;
}
 
.red {
  border-left: 3px solid #b3404a;
}

.Card {
  border-radius: 5px;
  box-shadow: 7px 7px 13px 12px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 300px;
  transition: all 0.3s ease-out;
}

    p {
        text-align: start;
    }

`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        display: flex;
        align-items: center;
    }
`;