import {combineReducers, createStore, applyMiddleware} from 'redux';
import {goods_reducer} from './goods/index';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    goods_reducer
});

const configureStore = (rootReducer, preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk) //异步请求更新状态
    );
    return store;
};

export {rootReducer, configureStore};