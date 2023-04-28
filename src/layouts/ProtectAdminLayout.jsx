import { Container, Row, Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


export const ProtectAdminLayout = () => {
  const { admin, loading } = useAdmin();
  if (loading) {
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
  return <>{admin.user?._id ? <Outlet /> : <Navigate to="/admin/login" />}</>;
};
