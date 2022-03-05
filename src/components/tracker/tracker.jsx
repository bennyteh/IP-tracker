import React, {useState, useEffect} from 'react'
import { Btn, InputBar, MapBox, SearchContainer, Section, Title } from './tracker.styled'
import arrow from "../../assets/icon-arrow.svg"
import Information from '../information/information'
import axios from 'axios'
import MapInfo from '../map/map'

const Tracker = () => {

    const [ipAddress, setIpAddress] = useState('')
    const [validate, setValidaate] = useState(false)
    const [data, setData] = useState([])
    const [isLoad, setIsLoad] = useState(false)

    const handleChange = (e) => {
        setIpAddress(e.target.value)
    }

    const ipValidateChecker = (ip) => {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)){
            setValidaate(true)
            return true
        }
        alert("Please enter valid IP address")
        return false
    }

    useEffect(() => {
        if (!validate) return
        setValidaate(false)
        async function getLocation() {
            try {
              const response = await axios.get('https://geo.ipify.org/api/v2/country,city',{
                  params: {
                    apiKey: "at_26o33JaSiTNG8Mv9w4JG0GBF85oTf",
                    ipAddress: ipAddress
                  }
              })
              setData([response.data])
              setIsLoad(true)
            } catch (error) {
              console.error(error);
            }
          }
        getLocation()
    }, [validate, ipAddress])


  return (
    <div>
        <Section>
            <Title>IP Address tracker</Title>
            <SearchContainer>
                <InputBar value={ipAddress} onChange={(e) => {handleChange(e)}} placeholder="103.245.88.239"></InputBar>
                <Btn onClick={(e) => {
                    e.preventDefault()
                    ipValidateChecker(ipAddress)
                }}><img src={arrow} alt="arrow"/>
                </Btn>
            </SearchContainer>
            
            {
                isLoad? 
                <Information 
                    key = {data[0].ip + 123}
                    ip = {data[0].ip}
                    location = {data[0].location.city + ", " + data[0].location.region + " " + data[0].location.postalCode}
                    timezone = {"UTC " + data[0].location.timezone}
                    isp = { data[0].isp}
                /> : 
                <Information 
                    ip = "103.245.88.239"
                    location = "Kuala Lumpur"
                    timezone = "UTC +08:00"
                    isp = "GITN-SCHOOLNET"
                />
            }

        </Section>
        <MapBox>
            {isLoad? 
            <MapInfo key = {data[0].ip + 321} position = {[data[0].location.lat, data[0].location.lng]}/>
            : <MapInfo position = {[3.1412, 101.68653]}/>
            }
        </MapBox>
    </div>
    
  )
}

export default Tracker