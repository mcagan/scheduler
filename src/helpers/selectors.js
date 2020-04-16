export function getAppointmentsForDay(state, day) {
  const filteredDate = state.days.find((date) => date.name === day);
  if (filteredDate === undefined || state.days.length === 0) return [];
  //   let resultArray = [];
  //   for (let id of filteredDate[0].appointments) {
  //     resultArray = [...resultArray, state["appointments"][id]];
  //   }
  // }

  // return resultArray;
  return filteredDate.appointments.map((id) => state.appointments[id]);
  // return [];
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  const student = interview.student;
  return { student, interviewer };
}

export function getInterviewersForDay(state, day) {}
