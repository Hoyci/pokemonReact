import React from 'react'
import { CardContainer, CardHeader, Text, Title, CardTopics, Topics, ContentTopic } from './Card.styles'
import { LinkReference } from '../Utils.styles'

export default function Card() {
  return (
    <CardContainer>
        <CardHeader>
            <Title>PokeStudy</Title>
            <Text>
                This is a study project with the front-end based in 
                <LinkReference href='https://pokeapi.co/' target="_blank"> PokéApi </LinkReference>
                website and consuming the API of the same site.
            </Text>
            <Text>
                I use <LinkReference href='https://dev.to/tracycss/a-react-website-with-styled-components-for-beginners-3don' target="_blank"> this </LinkReference>
                article to learn how to use styled components and how to create a responsive NavBar.
            </Text>
        </CardHeader>
        <CardTopics>
            <Title>Topics I learned</Title>
            <Topics>
                <ContentTopic>
                    <Title fontSize='1.5rem' marginBottom='5px'>ReactJS ⚛️ </Title>
                    <Text>Learned how to use Hooks like useState and useEffect </Text>
                </ContentTopic>
                <ContentTopic>
                    <Title fontSize='1.5rem' marginBottom='5px'>Styled-Components 💅🏾</Title>
                    <Text>Create a component using styled-components</Text>
                    <Text>Create a global style to my application</Text>
                    <Text>Pass props to the component and get some variations of the component</Text>
                    <Text>How to extend the style from a component to other</Text>
                </ContentTopic>
                <ContentTopic>
                    <Title fontSize='1.5rem' marginBottom='5px'>Axios</Title>
                    <Text>How to make requests and destructure data with a name</Text>
                    <Text>Create an instance of axios to make the code more readable</Text>
                </ContentTopic>
            </Topics>
        </CardTopics>
    </CardContainer>
  )
}
