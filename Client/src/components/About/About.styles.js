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
  font-size: 20px;
  min-width: 1400px;
}
.sideBarre{

  height: 100%;
  width: 350px;
  padding: 0 15px;
  background-color: #ffffff;
  overflow: auto;
}
.sidebar-title {
  background-color: #ffffff;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding: 30px 0;
}
.Block{
  padding: 40px;
}
.Title{
  font-size: 25px;
}
.item{
  display: flex;
  padding-top: 20px;
  padding-left: 210px;
}

.itemTitle{
  display: inline-block;
}

.itemContent{
  display: inline-block;
  padding-left: 25px;
  color: ${constants.TEXT_SECONDARY_COLOR};
}
.itemContent1{
  display: inline-block;
  padding-left: 17px;
  color: ${constants.TEXT_SECONDARY_COLOR};
}
.Table{
  padding-top:40px;
  padding-left:200px;
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

.main
{
  width: calc(100% - 350px);
  height: 100%;
  padding: 30px;
  overflow: auto;

}



`
