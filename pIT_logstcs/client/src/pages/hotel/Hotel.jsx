import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Container = styled.div``;
const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
const HotelTitle = styled.h1`
  font-size: 24px;
`;
const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HotelAddressText = styled.span``;
const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;
const HotelPriceHighlight = styled.span`
   color: #008009;
   font-weight: 500;
`;
const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HotelImageWrapper = styled.div`
  width: 33%;
`;
const HotelImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
const HotelDetailsTexts = styled.div`
  flex: 3;
`;
const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const HotelDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;
const HotelDetailsPriceTextB = styled.h1`
  font-size: 18px;
  color: #555;
`;
const HotelDetailsPriceSpan= styled.span`
  font-size: 14px;
`;
const HotelDetailsPriceTextS = styled.h2`
  font-weight: 300;

`;
const HotelDetailsPriceTextButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 999;
  display: flex;
  align-items: center;
`;
const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
  object-fit: cover;
`;



const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber);
  }
  const photos = [
    {
      src: "https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      src: "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/981916/pexels-photo-981916.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      src: "https://images.pexels.com/photos/1693946/pexels-photo-1693946.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];
  return (
    <Container>
      <Navbar/>
      <Header type="list"/>
      <HotelContainer>
      {open && <Slider>
        <FontAwesomeIcon icon={faCircleXmark} className="arrow" style={{position: "absolute", top: "20px", right: "20px", fontSize: "30px", color: "lightgray", cursor: "pointer" }} onClick={()=> setOpen(!open)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} onClick={() => handleMove("l")} style={{ margin: "20px", fontSize: "50px", color: "lightgray", cursor: "pointer" }}/>
        <SliderWrapper>
          <SliderImg src={photos[slideNumber].src}/>
        </SliderWrapper>
        <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} style={{ margin: "20px", fontSize: "50px", color: "lightgray", cursor: "pointer" }}/>
      </Slider>}
      <HotelWrapper>
      <BookNow>Reserve or Book Now!</BookNow>
        <HotelTitle>Grand Hotel</HotelTitle>
        <HotelAddress>
          <FontAwesomeIcon icon={faLocationDot} />
          <HotelAddressText>Elton St 125, New York. </HotelAddressText>
        </HotelAddress>
        <HotelDistance>Excellent location - 500m from center</HotelDistance>
        <HotelPriceHighlight>
          Book a stay over $114 at this property and get a free airport taxi
        </HotelPriceHighlight>
        <HotelImages>
          {photos.map((photo, i) => (
            <HotelImageWrapper>

            <HotelImage onClick={()=>handleOpen(i)} src={photo.src} alt=""/>
            </HotelImageWrapper>
            
          ))}
        </HotelImages>
        <HotelDetails>
          <HotelDetailsTexts>
          <HotelTitle>Stay in the heart of krakow</HotelTitle>
          <HotelDesc>
            Located ina 5-minute walk from St. Florian's Gate in krakow, Tower Street Apartments has accomodations with air conditioning and free wiFi. The units come with hardwood floors and feature a fully equipped kitchenette witha microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machinw. Popular points of interest near the apartmwnt include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Krakow Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.
          </HotelDesc>
          </HotelDetailsTexts>
          <HotelDetailsPrice>
            <HotelDetailsPriceTextB>Perfect for a 9-night stay!</HotelDetailsPriceTextB>
            <HotelDetailsPriceSpan>
              Located in the real heart of krakow, this property has an excellent location score of 9.8!
            </HotelDetailsPriceSpan>
            <HotelDetailsPriceTextS>
              <b>$945</b> (9) nights
            </HotelDetailsPriceTextS>
            <HotelDetailsPriceTextButton>Reserve or Book Now!</HotelDetailsPriceTextButton>
          </HotelDetailsPrice>
        </HotelDetails>
      </HotelWrapper>
      <MailList/>
      <Footer/>
      </HotelContainer>
    </Container>
  )
}

export default Hotel
