// middleware/auth.js

export default function ({ route, redirect }) {
  const protectedRoutes = ['/']
  if (protectedRoutes.includes(route.path)) {
    return redirect('/home')
  }
}
