import { DatePicker as Model } from '@/gen';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


export const DatePicker: React.FC<Model> = () => {
  return (
    // @ts-ignore
    <DatePickerMUI defaultValue={dayjs(new Date())} /> 
  );
}