import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2.5rem;
    padding: .5rem 2rem;

    &.active {
    color: red;
  }
`

export const HomeLink =  styled(NavLink)`
    color: white;

`