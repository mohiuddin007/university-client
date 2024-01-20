import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/layouts/ProtactedRoute";

function App() {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
