import React, { useState, useEffect } from "react";

/* COMPONENTS */
import projectService from "../services/project.service";

function Interests() {
  const photos = window.innerWidth <= 980 ? 1 : 3;
  const [interestId, setInterestId] = useState(null);
  const [interests, setInterests] = useState([]);
  const [visiblePhotos, setVisiblePhotos] = useState(photos);

  const getInterests = async () => {
    try {
      const response = await projectService.getInterests();
      console.log(response.data);
      setInterests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInterests();

    const handleResize = () => {
      // Update visiblePhotos based on screen size
      if (window.innerWidth <= 980) {
        setVisiblePhotos(1);
      } else {
        setVisiblePhotos(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const InterestItem = ({ interest }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleToggleInterest = (id) => {
      const newInterestId = id === interestId ? null : id;
      setInterestId(newInterestId);
      setTimeout(() => {
        const element = document.getElementById(newInterestId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    };

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < interest.pictures.length - visiblePhotos
          ? prevIndex + 1
          : prevIndex
      );
    };

    return (
      <>
        <section id={interest._id}>
          <div
            className="interest"
            onClick={() => handleToggleInterest(interest._id)}
          >
            {interestId === interest._id ? (
              <img
                src={interest.activeIcon}
                alt={interest.name}
                className="interest-activeIcon"
              />
            ) : (
              <img
                src={interest.inactiveIcon}
                alt={interest.name}
                className="interest-inactiveIcon"
              />
            )}

            <h3 className="interest_section">{interest.name}</h3>
          </div>
          <div className="interest-photos">
            {interestId === interest._id && (
              <>
                {interest.aditionalInfo.map((info, id) => {
                  return (
                    <p className="interest_adicionalInfo" key={id}>
                      <span className="paragraph"></span>
                      {info}
                      <br />
                      <br />
                    </p>
                  );
                })}
                {interest.pictures.length > 0 && (
                  <>
                    <br />

                    <button className="photoButton" onClick={handlePrevious}>
                      &lt; previous
                    </button>
                    <button className="photoButton" onClick={handleNext}>
                      next &gt;
                    </button>
                  </>
                )}
                <section className="interest_pictures">
                  {interest.pictures
                    .slice(currentIndex, currentIndex + visiblePhotos)
                    .map((picture, photoIndex) => {
                      return (
                        <img
                          src={picture}
                          alt={interest.name}
                          key={photoIndex}
                        />
                      );
                    })}
                </section>
              </>
            )}
          </div>
        </section>
      </>
    );
  };
  return (
    <>
      {interests.map((int, id) => (
        <InterestItem key={id} interest={int} />
      ))}
    </>
  );
}

export default Interests;
