import { useRef, useState } from 'react'
import './App.css'
import AnnouncementDisplay from './components/AnnouncementDisplay'
import TextForm from './components/TextForm'
import { playButtonClickSound, playClientAudioAsync, playKeystrokeSound, type TLObj } from './utils/helpers';
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
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  const nextId = useRef(1);

  /**
   * 
   * @param newLine 
   */
  function addNewEmptyTextLine() {
    playButtonClickSound();
    playClientAudioAsync('add-textline.wav');
    setTextLines([...textLines, { id: nextId.current++, content: "" }]);
  }

  /**
   * @param id 
   * @param updatedTextLine 
   */
  function updateTextLine(id: number, updatedTextLine: TLObj) {
    playKeystrokeSound();
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
    playButtonClickSound();
    playClientAudioAsync('delete-textline.wav');
    const updatedTextLines = textLines.filter(line => line.id !== id);
    setTextLines(updatedTextLines);
  }

  /**
   * 
   */
  function handlePlayPause() {
    playButtonClickSound();
    setAnimationPlaying((prev) => {
      const newValue: boolean = !prev;
      if (newValue) {
        playClientAudioAsync('animation-start.wav');
      } else {
        playClientAudioAsync('animation-stop.wav');
      }
      return newValue;
    });
  }

  function handleOpenGuide() {
    playButtonClickSound();
    setGuideOpen(!guideOpen);
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
          guideOpen={guideOpen}
          onPlayPause={handlePlayPause}
          onOpenGuide={handleOpenGuide}
        />
        <AnnouncementDisplay
          textLines={textLines}
          animationPlaying={animationPlaying}
          guideOpen={guideOpen}
        />
      </div>
    </React.Fragment>
  )
}

export default App
