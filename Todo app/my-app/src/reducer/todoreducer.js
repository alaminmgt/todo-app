const initialState = {
    list : [],
}
const todoreducer = (state=initialState,action) =>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "ADD_TODO" : 
        const {id,data} = action.payload;
        if (data.length > 2) {
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        }
        // eslint-disable-next-line no-fallthrough
        case "DELETE_TODO" : 
        const newList = state.list.filter((elem)=>elem.id !== action.id)
        return {
            ...state,
            list: newList
        }
        case "REMOVE_ALL" : 
        return {
            ...state,
            list: []
        }
        default : return state
    }
}
export default todoreducer