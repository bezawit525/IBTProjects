import ResourceCard from "../../components/ResourceCard/ResourceCard.jsx";
import { resources } from "../../data/data.js";

function Resources() {
  return (
    <main className="page">
      <div className="page-heading">
        <h1>Student Resources</h1>

        <p>Useful services and resources for university students.</p>
      </div>

      <div className="grid">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </main>
  );
}

export default Resources;
