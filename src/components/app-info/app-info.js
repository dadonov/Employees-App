import './app-info.css';

const AppInfo = (props) => {
  const { employeesQty, employeesOnRise } = props;
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании</h1>
      <h2>Общее число сотрудников: {employeesQty} </h2>
      <h2>Премию получат: {employeesOnRise} </h2>
    </div>
  );
};

export default AppInfo;
