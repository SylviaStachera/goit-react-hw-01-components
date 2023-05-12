import css from './Statistics.module.css';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
            <span key={id} className={css.label} >
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
