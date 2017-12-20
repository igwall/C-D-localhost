import css from 'styled-jsx/css'

export default css`
h1{
    font-family: monospace;
    text-align: left;
  }

  .recipe {
    border-radius: 3px;
    border: 1px solid black; 
    width: 80%;
  }

  li{
    font-family: Verdana;
  }
 h2, p, ul{
    font-family: monospace;
  }
  header{
    background-color: rgba(136, 195, 206, 0.596);
  }
.title{
  
  width: 50%;
  text-align: right;
  margin: 2px 10px;
  display: inline-block;

}

.checkBox {
    
    text-align: left;
    margin: 2px 10px;
    display: inline-block;
    padding : 20px 50px 50px 75px;
  }
  
  ul.header li {
    display: inline;
    list-style-type: none;
    margin: 0;
    padding: 175px;
    font-family: Verdana;
  }
  
  nav>a{
position: relative;
display: inline-block;
    font-size: 13.75px;
    font-family: Verdana;
line-height: 40px;
padding: 0 15em;
}
nav>a:hover{
background: rgba(255,255,255,.9);
color: black;
}
  ul.header {
    background-color: rgba(85, 126, 85, 0.658);
    padding: 0;
  }
  ul.header li a {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    padding: 20px;
    display: inline-block;
  }
  .content {
    background-color: rgba(136, 195, 206, 0.596);
    padding: 20px;
  }
  .content h2 {
    padding: 0;
    margin: 0;
  }
  .content li {
    margin-bottom: 10px;
  }
`
