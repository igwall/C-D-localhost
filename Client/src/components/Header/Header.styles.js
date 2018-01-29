import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  position: relative;
  height: 150px;
  width: 100%;
  text-align: center;
  z-index: 1;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
  background: ${constants.THIRD_COLOR}
  color: ${constants.HEADER_TEXT_COLOR}
}

.logo-container {
  display: inline-block;
  height: 100%;
  width: 400px;
  background: ${constants.THIRD_COLOR};
}

.header-container {
  display: inline-block;
  width: calc(100% - 400px);
  height: 100%;
  position: relative;
}

.app-name {
  position: absolute;
  bottom: 55px;
  left: 30px;
  font-size: 60px;
  color: #fff;
  min-width: 610px;
  vertical-align: bottom;
  line-height: 60px;
}

.quote-container {
  position: absolute;
  bottom: 59px;
  left: 660px;
  color: #fff;
  font-size: 17px;
}

.quote-text {
  font-style: italic;
  font-weight: bold;
}

.quote-author {
  margin-left: 10px;
  font-size: 13px;
}

.navbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${constants.NAVBAR_COLOR};
  color: #eee;
  font-size: 18px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.menu-button-group {
  display: flex;
  align-items: center;
  height: 100%;
}

.menu-button {
  min-height: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 0 25px;
}

.menu-button-plus {
  height: 100%;
  min-height: 100%;
}

.menu-button-icon {
  line-height: 15px;
}

.menu-button:hover {
  background: rgba(255,255,255,0.2);
}

.menu-button-text{
  display: inline-block;  
  font-weight: bold;
}

.sign-button-group {
  height: 100%;
  display: flex;
  align-items: center;
}

.user-infos {
  font-size: 15px;
  display: inline-flex;
  padding: 5px 20px;
  border-right: 1px solid white;
  align-items: center;
}

.user-username {
  font-weight: bold;
  display: inline-block;
  margin-left: 7px;
}

.sign-button {
  height: 100%;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
}

.sign-button:hover {
  background: rgba(255,255,255,0.2);
}

.sign-button-icon {
  display: inline-block;
  line-height: 15px;
  vertical-align: middle;
}

.sign-button-text {
  display: inline-block;  
  padding-left: 10px;
}

`
