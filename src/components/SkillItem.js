import React from 'react';

const SkillItem = ({ name, percent }) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
      <span className='skill-text'>{name}</span>
      <div className='chart-bar'>
        <span className='item-progress' style={ {width: "100%"} } />
      </div>
    </div>
  );
};

export default SkillItem;
