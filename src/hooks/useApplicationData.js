import { useState, useEffect } from "react";
import axios from "axios";
import { getDayFromAppointmentId } from "helpers/selectors";

export default function useApplicationDate() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  useEffect(() => {
    const days = axios.get("/api/days");
    const appointments = axios.get("/api/appointments");
    const interviewers = axios.get("/api/interviewers");
    Promise.all([days, appointments, interviewers]).then((all) =>
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }))
    );
  }, []);

  const updateSpots = function (id, type) {
    const index = state.days.findIndex((x) => x.appointments.includes(id));
    let spots = state.days[index].spots;
    if (type === "add") {
      spots -= 1;
    } else if (type === "delete") {
      spots += 1;
    }
    const days = state.days;
    days[index].spots = spots;
    return setState({
      ...state,
      days,
    });
  };
  const bookInterview = function (id, interview) {
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview,
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };
        setState({
          ...state,
          appointments,
        });
      })
      .then(updateSpots(id, "add"));
  };

  const cancelInterview = function (id) {
    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: null,
        };
        const appointments = {
          ...state.appointments,
          [id]: appointment,
        };
        setState({ ...state, appointments });
      })
      .then(updateSpots(id, "delete"));
  };

  const setDay = function (day) {
    setState({ ...state, day });
  };

  return {
    state,
    setState,
    bookInterview,
    cancelInterview,
    setDay,
  };
}
