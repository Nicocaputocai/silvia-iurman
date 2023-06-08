import { Container, Row, Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import useAuth from '../hooks/useAuth'


export const AuthLayout = () => {
    const {authLoading} = useAuth();  
    if (authLoading) {
      return (
        <>
        <Container>
          <Row className="justify-content-md-center">
            <Spinner style={{ width: "4rem", height: "4rem" }} animation="grow" />;
          </Row>
        </Container>
        </>
      )
    }
  return (
        <>
            <Outlet />
        </>
  )
}

