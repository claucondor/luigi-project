import React from 'react';
import './CenteredImage.css';

function CenteredImage({ src, rectangles, showRectangles }) {
  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; //x position within the element.
    const y = event.clientY - rect.top;  //y position within the element.
    console.log("x: " + x + " y: " + y);
  }

  return (
    <div className="centered-image-container">
      <div style={{ position: 'relative' }}> {/* Add this wrapper */}
        <img src={src} alt="" className="centered-image" onMouseMove={handleMouseMove} />
        {showRectangles && rectangles && rectangles.length > 0 && rectangles.map((rectangle, index) => (
          <div
            key={index}
            className="image-rectangle"
            style={{
              left: `${rectangle.x}px`, // Change to pixels
              top: `${rectangle.y}px`, // Change to pixels
              width: `${rectangle.width}%`,
              height: `${rectangle.height}%`,
            }}
          >
            <div className="rectangle-info">
              <table>
                <tbody>
                  {Object.entries(rectangle.info).map(([key, value], i) => (
                    <tr key={i}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CenteredImage;