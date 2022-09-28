import styled from "styled-components";

export const Inputs = styled.input`
    border: none;
    padding: 10px;
    border-radius: 2px;
    background: #EEF3F8;
`;

export const External = styled.div`
@media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    color: white;
    font-size: 20px;
    text-shadow: 2px 2px 10px #000000;
}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    color: white;
    font-size: 20px;
    text-shadow: 2px 2px 10px #000000;
`;

export const Button = styled.button`
    padding: 5px;
    border-radius: 4px;
    background: #EEF3F8;
    border: none;
    margin-left: 4px;
    cursor: pointer;
`;

export const ExternalButton = styled.button`
    padding: 10px;
    border-radius: 4px;
    width: 100px;
    background: #EEF3F8;
    border: none;
    margin-left: 4px;
    cursor: pointer;
`;

export const Container = styled.div`
    @media (min-width: 1000px) {
    margin: 0;
    padding: 0;
    width: 100vw;
    input {
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
}
input {
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
`;

export const Close = styled.div`
    display: flex;
    right: 50px;
    top: 30px;
    font-size: 20px;
    position: absolute;
    cursor: pointer;
`;

export const BottomInputs = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    align-items: start;
    @media (min-width: 1000px) {
    textarea {
        display: flex;
        width: 900px;
        height: 3rem;
        margin-bottom: 10px;
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
    fieldset {
        display: flex;
        width: 875px;
        height: 1rem;
        justify-content: space-around;
        border: none;
    }
}
    textarea {
        display: flex;
        width: 700px;
        height: 3rem;
        margin-bottom: 10px;
        border: none;
        background-color: #EEF3F8;
        padding: 5px;
        border-radius: 5px;
    }
    fieldset {
        display: flex;
        width: 700px;
        height: 1rem;
        justify-content: space-around;
        border: none;
    }
`;

export const TopInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const Modal = styled.div`
    @media (min-width: 1000px) {
    display: flex;
    opacity: 100%;
    width: 100vw;
    background-color: black;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    height: 120vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 40%;
    }
    display: flex;
    opacity: 100%;
    width: 100%;
    background-color: black;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 20%;
`;

export const Form = styled.form`
@media (min-width: 1000px) {
    div {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
    }
    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        input {
            margin-top: 5px;
        }
    }
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    background: white;
    top: 19%;
    left: 30.5%;
    padding: 50px;
    z-index: 5;
    color: black;
    opacity: 100%;
    button {
        display: flex;
        margin-left: 0px;
        margin-top: 30px;
        justify-content: center;
        background: #32bb32;
        color: white;
        width: 100px;
        padding: 8px;
    }

    input {
        padding: 10px;
        margin-left: 10px;
    }

    label {
        margin-top: 10px;
    }
}

@media (max-width: 1000px) {
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    border-radius: 10px;
    position: fixed;
    background: white;
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 20%;
    left: 4%;
    padding: 20px;
    z-index: 5;
    color: black;
    opacity: 100%;
    width: 80%;
    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        input {
            margin-top: 5px;
        }
    }
    button {
        display: flex;
        margin-left: 0px;
        margin-top: 10px;
        justify-content: center;
        width: 100px;
        color: white;
        background: #32bb32;
        padding: 7px;
    }
}
`;