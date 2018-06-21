import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  color: white;
  overflow-y: hidden; 
  display: flex;
  align-items: first-baseline;
  font-size: 20px;
}

.sidebar {
  height: 100%;
  width: 350px;
  padding: 0 0;
  color: white;
  background-color: white;
  border-style: solid;
  border-color: ${constants.TEXT_SECONDARY_COLOR};
  border-weight: 1px;
}

.sidebar-title {
  background-color: ${constants.PRIMARY_COLOR};
  font-weight: ${constants.FONT_WEIGHT_BOLD};
  color: white;
  width: 345px;
  font-size: 25px;
  text-align: center;
  padding: 30px 30px;
}

.sidebar-text {
  text-align: justify;
  line-height: 130%;
  font-size: 17px;
  padding: 10px 30px;
  color: ${constants.PRIMARY_COLOR};
}

.sidebar-more {
  text-align: right;
  font-size: 15px;
  font-weight: ${constants.FONT_WEIGHT_BOLD};
  color: ${constants.PRIMARY_COLOR};
}

.flat {
  overflow-y: auto; 
  width: calc(100% - 350px);
  height: 100%;
  margin: auto;
  text-align: center;
  position: relative;
}

.flat-text {
  padding: 0 10px;
  margin-top: 10px;
  text-align: left;
}

svg {
  position: absolute;
  top: -10px;
  left: 20%;
}

.room:hover {
  stroke-width: 1.5px;
  cursor: pointer;
}

.title-trapeze {
  font-size: 13px;
}

.room-triangle:hover {
  fill: rgba(255,50,50,0.6);
}

.room-trapeze:hover {
  fill: rgba(0,255,255,0.6);
}

.room-library:hover {
  fill: rgba(255,255,0,0.6);
}

`
