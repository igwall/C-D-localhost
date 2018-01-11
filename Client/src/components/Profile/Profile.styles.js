import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background: ${constants.PRIMARY_COLOR};
  display: flex;
  font-size: 15px;
}

.left-panels {
  min-width: 400px;
  height: 100%;
  width: 40%;
  padding: 20px 5px;
  padding-left: 20px;
  border-right: 1px solid white;
}

.right-panels {
  min-width: 400px;
  width: 60%;
  height: 100%;
  padding: 20px 5px;
  padding-right: 20px;
}

.panel {
  padding: 10px;
  background: ${constants.PRIMARY_COLOR};
  width: 100%;
  /* box-shadow: 0px 1px 5px rgba(255,255,255,0.3); */
}

.panel-title {
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
}

.panel-realisations {
  height: 100%;
  margin-bottom: 0px;
}

.panel-infos {
  vertical-align: top;
}

.panel-content {
  display: flex;
  width: 100%;
  align-items: start;
  padding: 20px;
}

.picture {
  display: inline-flex;
  height: 100px;
  width: 100px;
  align-items: center;
  background: #333;
}

.infos {
  display: inline-block;
  padding: 0 20px;
}

.infos-username {
   font-size: 18px;
}

.infos-email {
  font-style: italic;
  color: ${constants.TEXT_SECONDARY_COLOR};
}

.comments {
  background: ${constants.SECONDARY_COLOR};
  overflow-y: auto;
  max-height: 400px;
}

li {
  padding: 0 10px;
}

.comment {
  padding: 5px 0;
}

.comment-text {
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  font-size: 15px;
  text-overflow: ellipsis;
}

.comment-date {
  padding-top: 5px;
  font-size: 12px;
  text-align: right;
}

.separator{
  border: 1px solid white;
  line-height: 0.5px;
}

span {
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

`
