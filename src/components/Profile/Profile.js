import "./Profile.css";
import Header from "../Header/Header";
import Form from "../Form/Form";

function Profile() {
  return (
    <>
      <Header />
      <Form
        title={"Привет, Виталий!"}
        buttonText={"Редактировать"}
        nameValue={"Виталий"}
        emailValue={"pochta@yandex.ru"}
      />
    </>
  );
}

export default Profile;
