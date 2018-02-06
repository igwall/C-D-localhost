import css from 'styled-jsx/css'
import constants from '../../../../constants'

export default css`
.host {
  color: white;
  padding: 25px;
  height: 100%;
}

.list-title {
  margin-bottom: 20px;
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
  margin: 20px 0;
  background: ${constants.SECONDARY_COLOR};
  box-shadow: 2px 2px 4px rgba(255,255,255,0.4);
}

.link-container {
  height: 100%;
  width: 100%;
}

.element-infos {
  padding: 5px;
  flex: 3;
  min-height: 100px;
}

.element:hover {
  transform: translateY(-5px);
}

.element-picture {
  display: inline-block;
  vertical-align: top;
  height: 75px;
  width: 75px;
  background: ${constants.PRIMARY_COLOR};
}

.element-description {
  position: relative;
  display: inline-block;
  min-height: 100px;
  vertical-align: top;
  padding: 0 10px;
}

.element-title {
  font-size: 17px;
}

.element-title p {
  max-width: 350px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.element-other {
  color: ${constants.TEXT_SECONDARY_COLOR}
  padding: 2px 0;
  max-width: 390px;
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
  white-space: nowrap;
  padding: 5px 0;
}

.element-actions {
  flex: 1;
  font-size: 17px;
}

.action {
  width: 90%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
}

.action:hover {
  background: rgba(255,255,255,0.2);
}

.action-icon {
  padding-bottom: 5px;
  margin-right: 15px;
}

.sort-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
}

.sort {
  flex: 2;
  padding-right: 10px;
}

.sort:last-of-type {
  padding-right: 0;
}

.search-bar {
  font-size: 14px;
  height: 36px;
  color:white;
  padding: 4px;
  padding-left: 10px;
  width: 200px;
  min-width: 200px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  transition: min-width 0.75s;    
  background: rgba(255,255,255,0.3);
}

.search-bar:focus {
  min-width: 300px;
  background: rgba(255,255,255,1);
  color: #000;
}

.validation-panel {
  border: 1px solid ${constants.VALIDATION_PANEL_BORDER_COLOR};
  background: ${constants.VALIDATION_PANEL_COLOR};
  width: 100%;
  font-size: 15px;
  margin-bottom: 20px;
}

.validation-content {
  display: flex;
  align-items: center;
  padding: 10px;
}

.validation-message {
  padding-left: 20px;
}

`
