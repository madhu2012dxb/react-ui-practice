import React from "react";
import "./App.css";
import styled,{ThemeProvider,css} from "styled-components";
import Button from './elements/Button'
const theme={
primary:'teal',
secondary:'green',
font:'sans-serif'
};

/* can be moved to a js file to use and import */ 


const H1=styled.h1`
font-family:${(props)=>props.theme.font};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/*<h1>Styled Components</h1>*/}
      <H1>Styled Components</H1>
      <form action="">
        <input type="text" />
        <button>Create</button>
        {/*<Button primary>Create</Button> */}
        {/*<Button>Create</Button>*/}
        <Button color='primary'>Create</Button>
      </form>
    </div>
    </ThemeProvider>
  );
}

export default App;
