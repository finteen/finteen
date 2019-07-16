import React from 'react';
import './index.css';
import BurgerMenu from '../BurgerMenu/index';

const url = '/auth/profile/1';


class MyProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <BurgerMenu />
        <ul>
          <li>{data.name}</li>
          <li>{data.lastname}</li>
          <li>{data.email}</li>
          <li>{data.mobile}</li>
          <li>{data.pseudonyme}</li>
          <li>{data.age}</li>
          <li>{data.gender}</li>
          <li>{data.iban}</li>
          <li>{data.bic}</li>
        </ul>
      </div>
    );
  }
}
export default MyProfilePage;
