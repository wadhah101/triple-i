import * as React from 'react'
import ScheduleElement, { IScheduleElement } from './Element'
import * as Template from '../../../template/template'
import styles from './schedule.module.scss'
import dayjs from 'dayjs'

const element: IScheduleElement = {
  title: 'Kick start your career with IEEE INSAT',
  text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum optio eius eveniet nihil at, eligendi quia blanditiis nam, libero corrupti ab quos. A eum dignissimos explicabo. Assumenda porro harum vero!`,
}

const data = new Array<IScheduleElement>(2).fill(element)

const mainArr = [
  {
    date: [dayjs('2018-11-08'), dayjs('2018-11-10')],
    data,
  },
  {
    date: [dayjs('2018-11-14'), dayjs('2018-11-20')],
    data,
  },
  { date: [dayjs('2018-11-21')], data },
  { date: [dayjs('2018-11-22')], data },
]

const Schedule: React.FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <Template.Title> Schedule </Template.Title>
      <ul className={styles.arr}>
        {mainArr.map(({ date, data }, id) => (
          <li className={styles.el} key={id}>
            <h3 className={styles.period}>
              {date.map((e, ind) => (
                <React.Fragment key={ind}>
                  <div>
                    <p className={styles.num}> {e.format('DD')} </p>
                    <p> {e.format('MMMM')} </p>
                  </div>
                  {ind + 1 !== date.length && (
                    <div className={styles.daySeparator} />
                  )}
                </React.Fragment>
              ))}
            </h3>
            <ul className={styles.elsGrid}>
              {data.map((e, ind) => (
                <ScheduleElement key={ind} {...e} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Schedule
