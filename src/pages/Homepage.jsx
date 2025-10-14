import TopNavbar from "../components/TopNavbar";
import headerImg from "../assets/image/headerImg.png";
import EnglishAppLogo from "../ui/EnglishAppLogo";
import LoginButton from "../ui/LoginButton";

export default function Homepage() {
  console.log(headerImg);
  return (
    <div>
      <TopNavbar />
      <header className="flex flex-col md:flex-row justify-center items-center h-[100vh] px-6 bg-gray-50">
        <div className="max-w-[600px]">
          <EnglishAppLogo className="text-2xl mb-8" />
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet dolor sit
            dolor sit amet amet consectetur adipiscing elit...
          </p>
          <div className="flex gap-8">
            <LoginButton>Log in</LoginButton>
            <LoginButton variant="primary">Sign in</LoginButton>
          </div>
        </div>
        <figure>
          <img
            className="w-[600px]"
            src={headerImg}
            alt="Welcome logo Designed by Freepik"
          />
        </figure>
      </header>
    </div>
  );
}
