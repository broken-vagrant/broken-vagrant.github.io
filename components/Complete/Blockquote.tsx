import React from 'react';
import { FiInfo } from 'react-icons/fi';
import { TiWarningOutline } from 'react-icons/ti';
import { GoQuote } from 'react-icons/go';
import styled from 'styled-components';

interface BlockquoteProps {
  children: React.ReactNode;
  display?: string;
}

const Blockquote: React.FC<BlockquoteProps> = ({ children, display }) => {
  if (display === 'warning')
    return (
      <Wrapper>
        <div className="container warning">
          <TiWarningOutline className="icon" />
          {children}
        </div>
      </Wrapper>
    );
  if (display === 'info')
    return (
      <Wrapper>
        <div className="container info">
          <FiInfo className="icon" />
          {children}
        </div>
      </Wrapper>
    );
  if (display === 'default') {
    return (
      <Wrapper>
        <div className="container default">{children}</div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="quote">
          <GoQuote className="quote-icon" />
          {children}
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.blockquote`
  margin: 2rem 0;

  .container {
    padding: 2rem 1.5rem;
    background: var(--clr-gray5);
    border-radius: var(--radius);
    color: var(--clr-slate12);
    border-left: 3px solid var(--clr-slate10);
    position: relative;

    .icon {
      position: absolute;
      top: 15px;
      left: 5px;
      background: var(--clr-bg);
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 6px solid var(--clr-white);
      padding: 0.2rem;
    }
  }

  .info {
    background: var(--clr-violet4);
    color: #513c06;
    border-left: 6px solid var(--clr-violet11);
    .icon {
      color: var(--clr-violet11);
    }
  }
  .warning {
    background: #fffaeb;
    color: #513c06;
    border-left: 6px solid #f7d070;
    .icon {
      left: 2px;
      color: #f7d070;
    }
  }
  .quote {
    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
    font-style: italic;
    color: var(--clr-slate10);
    line-height: 1.8;
    word-spacing: 3px;
    font-size: 1.2rem;
    margin: 2rem 0;
    .quote-icon {
      font-size: 3rem;
      color: var(--clr-violet11);
    }
  }
`;
export default Blockquote;
