import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
		<Route
			{...rest}
			render={(props) => { console.log(auth)
				return(auth === true ? (
					<Component {...props} />
				) : (
					<Component to={{ pathname: '/main', state: { from: props.location } }} />
				))}
			}
		/>
	)
}
export default PrivateRoute