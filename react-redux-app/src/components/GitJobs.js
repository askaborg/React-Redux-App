import React from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions/gitAction'

const GitJobs = props => {
    const { fetchData, isLoading, error, jobs} = props
  return (
    <>
      {isLoading ? (<>loading jobs</>
      ) : (
        <>
          <button onClick={() => fetchData()}>get jobs</button>
          {error && (<div>{error}</div>)}
          <table>
            <thead>
              <th>openning date</th>
              <th>job type</th>
              <th>name of company</th>
            </thead>
            <tbody>
              {jobs.map(job => {
                return (
                  <tr>
                    <td>{job.date}</td>
                    <td>{job.type}</td>
                    <td>{job.company}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchData }) (GitJobs)