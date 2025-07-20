import AboutUs from "./_components/AboutUs";
import AMBEDKARVERSE from "./_components/AMBEDKARVERSE";
import AmbedkarVoiceGuides from "./_components/AmbedkarVoiceGuides";
import ContactUs from "./_components/ContactUs";
import Contribution from "./_components/Contribution";
import Hero from "./_components/Hero";
import MeetOurTeam from "./_components/MeetOurTeam";
import NewsThatMatter from "./_components/NewsThatMatter";
import SimilarNews from "./_components/SimilarNews";
import WorkWithUs from "./_components/WorkWithUs";
import WorldNews from "./_components/WorldNews";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <MeetOurTeam />
      <Contribution />
      <AMBEDKARVERSE />
      <AmbedkarVoiceGuides />
      <NewsThatMatter />
      <WorldNews />
      <SimilarNews />
      <WorkWithUs />
      <ContactUs />
    </>
  );
}
