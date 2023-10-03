import {
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-6 space-y-3">
        <h2 className="text-4xl font-semibold">Login with</h2>
        <button className="w-full text-xl text-blue-700 normal-case btn btn-outline">
          <AiOutlineGoogle></AiOutlineGoogle>
          Login with Google
        </button>
        <button className="w-full text-xl normal-case btn btn-outline">
          <AiOutlineGithub></AiOutlineGithub>
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="mb-6 text-4xl font-semibold">Find us on</h2>
        <a
          href=""
          className="flex items-center justify-center p-4 space-x-2 border border-black rounded-t-lg"
        >
          <AiOutlineFacebook></AiOutlineFacebook>
          <span>Facebook</span>
        </a>
        <a
          href=""
          className="flex items-center justify-center p-4 space-x-2 border border-x-black"
        >
          <AiOutlineTwitter></AiOutlineTwitter>
          <span>Twitter</span>
        </a>
        <a
          href=""
          className="flex items-center justify-center p-4 mb-4 space-x-2 border border-black rounded-b-lg "
        >
          <AiOutlineInstagram></AiOutlineInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="p-4 mb-6 space-y-3">
        <h2 className="text-4xl font-semibold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
