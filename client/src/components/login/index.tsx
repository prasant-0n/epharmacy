import React, { useState, useRef, useEffect } from 'react';

const LoginPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up forms
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle Forgot Password form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For Sign Up form
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close the modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Replace with your sign-up logic
      console.log("Sign Up", { email, password });
      // Clear form
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setOpen(false);
    } catch (err) {
      setError("Sign Up failed. Please try again.");
    }
  };

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      // Replace with your forgot password logic
      console.log("Forgot Password", { email });
      // Clear form
      setEmail('');
      setOpen(false);
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      // Replace with your login logic
      console.log("Login", { email, password });
      // Clear form
      setEmail('');
      setPassword('');
      setOpen(false);
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <>
      {/* <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center 2xl:text-xl 2xl:h-12 justify-center h-10 px-4 py-2 text-base font-semibold text-white transition-all duration-200 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 hover:to-indigo-700 shadow-button shadow-blue-600/50 focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 ring-offset-gray-200 hover:shadow-none"
      >
        Log in
      </button> */}

      <button type='button'
        className="bg-transparent border border-gray-300 hover:border-[#10847E] px-4 py-2 mt-4 text-sm text-[#10847E] font-semibold"
        onClick={() => setOpen(true)}

      >
        LOGIN / SIGNUP
      </button>

      {open && (
        <div
          id="login-popup"
          tabIndex={-1}
          className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full flex items-center justify-center"
        >
          <div ref={modalRef} className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                onClick={() => setOpen(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="#c6c7c7"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close popup</span>
              </button>

              <div className="p-5">
                <div className="text-center">
                  <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                    {isLogin ? 'Login to your account' : isForgotPassword ? 'Forgot Password' : 'Sign up for an account'}
                  </p>
                  <p className="mt-2 mb-4 text-sm text-slate-600">
                    {isLogin
                      ? 'You must be logged in to perform this action.'
                      : isForgotPassword
                      ? 'Please enter your email address to reset your password.'
                      : 'Create an account to start using our services.'}
                  </p>
                  {error && <p className="text-red-500">{error}</p>}
                </div>

                {!isForgotPassword && (
                  <div className="mt-7 flex flex-col gap-2">
                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                      <img
                        src="https://www.svgrepo.com/show/512317/github-142.svg"
                        alt="GitHub"
                        className="h-[18px] w-[18px]"
                      />
                      Continue with GitHub
                    </button>

                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="h-[18px] w-[18px]"
                      />
                      Continue with Google
                    </button>

                    <button className="inline-flex mt-4 h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                      <img
                        src="https://www.svgrepo.com/show/448234/linkedin.svg"
                        alt="LinkedIn"
                        className="h-[18px] w-[18px]"
                      />
                      Continue with LinkedIn
                    </button>
                  </div>
                )}

                {!isForgotPassword && (
                  <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                  </div>
                )}

                {isForgotPassword ? (
                  <form className="w-full" onSubmit={handleForgotPassword}>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full mb-4 rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <button 
                      className="inline-flex mt-4 h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-white transition-all duration-200 bg-gradient-to-b from-blue-500 to-indigo-600 hover:to-indigo-700 shadow-button shadow-blue-600/50 focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 ring-offset-gray-200 hover:shadow-none"
                      type='submit'
                    >
                      Continue
                    </button>
                  </form>
                ) : (
                  <form className="w-full" onSubmit={isLogin ? handleLogin : handleSignUp}>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="Email Address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {!isLogin && (
                      <>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                        <input
                          name="confirm-password"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                        />
                      </>
                    )}
                    <button 
                      className="inline-flex mt-4 h-10 w-full items-center justify-center gap-2 rounded border border-[#10847E] bg-[#10847E] p-2 text-sm font-medium text-white transition-all duration-200 bg-gradient-to-b from-[#10847E] to-[#36f6ec] hover:to-[#2df8ed] shadow-button shadow-blue-600/50 focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 ring-offset-gray-200 hover:shadow-none"
                      type='submit'
                    >
                      {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                  </form>
                )}

                {!isForgotPassword && (
                  <div className="mt-6 text-center text-sm text-slate-600">
                    {isLogin ? (
                      <>
                        Don't have an account?{' '}
                        <button
                          className="font-medium text-[#4285f4] focus:outline-none"
                          onClick={() => {
                            setIsLogin(false);
                            setIsForgotPassword(false);
                          }}
                        >
                          Sign up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{' '}
                        <button
                          className="font-medium text-[#4285f4] focus:outline-none"
                          onClick={() => {
                            setIsLogin(true);
                            setIsForgotPassword(false);
                          }}
                        >
                          Log in
                        </button>
                      </>
                    )}
                  </div>
                )}

                {!isForgotPassword && (
                  <div className="mt-3">
                    <p className="mx-auto text-sm font-medium leading-tight text-center text-black">
                      <button
                        className="ml-3 text-indigo-600 hover:text-black focus:outline-none"
                        onClick={() => setIsForgotPassword(true)}
                      >
                        Forgot your password?
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
