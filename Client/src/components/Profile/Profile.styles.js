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
  background: ${constants.SECONDARY_COLOR};
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0px 1px 5px rgba(255,255,255,0.3);
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

.picture {
  display: inline-block;
  width: 30%;
}

.infos {
  display: inline-block;
  width: 70%;
}

.infos-username {
   font-size: 18px;
}

.infos-email {
  font-style: italic;
  color: ${constants.TEXT_SECONDARY_COLOR};
}

ul {
  background: ${constants.PRIMARY_COLOR};
  overflow-y: auto;
}

li {
  padding: 0 10px;
}

.comments {
  width: 100%;
  padding: 20px;
}

.comment {
  padding: 5px 0;
}

.comment-text {
  font-size: 15px;
}

.comment-date {
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
