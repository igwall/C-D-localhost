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
  font-size: 16px;
}
.sideBarre{
  height: 100%;
  width: 350px;
  padding: 0 15px;
  background: ${constants.SECONDARY_COLOR};
  overflow: auto;
}
.Main
{
  width: calc(100% - 350px);
  height: 100%;
  padding: 30px;
  overflow: auto;
}
.MainTitle
{
  font-weight: bold;
  font-size: 25px;
  padding-top: 40px;
  padding-left: 50px;
  padding-bottom: 30px;
}
.head{
  width: 100%;
}
.RecipePictrue{
  padding-left:30%;
}
.PageTitle{
  padding-top: 10%;
  text-align: center;
  padding-bottom: 10%;
  font-size: 20px;
}
.Description{
  padding-top: 15px;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 16px;
  color: #797979;
  text-align: justify;
}
.text{
  padding-top: 10px;
  padding-left: 45px;
  color: #a0a0a0;
}
.text1{
  padding-top: 10px;
  padding-left: 10px;
  color: #a0a0a0;
  display: inline-block;
}
.recipeInfo{
  padding-left:20px;
}
.videos-title{
  padding-bottom: 20px;
  font-size:20px;
}
.videos{
  width: 80%
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
}
.videoelement{
  padding-left: 10%;
}
.pictureelement{
  padding-left: 10%;
}
.audioelement{
  padding-left: 10%;
}
.pictures-title{
  padding-bottom: 5%;
  margin-left: 4%;
  font-size: 20px;
  font-weight: bolder;
}
.pictures{
  width: 80%
  padding-left: 5%;
  padding-top: 2%;

}

.pic{
  width:100%;
  height:100%
}
.picture{
  width: 80%;
}

.pictureLegend{
  text-align: justify;
  font-size: 12px;
  padding-top: 3%;
  padding-left: 40%;
}
.Title{

  padding-top: 2%;
  padding-left: 5%;
  font-size: 20px;
  text-align: justify;
}
.number1{
  padding-top : 15%;
  padding-bottom : 5%;
}
.numberTitle{
  padding-left: 5%;
  font-size: 20px;
  text-align: justify;
  display: inline-block;
  margin-right: 4%;

}
.comments{
  padding-top :4%;
  padding-left :10%;
  padding-right :10%;
}
.commentsHead{
  padding-bottom :2%;
}
.commentTable{
  width:100%; 
  height: 307px;; 
  overflow:auto;
}
table {
  width:100%; 
  font-family: arial, sans-serif;
  border-collapse: collapse;
}
td, th {
  
  border: 1px solid #dddddd;
  text-align: left;
  padding: 2px;
}
tr{
  height : 75px;
}
tr:nth-child(even) {
  background-color: ${constants.SECONDARY_COLOR};
}

li{
  color:#a0a0a0;
}
.element-infos {
  padding: 5px;
  flex: 3;
}

.sideBarreFoot{
  padding: 5%;
  
}

.item{
  display:
  padding-right: 7%;
}
.itemleft{
 padding-left:35%;
}
.itemTitle{
  font-size: 20px;
}
.element{
  padding-bottom: 4%;
  display: flex;
  padding-left: 23px;
}


.body{
  display: inline-block;
  width: 100%;
  padding-top: 2%;
  padding-left: 10%;
  
}
.form-column-right {
  width: 90%;
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
  height: 120px;
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
.Button {
 padding-left:89%
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

.audios{
  padding-left: 5%;
  padding-top: 2%;
  width: 50%;
  display: inline-block;
}
.audio-title{
  margin-bottom: 5%;
  font-size: 20px;
  font-weight: bolder;
}
.audio{
  max-height: 180px;
  overflow-y: auto;
}
.iteeem{
  display : flex;
  margin-bottom: 5%;
}
.lecteur{
  display: inline-block;
  padding-left: 200px;
}
.audio-label{
  display: inline-block;
}
`
