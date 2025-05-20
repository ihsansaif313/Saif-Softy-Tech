import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[2rem] p-0.5 rounded-lg ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-3 bg-n-8 rounded-lg overflow-hidden xl:p-5">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-2/3"
                    src={grid}
                    width={300}
                    height={300}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[18rem] mb-4 md:mb-10">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-3 py-0.5 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2"
                        src={item.status === "done" ? check2 : loading1}
                        width={14}
                        height={14}
                        alt={status}
                      />
                      <div className="tagline text-xs">{status}</div>
                    </div>
                  </div>

                  <div className="mb-5 -my-5 -mx-8">
                    <img
                      className="w-full max-w-[250px] mx-auto"
                      src={item.imageUrl}
                      width={250}
                      height={170}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-2 text-base">{item.title}</h4>
                  <p className="body-2 text-n-4 text-sm">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
