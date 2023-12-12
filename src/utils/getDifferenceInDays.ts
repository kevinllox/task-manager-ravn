const getDifferenceInDays = (dueDate: string) => {
  const dueDateObject = new Date(dueDate);
  const currentDate = new Date();
  const differenceInDays = Math.floor(
    (dueDateObject.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  let differenceInString = {
    day: 'ON TIME',
    color: 'neutral.1',
    bg: 'neutral.3',
  };

  if (differenceInDays < 0) {
    differenceInString = {
      day: 'YESTERDAY',
      color: 'primary.4',
      bg: '#3d3335',
    };
  }
  if (differenceInDays <= 2 && differenceInDays >= 0) {
    differenceInString = {
      day: 'ALMOST LATE',
      bg: 'yellow.500',
      color: 'neutral.1',
    };
  }

  return differenceInString;
};

export default getDifferenceInDays;
