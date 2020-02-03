import React from 'react';
import SEO from '../components/SEO';
import logo from '../images/logo.jpeg';
import styled from 'styled-components';
import image1 from '../images/image01.jpg';
import image2 from '../images/image02.png';
import image3 from '../images/image03.jpg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import bhavin from '../images/bhavin.jpg';
import jyoti from '../images/jyoti.jpg';

const Anchor = styled.a`
  border: none;
  background-color: #ffffff;
  color: #000000;
  padding: 0.75rem 1.25rem;
  font-size: 1.125em;
  letter-spacing: 0.1rem;
  font-weight: 400;
  border-radius: 2rem;
  cursor: pointer;
`;

const Section = styled.div`
  margin: 0 auto;
  max-width: 32rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  color: #5e5e5e;
  font-family: 'Raleway', sans-serif;
  font-size: 2.25em;
  line-height: 1.125;
  font-weight: 900;
`;

const SectionDivider = styled.hr`
  margin: 0.25rem 0;
  border: none;
  position: relative;
  :before {
    width: 22%;
    border-top: solid 1px #d9d9d9;
    height: 1px;
    margin-top: -0.5px;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }
`;

const SectionText = styled.p`
  margin-top: 2.5rem;
  color: #a1a1a1;
  font-family: 'Raleway', sans-serif;
  letter-spacing: -0.025rem;
  width: 100%;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 400;
`;

const Service = styled.div`
  display: flex;
  margin: 2rem auto;
  max-width: 55rem;

  img {
    border-radius: 100%;
    width: 350px;
    margin-right: 4rem;
  }
`;

const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0;
    margin-bottom: 1.25rem;
    text-align: justify;
    color: #a1a1a1;
    font-family: 'Raleway', sans-serif;
    letter-spacing: -0.025rem;
    width: 100%;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 400;
  }

  h3 {
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    color: #5e5e5e;
    font-family: 'Raleway', sans-serif;
    font-size: 1.25rem;
    line-height: 1.125;
    font-weight: 900;
  }
`;

const Person = styled.div`
  display: flex;
  margin: 2rem auto;
  max-width: 55rem;

  img {
    border-radius: 100%;
    width: 250px;
    margin-right: 4rem;
  }
`;

const PersonText = styled.div`
  h3 {
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    color: #5e5e5e;
    font-family: 'Raleway', sans-serif;
    font-size: 1.25rem;
    line-height: 1.125;
    font-weight: 900;
  }

  h4 {
    margin: 0;
    color: #a1a1a1;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 1.25em;
  }

  p {
    margin: 0;
    margin-bottom: 1.25rem;
    text-align: justify;
    color: #a1a1a1;
    font-family: 'Raleway', sans-serif;
    letter-spacing: -0.025rem;
    width: 100%;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 400;
  }
`;

function Index() {
  return (
    <div
      css={`
        background: var(--color-primary);
      `}
    >
      <SEO
        title="InnerSight Interiors"
        description="Where thoughts take shape."
      />
      <div
        css={`
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          css={`
            width: 350px;
            height: 350px;
          `}
          src={logo}
          alt="InnerSight Logo"
        />
      </div>
      <div
        css={`
          padding: 1rem;
          display: flex;
          justify-content: space-around;
          max-width: 60%;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
          box-sizing: border-box;
        `}
      >
        <Anchor onClick={() => scrollTo('#services')}>Services</Anchor>
        <Anchor onClick={() => scrollTo('#our-team')}>Our Team</Anchor>
        <Anchor onClick={() => scrollTo('#contact-us')}>Contact Us</Anchor>
      </div>
      <Section id="services">
        <SectionTitle>Services</SectionTitle>
        <SectionDivider />
        <SectionText>
          We provide all types of solution to your interior designing need
          whether it's commercial or residential.
        </SectionText>
      </Section>
      <Service>
        <img src={image1} alt="Turnkey Project - Home Sofa" />
        <ServiceText>
          <h3>Turnkey Projects (Whole Project)</h3>
          <p>
            Whether yours is a modest family home or a palatial estate, a small
            business office or a grand resort, Innersight Interiors is able to
            take on any size project and implement a beautiful design
            transformation. Our team will take care of everything, all you need
            to do is just sit, relax. Speak to us about your tastes and ideas
            and we will listen, provide you with options and choices, and
            transform your thoughts into shapes that works wonderfully in your
            space.
          </p>
        </ServiceText>
      </Service>
      <Service
        css={`
          flex-direction: row-reverse;
        `}
      >
        <img
          css={`
            margin-left: 4rem;
            margin-right: 0 !important;
          `}
          src={image2}
          alt="Consultation and Supervision"
        />
        <ServiceText>
          <h3>Consultation and Supervision</h3>
          <p>Aren't you sure about your team's execution?</p>
          <p>
            We are here to solve your problems. We provide designs and supervise
            your team how this design can be transformed our ideas into
            real-life. We take care of planning with specific focus on time,
            budget and aesthetics. We also help in sourcing and selecting
            material and other fixtures required.
          </p>
        </ServiceText>
      </Service>
      <Service>
        <img src={image3} alt="Designing" />
        <ServiceText>
          <h3>Designing</h3>
          <p>You need just ideas?</p>
          <p>
            Having design expertise for many years, we identify your personal
            taste and provide great ideas with our extensive experience that
            suits your space and your personality. We make sure you maximize
            your space with consideration to comfort and efficiency. We build
            customized, theme based designs for your place. We provide 3D views,
            detailed 2D plans for placing, electricals & plumbing etc.
          </p>
        </ServiceText>
      </Service>
      <Section id="our-team">
        <SectionTitle>Our Team</SectionTitle>
        <SectionDivider />
        <SectionText>
          Client Satisfaction, Comfort & Aesthetics is our motto
        </SectionText>
      </Section>
      <Person>
        <img src={bhavin} alt="Bhavin Raythatha" />
        <PersonText>
          <h3>Bhavin Raythatha</h3>
          <h4>Founder</h4>
          <p>
            One who make things done. Design, build and lead from the front to
            complete your project with his own unique style of designs with
            efficient space utilization. Has more then 10 years of experience,
            having civil engineering background along with the Interior
            designing from Mumbai University.
          </p>
          <p>
            Contact him on <strong>9702619992</strong> or{' '}
            <strong>bhavin@innersight.net</strong>
          </p>
        </PersonText>
      </Person>
      <Person>
        <img src={jyoti} alt="Jyoti Jimudia" />
        <PersonText>
          <h3>Joyti Jimudia</h3>
          <h4>Creative Head</h4>
          <p>
            Her creative mind looks after of every minute but important things
            that makes your place unique in its own way. Her habit of following
            up on everything takes your work to the completion. Material
            selection and finishing up are some things for what you would
            remember her.
          </p>
          <p>
            Contact her on <strong>9702072955</strong> or{' '}
            <strong>jyoti@innersight.net</strong>
          </p>
        </PersonText>
      </Person>
      <Section>
        <SectionTitle>Client's Testimonials</SectionTitle>
        <SectionDivider />
        <SectionText>
          Client Satisfaction, Comfort & Aesthetics is our motto
        </SectionText>
      </Section>
    </div>
  );
}

export default Index;
