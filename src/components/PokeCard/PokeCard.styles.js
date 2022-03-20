import styled from "styled-components";

export const CardContainer = styled.div` 
height: auto;
min-width: ${props => props.width || "800px"};
padding: 25px;
border-radius: 5px;
background-color: ${props => props.color || "#263238"};
margin: 0px 10px 40px 10px;
flex: 1 0 30%;
&:hover {
    box-shadow: 4px 4px 22px 10px rgba(19,24,27,0.35);
}
@media only screen and (max-width: 400px){
    margin: 0px 0px 40px;
}
`

export const CardHeader = styled.div`
color: #FFF;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 45px;
`

export const Text = styled.p`
color: #FFF;
font-family: 'Roboto', Verdana, sans-serif;
font-size: 1.3rem;
font-weight: 100;
text-transform: ${props => props.capitalize || ""};
`

export const Title = styled.h1`
color: #FFF;
font-family: 'Roboto', Verdana, sans-serif;
font-size: ${props => props.fontSize || "2.6rem"};
font-weight: 900;
margin-bottom: ${props => props.marginBottom || "15px"};
@media only screen and (max-width: 380px){
    font-size: 1.5rem;
}
`
export const CardImg = styled.img`
width: 150px;
height: auto;
`

export const CardTopics = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Topics = styled(CardTopics)`
display: flex;
align-items: flex-start;
`

export const ContentTopic = styled.div`
padding: 10px;
`