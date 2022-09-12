import React from "react";
import styled from "styled-components";

const Introduction = () => {
  return (
    <Wrap>
      <span>Hi there!</span>
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
  padding: 4em;
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
`;
