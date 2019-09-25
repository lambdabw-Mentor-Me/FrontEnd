import styled from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
`;

const info = styled.div`
    ${'' /* // * INFO DIV LINK STYLES HERE 
    */}
    
    ${'' /* // * INFO TOP CONTAINER
     */}
    & > .info__top {
        padding-top: 1rem;
        margin: 0 1rem;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        & > .local-time {
            width: 15%;
            font-size: 1.6rem;
            font-weight: 600;
        }

        ${'' /* // * ICON STYLES HERE
        */}
        & > .icon-container {
            width: 12%;

            display: flex;
            flex-flow: row nowrap;
            justify-content: space-evenly;

            & > .icon-signal {
                height: 2vh;
                width: 3vw;
            }

            & > .icon-wifi {
                height: 2vh;
                width: 3vw;
            }

            & > .icon-battery {
                height: 2vh;
                width: 3vw;
            }
        }
    }

    ${'' /* // * INFO BOTTOM CONTAINER
    */}
    & > .info__bottom {
        display: flex;
        justify-content: center;
        align-items: center;

        & > .back-btn {
        height: 3vh;
        width: 5vw;
        }

        & > .info__bottom-input {

            width: 30%;

            display: flex;
            align-items: center;

            & > input {
                margin-left: 1rem;
                height: 3.5rem;
                width: 30rem;
                background-color: rgba(0,0,0,0);
            }

            & > input:hover {
                border-bottom: 3px solid #61C1FF;
            }

            & > .x-btn {
                height: 2vh;
                width: 3vw;
                margin-left: 1rem;
            }
        }
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