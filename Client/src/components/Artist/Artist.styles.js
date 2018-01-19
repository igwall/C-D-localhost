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
  text-align: justify;
}
.middle{ 
  padding-top: 5%;
}
.books{
    padding-bottom: 5%;
    margin-left: 13%;
    width: 25%;
    display : inline-block;
}
.books-title{
  margin-bottom: 5%;
  font-size: 20px;
  font-weight: bolder;
}
.book{
  max-height: 140px;
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
  padding-right: 5%;
  padding-top: 5%;
}


.reference {
  padding: 10px;
  display: flex;
  width:85%;
  margin-left: 10%;
  align-items: center;
  
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
`
