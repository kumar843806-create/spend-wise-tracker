
import { useState } from "react";
import { X } from "lucide-react";

function TransactionForm({
  onAdd,
  onClose,
  defaultType = "expense"
}) {
  const [form, setForm] = useState({
    name: "",
    category: "Food",
    amount: "",
    type: defaultType
  });

  function handleSubmit(e) {
    e.preventDefault();

    const amount = Number(form.amount);

    if (
      !form.name.trim() ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      name: form.name.trim(),
      category:
        form.type === "income" ? "Income" : form.category,
      amount,
      type: form.type,
      date: new Date().toISOString()
    });

    onClose();
  }

  return (
    <div className="modal-overlay">
      <form
        className="transaction-form"
        onSubmit={handleSubmit}
      >
        <div className="modal-heading">
          <h3>Add New Transaction</h3>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="form-grid">
          <input
            type="text"
            placeholder="Transaction Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <select
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          {form.type === "expense" && (
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Bills</option>
              <option>Health</option>
              <option>Education</option>
              <option>Personal</option>
            </select>
          )}

          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Amount (₹)"
            value={form.amount}
            onChange={(e) =>
              setForm({ ...form, amount: e.target.value })
            }
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button type="submit" className="primary-btn">
            Save Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
