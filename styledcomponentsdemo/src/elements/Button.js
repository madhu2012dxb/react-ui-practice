import styled,{css} from "styled-components";

export default styled.button`
  /*font-family: sans-serif;*/
  font-family:${(props)=>props.theme.font};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding:7px 10px;
  /*background:red;*/
  /*background:${(props)=>(props.primary?'red':'green')};*/
  /*background: ${(props)=>props.theme.primary};*/
  ${(props)=> props.color &&
    css `
    background:${(props)=>props.theme[props.color]};
    `
  }
  

  color:#fff;
  &:hover{
    background:blue;
  }
`;