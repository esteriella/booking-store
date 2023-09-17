import './Showcase.css';


function Showcase({ works }) {
  return (
    <div className="showcase">
      <h2 className="showcase-heading">Showcase</h2>
      {works.length > 0 ? (
        <ul className="showcase-list">
          {works.map((work, index) => (
            <li key={index} className="showcase-item">
              <h3 className="showcase-item-title">{work.title}</h3>
              <p className="showcase-item-description">{work.description}</p>
              <p className="showcase-item-type">Type: {work.type}</p>
              <div className="showcase-image-container">
                {work.images.map((image, imageIndex) => (
                  <img key={imageIndex} src={image} alt={`Work ${index + 1}`} className="showcase-image" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No works available in the showcase.</p>
      )}
    </div>
  );
}

export default Showcase;
