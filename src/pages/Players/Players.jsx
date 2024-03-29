// import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { TypeAnimation } from "react-type-animation";
import PlayerCard from "./PlayerCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Players = () => {
  const axios = useAxios();
  const [currentPage, setCurrentPage] = useState(0)
  const [players, setPlayers] = useState([])
  const { count } = useLoaderData();
  const numberOfPlayers = 3;
  const numberOfPages = Math.ceil(count / numberOfPlayers);
  useEffect(()=>{
      axios.get(`/players?page=${currentPage}&limit=${numberOfPlayers}`)
      .then(data =>{
        setPlayers(data.data.docs)
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
      <div className="bg-[url('https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg')] bg-black/75 min-h-screen bg-blend-overlay">
        {/* overlay */}

       <Navbar/>
        
        {/* main container */}
        <div className="pt-28">
        <div className="text-center mb-10 w-80 h-32 mx-auto md:w-full md:h-full">
          {/* page title */}
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
              backgroundImage: "linear-gradient(#10a3e9, #5e69f1)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundSize: "100%",
              WebkitTextFillColor: "transparent",
            }}
            repeat={Infinity}
          />
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {players?.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))}
        </div>
        {/* pagination */}
        <div className="text-center mt-16 pb-10">
          <div className="space-x-1 md:join md:space-x-0">
            <button onClick={handlePrev} className="hidden md:block join-item btn  bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white">Prev</button>
            {
              Array(numberOfPages).fill(0).map((_, idx)=> <button onClick={()=> setCurrentPage(idx)} key={idx+1} className={`${currentPage === (idx) ? "bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white" : undefined} join-item btn`}>{idx+1}</button>)
            }
            <button onClick={handleNext} className="hidden md:block join-item btn bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white">Next</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Players;
