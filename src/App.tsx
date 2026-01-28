import { useRef, useState } from 'react'
import './App.css'
import AnnouncementDisplay from './components/AnnouncementDisplay'
import TextForm from './components/TextForm'
import type { TLObj } from './constants';

/**
 * 
 * @returns 
 */
function App() {
  const [textLines, setTextLines] = useState<TLObj[]>([]);
  const [animationPlaying, setAnimationPlaying] = useState<boolean>(false);
  const nextId = useRef(1);

  /**
   * 
   * @param newLine 
   */
  function addNewEmptyTextLine() {
    setTextLines([...textLines, { id: nextId.current++, content: "" }]);
  }

  /**
   * 
   * @param id 
   * @param updatedTextLine 
   */
  function updateTextLine(id: number, updatedTextLine: TLObj) {
    const updatedTextLines = textLines.map(line =>
      line.id === id ? updatedTextLine : line
    );
    setTextLines(updatedTextLines);
  }

  /**
   * 
   * @param id 
   */
  function removeTextLine(id: number) {
    const updatedTextLines = textLines.filter(line => line.id !== id);
    setTextLines(updatedTextLines);
  }

  return (
    <>
      <h1>COOL ANNOUNCER</h1>
      <div id='body-container'>
        <TextForm
          textLines={textLines}
          onAdd={addNewEmptyTextLine}
          onUpdate={updateTextLine}
          onRemove={removeTextLine}
          animationPlaying={animationPlaying}
          onPlayPause={() => setAnimationPlaying(!animationPlaying)}
        />
        <AnnouncementDisplay
          textLines={textLines}
          animationPlaying={animationPlaying}
        />
      </div>
    </>
  )
}

export default App
