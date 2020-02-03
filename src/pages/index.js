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
import Carousel, { Modal, ModalGateway } from 'react-images';
import gallery0 from '../images/gallery-00.jpg';
import gallery1 from '../images/gallery-01.jpg';
import gallery2 from '../images/gallery-02.jpg';
import gallery3 from '../images/gallery-03.jpg';
import gallery4 from '../images/gallery-04.jpg';
import gallery5 from '../images/gallery-05.jpg';

const IMAGES = [
  { source: gallery0, caption: '' },
  { source: gallery1, caption: '' },
  { source: gallery2, caption: '' },
  { source: gallery3, caption: '' },
  { source: gallery4, caption: '' },
  { source: gallery5, caption: '' },
];

const GUTTER = 2;

const Gallery = props => (
  <div
    css={{
      overflow: 'hidden',
      marginLeft: -GUTTER,
      marginRight: -GUTTER,
    }}
    {...props}
  />
);

const Image = props => (
  <div
    css={{
      backgroundColor: '#eee',
      boxSizing: 'border-box',
      float: 'left',
      margin: GUTTER,
      overflow: 'hidden',
      paddingBottom: '16%',
      position: 'relative',
      width: `calc(25% - ${GUTTER * 2}px)`,

      ':hover': {
        opacity: 0.9,
      },
    }}
    {...props}
  />
);

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
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);

  function toggleLightbox(index) {
    setSelectedIndex(index);
    setLightboxIsOpen(!lightboxIsOpen);
  }

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
      </Section>
      <div
        css={`
          display: flex;
          width: 55rem;
          margin: 0 auto;
          color: #a1a1a1;
          font-family: 'Raleway', sans-serif;
          font-size: 1em;
          text-align: justify;
          line-height: 1.5;
          font-weight: 400;

          div {
            padding: 0 0 0 3.5rem;
          }
        `}
      >
        <div>
          <p>
            <i>
              "I was indeed fortunate to have engaged services from Innersight
              Interiors. Mr. Bhavin Raithatha is a thorough bred professional at
              his work and keeps his deadlines and promises. He also fits
              everything well in our budget. I have got my offices renovated
              with him and also my home. Excellent Services. Strongly
              Recommend."
            </i>
          </p>
          <p>
            <i>
              <strong>
                Kabir Master, President at Indian Business School of Advanced
                Management Studies - IBSAMS
              </strong>
            </i>
          </p>
        </div>
        <div>
          <p>
            <i>
              "Bhavin had renovated my home 2 years back. Whole house was
              designed nicley by him and the most important thing he did is,
              efficent space utilization. Whoever visits our home, admire it's
              awesomeness specially My kid's room. Hats off to his dedication
              and patiently answering our endless queries. Kudos to him."
            </i>
          </p>
          <p>
            <i>
              <strong>Hemang Kotadia, Research Analyst</strong>
            </i>
          </p>
        </div>
        <div>
          <p>
            <i>
              "We have used the service of innersight interiors twice and it is
              one of the best interiors having good experience and knowledge.
              They helped us designing interior within our budget. As finishing
              of the furniture, which is very important part of interior was
              done such that it makes different impression. Most important thing
              is, work was completed on time and it did't get extended like any
              other service provider in the market."
            </i>
          </p>
          <p>
            <i>
              <strong>
                Kalpesh Thanki, Investor Relations - Asian Granito India Limited
              </strong>
            </i>
          </p>
        </div>
      </div>
      <hr
        css={`
          margin: 4rem auto;
          position: relative;
          width: 55rem;
          border: 0.5px solid rgba(255, 255, 255, 0.231);
        `}
      />
      <Gallery
        css={`
          max-width: 55rem;
          margin: 0 auto;
        `}
      >
        {IMAGES.map(({ caption, source }, j) => (
          <Image onClick={() => toggleLightbox(j)} key={source}>
            <img
              alt={caption}
              src={source}
              css={{
                cursor: 'pointer',
                position: 'absolute',
                maxWidth: '100%',
              }}
            />
          </Image>
        ))}
      </Gallery>
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleLightbox}>
            <Carousel
              currentIndex={selectedIndex}
              frameProps={{ autoSize: 'height' }}
              views={IMAGES}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <div
        css={`
          background: #5b6566;
          width: 100%;
        `}
      >
        <Section
          css={`
            padding: 2rem;
            margin-top: 4rem;
          `}
        >
          <SectionTitle
            css={`
              color: #fff;
            `}
          >
            Get Quote
          </SectionTitle>
          <SectionDivider />
          <SectionText css="color: rgba(255, 255, 255, 0.624);">
            Call or Email us and schedule an appointment
          </SectionText>
          <SectionText css="color: rgba(255, 255, 255, 0.624);">
            Contact: +91 9702619992 <br /> Email: contact@innersight.net
          </SectionText>
        </Section>
      </div>
      <footer
        css={`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 2rem;
          color: #fff;
          font-family: 'Raleway', sans-serif;
        `}
      >
        © InnerSight Interiors. All rights reserved.
        <div
          css={`
            display: flex;
            margin: 2rem 0;
          `}
        >
          <a
            css={`
              margin-right: 0.2rem;
            `}
            href="https://www.facebook.com/Innersight-Interiors-2379201568967712/"
          >
            <svg
              fill="rgba(255, 255, 255, 0.624)"
              height="20px"
              width="20px"
              viewBox="0 0 40 40"
            >
              <path d="M27.2,4.7v4.9h-2.9c-1.1,0-1.8,0.2-2.1,0.6c-0.4,0.5-0.6,1.1-0.6,2v3.5H27l-0.7,5.4h-4.7v14H16v-14h-4.7v-5.4H16v-4.1 c0-2.3,0.6-4.1,1.9-5.3s2.9-1.9,5.2-1.9C24.8,4.4,26.2,4.5,27.2,4.7L27.2,4.7z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/innersightin">
            <svg
              fill="rgba(255, 255, 255, 0.624)"
              height="20px"
              width="20px"
              id="icon-910"
              viewBox="0 0 40 40"
            >
              <path d="M20,7c4.2,0,4.7,0,6.3,0.1c1.5,0.1,2.3,0.3,3,0.5C30,8,30.5,8.3,31.1,8.9c0.5,0.5,0.9,1.1,1.2,1.8c0.2,0.5,0.5,1.4,0.5,3 C33,15.3,33,15.8,33,20s0,4.7-0.1,6.3c-0.1,1.5-0.3,2.3-0.5,3c-0.3,0.7-0.6,1.2-1.2,1.8c-0.5,0.5-1.1,0.9-1.8,1.2 c-0.5,0.2-1.4,0.5-3,0.5C24.7,33,24.2,33,20,33s-4.7,0-6.3-0.1c-1.5-0.1-2.3-0.3-3-0.5C10,32,9.5,31.7,8.9,31.1 C8.4,30.6,8,30,7.7,29.3c-0.2-0.5-0.5-1.4-0.5-3C7,24.7,7,24.2,7,20s0-4.7,0.1-6.3c0.1-1.5,0.3-2.3,0.5-3C8,10,8.3,9.5,8.9,8.9 C9.4,8.4,10,8,10.7,7.7c0.5-0.2,1.4-0.5,3-0.5C15.3,7.1,15.8,7,20,7z M20,4.3c-4.3,0-4.8,0-6.5,0.1c-1.6,0-2.8,0.3-3.8,0.7 C8.7,5.5,7.8,6,6.9,6.9C6,7.8,5.5,8.7,5.1,9.7c-0.4,1-0.6,2.1-0.7,3.8c-0.1,1.7-0.1,2.2-0.1,6.5s0,4.8,0.1,6.5 c0,1.6,0.3,2.8,0.7,3.8c0.4,1,0.9,1.9,1.8,2.8c0.9,0.9,1.7,1.4,2.8,1.8c1,0.4,2.1,0.6,3.8,0.7c1.6,0.1,2.2,0.1,6.5,0.1 s4.8,0,6.5-0.1c1.6-0.1,2.9-0.3,3.8-0.7c1-0.4,1.9-0.9,2.8-1.8c0.9-0.9,1.4-1.7,1.8-2.8c0.4-1,0.6-2.1,0.7-3.8 c0.1-1.6,0.1-2.2,0.1-6.5s0-4.8-0.1-6.5c-0.1-1.6-0.3-2.9-0.7-3.8c-0.4-1-0.9-1.9-1.8-2.8c-0.9-0.9-1.7-1.4-2.8-1.8 c-1-0.4-2.1-0.6-3.8-0.7C24.8,4.3,24.3,4.3,20,4.3L20,4.3L20,4.3z"></path>
              <path d="M20,11.9c-4.5,0-8.1,3.7-8.1,8.1s3.7,8.1,8.1,8.1s8.1-3.7,8.1-8.1S24.5,11.9,20,11.9z M20,25.2c-2.9,0-5.2-2.3-5.2-5.2 s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S22.9,25.2,20,25.2z"></path>
              <path d="M30.6,11.6c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9s0.8-1.9,1.9-1.9C29.8,9.7,30.6,10.5,30.6,11.6z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Index;
