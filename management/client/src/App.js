import React, { Component } from 'react';
import './App.css';
// html에서 body에 해당되는 내용은 App.js에 채우면 된다.
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth : 1080
  }
})

const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': 'Noah',
  'birthday':'961022',
  'gender':'남자',
  'job':"학생"
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': 'Jane',
  'birthday':'920102',
  'gender':'여자',
  'job':"개발자"
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': 'Bobby',
  'birthday':'930718',
  'gender':'남자',
  'job':"디자이너"
}
]
class App extends Component {
 render() {
   const { classes } = this.props;
   return (
     <Paper className={classes.root}>
       <Table className={classes.table}>
         <TableHead>
           <TableRow>
             <TableCell>번호</TableCell>
             <TableCell>이미지</TableCell>
             <TableCell>이름</TableCell>
             <TableCell>생년월일</TableCell>
             <TableCell>성별</TableCell>
             <TableCell>직업</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
          {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}></Customer>);})}
         </TableBody>
       </Table>
      
     </Paper>
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

export default withStyles(styles)(App);

// Component는 웹문서에서 어떠한 것을 보여주기위한 기본적인 단위이다
