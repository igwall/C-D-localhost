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
.pictures-title{
  padding-bottom: 5%
  margin-left: 20%
}
.pictures{
  width: 60%
  margin-left: 22%;
  padding-top: 5%;
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
  padding-bottom: 5%
  margin-left: 20%
}
.videos{
  width: 60%
  margin-left: 22%;
  padding-top: 5%;
}
`
