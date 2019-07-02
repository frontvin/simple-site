import React, { ChangeEvent, useState } from "react";

import { Form, Container } from "semantic-ui-react";
import "./Login.css";
import { axiosGetContentAction, User } from "../../actions/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IState } from '../../reducers/rootReducer'
import {Action} from "typesafe-actions";



interface IPropsFromDispatch {
  onRequestUser: (d: User) => ReturnType<typeof axiosGetContentAction.request>
}

type Props = IPropsFromDispatch;

interface IUser {
  login: string;
  password: string;
}

const Login = (props: Props) => {

  const initialState: IUser = {
    login: "",
    password: ""
  };

  const [userCredentials, setUserCredentials] = useState(initialState);

  console.log(userCredentials);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, ...{ [name]: value } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { login, password } = userCredentials;

    console.log(`After submit: login: ${login}, password: ${password}`);

    //dispatch must be here
    if (login && password) {
      props.onRequestUser(userCredentials)
    }

    setUserCredentials({ login: "", password: "" });
  };

  return (
    <Container style={{ width: "200px" }} textAlign="center">
      <Form onSubmit={handleSubmit} style={{ paddingTop: "200px" }}>
        <Form.Field required>
          <Form.Input
            type="text"
            placeholder="Login"
            name={"login"}
            value={userCredentials.login}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field required>
          <Form.Input
            type="password"
            placeholder="Password"
            name={"password"}
            value={userCredentials.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Button content="Submit" />
      </Form>
    </Container>
  );
};

// const mapStateToProps = (state: IState) : IStateProps => {
//
// }

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onRequestUser: (data: User) => {
            return dispatch(axiosGetContentAction.request(data));
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);

