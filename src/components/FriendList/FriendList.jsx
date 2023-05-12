import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span
            style={{ backgroundColor: isOnline ? 'greenyellow' : 'red' }}
            className={css.status}
          ></span>
          <img className={css.avatar} src={avatar} alt="User avatar" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
