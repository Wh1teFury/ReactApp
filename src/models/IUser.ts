export interface IUser {
  id: string,
  name: string,
  location: string,
  picture: {
    medium: string,
    thumbnail: string,
  },
  email: string,
  phone: string,
  registeredDate: string
}