import { useState } from 'react';

function Login({ onSwitch }) {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', form);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-6 text-[#1425a7] dark:text-blue-300">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#1425a7] text-white py-3 rounded-md hover:bg-blue-700 transition dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Don’t have an account?{' '}
          <span
            onClick={onSwitch}
            className="text-[#ff9700] cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
