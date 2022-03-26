import styled from "styled-components";
import logoPic from '../../statics/logo.png'

export const HerderWrapper = styled.div`
  position:relative;
  height:58px;
  border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: './'
})`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:58px;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.div`
  width:960px;  
  height:58px;
  padding-right:70px;
  border-box:box-sizing;
  margin:0 auto;
`

export const NavItem = styled.div`
  &.left{
    float:left
  }
  &.right{
    float:right
  }
  &.active{
    color:#ea6f5a;
  }
  line-height:58px;
  padding: 0 15px;
  color:#333;
  font-size:17px;
`

export const Navsearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;  
  height:38px; 
  margin-top:9px;
  padding:0 20px;
  margin-left:20px;
  box-sizing:border-box;
  outline:none;
  border:none;
  border-radius:19px;
  background:#eee;
  &::placeholder{
    color:#999;
  }
`

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
  line-hieght:56px;
`
export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    color:#fff;
    background:#ec6149;
  }
  :hover{
    cursor:pointer;
  }
`
export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    background:green;
    text-align:center;
  }
`