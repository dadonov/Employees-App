import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDelete, onIncrease, onRise }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        onDelete={() => onDelete(id)}
        onIncrease={() => onIncrease(id)}
        onRise={() => onRise(id)}
        key={id}
        {...itemProps}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
