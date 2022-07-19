import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const Container = styled.div``;
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;

`;
const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`;
const ListResult = styled.div`
  flex: 3;
`;
const LSTitle = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;
const ListSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-size: 12px;
`;

const Input = styled.input`
  height: 30px;
  border: none;
  padding: 5px;
`;
const Text = styled.span`
  height: 30px;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
`;
const LSOptions = styled.div`
  padding: 10px;
`;

const LSOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
`;
const LSOptionInput = styled.input`
  width: 50px;
`;
const LSButton = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <Container>
      <Navbar/>
      <Header type="list"/>
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <LSTitle>Search</LSTitle>
            <LSOptions>
            <ListSearchItem>
            <Label>Destination</Label>
            <Input type="text" placeholder={destination}/>
            </ListSearchItem>
            <ListSearchItem>
            <Label>Check-in Date</Label>
            <Text onClick={() => {setOpenDate(!openDate)}}>{`${format(
                date[0].startDate, 
                "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</Text>
                {openDate && (
                  <DateRange
                  onChange={item => setDate([item.selection])} 
                  minDate={new Date()}
                  ranges={date}
                />
                )}
            </ListSearchItem>
            <ListSearchItem>
              <Label>Options</Label>
              <LSOptionItem>
                <Label>
                Min price <small>per night</small>
                </Label>
                <LSOptionInput type="number"/>
              </LSOptionItem>
              <LSOptionItem>
                <Label>
                Max price <small>per night</small>
                </Label>
                <LSOptionInput/>
              </LSOptionItem>
              <LSOptionItem>
                <Label>
                Adult
                </Label>
                <LSOptionInput min={1} type="number" placeholder={options.adult}/>
              </LSOptionItem>
              <LSOptionItem>
                <Label>
                Children
                </Label>
                <LSOptionInput min={0} type="number" placeholder={options.children}/>
              </LSOptionItem>
              <LSOptionItem>
                <Label>
                Room
                </Label>
                <LSOptionInput min={1} type="number" placeholder={options.room}/>
              </LSOptionItem>
            </ListSearchItem>
            </LSOptions>
            <LSButton>Search</LSButton>
          </ListSearch>
          <ListResult>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </ListResult>
        </ListWrapper>
      </ListContainer>
    </Container>
  )
}

export default List
