import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImgSlider = () => {
  return (
   <div className="w-full h-full">
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={30}
    slidesPerView={2} // default for large screens
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    style={{
      '--swiper-navigation-color': '#000',
      '--swiper-pagination-color': '#000',
    }}
    breakpoints={{
      640: {
        slidesPerView: 1, // small devices (sm)
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1, // medium devices (md)
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 2, // large devices (lg)
        spaceBetween: 30,
      },
    }}
  >
    <SwiperSlide>
      <img
        src="https://i.ibb.co/RT4n2k4q/puppy-care-wellness-guide-questions-featured.jpg"
        alt=""
        className="w-full"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/Y4mLRMvb/dog-1.jpg"
        alt=""
        className="w-full h-[480px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/QvvjggY1/64135685de6c9f6840ec8e4c-cute-puppies.jpg"
        alt=""
        className="w-full h-[480px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/DgHY1YRB/pexels-freestockpro-1174081.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/RT4n2k4q/puppy-care-wellness-guide-questions-featured.jpg"
        alt=""
        className="w-full"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/Y4mLRMvb/dog-1.jpg"
        alt=""
        className="w-full h-[480px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/QvvjggY1/64135685de6c9f6840ec8e4c-cute-puppies.jpg"
        alt=""
        className="w-full h-[480px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/DgHY1YRB/pexels-freestockpro-1174081.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/RT4n2k4q/puppy-care-wellness-guide-questions-featured.jpg"
        alt=""
        className="w-full"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/Y4mLRMvb/dog-1.jpg"
        alt=""
        className="w-full h-[480px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/QvvjggY1/64135685de6c9f6840ec8e4c-cute-puppies.jpg"
        alt=""
        className="w-full h-[480px]"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://i.ibb.co/DgHY1YRB/pexels-freestockpro-1174081.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  
  </Swiper>
</div>

  );
};

export default ImgSlider;
