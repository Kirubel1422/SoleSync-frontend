import { twMerge } from "tailwind-merge";
import { social } from "../../constants/social";
import { Img } from "react-image";
import PropTypes from "prop-types";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={twMerge("py-[34px] px-[60px] rounded-[35px] bg-[#EAEAEA]")}>
      <div>
        <div className={twMerge("flex items-start justify-between")}>
          <span className={twMerge("text-[50px] font-semibold text-BRAND")}>
            Solesync
          </span>

          <div className={twMerge("flex flex-col gap-[27px]")}>
            <p className={twMerge("text-PRIMARY/80 text-[24px]")}>
              Stay in touch
            </p>

            <p className={twMerge("flex items-center gap-[27px]")}>
              {social.map((item, index) => (
                <>
                  <a
                    className={twMerge("w-7 h-7 bg-white")}
                    href={item.href}
                    key={index}
                  >
                    <Img src={item.icon} alt={item.name} />
                  </a>
                </>
              ))}
            </p>
          </div>
        </div>

        <div className={twMerge("grid grid-cols-3 mt-8")}>
          <div className={twMerge("flex flex-col gap-[22px]")}>
            <ContactDetail
              Icon={MdOutlineMail}
              value={"solesync@gmail.com"}
              label={"Email"}
            />
            <ContactDetail
              Icon={MdOutlinePhone}
              value={"+0911111111"}
              label={"Phone"}
            />
          </div>

          <div className={twMerge("place-self-center")}>
            <h5
              className={twMerge(
                "text-[20px] text-PRIMARY/80 mb-6 font-semibold"
              )}
            >
              Shop
            </h5>

            <ul>
              <li className={twMerge("text-[20px] text-PRIMARY/60 mb-8")}>
                <Link to="#">Men&apos;s</Link>
              </li>
              <li className={twMerge("text-[20px] text-PRIMARY/60 mb-8")}>
                <Link to="#">Women&apos;s</Link>
              </li>
              <li className={twMerge("text-[20px] text-PRIMARY/60 mb-8")}>
                <Link to="#">Sport</Link>
              </li>
            </ul>
          </div>

          <div></div>
        </div>

        <div className={twMerge("flex items-center justify-center mt-16")}>
          <p className={twMerge("text-[20px] text-PRIMARY/60")}>
            © 2021 Solesync. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactDetail = ({ label, Icon, value }) => {
  return (
    <div className={twMerge("flex items-center gap-3")}>
      <Icon size={24} className={twMerge("text-PRIMARY/80 block")} />
      <div>
        <h5 className={twMerge("text-[20px] text-PRIMARY/80 font-semibold")}>
          {label}
        </h5>
        <a
          className={twMerge("text-[20px] text-PRIMARY/60")}
          href={label == "Email" ? "mailto:" + value : "tel:" + value}
        >
          {value}
        </a>
      </div>
    </div>
  );
};

ContactDetail.propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.func,
  value: PropTypes.string,
};

export default Footer;
