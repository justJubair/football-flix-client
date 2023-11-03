/* eslint-disable no-unused-vars */
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

    if(isLoading){
        return <div className='flex h-screen justify-between items-center'><span className="loading loading-bars loading-lg"></span></div>
    }

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
            // navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
            >
            {
                sliders?.map((slider, idx)=> <SwiperSlide key={idx}><div className='relative w-full h-screen'>
                    {/* slider content */}
                <div className='absolute z-30 left-10 top-1/4 w-8/12 lg:left-28 md:top-1/3 lg:w-1/3 space-y-4'>
                    <h1 className='text-4xl font-extrabold text-white md:text-5xl'>{slider.tagline.slice(0,25)}<span className='leading-normal text-[#a16740]'>{slider.tagline.slice(25,)}</span></h1>
                    <p>{slider.description}</p>
                    <button className='btn bg-[#a16740] text-black duration-500 border-none hover:bg-[#c09375] hover:scale-110'>Get your player</button>
                </div>
                {/* overlay */}
                <div className='absolute h-full w-full top-0 bg-black/60'></div>
                {/* slider image */}
                <img className='w-full object-cover h-full' src={slider.image_url} alt={slider.tagline}/>
                </div></SwiperSlide>)
            }    
            

            </Swiper>
        </div>
    )}
export default Banner;