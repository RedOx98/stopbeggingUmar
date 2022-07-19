import styled from "styled-components"

const SItem = styled.div`
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
`;
const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;
const SItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2;
`;
const SITitle = styled.h1`
    font-size: 20px;
    color: #0071c2;
`;
const SIDistance= styled.span`
    font-size: 12px;
`;
const SITaxiOp = styled.span`
    font-size: 12px;
    background-color: #008009;
    color: white;
    width: max-content;
    padding: 3px;
    border-radius: 5px;
`;
const SISubtitle = styled.span`
    font-size: 12px;
    font-weight: bold;
`;
const SIFeatures = styled.div`
    font-size: 12px;
`;
const SICancelOp = styled.div`
    font-size: 12px;
    color: #008009;
    font-weight: bold;
`;
const SICancelOpSubtitle = styled.div`
    font-size: 12px;
    color: #008009;
    font-weight: bold;
`;
const SIDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const SIRating = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SIRatingSpan = styled.span`
    font-weight: 500;
`;
const SIRatingButton = styled.button`
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
`;
const SIDetailsTexts = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const SIDetailsPrice = styled.span`
    font-size: 24px;
`;
const SICheckButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    padding: 10px 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;
const SITaxOption = styled.span`
    font-size: 12px;
    color: gray;
`;


const SearchItem = () => {
  return (
    <SItem>
      <Image src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <SItemDesc>
        <SITitle>Tower Street Apartments</SITitle>
        <SIDistance>500m from center</SIDistance>
        <SITaxiOp>Free airport taxi</SITaxiOp>
        <SISubtitle>Studio Apartment with Air conditioning</SISubtitle>
        <SIFeatures>Entire Studio ' 1 bathroom . 21m^2 1 full bed</SIFeatures>
        <SICancelOp>Free cancellation</SICancelOp>
        <SICancelOpSubtitle>
            You can cancel later, so lock in this great price today!
        </SICancelOpSubtitle>
      </SItemDesc>
      <SIDetails>
      <SIRating>
      <SIRatingSpan>Excellent</SIRatingSpan>
      <SIRatingButton>8.9</SIRatingButton>
      </SIRating>
      
      <SIDetailsTexts>
        <SIDetailsPrice>$123</SIDetailsPrice>
        <SITaxOption>Includes taxes and fees</SITaxOption>
        <SICheckButton>See availability</SICheckButton>
      </SIDetailsTexts>
      </SIDetails>
    </SItem>
  )
}

export default SearchItem
