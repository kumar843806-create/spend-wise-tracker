
function RecentTransactions({ transactions }) {
  return (
    <section className="transactions-card">
      <div className="section-heading">
        <div>
          <h3>Recent Transactions</h3>
          <p>Your latest income and expenses</p>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>DATE</th>
              <th>AMOUNT</th>
              <th>TYPE</th>
            </tr>
          </thead>

          <tbody>
            {transactions.slice(0, 10).map((item) => (
              <tr key={item.id}>
                <td className="transaction-name">
                  {item.name}
                </td>

                <td>{item.category}</td>
                <td>{item.date}</td>

                <td className={
                  item.type === "income"
                    ? "green-text"
                    : "red-text"
                }>
                  {item.type === "income" ? "+" : "-"}
                  ₹{item.amount.toLocaleString("en-IN")}
                </td>

                <td>
                  <span className={`type-badge ${item.type}`}>
                    {item.type}
                  </span>
                </td>
              </tr>
            ))}

            {transactions.length === 0 && (
              <tr>
                <td colSpan="5">No transactions found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentTransactions;
