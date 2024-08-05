import MovingComponent from 'react-moving-text';
const AnimationText = () => {
  return (
    <h1 className='ah-headline d-flex'>
      {`I'm`}{' '}
      <MovingComponent
        type='typewriter'
        dataText={['John Pope', 'a Full-Stack expert', 'a Blockchain expert', 'a Freelancer']}
      />
    </h1>
  );
};
export default AnimationText;
