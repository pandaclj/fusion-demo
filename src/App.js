import React from 'react';
import {Menu, Search, Nav, Shell, Radio} from '@alifd/next';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Goods from './container/goods';
import Member from './container/member';
import Home from './container/home';
import "./App.css";
import {rootReducer, configureStore} from './redux/index';
import {Provider} from 'react-redux';
import {goodsList} from "./mock/GoodsMock";

const {SubNav, Item, Group, Divider} = Nav;


const store = configureStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Shell className={"iframe-hack"} device="desktop" style={{border: '1px solid #eee'}}>
                            <Shell.Branding>
                                <div className="rectangular"></div>
                                <span style={{marginLeft: 10}}>App Name</span>
                            </Shell.Branding>
                            <Shell.Navigation direction="hoz">
                                <Search key="2" shape="simple" type="dark" palceholder="Search" style={{width: '200px'}}/>
                            </Shell.Navigation>
                            <Shell.Action>
                                <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
                                     className="avatar" alt="用户头像"/>
                                <span style={{marginLeft: 10}}>MyName</span>
                            </Shell.Action>

                            <Shell.Navigation>
                                <Nav embeddable aria-label="global navigation">
                                    <Nav.Item icon="account">
                                        <Link to="/goods">商品管理</Link>
                                    </Nav.Item>
                                    <Nav.Item icon="calendar">
                                        <Link to="/member">会员管理</Link>
                                    </Nav.Item>
                                    <Nav.Item icon="atm">店铺管理</Nav.Item>
                                    <Nav.Item icon="account">订单管理</Nav.Item>
                                </Nav>
                            </Shell.Navigation>

                            <Shell.Content>
                                <div>
                                    <Switch>
                                        <Route path="/goods">
                                            <Goods/>
                                        </Route>
                                        <Route path="/member">
                                            <Member/>
                                        </Route>
                                        <Route path="/">
                                            <Home/>
                                        </Route>
                                    </Switch>
                                </div>
                            </Shell.Content>
                        </Shell>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;