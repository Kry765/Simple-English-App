import EnglishAppLogo from "../ui/EnglishAppLogo";
import LoginButton from "../ui/LoginButton";
import navigationElement from "../assets/json/navigationElement.json";

export default function TopNavbar() {
  return (
    <nav className="flex z-10 fixed w-full items-center justify-between shadow-md py-2">
      <div>
        <EnglishAppLogo className="ml-8" />
      </div>
      <div className="md:hidden my-2 mr-2 py-2 px-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
          aria-label="Open navigation"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-12">
          {navigationElement.map((item, index) => (
            <li className="relative group py-2" key={index}>
              <a href={item.link}>{item.label}</a>
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-black w-0 
                   group-hover:w-full transition-all duration-300 ease-in-out"
              ></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex gap-4">
        <LoginButton className="my-2">Log in</LoginButton>
        <LoginButton variant="primary" className="my-2 mr-8">
          Sign in
        </LoginButton>
      </div>
    </nav>
  );
}
