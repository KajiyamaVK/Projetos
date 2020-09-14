import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => (
            localStorage.isAuthenticated === '1'
                ? (<Component {...props}/>)
                : (<Redirect
                    to={{
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                    }}/>)
        )}/>

)

export default PrivateRoute;