import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickButton } from '../../actions';
import { changeLoading } from '../../actions';

import api from '../../services/api';

import FormContainer from './styles';

const Form = ({dispatch}) => {
  const [date, setDate] = useState(0);
  const [investment, setInvestment] = useState(0);

  const dateChange = e => setDate(new Date(e.currentTarget.value));
  const investmentChange = e => setInvestment(parseInt(e.currentTarget.value));

  const handleInvestment = async e => {
    e.preventDefault();

    function isValidDate(d) {
      return d instanceof Date && !isNaN(d);
    }
    
    if(!isValidDate(date)) {
      alert('Preencha a data em que o investimento foi realizado.')
      return;
    }

    if(!investment || investment <= 0 || typeof(investment) !== 'number') {
      alert('Preencha o campo de investimentos corretamente')
      return;
    }

    window.scrollTo(0, document.body.scrollHeight);
    dispatch(changeLoading(true));

    let bitcoinInvestment = [];
    let treasureInvestment = [];

    let now = new Date();

    let day = 1000*60*60*24;
    let diffDays = Math.floor((now.getTime() - date.getTime())/day);
    let res = await api.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=BRL&limit=${diffDays}`)
    res = res.data.Data.Data;
    let initialHigh = res[0].high;
    let initialLow = res[0].low;
    for(let i=0; i<res.length; i++) {
      let percentageHigh = (res[i].high - initialHigh)/initialHigh;
      let percentageLow =  (res[i].low - initialLow)/initialLow;
      let high = investment+(investment*percentageHigh);
      let low = investment+(investment*percentageLow);
      if(low > high) {
        let temp = low; low = high; high = temp;
      }

      let rentMediaBitcoin = -1*((investment - (low+high)/2)/investment)*100; // rentabilidade
      let actualDay = new Date(res[i].time*1000);
      bitcoinInvestment.push({
        name: 'Bitcoin',
        x: actualDay,
        y: high,
        low,
        rentMediaBitcoin
      })

      let increase = (((investment/100)*10)/365)*(i+1);
      let rentTesouro = increase/investment*100;
      treasureInvestment.push({
        name: 'Tesouro Direto',
        x: actualDay,
        y: investment+increase,
        rentTesouro,
      })
    }

    dispatch(changeLoading(false));
    dispatch(clickButton(bitcoinInvestment, treasureInvestment))
  }

  return (
    <FormContainer>
      <label htmlFor="investmentDate">Data de investimento</label>
      <input 
        type="date" name="investmentDate"
        data-date=""
        data-date-format="DD MMMM YYYY"
        id="date" onChange={dateChange}
        min={`${new Date().getFullYear()-2}-01-01`}
        max={`${new Date(new Date() - 1000*60*60*24).toISOString().split("T")[0]}`}
        onKeyDown={(e) => e.preventDefault()}
      />
      <label htmlFor="investment">Investimento feito</label>
      <input type="number" onChange={investmentChange}/>
      <input type="submit" value="Verificar" onClick={handleInvestment}/>
    </FormContainer>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton, changeLoading }, dispatch);

export default connect(mapDispatchToProps)(Form);