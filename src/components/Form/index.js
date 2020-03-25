import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickButton } from '../../actions';

import api from '../../services/api';

import FormContainer from './styles';

const Form = ({dispatch}) => {
  const [date, setDate] = useState(new Date());
  const [investment, setInvestment] = useState(0);

  const dateChange = e => setDate(new Date(e.currentTarget.value));
  const investmentChange = e => setInvestment(parseInt(e.currentTarget.value));

  const handleInvestment = async e => {
    e.preventDefault();

    let bitcoinInvestment = [];
    let treasureInvestment = [];

    let now = new Date();
    let day = 1000*60*60*24;
    let diffDays = Math.floor((now.getTime() - date.getTime())/day);
    let res = await api.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=BRL&limit=${diffDays}`)
    res = res.data.Data.Data;
    let initialHigh = res[0].high;
    // let initialLow = res[0].low;
    for(let i=0; i<res.length; i++) {
      let percentageHigh = initialHigh / res[i].high;
      // let percentageLow =  initialLow / res[i].low;
      let actualDay = new Date(res[i].time*1000);
      bitcoinInvestment.push({
        x: actualDay,
        y: investment*percentageHigh,
      })

      treasureInvestment.push({
        x: actualDay,
        y: investment+(((100/investment)*10)/365)*(i+1)
      })
    }
    
    dispatch(clickButton(bitcoinInvestment, treasureInvestment))
  }

  return (
    <FormContainer>
      <label htmlFor="investmentDate">Anos de investimento</label>
      <input type="date" name="investmentDate" id="date" onChange={dateChange}/>
      <label htmlFor="investment">Investimento feito</label>
      <input type="text" onChange={investmentChange}/>
      <input type="submit" value="Verificar" onClick={handleInvestment}/>
    </FormContainer>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapDispatchToProps)(Form);