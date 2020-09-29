import axios from "axios";

export const addtodoAction = (todo, id, token, kpi) => {
    return (dispach) => {
        return axios.post("http://localhost:81/todoApp/api/todo", {
            id: id,
            todo: todo
        }, {
            headers: {
                'token': token,
                'apikey': kpi
            }
        }).then(res => {
            dispach({
                type: "ADD TODO",
                payload: todo
            })
        })
    }
}


export const getTodoListAction = () => {
    return (dispach) => {
        return axios.get("http://localhost:81/todoApp/api/todos").then(res => {
            dispach({
                type: "GET TODO LIST",
                todoList: res.data
            })
            return res.data
        })
    }
}

export const removeTodoListAction = (todoId, token, kpi) => {
    return (dispach) => {
        return axios.delete(`http://localhost:81/todoApp/api/todo/${todoId}`, {
            headers: {
                Authorization: token,
                kpi: kpi
            },
            data: {
                source: todoId
            }
        }).then(res => {

            console.log(res)
            dispach({
                type: "REMOVE TODO",
                todoList: res.data
            })

        })
    }
}

export const updateTodoAction = (todoId, todo, token, kpi) => {
    return (dispach) => {
        return axios.patch(`http://localhost:81/todoApp/api/todo/${todoId}`, {
            id: todoId,
            todo: todo
        }, {
            headers: {
                'token': token,
                'apikey': kpi
            }
        }).then(res => {
            console.log("+++++++", res.data)
            dispach({
                type: "UPDATE TODO",
                payload: todo
            })
        })
    }
}