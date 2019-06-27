import React from 'react';
import { withRouter } from 'react-router-dom';
import SignupForm from '../SignupForm/index';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
  }

    handleSubmit = (values) => {
      const config = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      };
      const url = '/auth/signup';
      const { history } = this.props;
      fetch(url, config)
        .then((res) => {
          if (res.status === 200) {
            history.push('/signupform');
          } else {
            this.setState({ err: true });
          }
        });
    }

    render() {
      const { err } = this.state;
      return (
        <div>
          <SignupForm onSubmit={this.handleSubmit} erreur={err} />
        </div>
      );
    }
}
export default withRouter(SignupPage);
