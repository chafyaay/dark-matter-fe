const initState = [{
    todo: ""
}]

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET TODO LIST':
            return {
                ...state,
                todolist: action.todoList
            };
        case 'ADD TODO':

            const todo = action.payload;
            return {
                ...state, todo
            };
        case 'REMOVE TODO':
            return {
                ...state
            };
        case 'UPDATE TODO':
            const _todo = action.payload;
            return {
                ...state, _todo
            };
        default:
            return {
                ...state
            }
    }
}

export default reducer;