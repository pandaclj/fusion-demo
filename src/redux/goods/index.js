import request from '../../common/request';
import {CONSTANTS, REQUEST_PATH} from '../../common/constants';

//action工厂
const actionFactory = {
    buildGoodsListAction(state) {
        return {type: REQUEST_PATH.GOODS.goods_list, state};
    }
}

//API
const api = {
    listGoods(pageNum = 1) { //默认第一页
        return request({
            url: CONSTANTS.BASE_URL + REQUEST_PATH.GOODS.goods_list,
            // url: 'https://www.fastmock.site/mock/e6601ff19df297e176a8f39bd1867611/study' + REQUEST_PATH.GOODS.goods_list,
            method: 'post',
            data: {
                pageNum
            }
        });
    }
};

//默认状态
const defaultState = {
    page: { //分页对象
        current: 1,
        pageSize: 2,
        total: 0
    },
    goodsList: [] //商品列表
};

//执行器
const goods_executor = {
    //数据加载
    loadData(pageNum) {
        //http请求数据
        const promise = api.listGoods(pageNum);
        return dispatch => {
            promise.then((res) => {
                const {total = 0, list = []} = res.data;

                const state = {
                    page: {
                        current: pageNum,
                        pageSize: 2,
                        total
                    },
                    goodsList: list
                };
                dispatch(actionFactory.buildGoodsListAction(state));
            }).catch((err) => {
                console.error(err);
            });
        }
    }
}


const goods_reducer = function (state = defaultState, action) {
    switch (action.type) {
        case REQUEST_PATH.GOODS.goods_list: {
            return {
                ...state,
                ...action.state
            }; //返回新的状态对象
        }
        default:
            return state;
    }
}

export {goods_executor, goods_reducer};