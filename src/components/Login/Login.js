import "./Login.css";
import Form from "../Form/Form";

function Login(props) {
  return (
    <Form
      title={"Рады видеть!"}
      buttonText={"Войти"}
      onSubmit={props.onSubmit}
      requestStatus={props.requestStatus}
      requestSending={props.requestSending}
    />
  );
}

export default Login;
