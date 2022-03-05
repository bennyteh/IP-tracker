import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 5px 0px grey;
    position: absolute;
    top: 50%;
    width: 20.5rem;
    z-index: 25;

    @media screen and (min-width: 860px){
        text-align: left;
        flex-direction: row;
        padding: 2rem 1rem;
        gap: 2rem;
        top: 75%;
        width: 840px;
    }
`
export const SmallBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;

    @media screen and (min-width: 860px){
        border-left: ${props => props.noborder? "none" : "1px solid hsl(0, 0%, 80%)"};
    }
`

export const Title = styled.h6`
    color: hsl(0, 0%, 59%);
    font-family: 'Rubik', sans-serif;
    font-size: 0.6rem;
    font-weight: 500;
`

export const Info = styled.p`
    color: black;
    font-size: 1.5rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
`