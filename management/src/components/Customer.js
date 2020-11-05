
import React, { Component } from 'react';

class Customer extends React.Component{
    render() {
       return (
    <div>
      <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}></CustomerProfile>
      <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}></CustomerInfo>
    </div>
       )
    }
}
// component를 적절히 분리해서 구조화하여 관리하면 생산성도 높아진다.
// 이런식으로 총 두개의 component로 나눠서 들어갈 수 있도록 만들 수 있다.
// 이렇게 계층적으로 component를 구성할 수 있다는 점은 리액트가 강력한 view 기능을 제공하는 것이라고 볼 수 있다.

class CustomerProfile extends React.Component {
    render(){
        return (
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;

// props는 기본적으로 React Component가 포함하고 있는 내용이다 
// 따라서 전달받은 name이라는 props를 출력할 수 있도록 this.props.name 이런식으로 표현한다.
// props를 이용해서 매우 계층적으로 구조화되어서 웹문서가 출력되는 것을 볼 수 있다. 
