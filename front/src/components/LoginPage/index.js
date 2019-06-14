import React from 'react';
import { MyDreams } from 'react-router-dom';
import LogInForm from '../LogInForm/index';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
  }

 handleSubmit = () => {
   const config = {
     method: 'POST',
     headers: {
       'Content-type': 'application/json',
     },
     body: JSON.stringify(this.state),
   };
   const url = '/login';
   const { history } = this.props;
   fetch(url, config)
     .then((res) => {
       if (res.status === 200) {
         history.push('/mydreams');
       } else {
         this.setState({ err: true });
       }
     });
 }

 render() {
   const { err } = this.state;
   return (
     <div>
       <h1>Log In</h1>
       <LogInForm onSubmit={this.handleSubmit} erreur={err} />
     </div>
   );
 }
}

export default MyDreams(LoginPage);
