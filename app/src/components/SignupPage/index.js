import React from 'react';
import { withRouter } from 'react-router-dom';
import SignupForm from '../SignupForm';
import Logo from '../../Assets/images/logofinteen.png';


class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
    };
  }

    handleLogin = (values) => {
      const config = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      };
      const url = '/auth/signupform';
      const { history } = this.props;
      fetch(url, config)
        .then((res) => {
          if (res.status === 200) {
            history.push('/dashboard');
          } else {
            this.setState({ err: true });
          }
        });
    }

    render() {
      const { err } = this.state;
      return (
        <div>
          <img className="logo_finteen" src={Logo} alt="logo" />
          <SignupForm onSubmit={this.handleLogin} erreur={err} />
        </div>
      );
    }
}
export default withRouter(SignupPage);
