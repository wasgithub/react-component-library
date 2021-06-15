import React from "react";
import { Button } from "@material-ui/core";

import { TestComponentProps } from "./TestComponent.types";

import "./TestComponent.scss";
import { StyledButton } from "./TestComponent.style";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by washington</h2>
    <StyledButton>
      <Button variant="contained" color="primary">
        teste
      </Button>
    </StyledButton>
  </div>
);

export default TestComponent;
