
import ReactDOM from 'react-dom/client'
import { RootComponent } from './components/RootComponent'
import { type Config } from './models/Config'

export class Speech2LearningBuilder {

  renderForm(rootElement: HTMLElement): void {
    const config: Config = {
      title: 'Teste',
      video: 'https://falvojr.github.io/speech2learning/api/videos/507f1f77bcf86cd799439011/main.mp4',
      transcriptions: 'Teste',
      subtitles: 'Teste Teste'
    }

    ReactDOM.createRoot(rootElement).render(RootComponent({ config }))
  }
}
