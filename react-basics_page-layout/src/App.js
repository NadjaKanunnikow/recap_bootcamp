import "./Header.css"; // Import CSS file for Header component
import "./MainContent.css"; // Import CSS file for MainContent component
import "./Footer.css"; // Import CSS file for Footer component

function Header() {
  // Implement your JSX code here
  return <h1 className="header">Is the maternal instinct a myth?</h1>;
}

function MainContent() {
  // Implement your JSX code here
  return <p className="main-content">{mainText}</p>;
}

function Footer() {
  // Implement your JSX code here
  return (
    <footer className="footer">
      <p>
        <a href="https://www.vinmec.com/en/news/health-news/healthy-lifestyle/the-maternal-instinct-does-it-really-exist/">
          Click here to read more!
        </a>
      </p>
    </footer>
  );
}

function App() {
  // Render components within App
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

const mainText = `New research on the parental brain makes clear that the idea of maternal instinct as something innate, automatic and distinctly female is a myth, one that has stuck despite the best efforts of feminists to debunk it from the moment it entered public discourse.

To understand just how urgently we need to rewrite the story of motherhood, how very fundamental and necessary this research is, it’s important to know how we got stuck with the old telling of it.`;
