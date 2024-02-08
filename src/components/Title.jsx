import './Title.modules.css';
// eslint-disable-next-line react/prop-types
const Title = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
