function ResourceCard({ resource }) {
  return (
    <article className="card resource-card">
      <div className="card-content">
        <span className="category">{resource.category}</span>

        <h3>{resource.name}</h3>

        <p>{resource.description}</p>

        <a href={resource.link} className="button">
          Visit Resource
        </a>
      </div>
    </article>
  );
}

export default ResourceCard;
