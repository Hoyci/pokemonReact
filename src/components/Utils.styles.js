import styled from "styled-components";

export const Main = styled.main`
display: flex;
align-items: ${props => props.center ?  "center" :  ""};
justify-content: ${props => props.justifyContent || "center"};
flex-wrap: ${props => props.wrap || ""};
padding: 0px 50px;
`

export const LinkReference = styled.a`
text-decoration: none;
color: #FECA1B;
`

