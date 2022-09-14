import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { NavLink } from '../Header/HeaderStyles';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Huynh Nguyen Ngoc Phu <br />
          I'm a Front-End Developer From Ton Duc Thang University</SectionText>
        <Button onClick={props.handleClick}>
          <Link href="/files/CV_Huynh_Nguyen_Ngoc_Phu_Front_End_Developer(1)" dowload>
            <NavLink>My CV</NavLink>
          </Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;