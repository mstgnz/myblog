import { create } from 'zustand'

type User = {
  id: number
  firstname: string
  lastname: string
  email: string
  phone: string
}

type UserState = {
  user: User
  isLoggedIn: boolean
  setUser: (user: User) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

const initialState = {
  user: {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  },
  isLoggedIn: false,
}

const useStoreUser = create<UserState>()((set) => ({
  ...initialState,
  setUser: (user: User) => set((state) => ({ ...state, user })),
  setIsLoggedIn: (isLoggedIn: boolean) => set((state) => ({ ...state, isLoggedIn })),
}))

export default useStoreUser
