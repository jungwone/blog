import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import MenuIcon from "@material-ui/icons/Menu"

const Header = props => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navigation>
      <NavigationInner>
        <LogoWrapper>
          <Link to="/">중원이 블로그</Link>
        </LogoWrapper>
        <MenuList visible={isOpen}>
          <MenuListItem>
            <Link to="/page/1">Posts</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to="/tags">Tags</Link>
          </MenuListItem>
          <MenuListItem>
            <Link to="/about">About</Link>
          </MenuListItem>
        </MenuList>
        <ToggleMenu>
          <button onClick={toggle}>
            <MenuIcon style={{ color: "#fff" }} />
          </button>
        </ToggleMenu>
      </NavigationInner>
    </Navigation>
  )
}

export default Header

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 70px;
  display: flex;

  @media (max-width: 768px) {
    background-color: #333;
  }
`

const NavigationInner = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LogoWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 32px;

  a {
    font-size: 18px;
    color: #4a4a4a;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`

const MenuList = styled.ul`
  display: flex;
  margin-left: auto;

  @media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    display: ${props => (props.visible ? "flex" : "none")};
  }
`

const MenuListItem = styled.li`
  width: 100%;
  text-align: center;
  margin-right: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #4a4a4a;
  }

  &:hover {
    a {
      color: #ff6363;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    &:hover {
      background-color: #404040;
    }

    a {
      display: block;
      width: 100%;
      color: #fff;
    }
  }
`

const ToggleMenu = styled.div`
  position: absolute;
  top: 24px;
  right: 32px;

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
