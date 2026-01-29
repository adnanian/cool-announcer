import { useRef, useState } from 'react'
import './App.css'
import AnnouncementDisplay from './components/AnnouncementDisplay'
import TextForm from './components/TextForm'
import { playClientAudioAsync, type TLObj } from './helpers';
import React from 'react';

/**
 * 
 * References:
 * https://hackernoon.com/how-to-handle-hover-events-in-react
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
    playClientAudioAsync('/sounds/click-button.wav');
    playClientAudioAsync('/sounds/add-textline.wav');
    setTextLines([...textLines, { id: nextId.current++, content: "" }]);
  }

  /**
   * 
   * @param id 
   * @param updatedTextLine 
   */
  function updateTextLine(id: number, updatedTextLine: TLObj) {
    playClientAudioAsync('/sounds/keystroke.wav');
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
    playClientAudioAsync('/sounds/click-button.wav');
    playClientAudioAsync('/sounds/delete-textline.wav');
    const updatedTextLines = textLines.filter(line => line.id !== id);
    setTextLines(updatedTextLines);
  }

  function handlePlayPause() {
    playClientAudioAsync('/sounds/click-button.wav');
    setAnimationPlaying(!animationPlaying);
  }

  return (
    <React.Fragment>
      <h1>COOL ANNOUNCER</h1>
      <div id='body-container'>
        <TextForm
          textLines={textLines}
          onAdd={addNewEmptyTextLine}
          onUpdate={updateTextLine}
          onRemove={removeTextLine}
          animationPlaying={animationPlaying}
          onPlayPause={handlePlayPause}
        />
        <AnnouncementDisplay
          textLines={textLines}
          animationPlaying={animationPlaying}
        />
      </div>
    </React.Fragment>
  )
}

export default App
