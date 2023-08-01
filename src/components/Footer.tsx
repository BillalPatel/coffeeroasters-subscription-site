import logo from "../../assets/shared/desktop/logo-footer.svg";
import facebookLogo from "../../assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "../../assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "../../assets/shared/desktop/icon-instagram.svg";

export function Footer() {
  return (
    <div className="footer-container | bg-darkGreyBlue mx-[1.5rem] md:mx-[3rem lg:mx-[5rem] p-16 space-y-14 my-20 text-center">
      <img
        src={logo}
        height={1000}
        width={1000}
        alt="Logo"
        className="logo | h-[1.5] w-auto mx-auto"
      />
      <div className="anchor-links-container | flex flex-col space-y-5 text-grey">
        <a className="">HOME</a>
        <a className="">ABOUT US</a>
        <a className="">CREATE YOUR PLAN</a>
      </div>
      <div className="social-icons-container | flex flex-row justify-evenly">
        <img
          src={facebookLogo}
          height={1000}
          width={1000}
          alt="Facebook"
          className="facebook-logo | h-[1.5] w-auto mx-auto"
        />
        <img
          src={twitterLogo}
          height={1000}
          width={1000}
          alt="Twitter"
          className="twitter-logo | h-[1.5] w-auto mx-auto"
        />
        <img
          src={instagramLogo}
          height={1000}
          width={1000}
          alt="Instagram"
          className="instagram-logo | h-[1.5] w-auto mx-auto"
        />
      </div>
    </div>
  );
}
