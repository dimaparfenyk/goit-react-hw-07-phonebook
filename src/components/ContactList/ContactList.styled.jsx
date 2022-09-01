import styled from "styled-components";

export const List = styled.ul`
list-style: none;
margin: 0, auto;
padding: 0;
`
export const ListItem = styled.li`
display: flex;
align-items: center;
margin-bottom: 15px;
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
    height: 30px;
    width: 60px;
    margin:0 auto;
`
export const Text = styled.p`
font-weight: 500;
margin-right:15px;
`
export const SubText = styled.span`
color:orange;

margin-right:15px;
font-weight: 500;
`