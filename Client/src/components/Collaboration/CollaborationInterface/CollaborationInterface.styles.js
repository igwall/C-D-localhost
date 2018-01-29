import css from 'styled-jsx/css'
import constants from '../../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  display: flex;
  align-items: first-baseline;
}

.sidebar {
  height: 100%;
  width: 400px;
  padding: 0 30px;
  background: ${constants.SECONDARY_COLOR};
}

.sidebar-title {
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding: 30px 0;
}

.sidebar-text {
  text-align: justify;
}

.content {
  overflow-y: auto; 
  width: calc(100% - 400px);
  height: 100%;
  margin: auto;
}

.title {
  padding: 20px 0;
  font-size: 25px;
  font-weight: bold;
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
  font-size: 15px;
  padding: 10px 0;
  text-align: center;
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
