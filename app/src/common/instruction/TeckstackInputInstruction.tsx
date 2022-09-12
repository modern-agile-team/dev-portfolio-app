import React from "react";
import styled from "styled-components";

const TeckstackInputInstruction = () => {
  return (
    <Wrap>
      <h1>TechStackInput</h1>
      <span>
        This component is designed to help you select icons when you write the
        TechStackList props.
      </span>
      <span>
        If you want to know the name of the icon for the technology you use when
        you write TechStackList props, search for your technology stack in the
        input window below.
      </span>
      <span>
        Please note that the text below the icon you searched is a nameOption
        props.
      </span>
      <span>Once you have found all the icons, you may delete them!</span>
    </Wrap>
  );
};

export default TeckstackInputInstruction;

const Wrap = styled.div`
  padding: 2.2em;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid;
  }
`;
