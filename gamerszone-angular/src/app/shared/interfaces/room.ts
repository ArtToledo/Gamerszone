export interface Room {
  id: number;
  name: string;
  vacancies: number;
  timetable: string;
  idGame?: number;
  idMovie?: number;
  urlCommunication: string;
}
