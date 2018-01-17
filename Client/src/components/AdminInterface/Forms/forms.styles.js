import css from 'styled-jsx/css'
import constants from '../../../constants'

export default css`
.host {
  color: white;
}

.form-title {
  padding: 20px 10px;
  font-size: 25px;
  font-weight: bold;
}

form {
  width: 300px;
  margin: auto;
  padding: 0 20px;
}

.input-group {
  wdith: 100%;
  padding: 20px 0;
}

.input-label {
  font-size: 18px;
}

input {
  width: 100%;
  background-color: #eee;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 8px;
  margin-top: 8px;
  font-size: 15px;
  border-radius: 5px;
  display: block;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.error-panel {
  border: 1px solid ${constants.ERROR_PANEL_BORDER_COLOR};
  background: ${constants.ERROR_PANEL_COLOR};
  width: 100%;
  font-size: 15px;
}

.error-content {
  display: flex;
  align-items: center;
  padding: 10px;
}

.error-message {
  padding-left: 20px;
}

.validation-panel {
  border: 1px solid ${constants.VALIDATION_PANEL_BORDER_COLOR};
  background: ${constants.VALIDATION_PANEL_COLOR};
  width: 100%;
  font-size: 15px;
}

.validation-content {
  display: flex;
  align-items: center;
  padding: 10px;
}

.validation-message {
  padding-left: 20px;
}
`
