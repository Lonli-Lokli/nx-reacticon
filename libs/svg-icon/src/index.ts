import styled, { css } from 'styled-components';

import { ReactComponent as SvgHomeIcon } from './home.svg';

type IconType = 'default' | 'success';

type IconPropsDefault = React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
  size?: number;
};

type IconPropsExtended = IconPropsDefault & { type?: IconType; $hoverFill?: string };

const getFill = ({ type = 'default', fill }: IconPropsExtended) => {
  switch (type) {
    case 'success':
      return '#32cd32';
    default:
      return fill || '#333333';
  }
};

const styledSvg = (component: React.FunctionComponent<IconPropsDefault>) => styled(component)`
  ${(props: IconPropsExtended) => css<IconPropsExtended>`
    cursor: pointer;
    width: ${props.size ?? 16}px;
    height: ${props.size ?? 16}px;
    min-width: ${props.size ?? 16}px;
    min-height: ${props.size ?? 16}px;
    fill: ${getFill(props)};
    &:hover {
      fill: ${({ $hoverFill }) => $hoverFill ?? '#338fd9'};
    }
  `}
`;

export const HomeIcon = styledSvg(SvgHomeIcon);
