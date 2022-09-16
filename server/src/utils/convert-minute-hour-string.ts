export function convertMinutesToHourString(minutesAmount: number){
  const hour = Math.floor(minutesAmount/60);
  const minutes = minutesAmount % 60;

  return `${String(hour).padStart(2,'0')}:${String(minutes).padEnd(2,'0')}`
}