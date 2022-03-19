import { CardContainer, CardHeader, CardImg, CardTopics, Text } from '../Card/Card.styles'

export default function PokeCard({pokemon}) {
  return (
    <CardContainer key={pokemon.id} width="300px">
        <CardHeader>
            <Text capitalize="capitalize">{pokemon.id}</Text>
            <Text capitalize="capitalize">{pokemon.name}</Text>
        </CardHeader>
        <CardTopics>
            <CardImg src={pokemon['sprites']['other']['official-artwork']['front_default']} alt={pokemon.name} loading="lazy"/>
        </CardTopics>
    </CardContainer>
  )
}
