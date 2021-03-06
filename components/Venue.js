import React from 'react';
import styled from 'styled-components';

import { Section } from '../components/Sections';
import { ParagraphSmall } from '../components/Typography';
import { Map } from '../components/Map';

export function Venue({ title, children }) {
  return (
    <>
      <Section
        css={`
          margin-top: 60px;
        `}
        title={title}
      >
        <ParagraphSmall
          css={`
            margin-top: 20px;
            text-align: center;
          `}
        >
          {children}
        </ParagraphSmall>
      </Section>
      <Map />
    </>
  );
}
