import styled from "styled-components"
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList";

const Container = styled.div``;
const HomeContainer = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const HomeTitle = styled.h1`
  width: 1024px;
  font-size: 20px;
`;
const Home = () => {
  return (
    <Container>
      <Navbar/>
      <Header/>
      <HomeContainer>
        <Featured/>
        <HomeTitle>Browse By property type</HomeTitle>
        <PropertyList/>
        <HomeTitle>Homes guests love</HomeTitle>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </HomeContainer>
    </Container>
  )
}

export default Home
