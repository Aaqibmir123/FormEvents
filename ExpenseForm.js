import React from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
  const getDetails=(e)=>{
    e.preventDefault();
    const first=document.getElementById('one').value;
    const two=document.getElementById('two').value;
    const three=document.getElementById('three').value;
    const Ul=document.getElementById('store');
    const obj={
      first,two,three
    };

    const result=Ul.append(obj.first,obj.two,obj.three);
    


  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'  id='one'/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' id='two' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' id='three'/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={getDetails}>Add Expense</button>
      </div>
      <ul id='store'></ul>
    </form>
  );
};

export default ExpenseForm;