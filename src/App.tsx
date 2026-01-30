import { useRef, useState } from 'react';
import './App.css';
import AnnouncementDisplay from './components/AnnouncementDisplay';
import TextForm from './components/TextForm';
import { playButtonClickSound, playClientAudioAsync, playKeystrokeSound, type TLObj } from './utils/helpers';
import React from 'react';

/**
 * Organizes the main body components of this application: the TextForm
 * and AnnouncerDisplay components.
 * 
 * References:
 * https://hackernoon.com/how-to-handle-hover-events-in-react
 * 
 * @returns the App component.
 */
function App() {
  // The array of TextLine objects.
  const [textLines, setTextLines] = useState<TLObj[]>([]);
  // Boolean indicating if the animation is currently playing.
  const [animationPlaying, setAnimationPlaying] = useState<boolean>(false);
  // Boolean indicating if the instructions guide is open.
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  // The next ID number for a new text line.
  const nextId = useRef(1);

  /**
   * Adds a new empty text line to the list.
   */
  function addNewEmptyTextLine() {
    playButtonClickSound();
    playClientAudioAsync('add-textline.wav');
    setTextLines([...textLines, { id: nextId.current++, content: "" }]);
  }

  /**
   * Updates the text of a specific line.
   * 
   * @param id the id of the text line.
   * @param updatedTextLine the updated text line object.
   */
  function updateTextLine(id: number, updatedTextLine: TLObj) {
    playKeystrokeSound();
    const updatedTextLines = textLines.map(line =>
      line.id === id ? updatedTextLine : line
    );
    setTextLines(updatedTextLines);
  }

  /**
   * Removes a text line by its ID.
   * 
   * @param id the id of the text line to remove.
   */
  function removeTextLine(id: number) {
    playButtonClickSound();
    playClientAudioAsync('delete-textline.wav');
    const updatedTextLines = textLines.filter(line => line.id !== id);
    setTextLines(updatedTextLines);
  }

  /**
   * Toggles the animation playing state.
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

  /**
   * Toggles the instructions guide open state.
   */
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

export default App;
