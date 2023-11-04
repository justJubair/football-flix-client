// import { useQuery } from "@tanstack/react-query";
import GeneralNavbar from "../../components/Navbar/GeneralNav";
import useAxios from "../../hooks/useAxios";
import { TypeAnimation } from "react-type-animation";
import PlayerCard from "./PlayerCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Players = () => {
  const axios = useAxios();
  const [currentPage, setCurrentPage] = useState(0)
  const [players, setPlayers] = useState([])
  const { count } = useLoaderData();
  const numberOfPlayers = 3;
  const numberOfPages = Math.ceil(count / numberOfPlayers);
  console.log(currentPage)
  // const getPlayers = async () => {
  //   const res = await axios.get(`/players?page=${currentPage}&limit=${numberOfPlayers}`);
  //   return res.data;
  // };
  // const { data: players, refetch, isLoading } = useQuery({
  //   queryKey: ["players"],
  //   queryFn: getPlayers,
  // });
  // if(isLoading){
  //   return <p>loading..</p>
  // }
  useEffect(()=>{
      axios.get(`/players?page=${currentPage}&limit=${numberOfPlayers}`)
      .then(data =>{
        setPlayers(data.data)
      })
  },[axios, currentPage, numberOfPages])

 const handlePrev = ()=>{
  if(currentPage >0){
    setCurrentPage(currentPage-1)
    
  }
 }
 const handleNext =()=>{
  if(currentPage<numberOfPages-1){
    setCurrentPage(currentPage+1)
   
  }
 }
  return (
    <>
      <div className="bg-[url('https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg')] bg-black/75 h-screen bg-blend-overlay">
        {/* overlay */}

        <GeneralNavbar />
        {/* page title */}
        <div className="text-center">
          <TypeAnimation
            sequence={[
              "Our Feature Players Messi",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Our Feature Players Ronaldo",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Our Feature Players Kevin De Bruyne",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Our Feature Players Virgil van Dijk",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="p"
            speed={50}
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              display: "inline-block",
              backgroundImage: "linear-gradient(#f9ccc2, #a16740)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundSize: "100%",
              WebkitTextFillColor: "transparent",
            }}
            repeat={Infinity}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {players?.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
        </div>
        <div className="text-center my-10">
          <div className="join">
            <button onClick={handlePrev} className="join-item btn">Prev</button>
            {
              Array(numberOfPages).fill(0).map((_, idx)=> <button onClick={()=> setCurrentPage(idx)} key={idx+1} className={`${currentPage === (idx) ? "btn-active" : undefined} join-item btn`}>{idx}</button>)
            }
            <button onClick={handleNext} className="join-item btn">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Players;
