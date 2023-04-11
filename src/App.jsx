import { createContext, useContext, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpDate from "./Date/ExpDate";
import { expenseData } from "./expense";
import ExpenseInput from "./ExpenseInput/ExpenseInput";
import ExpenseList from "./ExpenseList/ExpenseList";
import ItemList from "./ItemList/ItemList";
import { reducer } from "./Reducer/reducer";

export const ExpenseContext = createContext();

const initialState={
  exparr:expenseData,
  filterArr:[]
}

function App() {
  const [data,setData]=useState({});
  

  const [state,dispatch]=useReducer(reducer,initialState);
  console.log("state", state)

  
  
  

  return (
    <div className="App">
      <ExpenseContext.Provider value={{data,setData,state,dispatch}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ExpenseList />} />
            <Route path="/addExpense" element={<ExpenseInput />} />
            <Route path="/expenseItem" element={<ItemList/>}/>
            <Route path="/expenseDate" element={<ExpDate/>}/>
          </Routes>
        </BrowserRouter>
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
