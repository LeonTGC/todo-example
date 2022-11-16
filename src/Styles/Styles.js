import styled from "styled-components"

export const PersonWrapper = styled.div`
border: solid purple 3px;
background-color: ${props => props.finished ? "red" : "blue"}
`
export const Header = styled.h1`
border: solid red 3px;
background-color: lime;
`