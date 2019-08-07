import React, { ChangeEvent, useState } from "react";

import { Form, Container } from "semantic-ui-react";
import "./Login.css";
import { axiosGetContentAction, User } from "../../actions/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Redirect } from "react-router";
import { IState } from "../../reducers/rootReducer";

interface IPropsFromState {
  token: boolean,
  error: string
}

interface IPropsFromDispatch {
  onRequestUser: (d: User) => ReturnType<typeof axiosGetContentAction.request>
}

type Props = IPropsFromState & IPropsFromDispatch;

interface IUser {
  login: string;
  email: string;
  password: string;
}

const Login = (props: Props) => {

  const initialState: IUser = {
    login: "",
    email: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(initialState);

  // console.log(userCredentials);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, ...{ [name]: value } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { login, email, password } = userCredentials;

    console.log(`After submit: login: ${login}, email: ${email} password: ${password}`);

    //dispatch must be here
    if (login && email && password) {
      props.onRequestUser(userCredentials)
    }

    setUserCredentials({ login: "", email: "", password: "" });
  };

  return (

    <div>
      {
        !props.token ?
        <Container style={{ width: "200px" }} textAlign="center">

          <Form onSubmit={ handleSubmit } className="form" style={{ paddingTop: "200px" }}>
            <div>{props.error}</div>

            <Form.Field required>
              <Form.Input
                type="text"
                placeholder="Login"
                name={ "login" }
                value={ userCredentials.login }
                onChange={ handleChange }
              />
            </Form.Field>

            <Form.Field required>
              <Form.Input
                  type="email"
                  placeholder="Email"
                  name={ "email" }
                  value={ userCredentials.email }
                  onChange={ handleChange }
              />
            </Form.Field>


            <Form.Field required>
              <Form.Input
                type="password"
                placeholder="Password"
                name={ "password" }
                value={ userCredentials.password }
                onChange={ handleChange }
              />
            </Form.Field>

            <Form.Button
                content="LogIn"
                disabled = {
                  !userCredentials.login
                  || !userCredentials.email
                  || !userCredentials.password
                }
            />
          </Form>
        </Container>
        : <Redirect to='/dashboard' />
      }
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    token: state.token ? true : false,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onRequestUser: (data: User) => {
            return dispatch(axiosGetContentAction.request(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

