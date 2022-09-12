import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { VisitorCounter } from "dev-portfolio";
import countAPI from "../../apis/count";

const VisitorCounterInstruction = () => {
  const [todayCounter, setTodayCounter] = useState<number>(0);
  const [totalCounter, setTotalCounter] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const result = await countAPI.getCount();
      setTodayCounter(result.todayCount);
      setTotalCounter(result.totalCount);
    })();
  }, []);

  return (
    <Wrap>
      <InstructionWrap>
        <h1>Visitor Counter</h1>
        <span>
          This component is a component that can check the number of visitors to
          your portfolio.
        </span>
        <span>
          It consists of three themes and consists of default, simple, and
          big-size themes.
        </span>
        <span>
          A personal server can be built through a docker-compose, and detailed
          instructions on how to use it will be written.
        </span>
        <ThemeWrap>
          <VisitorCounter
            todayVisitor={todayCounter}
            totalVisitor={totalCounter}
          />
          <VisitorCounter
            theme="simple"
            todayVisitor={todayCounter}
            totalVisitor={totalCounter}
          />
        </ThemeWrap>
      </InstructionWrap>
      <VisitorCounter
        theme="big-size"
        todayVisitor={todayCounter}
        totalVisitor={totalCounter}
      />
    </Wrap>
  );
};

export default VisitorCounterInstruction;

const Wrap = styled.div`
  padding: 10em 0em;
`;

const ThemeWrap = styled.div`
  padding: 2em;
  display: flex;
  justify-content: space-around;
`;

const InstructionWrap = styled.div`
  padding: 0em 3em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  h1 {
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid;
  }
`;
