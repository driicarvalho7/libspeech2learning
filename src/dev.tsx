import { Speech2LearningBuilder } from './Speech2LearningBuilder'

function devTest(): void {
  if (process.env.NODE_ENV === 'development') {
    const rootElement: HTMLElement | null = document.getElementById('root')
    
    if (!rootElement) {
      throw new Error('Could not find root element')
    }
  
    new Speech2LearningBuilder().renderForm(rootElement)
  }
}

devTest()
