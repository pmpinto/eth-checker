import React, { Component } from "react"
import "./App.css"

import Form from "../Form/Form"
import TransactionList from "../TransactionList/TransactionList"

class App extends Component {
    state = {
        transactions: [
            {
                txhash:
                    "0xd4ca3f0150ef6394aae751de381b6f7d9241958ac00aae1f89f855b3a5b3905d",
                success: true
            },
            {
                txhash:
                    "0x1904fb2ae19c547c0bb1efaa0202ceedcf731b48d4bdfd3706753dcf6458850f",
                success: true
            },
            {
                txhash:
                    "0x66dbe393c3ce6fdc9d5f56d1339e24f320a4a5eb95a76e2e7694e60254ac419a",
                success: true
            },
            {
                txhash:
                    "0x66dbe393c3ce6fdc9d5f56d1339e24f320a4a5eb95a76e2e7694e60254ac0000",
                success: false
            }
        ]
    }

    updateStateTransactions = newTransaction => {
        this.setState({
            transactions: [...this.state.transactions, newTransaction]
        })
    }

    addTransaction = (transaction, txhash) => {
        const transactionSuccess =
            transaction.result && transaction.result.status === "0x1"
                ? true
                : false

        const newTransaction = {
            txhash: txhash,
            success: transactionSuccess
        }

        console.log(transaction)
        this.updateStateTransactions(newTransaction)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>ETH Checker</h1>
                    <p>
                        Check if a specific ETH transaction is valid by entering
                        its TxHash below.
                    </p>
                </header>
                <section className="App-content">
                    <Form addTransaction={this.addTransaction} />
                    <TransactionList data={this.state.transactions} />
                </section>
            </div>
        )
    }
}

export default App
