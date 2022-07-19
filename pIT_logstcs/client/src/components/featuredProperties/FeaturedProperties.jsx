import styled from "styled-components";

const Fp = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
const FpItem = styled.div`
    flex: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;
const Image = styled.img`
    width: 100%;
    ${'' /* max-width: 1024px; */}
`;
const FpName = styled.span`
    font-weight: bold;
`;
const FpCity = styled.span`
    font-weight: 300;
`;
const FpPrice = styled.span`
    font-weight: 500;
`;
const FpRating = styled.div`
    
`;
const FpButton = styled.button`
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
`;
const FpRatingSpan = styled.span`
    font-size: 14px;
`;


const FeaturedProperties = () => {
  return (
    <Fp>
      <FpItem>
      <Image src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <FpName>Aparthotel Stare Miasto</FpName>
      <FpCity>Madrid</FpCity>
      <FpPrice>Starting from $120</FpPrice>
      <FpRating>
        <FpButton>8.9</FpButton>
        <FpRatingSpan>Excellent</FpRatingSpan>
      </FpRating>
      </FpItem>
      <FpItem>
      <Image src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <FpName>Aparthotel Stare Miasto</FpName>
      <FpCity>Madrid</FpCity>
      <FpPrice>Starting from $120</FpPrice>
      <FpRating>
        <FpButton>8.9</FpButton>
        <FpRatingSpan>Excellent</FpRatingSpan>
      </FpRating>
      </FpItem>
      <FpItem>
      <Image src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <FpName>Aparthotel Stare Miasto</FpName>
      <FpCity>Madrid</FpCity>
      <FpPrice>Starting from $120</FpPrice>
      <FpRating>
        <FpButton>8.9</FpButton>
        <FpRatingSpan>Excellent</FpRatingSpan>
      </FpRating>
      </FpItem>
      <FpItem>
      <Image src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <FpName>Aparthotel Stare Miasto</FpName>
      <FpCity>Madrid</FpCity>
      <FpPrice>Starting from $120</FpPrice>
      <FpRating>
        <FpButton>8.9</FpButton>
        <FpRatingSpan>Excellent</FpRatingSpan>
      </FpRating>
      </FpItem>
    </Fp>
  )
}

export default FeaturedProperties
