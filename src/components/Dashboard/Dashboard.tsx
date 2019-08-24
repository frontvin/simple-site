import React from 'react'
import { Container } from "semantic-ui-react";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import {logoutUser} from "../../actions/actions";
import {IState} from "../../reducers/rootReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export const Dashboard = (props: any) => {
    const logOutHandler = (e: React.MouseEvent<HTMLButtonElement>) : void => {
        e.preventDefault();
        logoutUser();
    };

    return (
        <Container textAlign={"center"} style={{paddingTop: "200px"}}>
            <h1>Gongrats!</h1>
            <p>You have successfully logged in.</p>
            <Button color='blue' onClick={logOutHandler}>Log out</Button>
        </Container>
    )
};

const mapStateToProps = (state: IState) => {
    return state
};

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onLogOut: () => {
            return dispatch(logoutUser());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


