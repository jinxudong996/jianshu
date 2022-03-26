import React, {Component} from "react";
import { HerderWrapper,Logo,Nav } from "./style";

class Header extends Component {
  render() {
    return (
      <HerderWrapper>
        <Logo></Logo>
        <Nav></Nav>
      </HerderWrapper>
    )
  }
}

export default Header