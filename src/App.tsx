import React from "react";
import { ButtonGroup, Button, Label } from "purrfect-components";

function App() {
  return (
    <div>
      <Label label={"Teste Tree shaking"} />
      <ButtonGroup direction="column">
        <Button>JavaScript</Button>
        <Button>TypeScript</Button>
        <Button>Python</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
