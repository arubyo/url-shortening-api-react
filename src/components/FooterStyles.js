import styled from 'styled-components';
<style> @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');</style>

export const Box = styled.div`
padding: 80px 60px;
background: hsl(260, 8%, 14%);
position: absolute;
bottom: 0;
width: 100%;
height: 330px;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;

`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-family: 'Poppins', sans-serif;
font-size: 14px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 16px;
font-family: 'Poppins', sans-serif;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;



export const ColumnSocials = styled.div`
display: flex;
flex-direction: row;
text-align: left;
margin-left: 60px;
`;