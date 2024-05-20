import { Navigate, Route, Routes } from "react-router-dom"
import { Chat } from "../pages"

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/chat'
        element={<Chat />}
      />
      <Route path="*" element={<Navigate to="/chat" />} />
    </Routes>
  )
}

export default AppRoutes;
