import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = (props) => {
  const router = useRouter();

  return (
    <Wrapper {...props}>
      <ul>
        {[
          { title: "Home", link: "/" },
          { title: "About", link: "/about" },
          { title: "Industrial Design", link: "/industrial-design" },
          { title: "Illustration", link: "/illustration" },
          { title: "Textile Work", link: "/textile-work" },
        ].map((item, idx) => {
          if (router.pathname === "/" && item.link === "/") {
            return null;
          }

          return (
            <li>
              <Link href={`${item.link}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  ul {
    text-decoration: none;
    list-style-type: none;
  }
`;

export default Navigation;
