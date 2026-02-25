import { useState } from "react";
import "./ScheduleTable.css";

export default function ScheduleTable({ schedule, color }) {
    const [activeTab, setActiveTab] = useState("Day 1");

    const days = [...new Set(schedule.map(s => s.day))];
    const activeSchedule = schedule.filter(s => s.day === activeTab);

    const getTypeColor = (type) => {
        switch (type) {
            case 'keynote': return color;
            case 'workshop': return '#f59e0b';
            case 'panel': return '#8b5cf6';
            case 'showcase': return '#ec4899';
            default: return '#64748b';
        }
    };

    return (
        <div className="schedule-container animate-fadeUp">
            <div className="schedule-tabs">
                {days.map(day => (
                    <button
                        key={day}
                        className={`tab-btn ${activeTab === day ? 'active' : ''}`}
                        onClick={() => setActiveTab(day)}
                        style={{ "--active-color": color }}
                    >
                        {day}
                    </button>
                ))}
            </div>

            <div className="schedule-list">
                {activeSchedule.map((session, idx) => (
                    <div key={idx} className="schedule-item">
                        <div className="session-time">{session.time}</div>
                        <div className="session-content">
                            <h4 className="session-title">{session.title}</h4>
                            <p className="session-speaker">{session.speaker}</p>
                        </div>
                        <div className="session-type">
                            <span
                                className="type-badge"
                                style={{ background: `${getTypeColor(session.type)}20`, color: getTypeColor(session.type) }}
                            >
                                {session.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
