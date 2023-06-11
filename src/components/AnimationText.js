import MovingComponent from 'react-moving-text';
const AnimationText = () => {
  return (
    <h1 className='ah-headline d-flex'>
      {`I'm`}{' '}
      <MovingComponent
        type='typewriter'
        dataText={['Steven Andrychuk', 'a Full-Stack Expert', 'a Blockchain Expert', 'a Freelancer']}
      />
    </h1>
  );
};
export default AnimationText;
