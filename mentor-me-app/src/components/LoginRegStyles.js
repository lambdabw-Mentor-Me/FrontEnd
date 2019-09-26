import styled from 'styled-components';

const FormDiv = styled.div`
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    textarea:focus, input:focus{
        outline: none;
    }

    a {
        color:rgb(255,255,255,.82);

        &:hover {
            color:whitesmoke;
        }
    }

    h1 {
        font-weight:bold;
        color:white;
        margin: 20vh auto;
        font-size:3rem;
    }

    button{
        font-weight:bold;
        padding:15px;
        width:100%;
        border-radius:7px;
        background:white;
        color: #5574F7;
        margin: 2% 0;
    }

    input{
        background:rgb(0,0,0,0);
        border-bottom: 1px solid #FFFFFF99; 
        margin:2% .5%
        width:49%;
        color:rgb(255,255,255,.6);

        ::placeholder{
            color:#FFFFFF99;
        }
    }
`;

// const infoDiv = styled.div`

    
// `;

// const descriptionDiv = styled.div`

// `;

// const btnDiv = styled.div`
//     height: 5vh;

//     & > button {
//         background-color: #60C3FF;
//     }
// `;

export default {
    FormDiv
}