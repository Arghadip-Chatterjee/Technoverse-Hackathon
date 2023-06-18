import React from 'react';
import { useNavigate } from 'react-router-dom';
import './section-selection.css';

function SectionSelection({ onSelectSection }) {
  const navigate = useNavigate();

  const handleSectionSelect = (section) => {
    onSelectSection(section);
    navigate('/homepage');
  };

  return (
    <div className="section-selection-container">
      <h2 className="section-selection-title">Select Your Mood</h2>
      <button
        className="section-selection-button"
        onClick={() => handleSectionSelect('Happy')}
      >
        Happy
      </button>
      <button
        className="section-selection-button"
        onClick={() => handleSectionSelect('Sad')}
      >
        Sad
      </button>
    </div>
  );
}

export default SectionSelection;
