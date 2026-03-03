import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-mark">VV</div>
        <nav>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome to</p>
          <h1 className="title">
            vanvlaenderen<span className="dot">.org</span>
          </h1>
          <p className="subtitle">
            Something is being built here. Check back soon.
          </p>
          <div className="cta-group">
            <a
              href="https://github.com/iamabotama/vanvlaenderen.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-graphic" aria-hidden="true">
          <div className="circle c1" />
          <div className="circle c2" />
          <div className="circle c3" />
        </div>
      </main>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          This site is the home of the Van Vlaenderen project. Built with Vite
          and React, hosted on GitHub Pages, and served from the custom domain{' '}
          <strong>vanvlaenderen.org</strong>.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Reach out via{' '}
          <a
            href="https://github.com/iamabotama"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} vanvlaenderen.org &mdash; Built
          with{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            Vite
          </a>{' '}
          &amp;{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
