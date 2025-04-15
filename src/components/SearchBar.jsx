import React, { useEffect, useRef } from 'react'

export default function SearchBar() {
    const inputRef = useRef();
    useEffect(() => {
        const handleKeyDown = (e) => {
          const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
          const ctrlKey = isMac ? e.metaKey : e.ctrlKey;
    
          if (ctrlKey && e.key.toLowerCase() === 'k') {
            e.preventDefault(); // prevent default browser search
            inputRef.current?.focus(); // focus input
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, []);
  return (
    <label className="input w-full sm:w-auto">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input ref={inputRef} type="search" className="grow" placeholder="Search" />
  <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd>
</label>
  )
}
