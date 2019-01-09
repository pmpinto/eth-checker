import React from "react"

import "./TransactionList.css"

const TransactionList = props => {
    const transactions = props.data.map((transaction, index) => {
        return (
            <tr className="TransactionList-item" key={index}>
                <td>{index}</td>
                <td>
                    <a
                        href={`https://etherscan.io/tx/${transaction.txhash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {transaction.txhash}
                    </a>
                </td>
                <td>{transaction.success ? "✅" : "❌"}</td>
            </tr>
        )
    })

    return (
        <table className="TransactionList">
            <thead className="TransactionList-header">
                <tr>
                    <th>Key</th>
                    <th>TxHash</th>
                    <th>Success</th>
                </tr>
            </thead>
            <tbody className="TransactionList-body">{transactions}</tbody>
        </table>
    )
}

export default TransactionList
