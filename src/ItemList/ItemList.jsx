import React, { useContext, useEffect, useState } from "react";
import "./ItemList.css";
import { Button, ButtonGroup } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpDate from "../Date/ExpDate";
import { ExpenseContext } from "../App";
import Box from "@mui/material/Box";
  import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemList = ({allData}) => {
  // debugger
  const [id,setId]=useState("");
  const [expTitle,setExpTitle]=useState("");
const [expAmount,setExpAmount]=useState("");
const [expDate,setExpDate]=useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = (id,expense_title, expense_amount, expense_date) => {
    setOpen(true);
    localStorage.setItem("Id",id);
    localStorage.setItem("ExpenseTitle", expense_title);
    localStorage.setItem("ExpenseAmount", expense_amount);
    localStorage.setItem("ExpenseDate", expense_date);
  };
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    setId(localStorage.getItem("Id"))
    setExpTitle(localStorage.getItem("ExpenseTitle"));
    setExpAmount(localStorage.getItem("ExpenseAmount"));
    setExpDate(localStorage.getItem("ExpenseDate"));
  },[id,expTitle,expAmount,expDate])
  const {
    state: { exparr },
    dispatch,
  } = useContext(ExpenseContext);

  let index = exparr.map((e) => {
    return e.id;
  }).indexOf(id);

  const handelUpdate=(e)=>{
    e.preventDefault();
    const a = exparr[index];
    a.expense_title=expTitle;
    a.expense_amount =expAmount;
    a.expense_date =expDate;
    handleClose();
  }

  
  return (
    <div>
      {allData.length ? allData?.map((ele) => {
      
        return (
          <div className="List" key={ele.id}>
            <div className="date">
              <ExpDate date={ele.expense_date} />
            </div>
            <div className="Item">{ele.expense_title}</div>
            <div className="action">
              <div className="action-btn">
                <ButtonGroup className="btn-group">
                  <Button
                    style={{ border: "none" }}
                    onClick={() =>
                      handleOpen(ele.id,ele.expense_title,ele.expense_amount, ele.expense_date)
                    }
                  >
                    <EditIcon />  
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <form>
                        <div className="container">
                          <div className="text">
                            <label htmlFor="">Title</label>

                            <input
                              type="text"
                              placeholder="New expense"
                              name="expense_title"
                              onChange={(e)=>{
                                setExpTitle(e.target.value);
                                localStorage.setItem('ExpenseTitle',e.target.value);
                              }}
                              value={expTitle}
                            />
                          </div>
                          <div className="text">
                            <label htmlFor="">Amount</label>
                            <input
                              type="number"
                              placeholder="0"
                              name="expense_amount"
                              onChange={(e)=>{setExpAmount(e.target.value);
                                localStorage.setItem('ExpenseAmount',e.target.value);
                              }
                              }
                              value={expAmount}
                              
                            />
                          </div>
                          <div className="text">
                            <label htmlFor=""> Date</label>
                            <input
                              type="date"
                              name="expense_date"
                              onChange={(e)=>{
                                setExpDate(e.target.value);
                                localStorage.setItem('ExpenseDate',e.target.value);

                              }}
                              value={expDate}

                            />
                          </div>
                          <div className="addbtn" onClick={handelUpdate}>
                            <Button
                              variant="contained"
                              style={{ backgroundColor: "#40005d" }}
                            >
                              Update Expense
                            </Button>
                          </div>
                        </div>
                      </form>
                    </Box>
                  </Modal>
                  <Button
                    style={{ border: "none" }}
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_EXPENSE",
                        payload: {
                          id: ele.id,
                        },
                      });
                    }}
                  >
                    <DeleteIcon style={{ color: "red" }} />
                  </Button>
                </ButtonGroup>
                <span className="price">${ele.expense_amount}</span>
              </div>
            </div>
          </div>
        );
      }) : "No Data Found"}
    </div>
  );
};

export default ItemList;
