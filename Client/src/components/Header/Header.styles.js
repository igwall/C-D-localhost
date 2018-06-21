import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`

@font-face {
  font-family: Montserrat;
  src: url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');;
}

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
  position: relative;
  display: inline-block;
  height: 100%;
  width: 350px;
  background: ${constants.THIRD_COLOR};
}

.logo {
  position: absolute;
  bottom: 0;
  right: 50px;
}

.header-container {
  display: inline-block;
  width: calc(100% - 350px);
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
  top: 20px;
  right: 20px;
  width: calc(100% - 700px);
  height: 80px;
  overflow: auto;
  font-size: 13px;
  color: ${constants.TEXT_COLOR};
}

.quote-title {
 margin-bottom: 10px;
 font-weight: ${constants.FONT_WEIGHT_BOLD}
 font-size: 15px;
}

.quote-text {
  font-style: italic;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
  color: ${constants.TEXT_SECONDARY_COLOR};
}

.quote-author {
  margin-left: 10px;
  font-size: 11px;
}

.navbar {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  color: ${constants.TEXT_PRIMARY_COLOR};
  font-size: 15px;
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
  font-weight: ${constants.FONT_WEIGHT_BOLD};
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
