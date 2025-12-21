'use client';

import css from './MileageInput.module.css';

interface MileageInputsProps {
  from?: string;
  to?: string;
  onChange: (from?: string, to?: string) => void;
}

export default function MileageInputs({ from, to, onChange }: MileageInputsProps) {
  const formatMileage = (value: string) =>
    value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const clean = (value: string) => value.replace(/\s/g, '');

  return (
    <div className={css.inputContainer}>
      <label className={css.label}>Car mileage / km</label>
      <div className={css.inputs}>
        <input
          className={css.input}
          placeholder="From"
          value={from ? `From ${formatMileage(from)}` : ''}
          onChange={(e) => onChange(clean(e.target.value.replace(/^From\s*/, '')), to)}
        />
        <span className={css.separator} />
        <input
          className={css.input}
          placeholder="To"
          value={to ? `To ${formatMileage(to)}` : ''}
          onChange={(e) => onChange(from, clean(e.target.value.replace(/^To\s*/, '')))}
        />
      </div>
    </div>
  );
}
