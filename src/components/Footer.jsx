import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container=styled.div`
    display: flex;
`
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo=styled.h1`
    
`
const Description=styled.p`
margin:20px 0;
    
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width :40px ;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center=styled.div`
    flex:1;
    padding:20px;
    cursor: pointer;

`
const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right=styled.div`
    flex:1;
    padding:20px;
    
`
const ContactItem=styled.div`
    display: flex; 
    align-items: center;
    margin-bottom: 10px;
`
const Payment=styled.img`
width: 80%;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>HARSHA.</Logo>
            <Description>
                This a B2c BATTERY company.Working with a ambition to make our products to reach to everyone.
            </Description>
            <SocialContainer>
                <SocialIcon bg="0165E1">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon bg="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon bg="25D366">
                    <WhatsAppIcon/>
                </SocialIcon>
                <SocialIcon bg="00deed">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
                <PlaceIcon/>xyz street,pm City 335 515
            </ContactItem>
            <ContactItem>
                <PhoneIcon/>+91 8247644509
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon/>contact@b2c.com
            </ContactItem>
            <Payment src="https://tinyurl.com/22k8zeze"/>
            {/*https://th.bing.com/th/id/R.df4c1861853f8af2c29d17d764d7b69d?rik=jQY6ekJTdmzHcQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fMajor-Credit-Card-Logo-Transparent-PNG.png&ehk=mk%2bTPLwBhCNX%2bbAmNsYZBP8f1hMTgxrIs%2b4LWNqpzPs%3d&risl=&pid=ImgRaw&r=0*/}
        </Right>
    </Container>
  )
}

export default Footer
