import styled from 'styled-components';

const TreasureWrapper = styled.div`
  max-width: 1000px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 10vh;
  overflow: hidden;
  position: relative;
  .desktop {
    font-size: 20px;
    color: white;
    display: block;
    margin-bottom: 5px;
    @media ${props => props.theme.mobile} {
      display: none;
    }
  }
`;

const TreasureContent = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  @media ${props => props.theme.mobile} {
    height: 95vh;
  }
`;

const MapLoading = styled.div`
  position: relative;
  margin: 50px auto;
  width: 70%;
  height: 95%;
  overflow: hidden;
  font-size: 30px;
  text-align: center;
  z-index: 100;
  @media ${props => props.theme.mobile} {
    height: 100vh;
  }
`

export { TreasureWrapper, TreasureContent, MapLoading };
