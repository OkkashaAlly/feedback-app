import Header from "./componets/Header";
import FeedBackList from "./componets/FeedBackList";
import FeedBackStats from "./componets/FeedBackStats";
import FeedBackForm from "./componets/FeedBackForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./componets/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
