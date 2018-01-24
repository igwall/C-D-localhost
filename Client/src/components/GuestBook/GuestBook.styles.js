import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  display: inline-block;
  align-items: first-baseline;
  font-size: 20px;
}
.head{
  width: 100%;

}
.comments{
  padding-top :4%;
  padding-left :10%;
  padding-right :10%;

}
.commentsHead{
  padding-bottom :2%;
  padding-left: 5%;
}
.commentTable{
  width:100%; 
  height: 337px;; 
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
  background: ${constants.PRIMARY_COLOR};
}

.element-description {
  position: relative;
  display: inline-block;
  width: 80%;
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
.body{
  display: inline-block;
  width: 100%;
  
}

.coments{
  padding-top :2%;
  padding-left :10%;
  padding-right :10%;
  padding-bottom :2%;

}
.comentsHead{
  padding-bottom :2%;
  padding-left: 5%;
}
.Button {
 padding-left:89%
}
`
