import React from 'react';
import { connect } from 'react-redux';

import CanvasJSReact from '../../lib/canvasjs-2.3.2/canvasjs.react';
import { GraphContainer } from './styles';

import ClipLoader from "react-spinners/ClipLoader";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graphic = ({options, loading}) => {
  return (
    <GraphContainer>
      { loading ? 
        <ClipLoader/>
        :
        <CanvasJSChart options={options}/>
      }
    </GraphContainer>
  );
}

const getOptionsFromStore = store => ({
  options: store.optionsState.graphicData,
  loading: store.optionsState.loading,
})

export default connect(getOptionsFromStore)(Graphic)