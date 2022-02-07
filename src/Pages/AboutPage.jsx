import Card from "../componets/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React App to leave a feedback of a product or a service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
