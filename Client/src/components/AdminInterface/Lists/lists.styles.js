import css from 'styled-jsx/css'
import constants from '../../../constants'

export default css`
.host {
  color: white;
  padding: 0 25px;
  height: 100%;
}

.list-title {
  padding: 20px 0;
  font-size: 25px;
  font-weight: bold;
}

.list {
  min-width: 600px;
  max-width: 800px;
  margin: auto;
}

.list-element {
}

.element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${constants.SECONDARY_COLOR};
  margin: 10px 0;
  box-shadow: 2px 2px 4px rgba(255,255,255,0.5);
}

.element-infos {
  width: 400px;
  padding: 5px;
}

.element-picture {
  display: inline-block;
  height: 75px;
  width: 75px;
  background: ${constants.PRIMARY_COLOR};
}

.element-description {
  display: inline-block;
}

.element-title {
  font-size: 17px;
  padding: 0 10px;
}

.element-actions {
  padding: 0 20px;
  font-size: 17px;
}

.action {
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding: 5px 15px;
  cursor: pointer;
}

.action:hover {
  background: rgba(255,255,255,0.2);
}

.action-icon {
  padding-bottom: 5px;
  margin-right: 15px;
}

`
