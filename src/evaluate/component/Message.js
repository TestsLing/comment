import React, {Component} from "react";
import {Comment} from "antd/lib/index";
import FormComment from './FormComment';

/**
 *  Created By 憧憬
 */

export default class Message extends Component{

    constructor(props){
        super(props);

        this.state = {
            showEditor: false,
            submitting: false,
            value: ''
        };
    }

    showEdit = () => {
        let status = this.state.showEditor;
        this.setState({
            showEditor: !status
        });
    }


    onSubmit = (value) => {

        const { onSubmit,id } = this.props;

        onSubmit(value,id);

        this.setState({
            value: '',
        });
    }

    render(){
        const { children,content,name,email, submiting} = this.props;

        const { showEditor} = this.state;

        return (
            <Comment
                actions={[<span onClick={this.showEdit}>回复</span>]}
                author={
                    <div style={{display:'flex',flexDirection:'column',flexStatr:'left',justifyContent:'left',alignItems: 'center'}}>
                        <span>姓名：{name}</span>
                        <span>邮箱：{email}</span>
                    </div>
                }
                avatar={(
                    <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                         width="100px"
                         height="100px"
                         alt=""/>
                )}
                content={
                    <div>
                        <p>{content}</p>
                        {/*{showEditor && <Editor onChange={this.handleChange} onSubmit={this.onSubmit} submitting={submitting} value={value} />}*/}
                        {showEditor && <FormComment onSubmit={this.onSubmit} submitting={submiting} />}
                    </div>

                }
            >
                {children}
            </Comment>
        )
    }
}
