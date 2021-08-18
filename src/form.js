import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props) 

        this.state = {

            wallet: '',
            startDate:'',
            endDate: '',
            currency:''
        }
    }

    handleWalletChange = (event) => {
        this.setState({
            wallet: event.target.value
        })

    }

    handleStartChange = (event) => {
        this.setState({
            startDate: event.target.value
        })

    }
    handleEndChange = (event) => {
        this.setState({
            endDate: event.target.value
        })

    }
    handleEndChange = (event) => {
        this.setState({
            currency: event.target.value
        })
    }

    handleSubmit = event => {
    alert("The form has been submitted")
    }

    render ()
     {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label> wallet : </label>
                    <input 
                        type='text' 
                        value={this.state.wallet} 
                        onChange={this.handleWalletChange } 
                    />
                    </div>

                    <div>
                    <label> start date:  </label>
                    <input 
                        type='date' 
                        value={this.state.startDate} 
                        onChange={this.handleStartChange } 
                    />
                    </div>

                    <div>
                    <label> End date:  </label>
                    <input 
                        type='date' 
                        value={this.state.endDate} 
                        onChange={this.handleEndChange }
                        />
                    </div>

                    <div>
                    <label> Currency:  </label>
                    <select value={this.state.currency} onChange={this.handleCurrencyChange }>
                            <option value="aud">$AUD</option>
                            <option value="usd">$USD</option>
                            <option value="nzd">$NZD</option>
                    </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}
export default orm
