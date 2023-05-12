import { Section } from './Section/Section';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <div>
      <Section title="Task 1: Social network profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Task 2: Statistics">
        <Statistics title="Upload stats" stats={data} />
      </Section>
    </div>
  );
};
