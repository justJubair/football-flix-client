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
import useAxios from '../../hooks/useAxios';


const Banner = () => {
    const axios = useAxios()
    const getSliders = async()=>{
        const res = await axios.get("/sliders")
        return res.data;
    }
    
    const {data:sliders, isLoading} = useQuery({
        queryKey: ["sliders"],
        queryFn: getSliders
    })

    if(isLoading){
        return <div className='flex h-screen justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
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
                    <h1 className='text-4xl font-extrabold text-white md:text-5xl'>{slider.tagline.slice(0,25)}<span className='leading-normal bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500'>{slider.tagline.slice(25,)}</span></h1>
                    <p className='text-white'>{slider.description}</p>
                    <button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white duration-500 border-none hover:scale-110'>Get your player</button>
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