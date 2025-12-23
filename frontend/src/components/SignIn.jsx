import React, { useState } from 'react';
import s from './SignIn.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
    // TODO: API call
  };

  return (
    <div className={s.wrap}>
      <div className={s.card}>
        <h1 className={s.title}>Sign in</h1>

        <form onSubmit={handleSubmit} className={s.form}>
          <input
            className={s.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className={s.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={s.btn}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}