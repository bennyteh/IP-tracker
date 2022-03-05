import styled from "styled-components";
import background from "../../assets/pattern-bg.png"

export const Section = styled.section`
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    position: relative;
`

export const Title = styled.section`
    color: white;
    font-size: 1.7rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    padding: 1.5rem;
`

export const SearchContainer = styled.div`
    display: flex;
`

export const InputBar = styled.input`
    height: 2.5rem;
    width: 18rem;
    padding: 0.5rem;
    outline: none;
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
    border-radius: 10px 0 0 10px;
    border-color: transparent;
`

export const Btn = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    background-color: hsl(0, 0%, 17%);
    border: none;
    outline: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    border-color: transparent;
    transition: background-color 150ms ease-in; 

    &:hover{
        background-color: hsl(0, 0%, 25%);
    }
`

export const MapBox = styled.div`
    height: calc(100vh - 280px);
`