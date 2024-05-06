import { useState } from "react";

interface Speech2LearningProps {
  videoUrl: string;
  title: string;
  transcriptions: string;
  subtitles: string;
}

function Speech2Learning({
  videoUrl,
  title,
  transcriptions,
  subtitles,
}: Speech2LearningProps) {
  const [contrast, setContrast] = useState(false);
  const [subtitles1, setSubtitles] = useState(false);

  const toggleContrast = () => {
    setContrast(!contrast);
    const elementsWithDarkClass = document.querySelectorAll(
      "body, .aside, .bottom, .toggle-theme"
    );

    elementsWithDarkClass.forEach((element) => {
      element.classList.toggle("dark");
    });
  };

  const toggleSubtitles = () => {
    setSubtitles(!subtitles1);
  };

  return (
    <>
      <div className="col-12">
        <button
          className="border-btn toggle-theme"
          onClick={() => toggleContrast()}
        >
          {contrast ? "Normal" : "Contraste"}
        </button>
      </div>

      <div className="container col-12">
        <div
          className={`left col-7 col-s-8 ${subtitles1 ? "subtitles" : ""}`}
          style={{ zIndex: 9999 }}
        >
          <video id="video" controls preload="metadata" src={videoUrl}></video>
          <div className="bottom">
            <b>
              <h3 id="title-text">{title}</h3>
            </b>
            <p id="description-text">{subtitles}</p>
          </div>
        </div>

        <div className="right col-5 col-s-4">
          <div className="carousel-controllers"></div>
          <div className="aside">
            <div className="text-area">
              <p id="resume-text">{subtitles1 ? "" : transcriptions}</p>
            </div>
            <button
              className="border-btn ocultar-resumo"
              id="btn-show-resume"
              onClick={() => toggleSubtitles()}
            >
              {subtitles1 ? "Mostrar transcrição" : "Ocultar transcrição"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Speech2Learning;
