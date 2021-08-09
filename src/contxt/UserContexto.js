import React, {createContext, useReducer} from 'react'
import User from '../data/User'

const initialState = { User }
const UsersContext = createContext({})

const actions = {
    createUser(state,action){
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            User: [...state.User, user],
        }
    },
    updateUser(state,action) {
        const updated = action.payload 
        return {
            ...state,
            User: state.User.map(u => u.id === updated.id ? updated : u)
        }
    },
    deleteUser(state, action){
        const user = action.payload
            return{
                ...state,
                User: state.User.filter(u => u.id !== user.id)
            }
    }
}

export const UsersProvider = props =>{
    
    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <UsersContext.Provider value={{ state, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
}


export default UsersContext;