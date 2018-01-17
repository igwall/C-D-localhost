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

.main {
  margin: 0 20%;
  padding-top: 25px;
  min-width: 500px;
  height: 100%;
  width: 100%;
  min-height: 500px;
  background: ${constants.SECONDARY_COLOR};
}

.panel {
  min-width: 500px;
  padding: 10px;
  width: 100%;
}

.panel-title {
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
}

`
