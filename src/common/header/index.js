import React, { Component } from "react";
import { HerderWrapper, 
  Logo,
  Nav, 
  NavItem,
  Navsearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList} from "./style";
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {actionCreators} from './store'

class Header extends Component {

  // constructor(props) {
  //   super(props)
  //   this.handleInputFocus = this.handleInputFocus.bind(this)
  //   this.handleInputBlur = this.handleInputBlur.bind(this)
  // }

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
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <Navsearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}>
              </Navsearch>
            </CSSTransition>

            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HerderWrapper>
    )
  }
  // handleInputFocus() {
  //   this.setState({
  //     focused: true
  //   })
  // }
  // handleInputBlur() {
  //   this.setState({
  //     focused: false
  //   })
  // }
  getListArea(show) {
    if(show){
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索
          <SearchInfoSwitch>換一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            
            {
              this.props.list.map(item => {
                return (
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                )
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
}



const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    //focused:state.getIn(['header','focused'])
    list:state.getIn(['header','list'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)