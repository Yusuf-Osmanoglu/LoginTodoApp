import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './page/Login/index.jsx';
import Register from './page/Login/Register/Register.jsx';
import Todo from './components/Todo.jsx'; // Todo bileşenini içe aktarın
import { AuthProvider, RequireAuthMiddleware, NonRequireAuthMiddleware } from './auth/auth.jsx'; // AuthProvider ve Orta Katman bileşenlerini içe aktarın

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <NonRequireAuthMiddleware>
                <Login />
              </NonRequireAuthMiddleware>
            }
          />
          <Route
            path="/register"
            element={
              <NonRequireAuthMiddleware>
                <Register />
              </NonRequireAuthMiddleware>
            }
          />
          <Route
            path="/todo"
            element={
              <RequireAuthMiddleware>
                <Todo />
              </RequireAuthMiddleware>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
