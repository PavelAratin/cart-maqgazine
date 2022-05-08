import './style.scss';
const Count = ({count,increase,id}) => {
  return (
    <div className="count">
      <div className="count__box">
        <input className="count__input" type="number" min="1" max="100" value={count} />
      </div>
      <div className="count__controls">
        <button type="button" className="count__up" onClick={()=>{increase(id)}}>
          <img src="./img/icons/arrow-count-up.svg" alt="Вверх" />
        </button>
        <button type="button" className="count__down">
          <img src="./img/icons/arrow-count-down.svg" alt="Вниз" />
        </button>
      </div>
    </div>
  );
}

export default Count;