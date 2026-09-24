import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const courses = [
  {
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
    mark: "N",
    markClass: "next-mark",
  },
  {
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    mark: "🐳",
    markClass: "docker-mark",
  },
  {
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
    mark: "TS",
    markClass: "ts-mark",
  },
];

function Icon({ name, className = "" }: { name: "bell" | "search" | "arrow" | "chart" | "clock" | "file" | "star"; className?: string }) {
  const paths = {
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    search: <><circle cx="10.8" cy="10.8" r="7.2"/><path d="m16 16 5 5"/></>,
    arrow: <><path d="M4 12h15"/><path d="m13 5 7 7-7 7"/></>,
    chart: <path d="M4 19v-5m5 5V9m5 10V5m5 14V2"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3z"/>,
  };

  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Vertex home">
      <svg className="brand-mark" viewBox="0 0 36 38" aria-hidden="true"><path d="M2 3h32L19 35 2 3Z" fill="currentColor"/><path d="M14 9h10l-5 9-5-9Z" fill="white"/></svg>
      <span>Vertex</span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav className="main-nav" aria-label="Main navigation">
            <a className="active" href="#courses">Courses</a>
            <a href="#my-learning">My Learning</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button notification" aria-label="Notifications"><Icon name="bell" /></button>
            <Show when="signed-out">
              <div className="auth-actions">
                <SignInButton mode="modal">
                  <button className="auth-link">Sign in</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="auth-signup">Sign up</button>
                </SignUpButton>
              </div>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <span className="eyebrow">Intelligent learning</span>
          <h1 id="hero-heading">Search your learning<br className="desktop-break" /> in plain English.</h1>
          <p>Vertex understands what you want to learn and<br className="desktop-break" /> finds the exact lessons across all your courses.</p>
          <a className="explore-button" href="#courses">Explore Courses <Icon name="arrow" /></a>
        </div>
        <label className="search-box">
          <Icon name="search" />
          <input type="search" placeholder="Ask anything about your learning..." aria-label="Ask anything about your learning" />
          <kbd><span>⌘</span> K</kbd>
        </label>
      </section>

      <section className="courses-section" id="courses" aria-labelledby="courses-heading">
        <div className="courses-inner">
          <div className="section-heading">
            <h2 id="courses-heading">All Courses</h2>
            <a href="#courses">View all courses <Icon name="arrow" /></a>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <div className={`course-mark ${course.markClass}`} aria-hidden="true">{course.mark}</div>
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span><Icon name="chart" />{course.level}</span>
                  <span><Icon name="clock" />{course.duration}</span>
                  <span><Icon name="file" />{course.modules}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="weekly-note"><span className="note-rule"/><span className="note-star"><Icon name="star" /></span><p>New courses and lessons added every week.</p><span className="note-rule"/></div>
          <div className="footer-art" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
        </div>
      </section>
    </main>
  );
}
