const initialState = {
  graphicData: {
    title: {
      text: "Investimento Tesouro Direto e Bitcoin"
    },
    axisY: {
      includeZero: true,
      minimum: 0,
      prefix: "$"
    },
    data: [{				
      type: "line",
      yValueFormatString: "$0.00",
      xValueFormatString: "MMMM YY",
      dataPoints: [],
    }, {		
      type: "line",
      yValueFormatString: "$0.00",
      xValueFormatString: "MMMM YY",
      dataPoints: [],
    }]
  }
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
    default:
      return state;
  }
};