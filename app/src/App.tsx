/* This is imported components of dev-portfolio library */
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

import styled from "styled-components";
import {
  CardInstruction,
  Introduction,
  TeckstackInputInstruction,
  DisplayPortfolioInstruction,
  VisitorCounterInstruction,
} from "./common";
import useComment from "./hooks/useComment";
import "./App.css";

function App() {
  /**
   * If you want to view README.md of 'dev-portfolio', go to the link below.
   * {@link https://github.com/modern-agile-team/dev-portfolio#readme}
   */

  /* These are variables and handler functions used in VisitorComment component. */
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
    /**
     * The 'className' in the <div> tag surrounding the components of 'dev-portfolio' must be 'App'.
     * Only then can the SideBar in the <Header> component recognize id props and automatically assign all components into the SideBar.
     */
    <div className="App">
      {/**
       * @component Header
       * {@link https://github.com/modern-agile-team/dev-portfolio#header}
       */}
      <Header
        id="Header"
        logoOption={{
          redirectUrl: "/",
          title: "dev-portfolio",
          logoMargin: "0 20px 0 20px",
          logoWidth: "60px",
          titleColor: "black",
          titleSize: "30px",
        }}
        channels={[
          {
            name: "github",
            redirectUrl: "https://",
            color: "#181717BB",
            size: "30px",
          },
          {
            name: "facebook",
            redirectUrl: "https://",
            color: "#1877F2BB",
            size: "30px",
          },
        ]}
        sideBarOption={{
          mainTitle: "dev-portfolio",
          iconSize: "30px",
          iconColor: "#181717BB",
          iconMargin: "0px 20px 0px 20px",
        }}
      />

      {/**
       * Just introduction for dev-portfolio-app.
       *
       * If you want view internal of Introduction,
       * go to the './src/common/instruction/Introduction.tsx'
       */}
      <Introduction id="Manual Introduction" />

      {/**
       * @component Intro
       * {@link https://github.com/modern-agile-team/dev-portfolio#intro}
       */}
      <Intro id="Intro" />

      {/**
       * @component TechStackList
       * {@link https://github.com/modern-agile-team/dev-portfolio#techstacklist}
       */}
      <TechStackListTitle id="TechStackList">
        Tech Stack List
      </TechStackListTitle>
      <TechStackList />

      {/**
       * TechStackInput used only to find the logoName value in the TechStackList.
       * @component TechStackInput
       * {@link none}
       *
       * If you want view internal of TeckstackInputInstruction,
       * go to the './src/common/instruction/TeckstackInputInstruction.tsx'
       */}
      <TeckstackInputInstruction id="TechStackInput" />
      <TechStackInput />

      {/**
       * Just introduction for Carousel, Gallery and Masonry.
       *
       * If you want view internal of DisplayPortfolioInstruction,
       * go to the './src/common/instruction/DisplayPortfolioInstruction.tsx'
       */}
      <DisplayPortfolioInstruction />

      {/**
       * @component Carousel
       * {@link https://github.com/modern-agile-team/dev-portfolio#carousel}
       */}
      <Carousel id="Carousel">
        <Item title="1" />
        <Item title="2" />
        <Item title="3" />
      </Carousel>

      {/**
       * @component Gallery
       * {@link https://github.com/modern-agile-team/dev-portfolio#gallery}
       */}
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

      {/**
       * @component Masonry
       * {@link https://github.com/modern-agile-team/dev-portfolio#masonry}
       */}
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

      {/**
       * @component VisitorCounter
       * {@link https://github.com/modern-agile-team/dev-portfolio#visitorcounter}
       *
       * If you want view Card component,
       * go to the './src/common/instruction/VisitorCounterInstruction.tsx'
       */}
      <VisitorCounterInstruction id="VisitorCounter" />

      {/**
       * @component VisitorComment
       * {@link https://github.com/modern-agile-team/dev-portfolio#visitorcomment}
       */}
      <VisitorCommentTitle id="VisitorComment">
        Visitor Comments
      </VisitorCommentTitle>
      <VisitorComment
        handleChangeDescription={handleChangeDescription}
        handleChangeNickname={handleChangeNickname}
        handleChangePassword={handleChangePassword}
        handleCreateComment={handleCreateComment}
        comment={comment}
        nickname={nickname}
        password={password}
        commentList={commentList}
      />

      {/**
       * @component Card
       * {@link https://github.com/modern-agile-team/dev-portfolio#card}
       *
       * If you want view Card component,
       * go to the './src/common/instruction/CardInstruction.tsx'
       */}
      <CardInstruction id="Card" />

      {/**
       * @component Experience
       * {@link https://github.com/modern-agile-team/dev-portfolio#experience}
       */}
      <Experience id="Experience" theme="basic" />

      {/**
       * @component Contact
       * {@link https://github.com/modern-agile-team/dev-portfolio#contact}
       */}
      <ContactTitle id="Contact">Contact</ContactTitle>
      <Contact />
    </div>
  );
}

export default App;

/**
 * Just styled component for TechStackList's title
 *
 * If you don't need this, delete both TechStackListTitle component and the style components below.
 */
const TechStackListTitle = styled.h1`
  margin: 1em 1em;
  padding-bottom: 15px;
  border-bottom: 1px solid;
`;

/**
 * Just styled component for VisitorComment's title
 *
 * If you don't need this, delete both VisitorCommentTitle component and the style components below.
 */
const VisitorCommentTitle = styled.h1`
  margin: 1em 1em 0 1em;
  padding-bottom: 15px;
`;

/**
 * Just styled component for Contact's title
 *
 * If you don't need this, delete both ContactTitle component and the style components below.
 */
const ContactTitle = styled.h1`
  margin: 0;
  padding: 2em 1em 0 1em;
`;
