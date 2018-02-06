import css from 'styled-jsx/css'
import constants from '../../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  min-width: 150px;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  align-items: first-baseline;

}

.head {
  background-color: ${constants.SECONDARY_COLOR};
  width : 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  padding-top: 3%;
  padding-right: 5%;
  min-height: 100px;
  text-align: justify;
  transition: min-height 0.75s; 
}

.headLeftSide{
  diplay: inline-block;
  width : 35%;
}
.headRightSide{
  diplay: inline-block;
  width : 65%;
}
.textBody {
  margin-top: 10px;
  text-align: justify;
  white-space: pre-line;
 }
 .collaborator-table-title{
  text-align: center;
  margin-right: 74%;
  padding-bottom: 8%;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
  font-size: 20px;
  
 
}
.collaborator-list{
  display: inline-block;
  width: 100%;
  padding-right: 5%;
  
}

.collaborator {
  display: flex
  align-items: center;
}


.collaborator-picture {
  display: inline-block;
  border: 2px solid white;
  border-radius: 8px;
  width: 70px;
  height: 55px;
}

.collaborator-name {
  color: #bd4141e0;
}

.collaborator-description{
  font-size: 12px;
  color: #dedbddd6;
}

.collaborator-info
{
  display: inline-block;
  margin-left: 7%;
}

 ul {
  max-height: 256px;
  
    
}
ul {
  overflow-y: auto;
}

li {
  border: 1px solid white;
}

.artistPicture {
  width: 40%;
  margin-left: 18%;
  height: 270px;

}
.suite {
  display:none;
}
.Bio-title{
  margin-bottom: 5%;
  font-size: 20px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
  }
  .Demarche-title{
    margin-bottom: 5%;
    font-size: 20px;
    font-weight: ${constants.FONT_WEIGHT_BOLD};
    }
.Demarche{
  padding-top : 5%;
}
.LireSuite {
  font-style: italic;
  font-size: 12px;
}
.LireMoins {
  font-style: italic;
  font-size: 12px;
  display : none;
}
.artistDiplome{
  margin-top: 5%;
  font-size: 10px;
  font-style: italic;
  text-align: justify;
  color: #a1a1a7;
}
.artistName {
  text-align: center;
  margin-right: 25%;
  margin-top: 5%;
  font-size: 20px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
}
.artistBio{
  display: inline-block;
  width: 100%;
  height:100px;
  text-align: justify;
  padding-left:5%
}

.sort-bar {
  width: 100%;
  padding-bottom:5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
}

.sort {
  padding-bottom: 3%;
  flex: 2;
  padding-right: 10px;
}

.sort:last-of-type {
  padding-right: 0;
}

.search-bar {
  font-size: 14px;
  height: 36px;
  color:white;
  padding: 4px;
  padding-left: 10px;
  width: 200px;
  min-width: 200px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  transition: min-width 0.75s;    
  background: rgba(255,255,255,0.3);
}

.middle{ 
  padding-top: 5%;
}
.middleHead{
  display: flex;
  padding : 4%;
}
.books{
  padding-bottom: 5%;
  margin-left: 10%;
  width: 50%;
  display: inline-block;
}
.books-title{
  margin-bottom: 13%;
  font-size: 20px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
}
.book{
  max-height: 180px;
  overflow-y: auto;
  margin-left: 5%;
}
.iteem{
  margin-bottom: 5%;
}
.diplomes{
  padding-bottom: 5%;
  margin-left: 25%;
  width: 25%;
  display : inline-block;
}
.diplome-title{
margin-bottom: 5%;
font-size: 20px;
font-weight: ${constants.FONT_WEIGHT_BOLD};
}
.diplome{
max-height: 140px;
overflow-y: auto;
margin-left: 5%;
}
.pictures-title{
  padding-bottom: 5%;
  margin-left: 4%;
  font-size: 20px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
}
.pictures{
  width: 80%
  margin-left: 10%;

}

.pic{
  width:100%;
  height:100%
}
.picture{
  width: 80%;
  margin-left: 64%;
}
.pictureLegend{
  text-align: justify;
  font-size: 12px;
  padding-top: 3%;
  padding-left: 40%;
}
.videos-title{
  padding-top: 5%
  padding-bottom: 5%;
  margin-left: 4%;
  font-size: 20px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
}
.videos{
  width: 80%
  margin-left: 10%;
  padding-top: 2%;
}
.references-table-title{
  margin-left: 15%;
  padding-bottom: 2%;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
  font-size: 20px;
}
.references-list{
  display: inline-block;
  width: 100%;
  padding-left: 5%;
}


.reference {
  padding: 10px;
  display: flex;
  width:85%;
  margin-left: 10%;
  align-items: center;
  overflow-y: auto;
  height: 213px;
  
}
.tableBody {
  padding: 10px;
  display: flex;
  width:85%;
  margin-left: 10%;
  align-items: center;
  overflow-y: auto;
  height: 213px;
  
}
table{
    width: 100%;
}
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
  text-align: left;    
}
.audios{
  padding-top: 5%;
  margin-left: 13%;
  width: 50%;
  display: inline-block;
}
.audio-title{
  margin-bottom: 5%;
  font-size: 20px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
}
.audio{
  max-height: 180px;
  overflow-y: auto;
  margin-left: 5%;
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

.video-label{
  font-size: 20px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
  text-align: center;
  padding-top: 10px;
}

.link-container {
  height: 100%;
  width: 100%;
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
  background: ${constants.PRIMARY_COLOR};
}

.element-description {
  position: relative;
  display: inline-block;
  min-height: 75px;
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

.element-text {
  font-size: 15px;
  font-style: italic;
  padding: 10px;
  padding-bottom: 30px;
}
.list-element {
}

.element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  background: ${constants.SECONDARY_COLOR};
  box-shadow: 2px 2px 4px rgba(255,255,255,0.4);
}
`
