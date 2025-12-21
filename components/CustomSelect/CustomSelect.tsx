'use client';

import { useEffect, useRef, useState } from 'react';
import css from './CustomSelect.module.css';

interface CustomSelectProps {
  label: string;
  name: string;
  options: (string | number)[];
  placeholder?: string;
  formatSelected?: (v: string | number) => string;
  onChange: (v: string | number | null) => void;
  value: string | number | null;
}

export default function CustomSelect({
  label,
  name,
  options,
  placeholder = 'Choose an option',
  formatSelected = (v) => String(v),
  onChange,
  value,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = value == null ? placeholder : formatSelected(value);

  return (
    <div className={css.group} ref={ref}>
      <label className={css.label}>
        {label}
        <div className={css.selectContainer}>
          <button
            type="button"
            className={`${css.trigger} ${value == null ? css.placeholder : ''}`}
            onClick={() => setOpen(true)}
          >
            {selectedLabel}
            <span className={css.icon}>
              <svg width="16" height="16" aria-hidden="true">
                <use href={`/symbol-defs.svg#${open ? 'icon-active' : 'icon-default'}`} />
              </svg>
            </span>
          </button>
          {open && (
            <ul className={css.list}>
              <li
                className={`${css.option} ${value == null ? css.selected : ''}`}
                onMouseDown={() => {
                  onChange(null);
                  setOpen(false);
                }}
              >
                {placeholder}
              </li>
              {options.map((opt) => (
                <li
                  key={opt}
                  className={`${css.option} ${value === opt ? css.selected : ''}`}
                  onMouseDown={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </label>
    </div>
  );
}
