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
import useComment from "./hooks/useComment";

function App() {
  const {
    comment,
    commentList,
    password,
    nickname,
    handleChangeDescription,
    handleChangeNickname,
    handleChangePassword,
    handleCreateComment,
  } = useComment();
  return (
    <div className="App">
      <Header id="Header" />
      <Introduction />
      <Intro id="Intro" />
      <TechStackList id="TechStackList" />
      <TeckstackInputInstruction />
      <TechStackInput />
      <Experience id="Experience" />
      <DisplayPortfolioInstruction />
      <Carousel id="Carousel">
        <Item title="1" />
        <Item title="2" />
        <Item title="3" />
      </Carousel>
      <Gallery id="Gallery">
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
      <Masonry id="Masonry">
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/300/400/?random" />
        <Image src="https://picsum.photos/600/400/?random" />
        <Image src="https://picsum.photos/600/900/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/400/700/?random" />
        <Image src="https://picsum.photos/600/600/?random" />
        <Image src="https://picsum.photos/600/800/?random" />
        <Image src="https://picsum.photos/600/300/?random" />
        <Image src="https://picsum.photos/600/500/?random" />
        <Image src="https://picsum.photos/500/600/?random" />
        <Image src="https://picsum.photos/700/600/?random" />
      </Masonry>
      <VisitorCounterInstruction />
      <VisitorComment
        id="VisitorComment"
        handleChangeDescription={handleChangeDescription}
        handleChangeNickname={handleChangeNickname}
        handleChangePassword={handleChangePassword}
        handleCreateComment={handleCreateComment}
        comment={comment}
        nickname={nickname}
        password={password}
        commentList={commentList}
      />
      <CardInstruction />
      <Contact id="Contact" />
    </div>
  );
}

export default App;
