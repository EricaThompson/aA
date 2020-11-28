const initialState = {
  city: "Please Select", 
  jobs: []
};

const SWITCH_LOCATION = 'SWITCH_LOCATION';


const reducer = (state = initialState, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case SWITCH_LOCATION:
      nextState["city"] = action.city;
      nextState["jobs"] = action.jobs;
      // return {"city": action.city, "jobs": action.jobs};
    default:
      return state;
  }
};

export default reducer;
