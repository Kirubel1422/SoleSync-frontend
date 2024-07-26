import { AiOutlineClear, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import ModalContainer from "../../components/Container/ModalContainer";
import { twMerge } from "tailwind-merge";
import { Form, Formik } from "formik";
import { ProfField, ProfSubmit } from "../../components/Inputs/ProfInput";
import PropTypes from "prop-types";
import { profile } from "../../constants/validationSchema";

const Profile = ({ handleClose }) => {
  return (
    <ModalContainer handleClose={handleClose}>
      <div className={twMerge("p-10 bg-white rounded-[12px] md:w-[500px]")}>
        <div className={twMerge("flex items-start justify-between")}>
          <div className={twMerge("flex items-center gap-5 pb-4")}>
            <AiOutlineUser size={34} className={twMerge("text-PRIMARY/80")} />

            <div>
              <span className={twMerge("text-PRIMARY/80 block text-[16px]")}>
                Kirubel Mamo
              </span>
              <span className={twMerge("text-[#6B7280] font-[300]")}>
                kirubel@gmail.com
              </span>
            </div>
          </div>

          <AiOutlineClose
            size={24}
            className={twMerge("cursor-pointer text-[#6B7280]")}
            onClick={handleClose}
          />
        </div>

        <hr className={twMerge("text-[#E5E7EB] ")} />

        <Formik
          initialValues={{
            name: "Kirubel Mamo",
            email: "kirubel@gmail.com",
            phone: "0912345678",
          }}
          validationSchema={profile}
          onSubmit={(values) => console.log(values)}
        >
          {(formik) => (
            <Form className={twMerge("mt-[26px] flex flex-col gap-6")}>
              <ProfField
                label="Name"
                name="name"
                type="text"
                value={formik.values.name}
              />

              <ProfField
                label="Email"
                name="email"
                type="email"
                value={formik.values.email}
              />

              <ProfField
                label="Phone"
                name="phone"
                type="text"
                value={formik.values.phone}
              />

              <ProfSubmit label="Save Changes" style={"mt-6 w-fit"} />
            </Form>
          )}
        </Formik>
      </div>
    </ModalContainer>
  );
};

Profile.propTypes = {
  handleClose: PropTypes.func,
};
export default Profile;
