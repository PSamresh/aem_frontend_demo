import React, { Component } from 'react';
import './assets/style.css'

class App extends Component {



    constructor(props) {
        super(props)

        this.state = {

            amount: '',
            memo: '',
            txnDate: '',
            assignTo: '',
            gst: ''
        }
    }

    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        })

    }


    handlememoChange = (event) => {
        this.setState({
            memo: event.target.value
        })




    }
    handletxnDateChange = (event) => {
        this.setState({
            txnDate: event.target.value
        })

    }

    handleassignToChange = (event) => {
        this.setState({
            assignTo: event.target.value
        })
    }

    handlegstChange = (event) => {
        this.setState({
            gst: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);
        const value = data.get('amount');
        console.log({ value });
        console.log("gggg");
        alert("The form has been submitted")

        try {

            let result = fetch('https://webhook.site/e45dc67d-5c18-4efb-a88a-1ad64d441c8e', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Amount: data.get('amount'),
                    Memo: data.get('memo'),
                    TxnDate: data.get('txnDate'),
                    AssignTo: data.get('assignTo'),
                    GST: data.get('gst')


                    /*  ....Define how you want accept data to API*/


                })

            });

        } catch (e) {
            console.log(e)
        }
    }

    //  handleSubmit(event) {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     const value = data.get('waddress');
    //     console.log({ value });
    //     console.log("gggg");
    //     }


    render() {
        return (
            <div>
                <nav>
                    <label className="logo" ><img src="./img/Screenshot 2021-08-14 at 5.36.05 pm.png" style={{ width: '60px', height: '60px' }} />
         AEM Algorithm</label>
                    <ul>
                        <li>
                            <a>User
                </a>
                        </li>
                    </ul>
                </nav>

                <div className="wrapper" >
                    <div className="sidebar" >
                        <ul>
                            <li> <a href="#"><img src="./images/Screenshot 2021-08-14 at 5.36.05 pm.png" alt=""
                            /></a></li>
                            <li> <a href="#"><img src="./images/Screenshot 2021-08-15 at 2.58.32 pm.png"
                            /></a></li>
                            <li> <a href="#"><img src="./images/Screenshot 2021-08-15 at 2.59.13 pm.png"
                            /></a></li>
                            <li> <a href="#"><img src="./images/Screenshot 2021-08-15 at 2.59.38 pm.png"
                            /></a></li>
                            <li> <a href="#"><img src="./images/Screenshot 2021-08-15 at 3.00.19 pm.png"
                            /></a></li>
                            <li> <a href="#"><img src="./images/Screenshot 2021-08-15 at 3.00.43 pm.png"
                            /></a></li>
                            <li> <a href="#"><img src="./images/Screenshot 2021-08-15 at 3.00.57 pm.png"
                            /></a></li>
                        </ul>
                    </div>
                </div>

                <h1>Export</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="wallet">
                        <label for="amount">Amount: </label><br />
                        <input type="integer" id="amount" name="amount"
                            value={this.state.amount}
                            onChange={this.handleAmountChange} />
                    </div>

                    <div className="wallet">
                        <label for="memo">Memo: </label><br />
                        <input type="text" id="memo" name="memo"
                            value={this.state.memo}
                            onChange={this.handlememoChange} />
                    </div>

                    <div className="calendar">
                        <label for="txnDate">Transaction date:</label><br />
                        <input type="date" id="txnDate" name="txnDate"
                            value={this.state.txnDate}
                            onChange={this.handletxnDateChange} /><br />

                    </div>

                    <div className="wallet">
                        <label for="assignTo">Assign To: </label><br />
                        <input type="text" id="assignTo" name="assignTo"
                            value={this.state.assignTo}
                            onChange={this.handleassignToChange} />
                    </div>

                    <div className="wallet">
                        <label for="gst">GST: </label><br />
                        <input type="integer" id="gst" name="gst"
                            value={this.state.gst}
                            onChange={this.handlegstChange} />
                    </div>
                    <div className="submit">
                        <button type="submit" > Export </button>
                        {/* onClick={ () => this.postData() } */}
                    </div>
                </form>

            </div>


        );

    }
}
export default App;
