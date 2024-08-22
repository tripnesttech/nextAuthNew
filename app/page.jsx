
import Hero from "../components/Home/Hero";
import WhyTripNest from "../components/Home/WhyTripNest";
import Divided from "../components/Divided";

export default async function Home() {
  //const session = await getServerSession(authOptions);

  //if (session) redirect("/dashboard");

  return (
    <main>
     <Hero/>
     <Divided/>
     <WhyTripNest/>
    </main>
  );
}
