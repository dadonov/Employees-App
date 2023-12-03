import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const {
    name,
    surname,
    salary,
    rise,
    increase,
    onDelete,
    onIncrease,
    onRise,
  } = props;

  let classNames = 'list-group-item d-flex justify-content-between';

  if (increase) {
    classNames += ' increase';
  }

  if (rise) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span onClick={onRise} className="list-group-item-label">
        {name} {surname}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + ' $'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={onIncrease} className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm">
          <i onClick={onDelete} className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
