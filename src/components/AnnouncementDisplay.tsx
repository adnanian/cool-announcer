import type { TLObj } from '../constants';
import '../styles/AnnouncementDisplay.css';

interface AnnouncementDisplayProps {
    textLines: TLObj[];
    animationPlaying: boolean;
}

const AnnouncementDisplay: React.FC<AnnouncementDisplayProps> = ({ textLines, animationPlaying }) => {
    return (
        <div id="announcement-display">
            <h2>Announcement Display Component</h2>
            {animationPlaying ? <p>Animation is playing</p> : <p>Animation is paused</p>}
        </div>
    );
}

export default AnnouncementDisplay;