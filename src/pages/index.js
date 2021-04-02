import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Heading from "../components/heading"
import Text from "../components/text"
import Arrow from "../svg/arrow"
import MainForm from "../components/mainForm"
import FormFactory from "../components/formFactory"

const IndexPage = () => {
  const [choice, setChoice] = React.useState('')
  return (
    <Layout>
      <div className="half-screen">
        {/* <div className="inner">
          <div className="top">
            <Heading primary>We're here</Heading>
            <div className="mid">
              <Text style={{ marginBottom: "72px" }}>Our door is always open for a good cup of coffee.</Text>
            </div>
          </div>
          <div className="info">
            <Heading secondary>Our Office</Heading>
            <Text> Jacob van Lennepkade 334-H</Text>
            <Text>1053 NJ Amsterdam</Text>
            <Text>The Netherlands 🇳🇱</Text>
          </div>
        </div>
        <div className="map"></div> */}
        {choice === '' && (
          <>
            <div className="inner">
              <div className="top">
                <Heading primary>We're here</Heading>
                <div className="mid">
                  <Text style={{ marginBottom: "72px" }}>Our door is always open for a good cup of coffee.</Text>
                </div>
              </div>
              <div className="info">
                <Heading secondary>Our Office</Heading>
                <Text> Jacob van Lennepkade 334-H</Text>
                <Text>1053 NJ Amsterdam</Text>
                <Text>The Netherlands 🇳🇱</Text>
              </div>
            </div>
          </>
        )}
        <div className="map"></div>
      </div>
      <div className="half-screen blue">
        <div className="inner">
          <div className="top">
            <Heading primary light>Let's talk</Heading>
            <div className="mid">
              <Text light>Share your excitement with us.</Text>
              <a href="mailto:info@yummygum.com" className="link-animation white">
                <span className="link">info@yummygum.com <Arrow /></span>
              </a>
            </div>
          </div>
          <div className="info">
            <Heading secondary light >Let's talk about</Heading>
            <div className="type">
              <MainForm onSubmit={choice => setChoice(choice)} />
            </div>
          </div>
        </div>
      </div>
      <div className={"form-container blue " + `${choice !== '' && 'more'}`}>
        <FormFactory choice={choice} />
      </div>
      <div className={`arrow ${choice !== '' && "visible"}`} onClick={() => setChoice('')}><Arrow color='#000' /></div>
    </Layout>
  )
}

export default IndexPage