import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  min-width: 1665px;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  align-items: first-baseline;
  overflow-x: auto;

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
  width : 350px;
}
.headRightSide{
  diplay: inline-block;
  width : calc(100% - 350px);
}
.SideBar{

  width: 400px;
  padding: 0 15px;
  background: ${constants.SECONDARY_COLOR};
  overflow: auto;
  overflow-x: auto;
}
.Main
{
  width: calc(100% - 400px);
  height: 100%;
  padding: 30px;
  overflow: auto;

}
.artistPicture {
  width: 270px;
  height: 270px;
  padding-left: 10%;

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
  cursor: pointer;
  padding: 10px;
}
.LireMoins {
  font-style: italic;
  font-size: 12px;
  display : none;
  cursor: pointer;
  padding: 10px;
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
}
.artistBio{
  display: inline-block;
  width: 100%;
  height:100px;
  text-align: justify;
  padding-left:5%
}
.middle{ 

  display: flex;
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
  cursor: pointer;
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
td {
  font-size: 10px;
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
