import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  position: relative;
  height: 100px;
  width: 100%;
  text-align: center;
  z-index: 1;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
  background: ${constants.HEADER_COLOR}
  color: ${constants.HEADER_TEXT_COLOR}
}

.brand {
  position: absolute;
  top: 20%;
  left: calc(50% - 40.5px);
  height: 22px;
  width: 81px;
  background-image: url("/assets/compare_danse_logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.navbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #222;
  color: #eee;
  font-size: 18px;
}

.menu-button-group {
  display: flex;
  float: left;
  align-items: center;
}

.menu-button {
  display: inline-block;
  cursor: pointer;
  padding: 10px 40px 10px 40px;
}

.menu-button:hover {
  background: rgba(255,255,255,0.2);
}

.menu-button-text{
  display: inline-block;  
  font-weight: bold;
}

.sign-button-group {
  display: flex;
  float: right;
  align-items: center;
}

.sign-button {
  display: inline-block;
  cursor: pointer;
  padding: 10px;
}

.sign-button:hover {
  background: rgba(255,255,255,0.2);
}

.sign-button-icon {
  display: inline-block;
}

.sign-button-text {
  display: inline-block;  
  padding-left: 10px;
}

`
