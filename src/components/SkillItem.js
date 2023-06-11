import React from 'react';

const SkillItem = ({ name, percent }) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
      <span className='skill-text'>{name}</span>
      <div className='chart-bar'>
        <span className='item-progress' data-percent={percent} style={{ width: `${percent}%` }} />
        <span className='percent' style={{ right: `calc(${100 - percent}% - 21px)` }}>
          {percent}%
          <b className='arrow' />
        </span>
      </div>
    </div>
  );
};

export default SkillItem;
