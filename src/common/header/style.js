import styled from "styled-components";
import logoPic from '../../statics/logo.png'

export const HerderWrapper = styled.div`
  position:relative;
  height:58px;
  border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href:'./'
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
  background:red;
  margin:0 auto;
`