import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
    APIToken = "SE9GMP3BB8X58I9FS9ACG4I1YNAZEE1KZ5"

    getTransactionByHash = (txhash, APIToken) => {
        const apiMethod = "eth_getTransactionReceipt"
        const etherscanRequest = new Request(
            `https://api.etherscan.io/api?module=proxy&action=${apiMethod}&txhash=${txhash}&apikey=${APIToken}`
        )

        fetch(etherscanRequest)
            .then(response => response.json())
            .then(data => {
                this.props.addTransaction(data, txhash)
            })
            .catch(error => {
                console.log(
                    "ERROR: something went wrong while reaching for Etherscan API",
                    error
                )
            })
    }

    updateState = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    validateInput = event => {
        event.preventDefault()

        this.getTransactionByHash(this.state.txhash, this.APIToken)
    }

    render() {
        return (
            <form className="Form">
                <input
                    type="text"
                    className="Form-text"
                    defaultValue="0x7b6d0e8d812873260291c3f8a9fa99a61721a033a01e5c5af3ceb5e1dc9e7bd0"
                    onChange={this.updateState}
                    name="txhash"
                    placeholder="Enter TxHash here..."
                />
                <button onClick={this.validateInput}>Validate</button>
            </form>
        )
    }
}

export default Form
