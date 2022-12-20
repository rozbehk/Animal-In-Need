import RegisterForm from "../../../components/RegisterForm/RegisterForm";


export default function RegisterPage(props) {
  return (
    <>
      <RegisterForm setUserInState={props.setUserInState} />
    </>
  );
}
