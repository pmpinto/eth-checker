import React from "react"

import "./TransactionList.css"

const TransactionList = props => {
    const transactions = props.data.map((transaction, index) => {
        return (
            <tr className="TransactionList-Item" key={index}>
                <td>{index}</td>
                <td>{transaction.txhash}</td>
                <td>{transaction.success ? "✅" : "❌"}</td>
            </tr>
        )
    })

    return (
        <table className="TransactionList">
            <thead className="TransactionList-Header">
                <tr>
                    <th>Key</th>
                    <th>TxHash</th>
                    <th>Success</th>
                </tr>
            </thead>
            <tbody className="TransactionList-Body">{transactions}</tbody>
        </table>
    )
}

export default TransactionList
