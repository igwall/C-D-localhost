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
  margin-top: 10%;
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
`
