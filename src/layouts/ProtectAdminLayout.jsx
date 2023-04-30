import { Container, Row, Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ROLES } from "../types/TYPES";


export const ProtectAdminLayout = ({children}) => {
  const { auth } = useAuth();
/*   if (loading) {
    return (
      <>
      <Container>
        <Row className="justify-content-md-center">
        <Spinner style={{ width: "4rem", height: "4rem" }} animation="grow" />;
        </Row>
      </Container>
      </>
    )
  } */
  return (auth.isLogged && auth.user?.role) === ROLES.ADMIN ? children : <Navigate to="/login" />;
};
