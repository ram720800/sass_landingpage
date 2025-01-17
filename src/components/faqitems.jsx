import clsx from "clsx";
import { SlideDown } from "react-slidedown";
import 'react-slidedown/lib/slidedown.css';
import { useState } from "react";

export const FaqItems = ({ item, index }) => { 
    const [isActive, setIsActive] = useState(null);
    const active = isActive === item.id;

    return (
        <div className="relative z-6 mb-16">
            <div className="group relative flex items-center justify-between cursor-pointer gap-10 px-7 border p-5 rounded-md" onClick={() => {setIsActive(isActive===item.id ? null : item.id) }}>
                <div className="flex ">
                    <div className="small mb-1.5 text-p3 max-lg:hidden text-start mr-4">
                        {index <= 5 ? "0" : ""}
                        {index}
                    </div>
                    <div className={clsx('h6 text-p4 transition-colors duration-500 max-md:flex max;md:min-h-20 max-md:items-center text-start', active && 'max-lg:text-p1')}>
                        {item.question}
                    </div>
                </div>

                <div className={clsx('faq-icon relative flex size-12 items-center justify-center transition-all duration-500 ', active && 'befor:bg-p1 after:rotate-0 after:bg-p1')}>
                </div>

            </div>

            <SlideDown>
                {isActive === item.id && <div className="body-3 px-7 py-3.5 text-start">{item.answer}</div>}
            </SlideDown>

            {/* <div>
                <div className="g4 absolute inset-0.5 -z-1 rounded">
                </div>
            </div> */}
        </div>
    )
}