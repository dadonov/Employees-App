import './employees-add-form.css';

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Добавить нового сотрудника</h3>
      <form action="" className="add-form d-flex">
        <input
          type="text"
          placeholder="Имя нового соотрудника"
          className="form-control new-post-label"
        />
        <input
          type="text"
          placeholder="Заработная плата в $"
          className="form-control new-post-label"
        />
        <button className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
