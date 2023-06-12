import styled from "styled-components";
// export const RedButton = styled.button `
// width: 200px;
// height:50px;
// background-color: red;
// border-radius:20px;
// color:white;
// font-size:1.2rem;
// `
// export const GreenButton = styled.button `
// width: 200px;
// height:50px;
// background-color: green;
// border-radius:20px;
// color:white;
// font-size:1.2rem;
// `
// export const VioletButton = styled.button `
// width: 200px;
// height: 50px;
// background-color: violet;
// border-radius:20px;
// color:white;
// font-size:1.2rem;
// `


export const Button = styled.button `
width: 80px;
height: 30px;
background-color:${((props)=>props.bg)};
border-radius:20px;

&:hover{
    background-color: coral;
}
&:active{
    background-color:yellow;
}
`