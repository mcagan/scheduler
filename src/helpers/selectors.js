export function getAppointmentsForDay(state, day) {
  const filteredDate = state.days.find((date) => date.name === day);
  if (filteredDate === undefined || state.days.length === 0) return [];
  return filteredDate.appointments.map((id) => state.appointments[id]);
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  const student = interview.student;
  return { student, interviewer };
}

export function getInterviewersForDay(state, day) {
  const filteredDate = state.days.find((date) => date.name === day);
  if (filteredDate === undefined || state.days.length === 0) return [];
  return filteredDate.interviewers.map((id) => state.interviewers[id]);
}

export function getDayFromAppointmentId(state, id) {
  return state.days.find((day) => day.appointments.includes(id));
}
