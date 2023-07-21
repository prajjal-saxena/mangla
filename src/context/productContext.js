import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import axios from "axios";

const AppContext = createContext();

const API = 'https://nimittech.com/manglaApi/domestic_products.php';
const initialState = {
    isLoading : false,
    domestic : [],
    vyom : [],
    mixHome : [],
    categoryHome : [] ,
    vyomCategory : []
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // FUNCTION TO GET THE DOMESTIC PRODUCTS FOR HOME PAGE
    const getProducts = async(url) =>{
        dispatch({type : "SET_LOADING"})
        try{
            const res = await axios.get(url);
            const domesticProduct = await res.data;
            dispatch({type : "SET_DOMESTIC", payload : domesticProduct})
        }
        catch{
            console.log("This is error");
        }
    }

    // Function to get the Vyom Product for home page
    const getVyom = async(url) =>{
       dispatch({type : "SET_VYOM_LOADING"});
       try{
        const res = await axios.get(url)
        const vyomProduct = await res.data;
         dispatch({type : "SET_VYOM", payload: vyomProduct})
       }
       catch{
          console.log("This is error");
       }
    }

    const getMixProductHome = (url) =>{
       dispatch({type : "SET_MIXPRODUCT_LOADING"});
       try{
         dispatch({type : "SET_MIXPRODUCT", payload: url})
       }catch{
         console.log("This is error");
       }
    }

    // Function to get the home domestic category
    const getHomeCategory = (url) =>{
       dispatch({type : "SET_HOME_CATEGORY_LOADING"});
       try{
         dispatch({type : "SET_HOME_CATEGORY", payload : url})
       }catch{
         console.log("This is error")
       }
    }

    // Function to get the VYOM Categories
    const getCatAll = (url) => {
      dispatch({type : "SET_CATEGORY_LOADING"})
      try{
        dispatch({type: "SET_CATEGORY_API", payload : url})
      }
      catch{
        console.log("This is error")
      }
    }
   
    useEffect(()=>{
      getProducts(API);
    }, []);

    return (
       <AppContext.Provider value= {{...state, getVyom, getMixProductHome, getHomeCategory, getCatAll}}>
           {children}
       </AppContext.Provider>
    )
}

//custom hook
const useProductContext = () =>{
    return useContext(AppContext)
}

export {AppProvider,AppContext , useProductContext};