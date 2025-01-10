import { Element } from "react-scroll";
import { features } from "../const";
import { Button } from "../components/button";

export const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex flex-nowrap border-2 border-p4 rounded-7xl md:flex-wrap md:overflow-hidden max-md:flex-col feature-after  max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, text, title, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50  max-md:border-2 max-md:border-p4 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s1" />
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6 text-left">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5 text-left">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3 text-left">
                  {" "}
                  {text}
                </p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};