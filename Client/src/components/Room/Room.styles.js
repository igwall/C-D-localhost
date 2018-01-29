import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  position: relative;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  overflow-y: auto;
  max-height: 80vh;
}

.room-title {
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: bold;
}

.test {
  height: 100%;
}

.recipes {
  padding: 10px 0;
}

.element {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  background: ${constants.SECONDARY_COLOR};
  box-shadow: 2px 2px 4px rgba(255,255,255,0.4);
}

.done {
  background: rgba(255,255,255,0.2);
}

.list-element {
  display: inline-block;
  margin-right: 20px;
}

.link-container {
  height: 100%;
  width: 100%;
}

.element-infos {
  padding: 5px;
  flex: 3;
}

.element:hover {
  transform: translateY(-5px);
}

.element-picture {
  display: inline-block;
  vertical-align: top;
  height: 50px;
  width: 50px;
  background: ${constants.PRIMARY_COLOR};
}

.element-description {
  position: relative;
  display: inline-block;
  min-height: 50px;
  vertical-align: top;
  padding: 0 10px;
}

.element-title {
  font-size: 17px;
}

.element-other {
  color: ${constants.TEXT_SECONDARY_COLOR}
}

.element-other, .element-date {
  font-size: 12px;
}

.element-text {
  font-size: 15px;
  font-style: italic;
  padding: 10px;
  padding-bottom: 30px;
}

.element-date {
}

`
