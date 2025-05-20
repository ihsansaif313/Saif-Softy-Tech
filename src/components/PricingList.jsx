import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] w-full">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="flex flex-col h-[32rem] w-full bg-n-8 border border-n-6 rounded-2xl px-6 py-10 overflow-hidden"
        >
          <div className="flex-1 flex flex-col">
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {item.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {item.price && (
                <>
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {item.price}
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <Button
              className="w-full mb-6"
              href={item.price ? "/pricing" : "https://wa.me/+923064500428"}
              white={!!item.price}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>
            <ul className="overflow-y-auto max-h-[10rem] pr-2">
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
