import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }

  handleDepositeClick = (e) => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value);
    const newBalance = this.state.balance + amount;

    console.log(amount, newBalance);

    this.setState ({
      balance: newBalance
    })
    this.inputBox.value = '';
  }

  handleWithdrawClick = (e) => {
    e.preventDefault();
    let newBalance = 0;
    const amount = parseInt(this.inputBox.value);
    if(amount > this.state.balance) {
      alert("Your number is not valid");
    } else{
      newBalance = this.state.balance - amount;
    }
    
    this.setState ({
      balance: newBalance
    })
    this.inputBox.value = '';
  }


  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero ';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDepositeClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}

export default Account;
