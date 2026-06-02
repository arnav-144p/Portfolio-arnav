import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import { getProjectsWithSeed, getSupabaseServerClient } from "@/lib/supabaseServer";

export default async function Home() {
  const projects = await getProjectsWithSeed();
  const supabase = getSupabaseServerClient();
  const posts = supabase
    ? (
        await supabase
          .from("blog_posts")
          .select("id,title,slug,created_at")
          .eq("published", true)
          .order("created_at", { ascending: false })
          .limit(3)
      ).data
    : [];

  return (
    <main>
      <ScrollRevealObserver />
      <Nav />
      <Hero />
      <div data-reveal="fade">
        <About />
      </div>
      <div data-reveal="fade">
        <Experience />
      </div>
      <div data-reveal="fade">
        <Projects projects={projects} />
      </div>
      <div data-reveal="fade">
        <Blog posts={posts ?? []} />
      </div>
      <div data-reveal="fade">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
