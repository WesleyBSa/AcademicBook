import styled from "styled-components";

export const Button = styled.button`
    background-color:#72C2E3;
    padding:10px ;
    width:200px ;
    border-radius: 20px ;
    border: none;
    color : #08246E;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    &:hover,
     &:focus {
      background-color:#82cbeba8;
      border: 1px solid ;
      transition: 1s;
    }
`
export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
`


export const A = styled.a`
    
    font-size: 20px;
    font-weight: bold;
    color : #08246E;
    text-decoration: none;
    
`

export const Div_Mid = styled.div`
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`


export const P = styled.p`
    font-size: 20px;
    font-weight: bold;
    color : #08246E;
`

export const Input = styled.input`
    background-color:#EFF7FA;
    padding:10px ;
    border-radius: 20px ;
    width: 300px;
    border: 1px solid ;
    &:hover,
     &:focus {
      background-color:#d9eff7; 
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap : 20px;
`

export const P_alt = styled.p`
   color :#4599bd;
   font-weight: bold;
`


