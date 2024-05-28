import Slider from "react-slick";
import SliderItem from "./SliderItem";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import { useRef } from "react";

const Sliders = () => {
  const ref = useRef(null);

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="w-10/12 mx-auto mt-5 relative">
      <Slider {...settings} ref={ref}>
        {/* Custom Slider Item */}
        <SliderItem
          img={"images/slider1.png"}
          desc={
            "الملابس الداخلية النسائية التي تجمع بين الراحة والأناقة. يوفر الراحة طوال اليوم بفضل قماشه الناعم والقابل للتنفس. يضفي المظهر الأنثوي بفضل التفاصيل الدانتيلية الرقيقة وتصميمه العصري. يضمن التكيف المثالي بفضل حمالات قابلة للتعديل وهيكل مرن."
          }
          title={"الملابس الداخلية"}
        />

        <SliderItem
          img={"images/slider2.png"}
          desc="خيار ملابس داخلية مريح وأنيق. يوفر لمسة ناعمة للبشرة بفضل قماشه الناعم والمرن. يضفي المظهر الأنثوي بفضل التفاصيل الدانتيلية الرقيقة وتصميمه العصري. يضمن التكيف المثالي بفضل حمالات قابلة للتعديل وهيكل داعم."
          title="ملابس داخلية أنيقة"
        />

        {/* Default Slider Item */}
        <SliderItem />
      </Slider>

      <div className="w-full bg-red-400">
        <button
          className="absolute top-1/2 left-0 border border-orange-500 p-2 rounded-md opacity-60 hover:opacity-100 transition-opacity"
          onClick={previous}
        >
          <GrPrevious />
        </button>
        <button
          className="absolute top-1/2 right-0 border border-orange-500 p-2 rounded-md opacity-60 hover:opacity-100 transition-opacity"
          onClick={next}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Sliders;
