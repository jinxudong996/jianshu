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
  padding:0 45px 0 20px;
  margin-left:20px;
  box-sizing:border-box;
  outline:none;
  border:none;
  border-radius:19px;
  background:#eee;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
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
  .slide-enter{
    transition:all .2s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit{
    transition:all .2s ease-out;
  }
  .slide-exit-active{
    width:160px;
  }
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
  &.focused{
    color:#fff;
    background:#777;
  }
`
export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;


