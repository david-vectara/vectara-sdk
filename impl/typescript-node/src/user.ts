import request from './request';

export function getUserName(userID: string) {
  return request(`/users/${userID}`).then(user => user.name);
}