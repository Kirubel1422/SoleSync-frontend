import { IoIosArrowRoundBack } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { Formik, Form } from "formik";
import { signup } from "../constants/validationSchema";
import { AuthField, AuthSubmit } from "../components/Inputs/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className={twMerge("h-screen bg-BG")}>
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
          <h1 className={twMerge("text-[32px] font-bold text-BRAND")}>
            Register
          </h1>
          <p className={twMerge("text-[16px] text-PRIMARY mt-[19px]")}>
            Create an{" "}
            <span className={twMerge("text-BRAND font-bold")}>account</span> to
            shop the best of Solesync!
          </p>

          <Formik
            initialValues={{
              email: "",
              firstName: "",
              password: "",
            }}
            validationSchema={signup}
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

                <AuthField
                  name="firstName"
                  type="text"
                  placeholder="Ex. Saul "
                  value={formik.values.firstName}
                  Icon={FaRegUser}
                />

                <AuthField
                  name="password"
                  type="password"
                  placeholder="******"
                  value={formik.values.password}
                  Icon={MdOutlineLock}
                />

                <AuthSubmit style={"mt-[19px]"} label="Register" />
              </Form>
            )}
          </Formik>

          <p
            className={twMerge(
              "text-[16px] text-PRIMARY mt-[41px] text-center"
            )}
          >
            Already have an account?
            <Link
              to="/login"
              className={twMerge("text-BRAND font-bold underline pl-1")}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
