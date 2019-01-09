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
                    "0xc53eade04c9d8d08c6f1608e61e7686d7e4b9d2c813158a97c4c3351b7e6e7a6",
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

        this.updateStateTransactions(newTransaction)
    }

    alreadyChecked = txhash => {
        return (
            this.state.transactions.filter(
                transaction => transaction.txhash === txhash
            ).length > 0
        )
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>ETH Checker</h1>
                    <p>
                        Check if a specific ETH transaction was successful by
                        entering its TxHash below.
                    </p>
                </header>
                <section className="App-content">
                    <Form
                        addTransaction={this.addTransaction}
                        alreadyChecked={this.alreadyChecked}
                    />
                    <TransactionList data={this.state.transactions} />
                </section>
                <footer className="App-footer">
                    <p>
                        Only valid TxHashes will go through. After passing the
                        first validation wall we'll send it to Etherscan's API
                        to validate that the transaction was successful.
                    </p>
                    <p>
                        This project can be seen at{" "}
                        <a
                            href="https://github.com/pmpinto/eth-checker"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </footer>
            </div>
        )
    }
}

export default App
