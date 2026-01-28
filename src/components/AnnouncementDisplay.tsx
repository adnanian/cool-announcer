import { useEffect, useState, type ReactNode } from 'react';
import { randomArrayElement, type TLObj } from '../helpers';
import '../styles/AnnouncementDisplay.css';

interface AnnouncementDisplayProps {
    textLines: TLObj[];
    animationPlaying: boolean;
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

/**
 * 
 * References:
 * https://www.geeksforgeeks.org/javascript/how-to-get-character-array-from-string-in-javascript/
 * https://www.w3schools.com/js/js_random.asp
 * 
 * @param param0 
 * @returns 
 */
const AnnouncementDisplay: React.FC<AnnouncementDisplayProps> = ({ textLines, animationPlaying }) => {

    const [backgroundColor, setBackgroundColor] = useState<string>('black');
    const [foregroundOpticColors, setForegroundOpticColors] = useState<string[]>([]);
    const [colorList, setColorList] = useState<string[]>([]);

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
        if (!animationPlaying) return; // Don't start interval if paused
        const intervalId = setInterval(() => {
            // Also randomize text colors here
            const newFgColors: string[] = Array(textLines.length).fill('').map(() => {
                return randomArrayElement(foregroundOpticColors);
            });
            setColorList(newFgColors);
        }, ANIMATION_INTERVAL);

        // Cleanup: stop the interval when effect reruns or component unmounts
        return () => clearInterval(intervalId);
    }, [animationPlaying, backgroundColor, foregroundOpticColors, textLines.length]);

    const wordArt: ReactNode[] = textLines.map((line, index) => {
        return (
            <p className={`wordart wordart-${colorList[index]}`}>{line.content}</p>
        );
    });

    return (
        <div id="announcement-display" style={{ backgroundColor }}>
            {animationPlaying && wordArt}
        </div>
    );
}

export default AnnouncementDisplay;