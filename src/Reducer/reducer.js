export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_EXPENSE":
      return {
        ...state,
        exparr: state.exparr.filter((ele) => ele.id !== action.payload.id),
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        exparr: state.exparr.filter((curElem) => {
          let date = new Date(curElem.expense_date).getFullYear();
          return state.exparr.includes(date!==action.payload);
        }),

    };

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
