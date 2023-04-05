import css from './Progress.module.scss'

function Progress({ percent }) {
  return (
    <div className={css.wrapper}>
      <div className={css.progress} style={{ width: `${percent}%` }} ></div>
    </div>
  )
}

export default Progress
