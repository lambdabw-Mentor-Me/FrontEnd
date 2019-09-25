import styled from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
`;

const info = styled.div`
    ${'' /* // * INFO DIV LINK STYLES HERE 
    */}


    ${'' /* // * ICON STYLES HERE
     */}
    & > .signal {
        
    }

    & > .wifi {
        
    }

    & > .battery {
        
    }
`;

const results = styled.div`
    ${'' /* RESULTS DIV LINK STYLES HERE */}
`;

const bottomNav = styled.div`
    ${'' /* BOTTOM NAV LINK STYLES HERE */}
`;

export default {
    section,
    info,
    results,
    bottomNav
}