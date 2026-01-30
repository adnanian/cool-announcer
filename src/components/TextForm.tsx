import { playButtonHoverSound, playClientAudioAsync, playKeystrokeSound, type TLObj } from '../utils/helpers';
import '../styles/TextForm.css';

/**
 * Props for the TextForm component.
 */
interface TextFormProps {
    /** The array of TextLine objects.  */
    textLines: TLObj[];
    /** Boolean indicating if the animation is currently playing. */
    animationPlaying: boolean;
    /** Boolean indicating if the instructions guide is open. */
    guideOpen: boolean;
    /** The callback function to execute to add a new text line. */
    onAdd: () => void;
    /** The callback function to execute to update the text of a line.  */
    onUpdate: (id: number, updatedTextLine: TLObj) => void;
    /** The callback function to execute to remove a text line. */
    onRemove: (id: number) => void;
    /** The callback function to execute to play or pause the animation. */
    onPlayPause: () => void;
    /** The callback function to execute to open or close the instructions guide. */
    onOpenGuide: () => void;
}

/**
 * Renders the panel of controls and settings for the text announcer app.
 * 
 * @param param0 the props.
 * @returns the TextForm component.
 */
const TextForm: React.FC<TextFormProps> = ({ textLines, animationPlaying, guideOpen, onAdd, onUpdate, onRemove, onPlayPause, onOpenGuide }) => {

    const textLineElements: React.ReactNode[] = textLines.map((line) => {
        return (
            <li key={line.id} className='text-line'>
                <input
                    type='text'
                    value={line.content}
                    onChange={(e) => onUpdate(line.id, { id: line.id, content: e.target.value })}
                    onFocus={() => playClientAudioAsync('input-focus.wav')}
                    readOnly={animationPlaying || guideOpen}
                    placeholder='Enter text here...'
                />
                <button
                    disabled={animationPlaying || guideOpen}
                    onMouseEnter={playButtonHoverSound}
                    onFocus={playKeystrokeSound}
                    onClick={() => onRemove(line.id)}
                    title="Remove this line of text."
                >
                    —
                </button>
            </li>
        );
    });

    // Prevent playing animation if any text line is empty.
    const hasEmptyLine: boolean = textLines.some(line => line.content.trim() === '');

    return (
        <div id="text-form">
            <h2 className="bordered-textbox">ENTER TEXTS HERE</h2>
            <ol id="textarea" className="bordered-textbox">
                {textLineElements}
            </ol>
            <div id="button-group">
                <button
                    id='add-button'
                    onClick={onAdd}
                    onMouseEnter={playButtonHoverSound}
                    onFocus={playButtonHoverSound}
                    disabled={animationPlaying || guideOpen}
                    title="Add a new empty line of text."
                >
                    ADD
                </button>
                <button
                    id='play-pause-button'
                    onClick={onPlayPause}
                    onMouseEnter={playButtonHoverSound}
                    onFocus={playButtonHoverSound}
                    disabled={textLines.length === 0 || hasEmptyLine || guideOpen}
                    title={animationPlaying ? "Pause the animation." : "Play the animation."}
                >
                    {animationPlaying ? 'PAUSE' : 'PLAY'}
                </button>
                <button
                    id='help-button'
                    onClick={onOpenGuide}
                    onMouseEnter={playButtonHoverSound}
                    onFocus={playButtonHoverSound}
                    disabled={animationPlaying}
                    title="Get help and information about using the app."
                >
                    {!guideOpen ? 'HELP?' : 'OK!'}
                </button>
            </div>
        </div>
    );
}

export default TextForm;