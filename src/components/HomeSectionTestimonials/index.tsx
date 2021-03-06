import * as React from 'react';
import commonLogo from './common.svg';
import fatLlamaLogo from './fat-llama.svg';
import framerLogo from './framer.svg';
import googleLogo from './google.svg';
import {
  Blockquote,
  BlockquoteText,
  BlockquoteFooter,
  Container,
  Logo,
  Logos,
} from './styled';

const HomeSectionTestimonials = () => (
  <Container>
    <Blockquote>
      <BlockquoteText>
        A ton of extremely useful, actionable feedback that directly and
        significantly improved our First Meaningful Paint, Time to Interactive,
        [and] Speed Index
      </BlockquoteText>
      <BlockquoteFooter>
        — Cihat Imamoglu, Senior Software Engineer @{' '}
        <a href="https://fatllama.com/">Fat Llama</a>
      </BlockquoteFooter>
    </Blockquote>
    <Logos>
      <Logo src={fatLlamaLogo} width="127" height="62" />
      <Logo src={googleLogo} width="148" height="62" />
      <Logo src={commonLogo} width="284" height="62" />
      <Logo src={framerLogo} width="60" height="62" />
    </Logos>
  </Container>
);

export default HomeSectionTestimonials;
