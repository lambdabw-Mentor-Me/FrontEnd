import styled from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
`;

const info = styled.div`
    ${'' /* // * INFO DIV LINK STYLES HERE 
    */}

    & > .info__main {

        border-bottom: 2px solid #E2E8ED;

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
            margin-bottom: 1rem;

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
    }

    ${'' /* // * INFO SELECTION
     */}

    .info__selection {

        display: flex;
        border-bottom: 2px solid #E2E8ED;

        & > span {
            display: flex;
            align-items: center;
            justify-content: center;
            
            font-size: calc(0.5rem + 1.5vw);
            width: 15vw;
            height: 6.5rem;
        }

        & > span:hover {
            cursor: pointer;
        }

        & > .active {
            border-bottom: 3px solid #61C1FF;
        }
    }
`;

const results = styled.div`
    ${'' /* RESULTS DIV LINK STYLES HERE */}
    border-bottom: 2px solid #E2E8ED;

    & > .user__div {
        display: flex;

        padding: 2.5rem;
        margin-left: 3rem;
        ${'' /* background-color: blue; */}

        & > .user-img {
            display: flex;
            align-items: center;

            & > img {
                border-radius: 1.5rem;
                height: 90%;
            }
        }

        & > .user-info {
            margin-left: 3rem;

            display: flex;
            flex-flow: column;
            justify-content: center;

            & > dt {
                font-size: calc(3.5rem + 0.3vw);
                font-weight: 600;
            }

            & > dd {
                font-size: calc(2rem + 0.3rem);
            }
        }
    }
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