

const Actionhandlers = {

  "SET_DATA": (state, action) => ([...state, action.payload])
};
export default (state = [], action) => {
  const currenthandler = Actionhandlers[action.type]
  if (currenthandler) {
    return currenthandler(state, action);
  }
  return state;
}
























