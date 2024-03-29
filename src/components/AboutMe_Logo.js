import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const AboutMe_Logo = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const logoStyle = isDarkTheme ? { filter: "invert(100%)" } : {};
  return (
    <div className="logo-div">
      <Tippy content="CSS">
        <Image
          src="/assets/logo/css.svg"
          alt="logo css"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="Figma">
        <Image
          src="/assets/logo/figma.svg"
          alt="logo figma"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="Git">
        <Image
          src="/assets/logo/git.svg"
          alt="logo git"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="HTML">
        <Image
          src="/assets/logo/html.svg"
          alt="logo html"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="Javascript">
        <Image
          src="/assets/logo/javascript.svg"
          alt="logo javascript"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="Next.js">
        <Image
          src="/assets/logo/next.svg"
          alt="logo nextjs"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="React">
        <Image
          src="/assets/logo/react.svg"
          alt="logo react"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="Redux">
        <Image
          src="/assets/logo/redux.svg"
          alt="logo redux"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="Sass">
        <Image
          src="/assets/logo/sass.svg"
          alt="logo sass"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="Node.js">
        <Image
          src="/assets/logo/nodejs.svg"
          alt="logo sass"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
      <Tippy content="MongoDb">
        <Image
          src="/assets/logo/mongodb.svg"
          alt="logo sass"
          width={30}
          height={30}
          style={logoStyle}
        ></Image>
      </Tippy>
    </div>
  );
};

export default AboutMe_Logo;
