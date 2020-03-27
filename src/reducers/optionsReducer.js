const initialState = {
  graphicData: {
    zoomEnabled: true,
    height: 350,
    legend: {
      fontSize: 18,
      verticalAlign: "top",
    },
    axisY: {
      includeZero: true,
      minimum: 0,
      prefix: "$"
    },
    toolTip: {
      animationEnabled: true,
      contentFormatter: e => {
        let {name, y, low, x, rentMediaBitcoin, rentTesouro} = e.entries[0].dataPoint;
        let date = x.toLocaleDateString('en-US');
        if(name === "Tesouro Direto") {
          return `<h3>${name} ${date}</h3><hr><h4 style="color:#192">R$ ${y.toFixed(2)}</h4><h4>Rentabilidade: ${rentTesouro.toFixed(2)}%</h4>`
        } else {
          return `<h3>${name} ${date}</h3><hr><h4 style="color:#823">Baixa: R$ ${low.toFixed(2)}</h4><h4 style="color:#319">Alta: R$ ${y.toFixed(2)}</h4><h4>Rentabilidade Média: ${rentMediaBitcoin.toFixed(2)}%</h4>`
        }
      }
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