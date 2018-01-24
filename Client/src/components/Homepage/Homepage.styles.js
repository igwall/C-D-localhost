import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  color: #fff;
  overflow-y: hidden; 
  display: flex;
  align-items: first-baseline;
  font-size: 20px;
}

.sidebar {
  height: 100%;
  width: 30%;
  min-width: 350px;
  padding: 0 30px;
  background: ${constants.SECONDARY_COLOR};
}

.sidebar-title {
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding: 30px 0;
}

.sidebar-text {
  text-align: justify;
  line-height: 175%;
}

.flat {
  overflow-y: auto; 
  width: 70%;
  height: 100%;
  margin: auto;
  text-align: center;
}

.flat-text {
  padding: 35px 10px;
  text-align: left;
}

.svg {
  margin-left: -50px;
}

.room:hover {
  stroke-width: 1.5px;
  cursor: pointer;
  fill: rgba(0,255,0,0.4);
}

.room-name:hover + .room{
  stroke: green;
  stroke-width: 1px;
  cursor: pointer;
}
`
