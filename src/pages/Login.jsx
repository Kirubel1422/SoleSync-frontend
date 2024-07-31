import { IoIosArrowRoundBack } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { Formik, Form } from "formik";
import { login } from "../constants/validationSchema";
import { AuthField, AuthSubmit } from "../components/Inputs/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import GoogleAuth from "../components/Buttons/GoogleAuth";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={twMerge("h-screen bg-BG px-[62px]")}>
      <div
        className={twMerge(
          "lg:max-w-[553px] mx-auto bg-[#FDFDFD] px-[110px] py-[57px] rounded-[35px]"
        )}
      >
        <IoIosArrowRoundBack
          className="cursor-pointer"
          onClick={() => navigate(-1)}
          size={38}
        />

        <div>
          <h1 className={twMerge("text-[32px] font-bold text-BRAND")}>Login</h1>
          <p className={twMerge("text-[16px] text-PRIMARY mt-[19px]")}>
            Login now to purchase brand new offerings from Solesync!
          </p>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={login}
            onSubmit={(values) => console.log(values)}
          >
            {(formik) => (
              <Form className={twMerge("flex flex-col gap-7 mt-[41px]")}>
                <AuthField
                  name="email"
                  type="email"
                  placeholder="Ex: abc@example.com"
                  value={formik.values.email}
                  Icon={MdAlternateEmail}
                />

                <div>
                  <AuthField
                    name="password"
                    type="password"
                    placeholder="******"
                    value={formik.values.password}
                    Icon={MdOutlineLock}
                  />

                  <Link
                    to="/forgot-password"
                    className={twMerge("text-BRAND text-[12px] underline mt-1")}
                  >
                    Forgot Password?
                  </Link>
                </div>

                <AuthSubmit style={"mt-[19px]"} label="Login" />
              </Form>
            )}
          </Formik>

          <GoogleAuth style={"mt-[58px] mx-auto"} />

          <p
            className={twMerge(
              "text-[16px] text-PRIMARY mt-[40px] text-center"
            )}
          >
            Don&apos;t have an account?
            <Link
              to="/signup"
              className={twMerge("text-BRAND font-bold underline pl-1")}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
