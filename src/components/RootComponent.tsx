import { type Config } from '../models/Config'
import Speech2Learning from './Speech2Learning'

export type RootComponentProps = {
  config: Config
}

export const RootComponent: React.FC<RootComponentProps> = ({ config }) => {
  return (
      <Speech2Learning
        videoUrl={config.video}
        title={config.title}
        transcriptions={config.transcriptions}
        subtitles={config.subtitles}
      />
  )
}
