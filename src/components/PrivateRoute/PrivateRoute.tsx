import React from "react";
import { Redirect, Route } from "react-router";
import { store } from "../../store/store";
import { connect } from "react-redux";
import { IState } from "../../reducers/rootReducer";

interface IPrivateProps {
  component: any;
  success: boolean;
  path?: string;
}

const PrivateRoute = (props: IPrivateProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        store.getState().success ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state: IState) => {
  return {
      success: state.success
  };
};

export default connect(mapStateToProps)(PrivateRoute);
