import React, { Component } from 'react';

const weekDaysDict = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  0: "Sunday"
}

export default class leftSideComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      daysRecords: 0
    }
  }

  componentDidMount() {
    this.props.getTotdosData();
  }


  renderErrorScreen() {
    return (<h2>Oops, There might be error or in fetching the temprature records. Fetching data from resource  !!!!!! </h2>)
  }

  renderGroupedDays(records) {
    return Object.keys(records).map((elem) => {
      const day = new Date(records[elem][0].dt_txt);
      const dayName = day.getDay();
      const dateName = day.getDate();
      return (
        <div className="col-md-2">
          <div className="card">
            <div className="card-header">
              <h2>{dateName}</h2>
              <h5>{weekDaysDict[dayName]}</h5>
            </div>
            {records[elem].map((item) => {
              return (<div className="card-body">
                <div className="row">
                  <div className="col-md-6">{`${new Date(item.dt_txt).getHours()} : ${new Date(item.dt_txt).getMinutes()}`} </div>
                  <div className="col-md-6">{Math.round(item.main.temp - 252)}° C</div>
                </div>
              </div>)
            })}
          </div>
        </div>)
    })
  }

  doFilterDate() {
    const groupedDays = {};
    if (this.props.todosData &&
      Array.isArray(this.props.todosData.list) &&
      this.props.todosData.list.length > 0) {
      this.props.todosData.list.forEach((dateItem) => {
        const day = new Date(dateItem.dt_txt).getDate();
        if (groupedDays[day]) {
          groupedDays[day].push(dateItem)
        } else {
          groupedDays[day] = [dateItem]
        }

      })
    }

    if (Object.keys(groupedDays).length > 0) {
      return (<><div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>{Object.keys(groupedDays).length} Days Forecast</h1>
        </div>
      </div>
        <div className="container">
          <div className="row">
            {this.renderGroupedDays(groupedDays)}
          </div>
        </div>
      </>
      )
    } else {
      return this.renderErrorScreen()
    }
  }

  

  render() {

    return (
      <>
        {this.doFilterDate()}
      </>
    );
  }
}

