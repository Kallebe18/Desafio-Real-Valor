import React from 'react';
import { connect } from 'react-redux';

import CanvasJSReact from '../../lib/canvasjs-2.3.2/canvasjs.react';
import { GraphContainer } from './styles';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import api from '../../services/api';

const Graphic = ({options}) => {
  return (
    <GraphContainer>
      <CanvasJSChart options={options}/>
    </GraphContainer>
  );
}

const getOptionsFromStore = store => ({
  options: store.optionsState.newValue
})

export default connect(getOptionsFromStore)(Graphic)