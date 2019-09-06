

const Actionhandlers = {};
export default (state = {}, action) => {
    const currenthandler = Actionhandlers[action.type]
    if (currenthandler) {
        return currenthandler(state, action);
    }
    return state;
}

