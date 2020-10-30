import React from 'react';
import {Table, Pagination} from '@alifd/next';
import './index.css';

class List extends React.Component {
    render() {
        return (
            <div>
                <Table dataSource={this.props.goodsList}>
                    <Table.Column title="id" dataIndex="id" width={140}/>
                    <Table.Column title="name" dataIndex="name" width={500}/>
                    <Table.Column title="price" dataIndex="price" width={500}/>
                </Table>
                <Pagination total={this.props.page.total} pageSize={this.props.page.pageSize}
                            current={this.props.page.current} totalRender={total => `总数: ${total}`}
                            onChange={this.props.onPageChange} className="page-demo"/>
            </div>);
    }
}

export default List;