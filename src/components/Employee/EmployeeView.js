import React from 'react';

const EmployeeView = ({ first_name, second_name, position }) => {
  return (
    <div>
      <h4>{first_name}</h4>
      <h4>{second_name}</h4>
      <h4>{position}</h4>
    </div>
  );
};

export default EmployeeView;
