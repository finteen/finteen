import React from 'react';
import './index.css';
import BurgerMenu from '../BurgerMenu/index';

const url = 'http://localhost:3000/auth/profile';

class MyProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json());
      .then((res) => {
        if (res.status === 200) {
          this.setState({ data: res });
        }
      })
  }


  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div>
        <BurgerMenu />
        <h1>{data.name}</h1>
      </div>
    );
  }
}
export default MyProfilePage;
