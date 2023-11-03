import { useQuery } from "@tanstack/react-query";
import GeneralNavbar from "../../components/Navbar/GeneralNav";
import useAxios from "../../hooks/useAxios";
import { TypeAnimation } from "react-type-animation";

const Players = () => {
  const axios = useAxios();
  const getPlayers = async () => {
    const res = await axios.get("/players");
    return res.data;
  };
  const { data } = useQuery({
    queryKey: ["players"],
    queryFn: getPlayers,
  });

  return (
    <div>
      <GeneralNavbar />
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
        style={{ fontSize: "2rem", fontWeight: "bold", display: "inline-block",  backgroundImage: "linear-gradient(#f9ccc2, #a16740)", WebkitBackgroundClip: "text"  ,backgroundClip: "text", backgroundSize: "100%", WebkitTextFillColor: "transparent"}}
        repeat={Infinity}
      />
      </div>
    </div>
  );
};
export default Players;
