import { playClientAudioAsync, type TLObj } from '../helpers';
import '../styles/TextForm.css';

interface TextFormProps {
    textLines: TLObj[];
    animationPlaying: boolean;
    onAdd: () => void;
    onUpdate: (id: number, updatedTextLine: TLObj) => void;
    onRemove: (id: number) => void;
    onPlayPause: () => void;
}

const TextForm: React.FC<TextFormProps> = ({ textLines, animationPlaying, onAdd, onUpdate, onRemove, onPlayPause }) => {

    const textLineElements: React.ReactNode[] = textLines.map((line) => {
        return (
            <li key={line.id} className='text-line'>
                <input
                    type='text'
                    value={line.content}
                    onChange={(e) => onUpdate(line.id, { id: line.id, content: e.target.value })}
                    readOnly={animationPlaying}
                />
                <button
                    disabled={animationPlaying}
                    onClick={() => onRemove(line.id)}>
                    —
                </button>
            </li>
        );
    });

    return (
        <div id="text-form">
            <h2 className="bordered-textbox">ENTER TEXT HERE</h2>
            <ol id="textarea" className="bordered-textbox">
                {textLineElements}
            </ol>
            <div id="button-group">
                <button
                    id='add-button'
                    onClick={onAdd}
                    onMouseEnter={() => playClientAudioAsync('/sounds/hover-button.wav')}
                    disabled={animationPlaying}
                >
                    ADD
                </button>
                <button
                    id='play-pause-button'
                    onClick={onPlayPause}
                    onMouseEnter={() => playClientAudioAsync('/sounds/hover-button.wav')}
                    disabled={textLines.length === 0}
                >
                    {animationPlaying ? 'PAUSE' : 'PLAY'}
                </button>
            </div>
        </div>
    );
}

export default TextForm;