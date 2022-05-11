import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Statistics = ({ arrays, total, positivePercentage }) => {
  return (
    <>
      <div className="Statistics">
        {arrays.map(array => (
          <p key={shortid.generate()}>
            {array[0]} : {array[1]}
          </p>
        ))}
        <p>Total: {total}</p>
        <p> positivePercentage: {positivePercentage}%</p>
      </div>
    </>
  );
};

Statistics.propTypes = {
  arrays: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
