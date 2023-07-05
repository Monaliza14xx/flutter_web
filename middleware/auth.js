// middleware/auth.js

export default function ({ route, redirect }) {
  const protectedRoutes = ['/']

  if (protectedRoutes.includes(route.path) && !localStorage.getItem('role')) {
    return redirect('/home')
  }
}
