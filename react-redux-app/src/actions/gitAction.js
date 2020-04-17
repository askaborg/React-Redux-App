import axios from 'axios'

export const FETCH_DATA = "FETCH_DATA"
export const DATA_SUCCESS = "DATA_SUCCESS"
export const DATA_ERROR = "DATA_ERROR"

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA })

  setTimeout(() => {
    axios
      .get("https://jobs.github.com/positions.json?description=javascript&page=1")

      .then(res => {
        const jobs = res.data.map(job => {
          return {
            date: job.created_at,
            type: job.type,
            company: job.company
          }
        })

        dispatch({ type: DATA_SUCCESS, payload: [...jobs] })
      })
      
      .catch(err => dispatch({ type: DATA_ERROR, payload: err.message }))
  }, 800)
}