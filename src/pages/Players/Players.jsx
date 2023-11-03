import { useQuery } from "@tanstack/react-query";
import GeneralNavbar from "../../components/Navbar/GeneralNav";
import useAxios from "../../hooks/useAxios";

const Players = () => {
    const axios = useAxios()
    const getPlayers = async()=>{
        const res = await axios.get("/players")
        return res.data
         
    }
    const {data} = useQuery({
        queryKey: ["players"],
        queryFn: getPlayers
    })
    console.log(data)
    return(
        <div>
            <GeneralNavbar/>
            <h1>Our Featured Players</h1>
        </div>
    )}
export default Players;