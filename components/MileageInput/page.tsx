'use client';

import { useState, useEffect } from 'react';
import css from './MileageInput.module.css';

interface MileageInputsProps {
  onChange: (from?: string, to?: string) => void;
}

export default function MileageInputs({ onChange }: MileageInputsProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const formatMileage = (value: string) =>
    value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  useEffect(() => {
    onChange(from ? from.replace(/\s/g, '') : undefined, to ? to.replace(/\s/g, '') : undefined);
  }, [from, to, onChange]);

  return (
    <div className={css.inputContainer}>
      <label className={css.label}>Car mileage / km</label>

      <div className={css.inputs}>
        <input
          className={css.input}
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(formatMileage(e.target.value))}
        />

        <div className={css.separator} />

        <input
          className={css.input}
          placeholder="To"
          value={to}
          onChange={(e) => setTo(formatMileage(e.target.value))}
        />
      </div>
    </div>
  );
}
