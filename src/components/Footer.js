import React from "react"
import styled from "@emotion/styled"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"

const Footer = () => {
  return (
    <FooterStyle>
      <Inner>
        <IconList>
          <li>
            <a
              href="https://github.com/jungwone"
              target="_black"
              rel="noreferrer noopener"
            >
              <GitHubIcon style={{ color: "#fff", fontSize: "32px" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jungw_one"
              target="_black"
              rel="noreferrer noopener"
            >
              <InstagramIcon style={{ color: "#fff", fontSize: "32px" }} />
            </a>
          </li>
        </IconList>
        <div className="text">중원이 블로그</div>
      </Inner>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.footer`
  height: 160px;
  background-color: #333;

  @media (max-width: 768px) {
    height: 100px;
  }

  .text {
    padding-top: 12px;
    color: #fff;
    font-size: 12px;
  }
`

const Inner = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const IconList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
`
