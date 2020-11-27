export function allTodos(state) {
    let newArray = []
    const keys = Object.keys(state.todos);

    keys.map(idx => {
        newArray.push(state.todos[idx]);
    })

    return newArray


}