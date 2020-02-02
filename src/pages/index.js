import React from 'react';
import SEO from '../components/SEO';
import logo from '../images/logo.jpeg';

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
    </div>
  );
}

export default Index;
