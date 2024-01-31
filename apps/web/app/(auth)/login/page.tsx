'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { isLeft } from "fp-ts/lib/Either";
import { doLogin } from './actions';

const Login = (props: any) => {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { searchParams: { callbackUrl } } = props;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const ret = await doLogin(phone, password);
    if (isLeft(ret)) return alert(ret.left);
    router.push(callbackUrl || "/");
  };

  return (
    <>
      <div className="dark:text-gray-200 dark:bg-gray-800 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                手机号码
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                  密码
                </label>
                <div className="text-sm">
                  <a href="/passwd" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    忘记密码
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  autoComplete="current-password"
                  required
                  className="block w-full pl-2   rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                登录
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            用户注册 {' '}
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              点击注册
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
