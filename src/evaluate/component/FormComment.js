import React, {Component} from "react";
import {Comment, Form, Icon, Input} from "antd/lib/index";
import Editor from "./Editor";

/**
 *  Created By 憧憬
 */

class FormComment extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { onSubmit } = this.props;
                onSubmit(values);
               this.props.form.resetFields();
            }
        });
    }

    render(){

        const {
            getFieldDecorator
        } = this.props.form;

        const {submitting} = this.props;

        console.log(submitting);

        return (
            <div>
                <Comment
                    content={(
                        <div>
                            <div>
                                <Form layout="vertical" onSubmit={this.handleSubmit} className="login-form">

                                    <div style={{display:'flex',justifyContent:'center'}}>
                                        <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                             width="50px"
                                             height="50px"
                                             style={{marginRight:30}}
                                             alt=""/>
                                        <Form.Item
                                            label='姓名'
                                        >
                                            {getFieldDecorator('name', {
                                                rules: [{ required: true, message: '请输入姓名' }],
                                            })(
                                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="请输入用户名" />
                                            )}
                                        </Form.Item>
                                        <Form.Item
                                            style={{marginLeft:50}}
                                            label='邮箱'
                                        >
                                            {getFieldDecorator('email', {
                                                rules: [{ required: true, message: '请输入邮箱' }],
                                            })(
                                                <Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入邮箱" />
                                            )}
                                        </Form.Item>
                                    </div>

                                    <Form.Item
                                        label='留言内容'
                                        style={{display:'flex',justifyContent:'center'}}
                                    >
                                        {getFieldDecorator('content', {
                                            rules: [{ required: true, message: '请输入留言内容' }],
                                        })(
                                            <Editor
                                                submitting={submitting}
                                            />
                                        )}
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>

                    )}
                />
            </div>
        );
    }
}

FormComment = Form.create()(FormComment);

export default FormComment;