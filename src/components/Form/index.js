import React, { useState } from 'react';

import FormContainer from './styles'

const Form = () => {
  const [date, setDate] = useState(new Date());
  const [investment, setInvestment] = useState(0);

  const dateChange = e => setDate(new Date(e.currentTarget.value));
  const investmentChange = e => setInvestment(parseInt(e.currentTarget.value));

  return (
    <FormContainer>
      <label htmlFor="investmentDate">Anos de investimento</label>
      <input type="date" name="investmentDate" id="date" onChange={dateChange}/>
      <label htmlFor="investment">Investimento feito</label>
      <input type="text" onChange={investmentChange}/>
      <input type="submit" value="Verificar"/>
    </FormContainer>
  );
}

export default Form;