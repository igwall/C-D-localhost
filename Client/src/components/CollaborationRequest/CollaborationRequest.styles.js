import css from 'styled-jsx/css'
import constants from '../../constants'

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
  width: 30%;
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
  width: 70%;
  height: 100%;
  margin: auto;
}

.title {
  padding: 20px 0;
  font-size: 25px;
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
  width: 30%;
  min-width: 300px;
  margin-right: 20px;
}

.form-column-right {
  width: 70%;
  min-width: 450px;
}

.input-group {
  width: 100%;
  padding: 20px 0;
  font-size: 15px;
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
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
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


.add-button {
  width: 100%;
}

.add-button-large {
  min-width: 770px;
}

.user-request {
  width: 80%;
  margin: auto;
  min-width: 600px;
}

.request {
  background: ${constants.SECONDARY_COLOR}
  padding: 10px;
}

.request-fullname {
  font-size: 17px;
}

.request-motivation {
  margin: 20px 0;
}

.element-date {
  font-size: 12px;
  color: ${constants.TEXT_SECONDARY_COLOR}
}

`
