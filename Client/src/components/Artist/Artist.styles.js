import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  align-items: first-baseline;
  overflow-x: hidden;

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
  font-weight: bolder;
  }
  .Demarche-title{
    margin-bottom: 5%;
    font-size: 20px;
    font-weight: bolder;
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
  font-weight: bold;
}
.artistBio{
  display: inline-block;
  width: 100%;
  height:100px;
  text-align: justify;
  padding-left:5%
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
  font-weight: bolder;
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
font-weight: bolder;
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
  font-weight: bolder;
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
  font-weight: bolder;
}
.videos{
  width: 80%
  margin-left: 10%;
  padding-top: 2%;
}
.references-table-title{
  margin-left: 15%;
  padding-bottom: 2%;
  Font-Weight: Bold;
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
  font-weight: bolder;
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
`
