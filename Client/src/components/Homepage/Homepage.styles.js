import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  min-height: 100%;
  width: 100%;
  background-color: ${constants.PRIMARY_COLOR};
  padding: 30px 10px;
  overflow-y: auto; 
  color: #fff;
}

.flat {
  margin: auto;
  text-align: center;
}

.svg {
  margin-left: -50px;
}

.room:hover {
  stroke: ${constants.SECONDARY_COLOR};
  stroke-width: 1px;
  cursor: pointer;
}

.room-name:hover + .room{
  stroke: ${constants.SECONDARY_COLOR};
  stroke-width: 1px;
  cursor: pointer;
}
`
