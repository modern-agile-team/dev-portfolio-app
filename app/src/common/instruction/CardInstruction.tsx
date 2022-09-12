import React from "react";
import { Card } from "dev-portfolio";
import styled from "styled-components";

const CardInstruction = () => {
  return (
    <Wrap>
      <Card width="20vw" height="20vw" hover="down">
        This is Card component
      </Card>
      <Card width="20vw" height="20vw" shape="round-square" hover="zoom">
        You can use this components anyware
      </Card>
      <Card width="20vw" height="20vw" shape="round" hover="up">
        See official documentation for details
      </Card>
    </Wrap>
  );
};

export default CardInstruction;

const Wrap = styled.div`
  display: flex;
  padding: 3em;
  justify-content: space-around;
`;
