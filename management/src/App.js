import React, { Component } from 'react';
import './App.css';
// html에서 body에 해당되는 내용은 App.js에 채우면 된다.
import Customer from './components/Customer'

const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday':'961022',
  'gender':'남자',
  'job':"학생"
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': '홍길순',
  'birthday':'961222',
  'gender':'여자',
  'job':"개발자"
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '홍길덕',
  'birthday':'930718',
  'gender':'남자',
  'job':"디자이너"
}
]
class App extends Component {
 render() {
   return (
     <div>
       {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}></Customer>);})}
     </div>
     // 위의 자바스크립트에서 제공하는 map함수로 묶어서 간단하게 소스를 표현한 것과 아래로 길게 쓴것이 같다
     
    //  <div>
    //   <Customer
    //     id={customers[0].id}
    //     image={customers[0].image}
    //     name={customers[0].name}
    //     birthday={customers[0].birthday}
    //     gender={customers[0].gender}
    //     job={customers[0].job}
    //   ></Customer>
    //   <Customer
    //     id={customers[1].id}
    //     image={customers[1].image}
    //     name={customers[1].name}
    //     birthday={customers[1].birthday}
    //     gender={customers[1].gender}
    //     job={customers[1].job}
    //   ></Customer>
    //   <Customer
    //     id={customers[2].id}
    //     image={customers[2].image}
    //     name={customers[2].name}
    //     birthday={customers[2].birthday}
    //     gender={customers[2].gender}
    //     job={customers[2].job}
    //   ></Customer>
    // </div>
   );
 }
}

export default App;

// Component는 웹문서에서 어떠한 것을 보여주기위한 기본적인 단위이다
