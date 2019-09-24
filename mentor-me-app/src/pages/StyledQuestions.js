import styled from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: red;

    & > * {
        border: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

const infoDiv = styled.div`

    height: 20vh;

    & > .info__top {
        height: 80%;
        color: #FEFEFF;
        background-image: linear-gradient(90deg, #5574f7 0%, #60c3ff 100%);

        & > .info__extra-info {
            padding: 0.5rem;
            font-size: 1.1rem;
            font-weight: 600;
        }

        & > h2 {
            text-align: center;
            color: #FFFFFF;
        }
    }

    & > .info__bottom {
        background-color: #FFFFFF;
        height: 30%;
        border-bottom: 3px solid #E4EAEF;
        position: relative;
        z-index: 1000;

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;

        & > img {
            height: 5rem;
            max-width: 100%;
            border: 5px solid #FFFFFF;
            border-radius: 0.8rem;
            position: relative;
            bottom: 3rem;
        }
    }
`;

const descriptionDiv = styled.div`
    height: 65vh;
    background-color: #FAFAFA;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & > .description__inner-div {
        height: 50%;
        width: 50%;
        margin-top: 10%;

        & > h3 {
            color: #5887F9;
            font-size: 1.5rem;
            font-weight: bold;
        }

        & > p {
            color: #4D5365;
            font-weight: 600;
        }
    }
`;

const btnDiv = styled.div`
    height: 5vh;

    & > button {
        background-color: #60C3FF;
    }
`;

export default {
    section,
    infoDiv,
    descriptionDiv,
    btnDiv
}