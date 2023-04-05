import css from './Result.module.scss'

function Result({ correct, length, reset }) {
  return (
    <div className={css.result}>
      <span className='material-icons-outlined'>fact_check</span>
      <h2 className={css.title}>
        Вы отгадали {correct} ответа из {length}
      </h2>
      <button onClick={() => reset()} className={css.btn}>
        Попробовать снова
      </button>
    </div>
  )
}

export default Result
