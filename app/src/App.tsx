import {
  Header,
  TechStackList,
  Contact,
  Intro,
  Gallery,
  Item,
  Masonry,
  Image,
  Carousel,
  Experience,
  TechStackInput,
  VisitorComment,
} from "dev-portfolio";
import {
  CardInstruction,
  Introduction,
  TeckstackInputInstruction,
  DisplayPortfolioInstruction,
  VisitorCounterInstruction,
} from "./common";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Intro />
      <TechStackList />
      <TeckstackInputInstruction />
      <TechStackInput />
      <Experience />
      <DisplayPortfolioInstruction />
      <Carousel>
        <Item title="1" />
        <Item title="2" />
        <Item title="3" />
      </Carousel>
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
      <VisitorCounterInstruction />
      <VisitorComment />
      <CardInstruction />
      <Contact />
    </div>
  );
}

export default App;
