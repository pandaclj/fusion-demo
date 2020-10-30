import React from 'react';
import {Form, Input} from '@alifd/next';

const FormItem = Form.Item;

function handleSubmit(v) {
    console.log(v);
}

class Search extends React.Component {
    render() {
        return (
            <Form inline>
                <FormItem label="Username:">
                    <FormItem>
                        <Input name="first" style={{width: 80}} placeholder="first"/>
                    </FormItem>
                    <FormItem>
                        <Input name="second" style={{width: 80}} placeholder="second"/>
                    </FormItem>
                </FormItem>
                <FormItem label="Password:" required hasFeedback={false}>
                    <Input htmlType="password" name="inlinePass" placeholder="Please enter your password!"/>
                </FormItem>

                <FormItem label=" ">
                    <Form.Submit onClick={handleSubmit}>Submit</Form.Submit>
                </FormItem>
            </Form>
        );
    }
}

export default Search;