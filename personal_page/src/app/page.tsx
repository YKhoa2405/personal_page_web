import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Relationship from "@/components/Relationship";
export default function Home() {
  return (
    <div>
      <section id="about"><About /></section> 
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="relationships"><Relationship /></section>

    </div>
  );
}
