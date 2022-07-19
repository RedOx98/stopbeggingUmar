import styled from "styled-components";

const Footers = styled.div`
    width: 100%;
    max-width: 1024px;
    font-size: 12px;
`;
const FLists = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`;
const FList = styled.ul`
    list-style: none;
    padding: 0;
    cursor: pointer;
`;
const FListItem = styled.li`
    margin-bottom: 10px;
    color: #003580;
`;
const FText = styled.div`

`;
const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <Footers>
      <FLists>
        <FList>
            <FListItem>Countries</FListItem>
            <FListItem>Regions</FListItem>
            <FListItem>Cities</FListItem>
            <FListItem>Districts</FListItem>
            <FListItem>Airport</FListItem>
            <FListItem>Hotels</FListItem>
            <FListItem>Places of interest</FListItem>
        </FList>
        <FList>
            <FListItem>Homes</FListItem>
            <FListItem>Apartments</FListItem>
            <FListItem>Resorts</FListItem>
            <FListItem>Villas</FListItem>
            <FListItem>Hostels</FListItem>
            <FListItem>B&Bs</FListItem>
            <FListItem>Guest houses</FListItem>
        </FList>
        <FList>
            <FListItem>Unique places to stay</FListItem>
            <FListItem>All destinations</FListItem>
            <FListItem>Discover</FListItem>
            <FListItem>Reviews</FListItem>
            <FListItem>Unpacked: Travel articles</FListItem>
            <FListItem>Travel communities</FListItem>
            <FListItem>Seasonal and holiday deals</FListItem>
        </FList>
        <FList>
            <FListItem>Car rental</FListItem>
            <FListItem>Flight finder</FListItem>
            <FListItem>Restaurant reservations</FListItem>
            <FListItem>Booking.com for Travel Agents</FListItem>
        </FList>
        <FList>
            <FListItem>Coronavirus (COVID-19) FAQs</FListItem>
            <FListItem>About Booking.com</FListItem>
            <FListItem>Customer Service Help</FListItem>
            <FListItem>Partner help</FListItem>
            <FListItem>Careers</FListItem>
            <FListItem>Sustainability</FListItem>
            <FListItem>Press center</FListItem>
            <FListItem>Safety Resource Center</FListItem>
            <FListItem>Investor relations</FListItem>
            <FListItem>Terms & conditions</FListItem>
            <FListItem>Partner dispute</FListItem>
            <FListItem>How We Work</FListItem>
            <FListItem>Privacy & cookie statement</FListItem>
            <FListItem>Corporate contact</FListItem>
        </FList>
      </FLists>
      <FText>Copyright © {year} redoxBooking
 </FText>
    </Footers>
  )
}

export default Footer
