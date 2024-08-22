
import Hero from "../components/Home/Hero";
import WhyTripNest from "../components/Home/WhyTripNest";
import Divided from "../components/Divided";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  return (
    <main>
     <Hero/>
     <Divided/>
     <WhyTripNest/>
    </main>
  );
}
