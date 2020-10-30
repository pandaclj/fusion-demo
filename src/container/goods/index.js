/**
 * 例如这种一个页面拆分成多个组件，形成父子组件
 * 与外部的通信，比如http，可以统一交给父组件，子组件需要数据的可以与父组件通信，这样链路会比较清晰
 */
import React from 'react';
import Search from './search';
import List from './list/index';
import {connect} from 'react-redux';
import {goods_executor} from "../../redux/goods";

class Goods extends React.Component {
    componentDidMount() {
        console.log('componentDidMount');
        this.listGoods(1);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    //操作相关
    listGoods(pageNum) {
        this.props.dispatch(goods_executor.loadData(pageNum));
    }

    //分页事件
    onPageChange = (currentPage) => {
        console.log('分页选择：' + currentPage);
        this.listGoods(currentPage);
    }

    render() {
        return (
            <div>
                <Search/>
                <List {...this.props} onPageChange={this.onPageChange}/>
            </div>
        );
    }
}

/**
 * 绑定组件
 * 包装Goods
 * connect不传第二个参数，默认props会绑定dispatch
 * @connect 的使用方法需要再研究
 */
export default connect((state) => ({
    ...state.goods_reducer  //会将goods_reducer返回的state内容绑定到当前组件的props中
}))(Goods);