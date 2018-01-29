import css from 'styled-jsx/css'
import constants from '../../../../constants'

export default css`
.host {
  color: white;
}

.form-title {
  padding: 20px 0;
  font-size: 25px;
  font-weight: bold;
}

.form-title-sub {
  font-size: 15px;
  font-weight: bold;
}

.form {
  padding: 0 25px;
}

form {
  width: 300px;
  margin: auto;
  padding: 0 10px;
}

.form-large {
  width: 100%;
}

.form-group {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.form-column {
  display: inline-block;
}

.form-column-left {
  width: 60%;
  min-width: 450px;
  margin-right: 20px;
}

.form-column-right {
  width: 30%;
  min-width: 300px;
}

.input-group {
  width: 100%;
  padding: 20px 0;
  font-size: 15px;
}

.input-label {
  font-size: 18px;
}

.add-button {
  width: 100%;
}

.add-button-large {
  min-width: 770px;
}

input {
  width: 100%;
  background-color: #eee;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 8px;
  margin-top: 8px;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.select {
  margin-top: 8px;
}

textarea {
  width: 100%;
  height: 200px;
  background-color: #eee;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 8px;
  margin-top: 8px;
  font-size: 15px;
  border-radius: 5px;
  display: block;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  resize: none;
}

.error {
  font-size: 11px;
  line-height: 24px;
  color: #E91E63;
  float: right;
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
