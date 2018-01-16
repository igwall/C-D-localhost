import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  overflow-y: auto; 
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
  overflow-y: auto; 
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
.picture {
  
  border: 2px solid white;
  border-radius: 8px;
  width: 80%;
  height: 270px;

}
.admin-name {
  text-align: center;
  margin-right: 25%;
}
.site-description{
  display: inline-block;
  width: 100%;
}
.title {
  text-align: center;
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
  height: 256px;
  
    
}
ul {
  overflow-y: auto;
}

li {
  border: 1px solid white;
}

.references-table-title{
  text-align: center;
  margin: auto;
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





`
