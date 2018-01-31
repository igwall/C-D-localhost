import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  overflow: hidden; 
  display: flex;
  align-items: first-baseline;
  font-size: 20px;
}

.sidebar {
  height: 100%;
  width: 350px;
  padding: 0 15px;
  background: ${constants.SECONDARY_COLOR};
  overflow: auto;
}

.main {
  width: calc(100% - 350px);
  height: 100%;
  overflow: auto;
}

.title-group {
  padding: 20px 10px;
}

.title {
  font-size: 25px;
  font-weight: bold;
}

.logout-button {
  display: inline-flex;
  font-size: 13px;
  height: 100%;
  padding: 5px 0;
  cursor: pointer;
}

.logout-button:hover {
  background: rgba(255,255,255,0.2)
}

.panel {
  padding: 20px 20px;
  width: 100%;
}

.panel-title {
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
}

.panel-buttons {
  padding: 10px;
  width: 100%;
}

.button {
  font-size: 13px;
  padding: 10px 0;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(0,0,0,0);
}

.button:hover {
  background: rgba(255,255,255,0.2);
}

.button-text {
}

.button-icon {
  padding: 0 20px;
}

`
