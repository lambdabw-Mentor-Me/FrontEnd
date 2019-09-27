import styled from 'styled-components';

const section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
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
            margin-top: 4.5rem;
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
            height: 6.5rem;
            max-width: 100%;
            border: 5px solid #FFFFFF;
            border-radius: 0.8rem;
            position: relative;
            bottom: 3rem;
        }
    }
`;

const descriptionDiv = styled.div`
    height: 70vh;
    background-color: #FAFAFA;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & > .description__inner-div {
        height: 50%;
        width: 50%;
        margin-top: 10%;
        width: 75%;

        & > h3 {
            color: #5887F9;
            font-size: 2rem;
            font-weight: bold;
        }

        & > p {
            color: #4D5365;
            font-weight: 600;
            font-size: 1.35rem;
            padding-top: 0.6rem;
        }
    }
`;

const btnDiv = styled.div`

    height: 10vh;
    background-image: linear-gradient(90deg, #5574f7 0%, #60c3ff 100%);

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    & > button {
        background-color: rgba(0,0,0,0);
        color: #FFFFFF;
        height: 50%;
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 3rem;
        border: none;
    }
`;

const form = styled.form`

    background-image: linear-gradient(90deg, #5574f7 0%, #60c3ff 100%);
    width: 50vw;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 1rem;
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & > h2 {
        padding-top: 1rem;
        color: rgba(255, 255, 255, 0.95);
        font-size: calc(0.8rem + 0.5vw);
    }

    & > label {
        padding-top: 1rem;
        color: rgba(255, 255, 255, 0.95);
        font-size: calc(0.8rem + 0.5vw);
    }

    & > input, button {
        background-color: rgba(0,0,0,0.1);
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
        color: rgba(255, 255, 255, 0.95);
        border-radius: 0.35rem;
    }

    & > button {
        margin: 1rem 0;
        padding: 0.2rem 0.8rem;
        color: rgba(255, 255, 255, 0.95);
        font-size: calc(0.8rem + 0.5vw);
    }

`;

export default {
    section,
    infoDiv,
    descriptionDiv,
    btnDiv,
    form
}