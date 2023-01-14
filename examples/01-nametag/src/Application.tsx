import * as PropTypes from 'prop-types';

type NameTagProps = {
  name: string;
};

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};
NameTag.propTypes = {
  name: PropTypes.string
};

const Application = () => <NameTag name="Nitin" />;

export default Application;
