import React, { Component } from "react"
import "./Form.css"

import FormStatus from "./FormStatus"

class Form extends Component {
    state = {
        status: ""
    }

    APIToken = "SE9GMP3BB8X58I9FS9ACG4I1YNAZEE1KZ5"
    txhashRegex = /^0x(?:[0-9a-fA-F]{64})$/

    getTransactionByHash = (txhash, APIToken) => {
        this.setStatus("⏳ Checking...")
        const apiMethod = "eth_getTransactionReceipt"
        const etherscanRequest = new Request(
            `https://api.etherscan.io/api?module=proxy&action=${apiMethod}&txhash=${txhash}&apikey=${APIToken}`
        )

        fetch(etherscanRequest)
            .then(response => response.json())
            .then(data => {
                this.setStatus("👍 Done!")
                this.props.addTransaction(data, txhash)
            })
            .catch(error => {
                this.setStatus("🤷‍♂️ An error ocurred.")
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

        if (!this.state.txhash || !this.txhashRegex.test(this.state.txhash)) {
            this.setStatus("❌ Invalid TxHash!")
        } else if (this.props.alreadyChecked(this.state.txhash)) {
            this.setStatus("👀👇 Already in the list")
        } else {
            this.getTransactionByHash(this.state.txhash, this.APIToken)
        }
    }

    setStatus = status => {
        this.setState({
            status: status
        })

        if (this.statusTimeout) {
            clearTimeout(this.statusTimeout)
        }

        this.statusTimeout = setTimeout(() => {
            this.setState({
                status: ""
            })
            clearTimeout(this.statusTimeout)
        }, 5000)
    }

    render() {
        return (
            <form className="Form">
                <FormStatus status={this.state.status} />
                <input
                    type="text"
                    className="Form-input"
                    onChange={this.updateState}
                    name="txhash"
                    placeholder="Enter TxHash here..."
                />
                <button className="Form-button" onClick={this.validateInput}>
                    Validate
                </button>
            </form>
        )
    }
}

export default Form
