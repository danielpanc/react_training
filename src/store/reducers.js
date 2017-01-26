import { combineReducers } from 'redux';
import locationReducer from './location';
import contentReducer from '../modules/content/stores/contentStore';
import addProductReducer from '../modules/addProduct/stores/addProductStore';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    // ale noastre
    content: contentReducer,
    addProduct: addProductReducer,
    // ..
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
