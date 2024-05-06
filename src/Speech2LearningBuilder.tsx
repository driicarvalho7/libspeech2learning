import Speech2Learning from "./Speech2Learning";

interface VideoLibasBuilder {
  video: (url: string) => VideoLibasBuilder;
  title: (transcriptionData: any) => VideoLibasBuilder;
  transcriptions: (transcriptions: any) => VideoLibasBuilder;
  subtitles: (subtitles: any) => VideoLibasBuilder;
  build: () => JSX.Element;
}

function Speech2LearningBuilder(): VideoLibasBuilder {
  let url: string = "";
  let title: any = null;
  let transcriptions: any = null;
  let subtitles: any = null;

  const video = (videoUrl: string) => {
    url = videoUrl;
    return builder;
  };

  const titleFunc = (titleData: any) => {
    title = titleData;
    return builder;
  };

  const transcriptionsFunc = (transcriptionData: any) => {
    transcriptions = transcriptionData;
    return builder;
  };

  const subtitlesFunc = (subtitlesData: any) => {
    subtitles = subtitlesData;
    return builder;
  };

  const build = () => {
    return (
      <Speech2Learning
        videoUrl={url}
        title={title}
        transcriptions={transcriptions}
        subtitles={subtitles}
      />
    );
  };

  const builder: VideoLibasBuilder = {
    video,
    title: titleFunc,
    transcriptions: transcriptionsFunc,
    subtitles: subtitlesFunc,
    build,
  };

  return builder;
}

export default Speech2LearningBuilder;
