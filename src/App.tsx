import "./Speech2Learning.css";
import Speech2LearningBuilder from "./Speech2LearningBuilder";

function App() {
  const build = Speech2LearningBuilder()
    .video(
      "https://falvojr.github.io/speech2learning/api/videos/507f1f77bcf86cd799439011/main.mp4"
    )
    .title("Teste")
    .transcriptions("Teste")
    .subtitles("Teste Teste")
    .build();

  return <div className="App">{build}</div>;
}

export default App;
