import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row noPadding>
  <LeftSection>
    <SectionTitle main center>
      Hey there, <br/>
      I'm Matan Amsalem.
   </SectionTitle>
    <SectionText>
      I'm a Software engineer with ability to learn and collaborate in rapidly changing environments and compositions.
      </SectionText>
      <Button onClick={()=> window.location= 'https://cannikood.co.il'}>
        Learn More
      </Button>
  </LeftSection>
   </Section>
);

export default Hero;