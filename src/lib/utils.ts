import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const timeDistance = (formCreatedAt: Date) => {
  let now = new Date();

  let diffInMilliseconds = Math.abs(now.getTime() - formCreatedAt.getTime());
  let diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  let diffInMinutes = Math.floor(diffInSeconds / 60);
  let diffInHours = Math.floor(diffInMinutes / 60);
  let diffInDays = Math.floor(diffInHours / 24);

  let message = '';
  if (diffInDays > 0) {
    message = diffInDays == 1 ? 'a days ago' : diffInDays + ' days ago';
  } else if (diffInHours > 0) {
    message = diffInHours == 1 ? 'an hour ago' : diffInHours + ' hours ago';
  } else if (diffInMinutes > 0) {
    message = diffInMinutes == 1 ? 'a min ago' : diffInMinutes + ' minutes ago';
  } else {
    message = 'just now';
  }
  return message
}
