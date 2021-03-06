import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    background: #fff
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  .draggable-item {
    border: 1px solid black
    margin:5px
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }
  .cell_box_left .smooth-dnd-container {
    height: 62.7px;
    border-bottom: 1px solid #CACACA !important;
    
  }
  .paper .smooth-dnd-container{
    height: 690px !important
  }

  #app {
    background: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }
 
  @media (max-width: 768px) {
    .paper .smooth-dnd-container{
      width: 187px !important
    }
  }
  @media (max-width: 576px) {
    .cell_box_left .smooth-dnd-container {
      height: 29.7px;
      
    }
    .paper .smooth-dnd-container{
      width: 100% !important
    }
  }
`;

export default GlobalStyle;
