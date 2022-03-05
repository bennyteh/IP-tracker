import React from 'react'
import { Container, Info, SmallBox, Title } from './information.styled'

const Information = (props) => {
  return (
    <Container>
        <SmallBox noborder>
            <Title>IP ADDRESS</Title>
            <Info>{props.ip}</Info>
        </SmallBox>
        <SmallBox>
            <Title>LOCATION</Title>
            <Info>{props.location}</Info>
        </SmallBox>
        <SmallBox>
            <Title>TIMEZONE</Title>
            <Info>{props.timezone}</Info>
        </SmallBox>
        <SmallBox>
            <Title>ISP</Title>
            <Info>{props.isp}</Info>
        </SmallBox>
    </Container>
  )
}

export default Information