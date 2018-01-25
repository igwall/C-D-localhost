import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  position: relative;
  display: flex;
  width: 100%;
  overflow-y: auto;
}
.rightSide{
  display: inline-block;
  width:40%
  background-color: ${constants.SECONDARY_COLOR};
}
.collaboratorPicture
{
  width: 50%;
  margin-left: 25%;
  height: 270px;
  padding-top: 45px;
}
.pic{
  width: 100%;
}
.collaboratorName{
  padding-top: 30px;
  margin-left: 35%;
  font-size: 20px;
  font-weight: bolder;
}
.collaboratorBio{
  padding-top: 65px;
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 12px;
  font-size: 14px;
  text-align: justify;
}

.collaboratorBlog{
  padding: 25px;
  font-size: 10px;
  text-align: justify;
  margin-left: 25%;
  text-decoration: underline;
}

.leftSide{
  display: inline-block;
  width:60%
  overfolw-y:auto;
}

.videos-title{
  padding-top: 5%
  padding-bottom: 5%;
  margin-left: 4%;
  font-size: 20px;
  font-weight: bolder;
}
.videos{
  width: 80%
  margin-left: 10%;
  padding-top: 2%;
}
.recipe{
  padding-top :8%;
  padding-left :10%;
  padding-right :10%;
  padding-bottom :2%;
}
.recipeHead{
  padding-bottom :2%;
  padding-left: 5%;
}
.recipeTable{
  width:100%; 
  height:250px; 
  overflow:auto;
}

table {
  width:100%; 
  height:250px; 
  overflow:auto;
  font-family: arial, sans-serif;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: ${constants.SECONDARY_COLOR};
}

.element-infos {
  padding: 5px;
  flex: 3;
}

.element:hover {
  transform: translateY(-5px);
}

.element-picture {
  display: inline-block;
  vertical-align: top;
  height: 75px;
  width: 75px;
  background: white;
}

.element-description {
  position: relative;
  display: inline-block;
  height: 75px;
  vertical-align: top;
  padding: 0 10px;
}

.element-title {
  font-size: 17px;
}

.element-other {
  color: ${constants.TEXT_SECONDARY_COLOR}
}

.element-other, .element-date {
  font-size: 12px;
}

.element-date {
  position: absolute;
  bottom: 0;
  white-space: nowrap;
}

.element-actions {
  flex: 1;
  font-size: 17px;
}
`
