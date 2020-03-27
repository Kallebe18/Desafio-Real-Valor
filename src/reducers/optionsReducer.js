const initialState = {
  graphicData: {
    zoomEnabled: true,
    height: 350,
    legend: {
      fontSize: 18,
    },
    axisY: {
      includeZero: true,
      minimum: 0,
      prefix: "$"
    },
    data: [{
      type: "line",
      showInLegend: true,
      legendText: "Bitcoin",
      yValueFormatString: "$0.00",
      xValueFormatString: "DD MMMM YY",
      dataPoints: [],
    }, {
      type: "line",
      showInLegend: true,
      legendText: "Tesouro Direto",
      yValueFormatString: "$0.00",
      xValueFormatString: "DD MMMM YY",
      dataPoints: [],
    }]
  }, 
  loading: false,
};

export const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPTIONS_UPDATE_VALUE':
      return {
        ...state,
        graphicData: {
          ...state.graphicData,
          data: [{
            ...state.graphicData.data[0],
            dataPoints: action.bitcoin,
          }, {
            ...state.graphicData.data[1],
            dataPoints: action.treasure,
          }]
        }
      };
    case 'OPTIONS_LOADING_STATE':
      return {
        ...state,
        loading: action.loadingState
      }
    default:
      return state;
  }
};