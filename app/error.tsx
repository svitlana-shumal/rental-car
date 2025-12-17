'use client';

import Container from '@/components/Container/page';
import css from './Hero.module.css';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <Container>
      <h2 className={css.errorTitle}>Error while loading</h2>
      <p className={css.errorDesc}>{error.message}</p>
      <button className={css.errorBtn} onClick={reset}>
        Try again
      </button>
    </Container>
  );
};

export default Error;
