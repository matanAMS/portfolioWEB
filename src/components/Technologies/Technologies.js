import React from 'react';
import { DiFirebase, DiReact, DiZend,DiLinux,DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide variety of technologies from Back-end to Front-end and I've worked with a wide variety of languages.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js and React Native, Next.js, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Node.js, Express,ASP.NET, MongoDB, and SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>More</ListTitle>
          <ListParagraph>
            Familiar with Jest, Docker, Github , Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
