import { useEffect, useRef, useState, type ReactNode } from 'react';
import { playClientAudioAsync, randomArrayElement, type TLObj } from '../utils/helpers';
import '../styles/AnnouncementDisplay.css';

// The interval for changing text colors and playing sound effects during animation.
const ANIMATION_INTERVAL: number = 100; // milliseconds

// Colors in the RGB and CMYK spectrum for optic effects.
// I call them optic colors for the sake of having an all-encompassing term that includes white.
const OPTIC_COLORS: string[] = [
    'black',
    'blue',
    'green',
    'cyan',
    'red',
    'magenta',
    'yellow',
    'white'
];

// Sound files for art change effects.
const ART_CHANGE_SOUDND_SRCS: string[] = [
    'art-change-1.wav',
    'art-change-2.wav',
    'art-change-3.wav'
];

/**
 * Props for AnnouncementDisplay component.
 */
interface AnnouncementDisplayProps {
    /** The array of TextLine objects. */
    textLines: TLObj[];
    /** Boolean indicating if the animation is currently playing. */
    animationPlaying: boolean;
    /** Boolean indicating if the instructions guide is open. */
    guideOpen: boolean;
}

/**
 * Renders the board where a colorful background and color-changing text animation is displayed.
 * 
 * Note that the `animationPlaying` and `guideOpen` booleans are mutually exclusive,
 * in the sense that it is never possible for both of them to be true at the same time.
 * Although, they can both be simultaneously false. 
 * 
 * Also note that the background color of the board is always black when the
 * animation is not playing and will only be set to a random optic color when
 * the animation starts playing.
 * 
 * References:
 * https://www.geeksforgeeks.org/javascript/how-to-get-character-array-from-string-in-javascript/
 * https://www.w3schools.com/js/js_random.asp
 * 
 * @param param0 
 * @returns the AnnouncementDisplay component.
 */
const AnnouncementDisplay: React.FC<AnnouncementDisplayProps> = ({ textLines, animationPlaying, guideOpen }) => {
    // The background color of the board.
    const [backgroundColor, setBackgroundColor] = useState<string>('black');
    const [foregroundOpticColors, setForegroundOpticColors] = useState<string[]>([]);
    const [colorList, setColorList] = useState<string[]>([]);
    const soundIndexRef = useRef<number>(0);

    /**
     * Initial color set on animation start.
     * setTimeout used to ensure this runs after render.
     * Asynchronous behavior ensures no blocking occurs.
     * Without setTimeout, the color change may not reflect immediately.
     * And we want the color to change as soon as animation starts.
     * We also want to avoid the error linter that warns against setting state during render.
     */
    useEffect(() => {
        setTimeout(() => {
            if (animationPlaying) {
                setBackgroundColor(randomArrayElement(OPTIC_COLORS));
                setForegroundOpticColors(OPTIC_COLORS.filter(color => color !== backgroundColor));
            } else {
                setBackgroundColor('black');
            }

        }, 0);
    }, [animationPlaying, backgroundColor]);

    useEffect(() => {
        // Don't start interval if animation is not playing.
        if (!animationPlaying) {

            return;
        }
        const intervalId = setInterval(() => {
            // Also randomize text colors here
            const newFgColors: string[] = Array(textLines.length).fill('').map(() => {
                return randomArrayElement(foregroundOpticColors);
            });
            setColorList(newFgColors);
            playClientAudioAsync(ART_CHANGE_SOUDND_SRCS[soundIndexRef.current]);
            soundIndexRef.current = (soundIndexRef.current + 1) % ART_CHANGE_SOUDND_SRCS.length;
        }, ANIMATION_INTERVAL);

        // Cleanup: stop the interval when effect reruns or component unmounts
        return () => clearInterval(intervalId);
    }, [animationPlaying, backgroundColor, foregroundOpticColors, textLines.length]);

    const wordArt: ReactNode[] = textLines.map((line, index) => {
        return (
            <span
                key={line.id}
                className={`wordart wordart-${colorList[index]}`}
            >
                {line.content}
            </span>
        );
    });

    return (
        <div id="announcement-display" style={{ backgroundColor }}>
            {animationPlaying && wordArt}
            {guideOpen && (
                <div id="guide-overlay" className="bordered-textbox">
                    <h2>HOW TO USE COOL ANNOUNCER</h2>
                    <ol>
                        <li>Enter one or more lines of text in the left panel.</li>
                        <li>Click the "ADD" button to add new empty lines.</li>
                        <li>Click on a red "—" button next to a text line to remove it.</li>
                        <li>Click the "PLAY" button to start the announcement animation.</li>
                        <li>Click the "PAUSE" button to pause the animation.</li>
                        <li>While the animation is playing, text input and buttons are disabled.</li>
                        <li>Click the "HELP?" button to view this guide. Close it by clicking the "OK!" button.</li>
                    </ol>
                    <p>Enjoy using Cool Announcer!</p>
                </div>
            )}
        </div>
    );
}

export default AnnouncementDisplay;