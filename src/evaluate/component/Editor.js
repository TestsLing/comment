/**
 *  Created By 憧憬
 */
import {Button, Form, Input} from "antd/lib/index";
import React, {Component} from "react";
const TextArea = Input.TextArea;



class Editor extends Component{

    constructor(props){
        super(props);

        this.state = {

        };
    }


    render(){

        const {onChange, onSubmit, submitting, value} = this.props;

        return (
            <div>
                <Form.Item>
                    <TextArea rows={4} onChange={onChange} value={value} style={{width:500}}/>
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        loading={submitting}
                        onClick={onSubmit}
                        type="primary"
                    >
                        提交留言
                    </Button>
                </Form.Item>
            </div>
        );
    }
}

// App = Form.create()(App);


export default Editor;