import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading, 
ColumnSocials
} from "./FooterStyles";
import { GrFacebook, GrTwitter, GrPinterest, GrInstagram } from 'react-icons/gr'; 
import Banner
 from "./Banner";
const Footer = () => {
return (
    <>
   
	
    <Box>
	
	<Container>
		<Row>
            <Column>
            <h3 style={{ color: "white",
				textAlign: "left",
				marginTop: "-50px" }}>
Shortly	</h3>
            </Column>
		<Column>
			<Heading>Features</Heading>
			<FooterLink href="#">Link Shortening</FooterLink>
			<FooterLink href="#">Branded Links</FooterLink>
			<FooterLink href="#">Analytics</FooterLink>
		</Column>
		<Column>
			<Heading>Resources</Heading>
			<FooterLink href="#">Blog</FooterLink>
			<FooterLink href="#">Developers</FooterLink>
			<FooterLink href="#">Support</FooterLink>
		</Column>
		<Column>
			<Heading>Comapny</Heading>
			<FooterLink href="#">About</FooterLink>
			<FooterLink href="#">Our Team</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Contact</FooterLink>
		</Column>
		<ColumnSocials>
			<FooterLink href="#">
			<GrFacebook />
			</FooterLink>
            <FooterLink href="#">
            < GrTwitter />
            </FooterLink>
			
			<FooterLink href="#">
			<GrPinterest />
			</FooterLink>
			<FooterLink href="#">
			<GrInstagram />
			</FooterLink>
		</ColumnSocials>
		</Row>
	</Container>
	</Box>
    </>
);
};
export default Footer;
