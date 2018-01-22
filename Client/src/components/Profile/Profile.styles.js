import css from 'styled-jsx/css'
import constants from '../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  background: ${constants.PRIMARY_COLOR};
  font-size: 15px;
}

.main {
  margin: 0 20%;
  padding-top: 25px;
  min-width: 500px;
  height: 100%;
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

.panel-realisations {
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
  background: #000;
}

.ingredient-picture {
  display: inline-flex;
  height: 50px;
  width: 50px;
  align-items: center;
  background: #000;
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

.infos-age {
  
}

.sort-bar {
  padding: 0 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.sort {
}

.sort-ingredients {
  margin-left: 20px;
  width: 350px;
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

.no-realisations {
  padding-top: 100px;
  text-align: center;
  font-size: 15px;
}

.realisations {
  margin-top: 30px;
  padding: 0 20px;
}

.realisation {
  display: flex;
  width: 100%;
  height: 70px;
  align-items: start;
  padding: 10px 0;
  cursor: pointer;
}

.realisation-infos {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
}

.realisation-name {
}

.realisation-date {
  font-size: 12px;
  font-style: italic;
  color: ${constants.TEXT_SECONDARY_COLOR};
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
