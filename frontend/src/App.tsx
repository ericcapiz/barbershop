import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/gallery" element={<div>Gallery</div>} />

        {/* Auth Routes */}
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />

        {/* Protected User Routes */}
        <Route path="/appointments" element={<div>Appointments</div>} />
        <Route path="/profile" element={<div>Profile</div>} />

        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={<div>Admin Dashboard</div>} />
      </Routes>
    </Router>
  );
}

export default App;
