import { useEffect, useRef, useState, type ReactNode } from 'react';
import { playClientAudioAsync, randomArrayElement, type TLObj } from '../utils/helpers';
import '../styles/AnnouncementDisplay.css';

interface AnnouncementDisplayProps {
    textLines: TLObj[];
    animationPlaying: boolean;
    guideOpen: boolean;
}

const ANIMATION_INTERVAL: number = 100; // milliseconds

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

const ART_CHANGE_SOUDND_SRCS: string[] = [
    'art-change-1.wav',
    'art-change-2.wav',
    'art-change-3.wav'
];

/**
 * 
 * References:
 * https://www.geeksforgeeks.org/javascript/how-to-get-character-array-from-string-in-javascript/
 * https://www.w3schools.com/js/js_random.asp
 * 
 * @param param0 
 * @returns 
 */
const AnnouncementDisplay: React.FC<AnnouncementDisplayProps> = ({ textLines, animationPlaying, guideOpen }) => {

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