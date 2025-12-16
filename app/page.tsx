import Link from 'next/link';
import Container from '@/components/Container/page';
import css from './Hero.module.css';

export default function HomePage() {
  return (
    <main>
      <section className={css.hero}>
        <Container>
          <div className={css.heroContainer}>
            <h1 className={css.heroTitle}>Find your perfect rental car</h1>
            <p className={css.heroParagraph}>
              Reliable and budget-friendly rentals for any journey
            </p>
            <Link href="/catalog">
              <button className={css.heroButton}>View Catalog</button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
