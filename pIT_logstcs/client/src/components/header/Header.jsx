import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import "./header.css"
import { useNavigate } from "react-router-dom";
const Container = styled.div`
    background-color: #003588;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`;
const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: ${props => props.type === "headerContainer listmode" ? `20px 0px 0px 0px` : `20px 0px 100px 0px`};    
`;
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 50px;
`;

// const Active = styled.div` 
//     border: none;
//     padding: 0px;
//     `;

const HeaderListItem = styled.div`
    border: ${props => props.type === "active" && `1px solid white`};
    padding: ${props => props.type === "active" && `10px`};
    border-radius: ${props => props.type === "active" && `20px`};
    display: flex;
    align-items: center;
    gap: 10px;


    &:hover{
        border: 1px solid white;
        padding: 10px;
        border-radius: 20px;
    }
`;
const Typography = styled.span``;
const HeaderTitle = styled.h1``;
const HeaderDesc = styled.p`
    margin: 20px 0px;
`;
const Button = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
`;
const HeaderSearch = styled.div`
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: -20px;
    width: 100%;
    max-width: 1024px;
`;
const HeaderSearchItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Input = styled.input`
    border: none;
    outline: none;
`;
const HeaderTypography = styled.span`
    color: lightgray;
    cursor: pointer;
`;
const HeaderDiv = styled.div`
    color: ${props => props.type === "headerIcon" && `lightgray`}
`;
const HeaderOptions = styled.div`
    position: absolute;
    top: 50;
    background-color: white;
    color: gray;
    border-radius: 5px;
    -webkit-box-shadow: -4px -2px 18px -3px rgba(0,0,0,0.54);
    -moz-box-shadow: -4px -2px 18px -3px rgba(0,0,0,0.54);
    box-shadow: -4px -2px 18px -3px rgba(0,0,0,0.54);
`;
const HeaderOptionCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const HeaderOptionItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    font-size: 12px;
    color: black;
`;
const HeaderOptionTypo= styled.span``;
const HeaderOptionItemButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #0071c2;
    border-radius: 5px;
    color: #0071c2;
    cursor: pointer;
    background-color: white;

    &:disabled{
        cursor: not-allowed;
    }
`;
const HeaderOptionNumber = styled.span``;


const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
      });

      const navigate = useNavigate();

      const handleOption = (name, operation) => {
        setOptions(prev => {return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
        }});
      }

      const handleSearch = () => {
        navigate("/hotels", {state:{ destination, date, options }});
      };
  return (
    <Container>
    <HeaderContainer type="headerContainer listmode" >
      <HeaderList>
      
        <HeaderListItem type="active">
        <FontAwesomeIcon icon={faBed} />
        <Typography>Stays</Typography>
        </HeaderListItem>
        <HeaderListItem>
        <FontAwesomeIcon icon={faPlane} />
        <Typography>Flights</Typography>
        </HeaderListItem>
        <HeaderListItem>
        <FontAwesomeIcon icon={faCar} />
        <Typography>Car Rentals</Typography>
        </HeaderListItem>
        <HeaderListItem>
        <FontAwesomeIcon icon={faBed} />
        <Typography>Attractions</Typography>
        </HeaderListItem>
        <HeaderListItem>
        <FontAwesomeIcon icon={faTaxi} />
        <Typography>Airport Taxis</Typography>
        </HeaderListItem>
        
      </HeaderList>
      { type !== "list" &&
        <>
      <HeaderTitle>A lifetime of discounts? It's Genius.</HeaderTitle>
        <HeaderDesc>
            Get rewarded for your travels | Unlock instant savings of 10% or more with a free RedoxBooking account 
        </HeaderDesc>
        <Button>Sign in/Register</Button>
        <HeaderSearch>
            <HeaderSearchItem>
            <FontAwesomeIcon icon={faTaxi} style={{"color":"lightgray"}}/>
            <Input type="text" placeholder="Where are you going?"
                onChange={e=> setDestination(e.target.value)}
            />
            </HeaderSearchItem>
            <HeaderSearchItem type="calendar">
            <FontAwesomeIcon icon={faCalendarDays} style={{"color":"lightgray"}}/>
            <HeaderTypography onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate, 
                "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</HeaderTypography>
            {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
            />}
            </HeaderSearchItem>
            <HeaderSearchItem>
            <FontAwesomeIcon icon={faPerson} style={{"color":"lightgray"}}/>
            <HeaderTypography onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children .${options.room} room.......`}</HeaderTypography>
            {openOptions && <HeaderOptions className="options">
                <HeaderOptionItem>
                <HeaderOptionTypo>
                    Adult
                </HeaderOptionTypo>
                <HeaderOptionCounter>
                <HeaderOptionItemButton
                disabled={options.adult <= 1 }
                 onClick={() => handleOption("adult", "d")}>-</HeaderOptionItemButton>
                <HeaderOptionNumber>{options.adult}</HeaderOptionNumber>
                <HeaderOptionItemButton 
                onClick={() => handleOption("adult", "i")}>+</HeaderOptionItemButton>
                </HeaderOptionCounter>
                </HeaderOptionItem>
                <HeaderOptionItem>
                <HeaderOptionTypo>
                    Children
                </HeaderOptionTypo>
                <HeaderOptionCounter>
                <HeaderOptionItemButton 
                disabled={options.children <= 1 }
                onClick={() => handleOption("children", "d")}>-</HeaderOptionItemButton>
                <HeaderOptionNumber>{options.children}</HeaderOptionNumber>
                <HeaderOptionItemButton onClick={() => handleOption("children", "i")}>+</HeaderOptionItemButton>
                </HeaderOptionCounter>
                </HeaderOptionItem>
                <HeaderOptionItem>
                <HeaderOptionTypo>
                    Room
                </HeaderOptionTypo>
                <HeaderOptionCounter>
                <HeaderOptionItemButton 
                disabled={options.room <= 1 }
                onClick={() => handleOption("room", "d")}>-</HeaderOptionItemButton>
                <HeaderOptionNumber>{options.room}</HeaderOptionNumber>
                <HeaderOptionItemButton onClick={() => handleOption("room", "i")}>+</HeaderOptionItemButton>
                </HeaderOptionCounter>
                </HeaderOptionItem>
            </HeaderOptions>}
            </HeaderSearchItem>
            <HeaderSearchItem>
            <Button type="headerButton" onClick={handleSearch}>Search</Button>
            </HeaderSearchItem>
        </HeaderSearch>
        </>}
      </HeaderContainer>
    </Container>
  )
}

export default Header
