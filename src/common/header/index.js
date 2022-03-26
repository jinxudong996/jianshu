import React, { Component } from "react";
import { HerderWrapper, Logo, Nav, NavItem, Navsearch, Addition, Button, SearchWrapper } from "./style";

class Header extends Component {
  render() {
    return (
      <HerderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <Navsearch></Navsearch>
            <i className="iconfont">&#xe614;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HerderWrapper>
    )
  }
}

export default Header