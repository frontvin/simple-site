import React, { Component } from "react";
import { Button, Form, Container, Input } from "semantic-ui-react";
import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <Container style={{width: "200px"}} textAlign="center">
        <Form style={{paddingTop: "200px"}}>
          <Form.Field required>
            <Input placeholder="Login" />
          </Form.Field>
          <Form.Field required>
            <Input type="password" placeholder="Password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
