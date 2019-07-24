import React from 'react';
import './index.css';
import { Button } from 'reactstrap';
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
          <li>
            Name:
            {' '}
            {data.name}
          </li>
          <li>
            Last name:
            {' '}
            {data.lastname}
          </li>
          <li>
            Email:
            {' '}
            {data.email}
          </li>
          <li>
            Mobile:
            {' '}
            {data.mobile}
          </li>
          <li>
            Pseudonyme:
            {' '}
            {data.pseudonyme}
          </li>
          <li>
            Age:
            {' '}
            {data.age}
          </li>
          <li>
            Gender:
            {' '}
            {data.gender}
          </li>
          <li>
            Iban:
            {' '}
            {data.iban}
          </li>
          <li>
            Bic:
            {' '}
            {data.bic}
          </li>
          <Button color="primary" className="button-edit">Edit</Button>
        </ul>
      </div>
    );
  }
}
export default MyProfilePage;
