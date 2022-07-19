import styled from "styled-components"

const PList = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
const PListItem = styled.div`
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`;
const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;
const PListItemTitles = styled.div``;
const PListItemTextB = styled.h1`
    font-size: 18px;
`;
const PListItemTextS = styled.h2`
    font-size: 14px;
    font-weight: 300;
`;

const PropertyList = () => {
  return (
    <PList>
      <PListItem>
        <Image src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt=""/>
        <PListItemTitles>
        <PListItemTextB>Hotels</PListItemTextB>
        <PListItemTextS>2333 Hotels </PListItemTextS>
        </PListItemTitles>
      </PListItem>
      <PListItem>
        <Image src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt=""/>
        <PListItemTitles>
        <PListItemTextB>Resorts</PListItemTextB>
        <PListItemTextS>2333 Resorts </PListItemTextS>
        </PListItemTitles>
      </PListItem>
      <PListItem>
        <Image src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt=""/>
        <PListItemTitles>
        <PListItemTextB>Villas</PListItemTextB>
        <PListItemTextS>2333 Villas </PListItemTextS>
        </PListItemTitles>
      </PListItem>
      <PListItem>
        <Image src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt=""/>
        <PListItemTitles>
        <PListItemTextB>Cabins</PListItemTextB>
        <PListItemTextS>2333 Cabins </PListItemTextS>
        </PListItemTitles>
      </PListItem>
      <PListItem>
        <Image src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt=""/>
        <PListItemTitles>
        <PListItemTextB>Cottages</PListItemTextB>
        <PListItemTextS>2333 Cottages </PListItemTextS>
        </PListItemTitles>
      </PListItem>
      <PListItem>
        <Image src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt=""/>
        <PListItemTitles>
        <PListItemTextB>Apartments</PListItemTextB>
        <PListItemTextS>2333 Apartments </PListItemTextS>
        </PListItemTitles>
      </PListItem>
    </PList>
  )
}

export default PropertyList
