import styled from "styled-components";
import CustomizableIcon from './../assets/images/icon-fully-customizable.svg';
import RecognitionIcon from './../assets/images/icon-brand-recognition.svg';
import RecordsIcon from './../assets/images/icon-detailed-records.svg';
<style> @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');</style>




export const Customizable = styled.img.attrs({
    src: `${CustomizableIcon}`
  })`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 60px;
  top: -20px;
  left: 20px;
  box-shadow: 0 0 2px #888;
  padding: 0.7em 0.7em;
  background-color: hsl(257, 27%, 26%);
  `;


  export const Recognition = styled.img.attrs({
    src: `${RecognitionIcon}`
  })`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 60px;
  top: -20px;
  left: 20px;
  box-shadow: 0 0 2px #888;
  padding: 0.7em 0.7em;
  background-color: hsl(257, 27%, 26%);
  `;

  export const Records = styled.img.attrs({
    src: `${RecordsIcon}`
  })`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 60px;
  top: -20px;
  left: 20px;
  box-shadow: 0 0 2px #888;
  padding: 0.7em 0.7em;
  background-color: hsl(257, 27%, 26%);
  `;