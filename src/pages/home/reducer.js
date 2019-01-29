import { UPDATE_CART_NUM,ADD_CART_NUM } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  num:0
})

export default (state=defaultState, action) => {
  // if (action.type === UPDATE_CART_NUM) {
  //   // return {
  //   //   ...state,
  //   //   categories: {...state.categories, ...action.categories.category},
  //   //   material: {...state.material, ...action.categories.material}
  //   // }
  //   let newCate = state.setIn(['categories'], fromJS(action.categories.category))
  //   let newMat = newCate.setIn(['material'], fromJS(action.categories.material))
  //   // console.log(newMat)
  //   return newMat
  // }

  if (action.type === UPDATE_CART_NUM) {
    
    return state.setIn(['num'], action.num)
  }

  if(action.type ===ADD_CART_NUM){
    return state.updateIn(["num"],value=>value+action.num)
  }
  return state
}