import React from 'react';
import {Redirect, Route} from "react-router";
import {store} from "../../store/store";
import {connect} from "react-redux";
import {IState} from "../../reducers/rootReducer";

interface IPrivateProps {
    component: any;
    isLogin: boolean;
    path?: string;
}

const PrivateRoute = (props: IPrivateProps) => {
    const { component: Component, ...rest } = props;

    return (
        <Route {...rest} render={ props => store.getState().isLogin
        ? ( <Component {...props} />)
        : ( <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state: IState) => {
    return {
        isLogin: state.isLogin
    }
};

export default connect(mapStateToProps)(PrivateRoute);
