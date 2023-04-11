import React, { useContext, useEffect, useState } from "react";
import "./expenselist.css";
import { Button } from "@mui/material";
import ItemList from "../ItemList/ItemList";
import FilterChart from "../Charts/FilterChart";
import { useNavigate } from "react-router-dom";
import { ExpenseContext } from "../App";
import { expenseData } from "../expense";

const ExpenseList = () => {
  const [search, setSearch] = useState("");
  const [allData, setAllData] = useState([
    // {
    //   expense_amount: "20",
    // expense_date: 2023,
    // expense_title: "hg",
    //   id: "156621bb"
    // }
  ])
  console.log("search", search)

  // const {
  //   state: { exparr, filterArr },
  //   dispatch,
  // } = useContext(ExpenseContext);

  const {state}=useContext(ExpenseContext);
  
  const result = state?.exparr?.filter((e)=>{
    return e.expense_year == search
  });
  // debugger

  console.log("result", result)
  console.log("state 123", state)

  useEffect(() => {
    // debugger
  setAllData(result)
 },[search])
  // function checkData(data) {
  //   debugger
  //   return data.expense_date == 18;
  // }

  useEffect(()=>{
    setAllData([...allData,...state?.exparr])
  },[state.exparr])
  console.log("allData",allData);
  const Navigate = useNavigate();
  // console.log(search);

  const handleClick = (e) => {
    e.preventDefault();
    Navigate("/addExpense");
  };

 

  return (
    <div className="main">
      <div className="addexpense">
        <Button
          variant="contained"
          style={{ backgroundColor: "#008000" }}
          onClick={handleClick}
        >
          Add Expense Item
        </Button>
      </div>
      <div className="containerList">
        <div className="filterContainer">
          <span>filter by year</span>
          <select
            name="selectyear"
            value={search}
            onChange={
              (e) => {
                
                setSearch(e.target.value);
                setAllData(result);
              //   dispatch({
              //     type: "SEARCH_QUERY",
              //     payload: search,
              //   });
              //   console.log(e.target.value);
              }
            
            }
          >
            <option value="">All Years</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
        </div>
        <div className="filtertext"></div>
        <div className="itemlist">
          <ItemList allData={allData}/>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
