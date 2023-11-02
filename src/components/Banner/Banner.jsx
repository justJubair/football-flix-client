// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';


const Banner = () => {
    const {data:sliders, isLoading} = useQuery({
        queryKey: ["sliders"],
        queryFn: async()=>{
            const res = await fetch("slider.json")
            return res.json()
        }
    })
    console.log(sliders)
    return(
        <div>
            <Swiper spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false
            // }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
            >
                {/* <SwiperSlide><div className='bg-white h-screen'>
                    Slide one</div></SwiperSlide>
                <SwiperSlide><div className='bg-white h-screen'>
                    Slide two</div></SwiperSlide>
                <SwiperSlide><div className='bg-white h-screen'>
                    Slide three</div></SwiperSlide> */}
            {
                sliders?.map((slider, idx)=> <SwiperSlide key={idx}><div className='relative w-full h-screen'>
                <div className='absolute '>
                    <h1 className='text-5xl text-brow'>{slider.tagline}</h1>
                    <p>{slider.description}</p>
                </div>
                <img className='w-full object-cover h-full' src={slider.image_url} alt={slider.tagline}/>
                </div></SwiperSlide>)
            }    
            

            </Swiper>
        </div>
    )}
export default Banner;