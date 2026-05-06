import { AIAssistant } from "@/components/aiAssistant";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { WhatsappFab } from "@/components/ui/whatsppBtn";
import { WhyMe } from "@/components/whyme";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <Skills />
      <WhyMe />
      <Contact />
      <Footer />
      <WhatsappFab />
      <AIAssistant />
    </>
  );
}
