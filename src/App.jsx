import AboutMeMain from "../components/aboutMeSection/AboutMeMain";
import ContactMeMain from "../components/contactMeSection/ContactMeMain";
import FooterMain from "../components/footer/FooterMain";
import HeroHelper from "../components/heroSection/HeroHelper";
import HeroMain from "../components/heroSection/HeroMain";
import NavbarMain from "../components/navbar/NavbarMain";
import ProjectMain from "../components/projectSection/ProjectMain";
import SkillsMain from "../components/skillsSection/SkillsMain";
import SubSkills from "../components/skillsSection/SubSkills";
import "./App.css";

function App() {
  return (
    <main className="font-mono  ">
      <NavbarMain />
      <HeroMain />
      <HeroHelper />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
