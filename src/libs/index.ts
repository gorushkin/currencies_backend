import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import AppError from '../error';

dayjs.extend(customParseFormat);

const FORMAT = 'DD/MM/YYYY';

export const validateDate = (date: string) => {
  const isValid = dayjs(date, FORMAT, true).isValid();
  if (!isValid) throw new AppError(400, 'The date is not valid');
};
