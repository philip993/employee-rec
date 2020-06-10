import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestEmployees } from './EmployeeActions';
import EmployeeView from './EmployeeView';

const Employee = () => {
  const data = useSelector((state) => state.EmployeeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestEmployees());
  }, []);

  return (
    <div>
      {data.employees.map(({ _id, ...otherProps }) => (
        <EmployeeView {...otherProps} />
      ))}
    </div>
  );
};

export default Employee;
