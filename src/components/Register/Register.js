import "./Register.css";
import Form from "../Form/Form";

function Register(props) {
  return (
    <Form
      title={"Добро пожаловать!"}
      buttonText={"Зарегистрироваться"}
      onSubmit={props.onSubmit}
      requestStatus={props.requestStatus}
      requestSanding={props.requestSending}
    />
  );
}

export default Register;
