import React from 'react'

export const FadeText = ({ text }) => {
    const visibleText = text.slice(0, 80);
    const hiddenText = text.slice(80);
  
    return (
      <div className="flex items-center gap-1 opacity-75 text-xs md:text-sm">
        <span>{visibleText}...</span>
        {hiddenText && (
          <span className="hidden">
            {hiddenText}
          </span>
        )}
      </div>
    );
  };
