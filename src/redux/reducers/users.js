import axios from "axios";


const initState = {
persons : [],
usersName:[],
    mainStatus: false
};

const GET_USERS = 'GET_USERS';
const IS_CHANGE = 'IS_CHANGE';
const IS_USERNAME = 'IS_USERNAME';
const ALL_CHANGE = 'ALL_CHANGE';

export  default (state = initState, action)=>{
    switch (action.type){
        case GET_USERS : {
            return {
                ...state,
                persons: action.arr.map((item)=>{return{...item, isChecked: false}})

            }
        }
        case IS_CHANGE : {
            return {
                ...state,

                persons: state.persons.map((item)=>{
                    if (item.id === action.id){
                        return {...item, isChecked: !item.isChecked}
                    } else {
                        return item
                    }
                })


            }
        }
        case IS_USERNAME: {
            return {
                ...state,
                mainStatus: state.persons.filter((item)=> !item.isChecked).length === 0,
                usersName: state.persons.reduce((acc, rec)=>{
                    if (rec.isChecked){
                        return [...acc, rec.username]
                    }
                    return acc
                },[])
            }

        }
        case ALL_CHANGE:{
            return {
                ...state,
                mainStatus: !state.mainStatus,
                persons: state.persons.map((item)=> {
                    return {...item, isChecked: !state.mainStatus}
                })
            }
        }

        default : return state
    }
}

export const check = (id, name) =>{
    return (dispatch) =>{
        return dispatch({type: IS_CHANGE, id, name})
    }
};

export const getUsers = () =>{
    return (dispatch) =>{
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data})=> {
                return dispatch({type:GET_USERS, arr: data})
            })
    }
};
export const getUserName = () =>{
  return (dispatch)=>{
      return dispatch({type:IS_USERNAME})
  }
};

export const allChange = () =>{
  return (dispatch)=>{
      return dispatch({type:ALL_CHANGE})
  }
};
