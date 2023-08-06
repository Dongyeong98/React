import React, { useState } from 'react';

import './ExpenseForm.css';

// 여러개를 하나하나로 상태값을 유지하게 할수도 있지만  객체로 들고올수도있다.
// 이떄 주의할점은 사용하지않는 다른값들도 복사를 해가야하기에 기본값에 의존하게된다. 중요 !
// 리액트는 언제나 최신상태를? 유지하며 상태값을 유지하는게 좋기에 setUserInput 안에 함수를 써서 만드는게 좋은방식이다. 여러대안중하나이다.

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // });
    };
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: e.target.value };
        // });
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });
    };

    // 공유 핸들러를  이런식으로 만들어서 사용할수도 있다.
    // onChange 에 () 함수를 실행할수가 없으니 익명함수로 event 를 받아서 직접 사용하면된다.

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
        } else if (identifier === 'date') {
            setEnteredDate(value);
        } else {
            setEnteredAmount(value);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseDate(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={(e) =>
                            inputChangeHandler('title', e.target.value)
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={(e) =>
                            inputChangeHandler('amount', e.target.value)
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-0101"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
