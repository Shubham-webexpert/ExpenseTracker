import React, { useContext, useState } from "react";
import "./expenseInput.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import { expenseData } from "../expense";



const ExpenseInput = () => {
const [expTitle,setExpTitle]=useState("");
const [expAmount,setExpAmount]=useState("");
const [expDate,setExpDate]=useState("");


  const handleSubmit=(e)=>{
    e.preventDefault();
    Navigate('/');
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    expenseData.push({id:uniqueId,expense_title:expTitle,expense_amount:expAmount,expense_date:expDate});
    // console.log(expenseData);

  }

  const Navigate=useNavigate();
  return (
    <div>
      <form>
        <div className="container">
          <div className="text">
            <label htmlFor="">Title</label>

            <input type="text"  placeholder="New expense" name="expense_title" onChange={(e)=>setExpTitle(e.target.value)} value={expTitle}/>
          </div>
          <div className="text">
            <label htmlFor="">Amount</label>
            <input type="number" placeholder="0" name="expense_amount" onChange={(e)=>setExpAmount(e.target.value)} value={expAmount}/>
          </div>
          <div className="text">
            <label htmlFor=""> Date</label>
            <input type="date" name="expense_date" onChange={(e)=>setExpDate(e.target.value)} value={expDate}/>
          </div>
          <div className="addbtn">
            <Button variant="contained" style={{ backgroundColor: "#40005d" }} onClick={handleSubmit}>
              Add Expense
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseInput;
