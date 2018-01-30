import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  display: flex;
  overflow-x: hidden;

}

.sideBarre{

  width: 30%;
  background-color: #333;
  height: 100%;
}
.PageTitle{
  padding : 20%;
}

.Description{
  padding: 5%;
  text-align: justify;
}
.Main
{
  width: 70%;
  height: 100%;
  padding: 30px;
  overflow-y: auto; 
}
.Forms{
  margin-top: 60px;
  padding: 20px;
}
.Forms-item{
  margin-top: 10%;
  padding: 20px;
  display: inline-block;
}
.item{
  width: 30%;
  display: inline-block;
  margin-right: 25px;
  
}
.Message{
  height: 150px;
}
.recaptcha{
  padding-top: 5%;
  padding-bottom:3%;
}
.button {
  cursor: pointer;
  height: 40px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  color: white;
  width: 95%;
  border-radius: 5px;
  background-color: #61bd4f;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.button {
  display: inline-block;
}
.button.disabled {
  background-color: gray;
}
input {
  width: 95%;
  height: 100%;
  background-color: #eee;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 8px;
  margin-top: 8px;
  font-size: 20px;
  border-radius: 5px;
  display: block;
  margin-bottom: 20px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.error {
  font-size: 11px;
  line-height: 25px;
  margin-right: 5%;
  color: #E91E63;
  float: right;
}
.error-panel {
  border: 1px solid rgb(0, 255, 81);
  background: rgba(0, 255, 84, 0.3);
  width: 380px;
  margin-left: 26%;
}

.error-content {
  display: flex;
  align-items: center;
  padding: 10px;
}

.error-message {
  padding-left: 20px;
}
textarea {
  width: 95%;
  height: 150px;
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
`
