// 使用 Mock
import Mock from 'mockjs';
import {CONSTANTS, REQUEST_PATH} from "../common/constants";
// import Utils from "../common/utils";


const goodsList = Mock.mock(CONSTANTS.BASE_URL + REQUEST_PATH.GOODS.goods_list, 'post', options => {
        // Utils.sleep(1000);
        console.log(options.body);
        let body = JSON.parse(options.body);
        if (body.pageNum == 1) {
            return Mock.mock({
                "isSuccess": true,
                "data": {
                    "total": 3,
                    "list|2": [
                        {
                            "id|+1": 1,
                            "name|+1": [
                                "可乐",
                                "雪碧"
                            ],
                            "price|+1": 12
                        }
                    ]
                }
            });
        } else if (body.pageNum == 2) {
            return Mock.mock({
                "isSuccess": true,
                "data": {
                    "total": 3,
                    "list": [
                        {
                            "id|+1": 3,
                            "name|+1": ["果粒橙"],
                            "price|+1": 12
                        }
                    ]
                }
            });
        } else {
            return {
                "isSuccess": true,
                "data": {
                    "total": 3,
                    "list": []
                }
            }
        }
    }
);

export {goodsList};
