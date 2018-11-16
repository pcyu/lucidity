import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setDreamFilter, setTextFilter, sortByDate, sortByHoursSlept, setStartDate, setEndDate } from '../actions/filters'

export class DreamListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate()
    } else if (e.target.value === 'hoursSlept') {
      this.props.sortByHoursSlept()
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="hoursSlept">Hours Slept</option>
        </select>
        <select
          value={this.props.filters.dreamFilter}
          onChange={(e) => {
            if (e.target.value === 'all') {
              this.props.dispatch(setDreamFilter('all'))
            } else if (e.target.value === 'normal') {
              this.props.dispatch(setDreamFilter('normal'))
            } else if (e.target.value === 'lucid') {
              this.props.dispatch(setDreamFilter('lucid'))
            } else if (e.target.value === 'nightmare') {
              this.props.dispatch(setDreamFilter('nightmare'))
            }

          }}
        >
          <option value="all">All</option>
          <option value="normal">Normal</option>
          <option value="lucid">Lucid</option>
          <option value="nightmare">Nightmare</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByHoursSlept: () => dispatch(sortByHoursSlept()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(DreamListFilters)