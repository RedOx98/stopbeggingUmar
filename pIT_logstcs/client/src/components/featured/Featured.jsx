import styled from "styled-components";

const Container = styled.div``;
const Features = styled.div`
 width: 100%;
 max-width: 1024px;
 display: flex;
 justify-content: space-between;
 gap: 20px;
 z-index: 1;
`;
const FeaturesItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
`;
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;
const FeaturesTitle = styled.div`
    position: absolute;
    bottom: 40px;
    left: 20px;
`;
const FeaturesTextB = styled.h1``;
const FeaturesTextS = styled.h2``;

const Featured = () => {
  return (
    <Container>
      <Features>
        <FeaturesItem>
            <Image src="https://images.pexels.com/photos/8837551/pexels-photo-8837551.jpeg?auto=compress&cs=tinysrgb&w=800"/>
            <FeaturesTitle>
            <FeaturesTextB>Dubai</FeaturesTextB>
            <FeaturesTextS>123 properties</FeaturesTextS>
            </FeaturesTitle>
        </FeaturesItem>
        <FeaturesItem>
            <Image src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1"/>
            <FeaturesTitle>
            <FeaturesTextB>Austin</FeaturesTextB>
            <FeaturesTextS>532 properties</FeaturesTextS>
            </FeaturesTitle>
        </FeaturesItem>
        <FeaturesItem>
            <Image src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1"/>
            <FeaturesTitle>
            <FeaturesTextB>Reno</FeaturesTextB>
            <FeaturesTextS>533 properties</FeaturesTextS>
            </FeaturesTitle>
        </FeaturesItem>
      </Features>
    </Container>
  )
}

export default Featured
