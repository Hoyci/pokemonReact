import styled from 'styled-components'
import { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export const LoaderComponent = styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid #263238;
width: 120px;
height: 120px;
animation: ${spin} 2s linear infinite;
`