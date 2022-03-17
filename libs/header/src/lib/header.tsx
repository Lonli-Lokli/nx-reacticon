import { HomeIcon } from '@react-svgicon/svg-icon';
import { FC } from 'react';
import styled from 'styled-components';

export interface HeaderProps {
  title: string
}

const StyledHeader = styled.div`
`;

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <HomeIcon title={title} size={64} fill={'green'}/>
    </StyledHeader>
  );
}

export default Header;

