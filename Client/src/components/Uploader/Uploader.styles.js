import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`

.dropper {
  height: 40px;
  width: 100%;
  background: #ccc;
  color: black;
  border-radius: 5px;
  line-height: 40px;
  padding-left: 10px;
  cursor: pointer;
}

.drop {
  height: 100%;
  height: 40px;
}

.reject-drop {
  background: red;
}

.reject-drop .dropper {
  background: red;
}

.button {
  padding: 0 10px;
  height: 100%;
  float: right;
  background: #666; 
  border-radius: 0px 5px 5px 0px;
  line-height: 40px;
}

.error-panel {
  border: 1px solid ${constants.ERROR_PANEL_BORDER_COLOR};
  background: ${constants.ERROR_PANEL_COLOR};
  width: 100%;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 10px;
}

`
