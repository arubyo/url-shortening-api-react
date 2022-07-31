import styled from "styled-components";
import LinkBg from './../assets/images/bg-shorten-desktop.svg';



export const BoxedContainer = styled.div`
    margin-right: 0;
	max-width: 80vw;
	margin: 0 auto;
    height: 15vh;
    background-image: url(${LinkBg});
    backgroundRepeat: 'no-repeat';
    background-color:  hsl(257, 27%, 26%);
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    border-radius: 6px;
    align-items: center;
    position: relative;
    top: 60px;
`

export const Button = styled.button`
border-radius: 12px;
color: #FFF;
font-weight: bold;
background-color:  hsl(180, 66%, 49%); 
border: none;
padding: 12px 30px;
margin-left: 10px;
`;
