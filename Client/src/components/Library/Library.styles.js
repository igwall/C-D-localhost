import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  overflow: hidden; 
  color: #fff;
  display: flex;
  align-items: first-baseline;
}
.sideBarre{

  width: 30%;
  background-color: #333;
  height: 100%;
  

}
.main
{
  width: 70%;
  height: 100%;
  padding: 30px;

}
.head {
  padding: 20px;
  display: flex;
  align-items: center;
  padding-top: 5%;
  padding-right: 5%;
}

.admin-info
{
  display: inline-block;
  width: 100%;
  padding-left: 22%;
  padding-right: 10%;
  padding-top: 23%;
  
}

.pic{
  width: 225px;
  height: 225px;
  margin-left: 7%;
}

.admin-name {
  text-align: center;
  margin-right: 25%;
  font-size: 25px;
  padding-top: 5%;
}

.listChoose{
  padding-top: 80px;
  text-align: center;
}

.item{
    padding-bottom: 4%;
    font-size: 20px;
    Font-Weight: Bold;
}
.site-description{
  display: inline-block;
  width: 100%;
}

.title {
  text-align: center;
  margin-right: 60%;
  font-size: 20px;
  Font-Weight: Bold;
}

.textBody {
 margin-top: 10px;
 text-align: justify;
 
}
.footer{
  padding-top: 10%;
  display: flex
  align-items: center;
}
.collaborator-table-title{
  text-align: center;
  margin-right: 74%;
  padding-bottom: 8%;
  Font-Weight: Bold;
  font-size: 20px;
  
 
}
.collaborator-list{
  display: inline-block;
  width: 100%;
  padding-right: 5%;
  
}

.collaborator {
  padding: 10px;
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

.references-table-title{
  margin-left: 6%;
  padding-bottom: 4%;
  Font-Weight: Bold;
  font-size: 20px;
}
.references-list{
  display: inline-block;
  width: 100%;
  padding-right: 5%;
  padding-top: 10%;
}


.reference {
  padding: 10px;
  display: flex
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

.button {
  font-size: 15px;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  background: rgba(0,0,0,0);
}

.button:hover {
  background: rgba(255,255,255,0.2);
}

.button-text {
  font-size: 20px;
    Font-Weight: Bold;
    padding-left: 20%;
}


`
