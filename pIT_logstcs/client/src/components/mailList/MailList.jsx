import styled from "styled-components"

const Mail = styled.div`
    width: 100%;
    margin: 50px;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
`;
const MailTitle = styled.h1``;
const MailDesc = styled.span`
    
`;
const MailInputContainer = styled.div`
    
`;
const MailInput = styled.input`
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
`;
const MailButton = styled.button`
    height: 50px;
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


const MailList = () => {
  return (
    <Mail>
      <MailTitle>Save time, save money!</MailTitle>
      <MailDesc>Sign up and we'll send the best deals to you</MailDesc>
      <MailInputContainer>
        <MailInput type="text" placeholder="Your Email"></MailInput>
        <MailButton>Subscribe</MailButton>
      </MailInputContainer>
    </Mail>
  )
}

export default MailList
