import "./SpeakerCard.css";

export default function SpeakerCard({ speaker }) {
    const { name, title, org, talk, initials, color } = speaker;

    return (
        <div className="speaker-card animate-fadeUp" style={{ "--speaker-color": color }}>
            <div className="speaker-avatar-wrapper">
                <div className="speaker-avatar">
                    {initials}
                </div>
            </div>

            <div className="speaker-info">
                <h4 className="speaker-name">{name}</h4>
                <p className="speaker-role">{title}</p>
                <p className="speaker-org">{org}</p>

                <div className="speaker-talk">
                    <span className="talk-label">Session:</span>
                    <p className="talk-title">{talk}</p>
                </div>
            </div>
        </div>
    );
}
