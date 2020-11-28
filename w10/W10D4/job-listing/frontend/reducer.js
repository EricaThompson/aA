const initialState = {
  city: "Please Select", 
  jobs: []
};

const SWITCH_LOCATION = 'SWITCH_LOCATION';

const reducer = (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case SWITCH_LOCATION:
      return {"city": action.city, "jobs": action.jobs};
    default:
      return state;
  }
};

export default reducer;
