let id = 2;
const initialState = [
  {
    id: 1,
    description: "hello",
    iSDone: false
  },
  {
    id: 2,
    description: "hello everybody",
    iSDone: false
  }
]


export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TASK_ACTION = "UPDATE_TASK_ACTION"





export function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, {id: ++id, iSDone:false, ...action.payload }]
    case UPDATE_TASK_ACTION:
          return state.map(todo => {
              if (todo.id === action.payload.id) {
                  return {...todo, ...action.payload}
              }
              else {
                  return todo
              }
          })

    default:
      return state
  } 
}

