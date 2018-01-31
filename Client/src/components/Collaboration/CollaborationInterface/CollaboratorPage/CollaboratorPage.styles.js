import css from 'styled-jsx/css'
// import constants from '../../../../constants'

export default css`
.host {
  height: 100%;
  width: 100%;
  padding: 25px;
  overflow: auto;
}

.title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}

.collaborator-infos {
  padding: 0 25px;
  min-width: 850px;
}

.collaborator-video {
  padding: 0 25px;
}

.infos {
  display: inline-block;
  margin-bottom: 30px;
}

.infos-left {
  width: 350px;
  text-align: center;
}

.infos-right {
  width: calc(100% - 350px);
  min-width: 450px;
  vertical-align: top;
}

.picture {
  height: 200px;
  width: 200px;
  margin: auto;
}

.name {
  margin: 20px 0;
}

.field {
  margin-bottom: 40px;
}

.label {
  font-size: 20px;
  margin-bottom: 20px;
}

.text {
  font-size: 15px;
  padding: 0 20px;
  white-space: pre-line;
}

.video {
  display: flex;
  width: 100%;
  justify-content: center;
}



`
