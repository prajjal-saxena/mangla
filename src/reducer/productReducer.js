const ProductReducer = (state, action) => {
    switch(action.type){
        // CASES FOR DOMESTIC PRODUCTS
        case "SET_LOADING" : {
            return {
                ...state,
                isLoading: true
            }
        }

        case "SET_DOMESTIC" : {
            return {
                ...state,
                isLoading: false,
                domestic: action.payload
            }
        }

        // CASES FOR VYOM PRODUCTS
        case "SET_VYOM_LOADING" : {
            return {
                ...state,
                isLoading: true
            }
        } 
        case "SET_VYOM" : {
            return{
                ...state,
                isLoading: false,
                vyom : action.payload
            }
        }

        // CASES FOR MIX PRODUCTS ON HOME
        case "SET_MIXPRODUCT_LOADING" : {
            return{
                ...state,
                isLoading : true,
            }
        }
        case "SET_MIXPRODUCT" : {
            return {
                ...state,
                isLoading : false,
                mixHome : action.payload
            }
        }

        //
        case "SET_HOME_CATEGORY_LOADING" : {
            return {
                ...state,
                isLoading : true,
            }
        }
        case "SET_HOME_CATEGORY" : {
            return {
                ...state,
                isLoading : false,
                categoryHome : action.payload
            }
        }

        // CASES TO GET THE VYOM CATEGORY
        case "SET_VYOM_CATEGORY_LOADING" : {
            return {
                ...state,
                isLoading : true,
                vyomCategory : action.payload
           }
        }

        case "SET_CATEGORY_API" : {
            return{...state,
              isLoading : false,
              vyomCategory : action.payload
            }
        }
    }
}

export default ProductReducer;