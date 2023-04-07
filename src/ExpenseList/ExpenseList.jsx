import React, { useContext, useState } from "react";
import "./expenselist.css";
import { Button } from "@mui/material";
import ItemList from "../ItemList/ItemList";
import FilterChart from "../Charts/FilterChart";
import { useNavigate } from "react-router-dom";
import { ExpenseContext } from "../App";
import { expenseData } from "../expense";

const ExpenseList = () => {
  const [search, setSearch] = useState("");

  const {
    state: { exparr },
    dispatch,
  } = useContext(ExpenseContext);

  // console.log(exparr);
  const Navigate = useNavigate();
  console.log(search);

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
            onChange={(e) => {
              setSearch(e.target.value);
              dispatch({
                type: "SEARCH_QUERY",
                payload: search,
              });
            }}
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
          <ItemList />
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
