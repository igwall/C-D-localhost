import css from 'styled-jsx/css'

export default css`
.host {
  position: relative;
  height: 100px;
  padding: 5px 8px;
  width: 100%;
  text-align: center;
  z-index: 1;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
}

.brand {
  position: absolute;
  top: 20%;
  left: calc(50% - 40.5px);
  height: 22px;
  width: 81px;
  background-image: url("/assets/compare_danse_logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.log-button:hover {
  background: rgba(0,0,0,0.3);
}

.log-button {
  float: right;
  display: flex;
  padding: 10px;
  cursor: pointer;
}

.log-text{
  padding-left: 10px;
}

`
