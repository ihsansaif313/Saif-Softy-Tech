import { loading } from "../assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Generating = ({ className }) => {
  const [text] = useTypewriter({
    words: [
      "Empowering your business online",
      "Innovative digital solutions",
      "Transforming ideas into reality"
    ],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 80,
  });
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      <h4>
        Saif Softy Tech <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </h4>
    </div>
  );
};

export default Generating;
