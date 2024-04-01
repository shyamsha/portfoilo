import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Header />

      <Body />

      <About />

      <Experience />

      <Skills />

      <Contact />

      <Footer />
    </main>
  );
}
