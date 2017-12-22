import css from 'styled-jsx/css'

export default css`
.material {
  width: 50px;
  text-align: center;
  cursor: pointer;
}

.material-picture {
  height: 50px;
  width: 50px;
  background: url('/assets/pictures/imgNotFound.png')
}

.material-name {
  font-size: 15px;
  color: black;
}

.material:hover .material-picture {
  transform: rotate(-5deg) translateY(-5px);
}

.material:hover .material-name {
  font-weight: bold;
}

`
