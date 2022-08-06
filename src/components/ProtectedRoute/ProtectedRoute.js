import {Outlet, Navigate} from "react-router";

function ProtectedRoute(props) {
    return props.isLoggedIn ?  <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute
