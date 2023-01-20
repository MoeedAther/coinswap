import { createSlice } from '@reduxjs/toolkit'

export const offerSlice = createSlice({
  name: "offers",
  initialState: {

    init_get_currency:"1",

    selcur:null,
    getcur:null,
    amountcur:null,
  },
  reducers: {

    set_init_get_currency:(state, action)=>{
      state.init_get_currency=action.payload
    },
    
    set_selcur:(state, action)=>{
      state.selcur=action.payload
    },

   
    set_getcur:(state, action)=>{
      state.getcur=action.payload
    },
    set_amountcur:(state, action)=>{
      state.amountcur=action.payload
    }  

  }
})

// Action creators are generated for each case reducer function
export const {set_init_get_currency, set_selcur, set_getcur, set_amountcur} = offerSlice.actions

export default offerSlice.reducer