import React from "react";
import styled from "styled-components";

const Introduction = ({ id }: { id: string }) => {
  return (
    <Wrap id={id}>
      <span style={{ color: "red" }}>Hi there!</span>
      <span>This manual will help you create a better portfolio.</span>
      <span>
        Create a creative portfolio by referring to simple examples of the
        components below.
      </span>
      <span>
        This article was created for a simple introduction, and when you make it
        yourself, please delete it and use it.
      </span>
      <span>Then, shall we go see the components? Scroll down and follow!</span>
    </Wrap>
  );
};

export default Introduction;

const Wrap = styled.div`
  padding: 2em;
  height: 30vh;
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 400;
  text-align: center;
  justify-content: space-between;
`;
