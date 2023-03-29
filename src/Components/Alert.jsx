import { Alert } from "react-bootstrap"

export const Alerta = ({msg}) => {
  return (
    <Alert variant="danger">
        {msg}
    </Alert>
  )
}
