import styled from "styled-components";

export const Label = styled.label`
display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 10px 80px;
    width: 320px;
`

export const FormInput = styled.input`

    font-size: 16px;
    height: 36px;
    outline: none;
    padding: 0 12px;
    border: 1px solid orange;
    border-radius:8px;
    color: teal;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #457aab;
    border: none;
    border-radius:8px;
    color: white;
    cursor: pointer;
    height: 40px;
    width: 200px;
`