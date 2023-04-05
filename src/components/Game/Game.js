import { useState, Fragment } from "react"
import Result from "../Result/Result";
import Progress from './../Progress/Progress';

import css from './Game.module.scss'

import questions from "./questions";

function Game() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const question = questions[step]
  const percent = Math.round((step / questions.length) * 100)

  function onClickVariant(index) {
    if (index === question.correct) {
      setCorrect(correct + 1)
    }

    setStep(step + 1)
  }

  function reset() {
    setStep(0)
    setCorrect(0)
  }

  return step < questions.length ? (
    <Fragment>
      <Progress percent={percent} />
      <h1 className={css.title}>{question.title}</h1>
      <ul className={css.list}>
        {question.variants.map((item, index) => (
          <li
            className={css.item}
            key={item}
            onClick={() => onClickVariant(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  ) : (
    <Result correct={correct} length={questions.length} reset={reset} />
  )
}

export default Game