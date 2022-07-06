import {
  Header,
  TechStackInput,
  TechStackList,
  Contact,
  Intro,
  Gallery,
  Item,
  Card,
  Masonry,
  Image,
  Carousel,
  Experience,
} from "dev-portfolio";
import styled from "styled-components";
import React from "react";
import "./App.css";

function App() {
  const techStacksDefault = [
    {
      nameOption: { name: "Javascript", size: "40px", iconColor: "#E2D784" },
      progressBarOption: {
        rate: "45%",
        colorTo: "#E2D784",
        colorFrom: "whitesmoke",
      },
    },
    {
      nameOption: { name: "HTML-5", size: "50px", iconColor: "#E34F26" },
      progressBarOption: {
        rate: "30%",
        colorTo: "#E34F26",
        colorFrom: "whitesmoke",
      },
    },
    {
      nameOption: { name: "Nodejs", size: "40px", iconColor: "#339933" },
      progressBarOption: {
        rate: "85%",
        colorTo: "#339933",
        colorFrom: "whitesmoke",
      },
    },
  ];
  return (
    <div className="App">
      <Header />
      <Carousel transition={1000} width="80%" arrowLocation="mid-side">
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/800/600/?random" />
        <Item title="1" />
        <Item title="2" />
      </Carousel>
      <Intro />
      <TechStackList techStackList={techStacksDefault} />
      <TechStackInput />
      <Experience />
      <Gallery>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Gallery>
      <Masonry>
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/1100/?random" />
        <Image src="https://picsum.photos/300/400/?random" />
        <Image src="https://picsum.photos/600/400/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/400/100/?random" />
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/800/?random" />
        <Image src="https://picsum.photos/600/1000/?random" />
        <Image src="https://picsum.photos/600/500/?random" />
        <Image src="https://picsum.photos/500/600/?random" />
      </Masonry>
      <CardWrap>
        <Card width="20em" height="20em" hover="down">
          This is Card component
        </Card>
        <Card width="20em" height="20em" shape="round-square" hover="zoom">
          You can use this components anyware
        </Card>
        <Card width="20em" height="20em" shape="round" hover="up">
          See official documentation for details
        </Card>
      </CardWrap>
      <Contact />
    </div>
  );
}

export default App;

const CardWrap = styled.div`
  display: flex;
  padding: 3em;
  justify-content: space-around;
`;
