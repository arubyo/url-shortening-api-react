import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h3 style={{ color: "white",
				textAlign: "left",
				marginTop: "-50px" }}>
Shortly	</h3>
	<Container>
		<Row>
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
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<img src="./../assets/images/icon-facebook.svg" />
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
