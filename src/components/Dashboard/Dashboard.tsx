import React from 'react'
import { Container } from "semantic-ui-react";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";


export const Dashboard = () => {

    return (
        <Container textAlign={"center"} style={{paddingTop: "200px"}}>
            <h1>Gongrats!</h1>
            <p>You have successfully logged in.</p>
            <Button color='blue'>Log out</Button>
        </Container>
    )
};

