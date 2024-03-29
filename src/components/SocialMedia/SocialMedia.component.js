import { SocialContainer, SocialIcons } from "./SocialMedia.styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function SocialMedia({ inFooter }) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://github.com/PascuFCalvo/"
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/pascualfernandez/"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </SocialContainer>
  );
}
