import LoginForm from "../../../components/LoginForm/LoginFrom";

export default function LoginPage(props) {
  return (
    <>
      <LoginForm setUserInState={props.setUserInState} />
    </>
  );
}
