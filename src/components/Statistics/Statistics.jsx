import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item}>
            <span key={id} className={css.label}>
              {label}
            </span>
            <span key={id} className={css.percentage}>
              {percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
