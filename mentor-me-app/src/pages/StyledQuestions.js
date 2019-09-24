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

        & > h2 {
            padding-top: 2rem;
            text-align: center;
        }
    }

    & > .info__bottom {
        background-color: #FFFFFF;
        height: 30%;

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