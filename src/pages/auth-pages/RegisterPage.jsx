import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <img
            src="/public/yourspace-register.jpg"
            alt="yourspace"
            className="object-cover w-full h-screen md:block contrast-75"
          />
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
