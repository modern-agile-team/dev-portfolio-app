import {
  Header,
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
  TechStackInput,
  VisitorCounter,
  VisitorComment,
} from "dev-portfolio";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <VisitorCounter />
      <VisitorComment />
      <CardWrap>
        <Card width="20vw" height="20vw" hover="down">
          This is Card component
        </Card>
        <Card width="20vw" height="20vw" shape="round-square" hover="zoom">
          You can use this components anyware
        </Card>
        <Card width="20vw" height="20vw" shape="round" hover="up">
          See official documentation for details
        </Card>
      </CardWrap>
      <Intro />
      <TechStackList />
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
        <Image src="https://picsum.photos/500/600/?random" />
      </Masonry>
      <Carousel>
        <Item title="1" />
        <Item title="2" />
        <Item title="3" />
      </Carousel>
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
