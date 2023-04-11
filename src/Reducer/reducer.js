export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_EXPENSE":
      return {
        ...state,
        exparr: state.exparr.filter((ele) => ele.id !== action.payload.id),
      };

    case "SEARCH_QUERY":
    
        const filterArray= state.exparr.filter((curElem) => {
          let year = new Date(curElem.expense_date).getFullYear();
          return  year===action.payload
        })

        return {...state,
          filterArr:[...filterArray]
        }


    

    // case "SEARCH_QUERY":
    //   const year = action.payload;
    //   const filteredArr = state.exparr.filter((curElem) => {
    //     return new Date(curElem.expense_date).getFullYear() === year;
    //   });
    //   return {
    //     ...state,
    //     filteredArr,
    //     filterYear: year,
    //   };
    default:
      return state;
  }
};
