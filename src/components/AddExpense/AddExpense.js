//title, amount, date, credit/debit, category, note inputs and submit button
import React, { useState } from "react";

export default function AddExpense({ addExpense, open, onClose }){
    const initialFormState={
        title: "",
        amount: "",
        date: "",
        type: "",
        category: "",
        note: ""
    };

    const [formData, setFormData] = useState([...initialFormState]);

    const handleChange = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (event) => {
       event.preventDefault();
       addExpense(formData);
       setFormData({...initialFormState})
    };

   if (!open) return null;
   return(
     <div className='overlay'>
        <div className='modalContainer'>
            <div className='modalLeft'>
                <p onClick={onClose} className="closeBtn">X</p>
            </div>
            <form name='create' onSubmit={handleSubmit}>
              <table>
                <tbody>
                    <tr className="row">
                        <td>
                            <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="title"
                            onChange={handleChange}
                            value={formData.title}
                            />
                        </td>
                        <td>
                            <input
                            id="amount"
                            type="text"
                            name="amount"
                            placeholder="amount"
                            onChange={handleChange}
                            value={formData.amount}
                            />
                        </td>
                        <td>
                            <input
                            id="date"
                            type="text"
                            name="date"
                            placeholder="date"
                            onChange={handleChange}
                            value={formData.date}
                            />
                        </td>
                        <td>
                            <input
                            id="type"
                            type="text"
                            name="type"
                            placeholder="type"
                            onChange={handleChange}
                            value={formData.type}
                            />
                        </td>
                        <td>
                            <input
                            id="category"
                            type="text"
                            name="category"
                            placeholder="category"
                            onChange={handleChange}
                            value={formData.category}
                            />
                        </td>
                        <td>
                            <textarea
                            id="note"
                            type="text"
                            name="nope"
                            placeholder="note"
                            onChange={handleChange}
                            value={formData.note}
                            />
                        </td>
                    </tr>
                </tbody>
              </table>
            </form>
        </div>
     </div>
   )};