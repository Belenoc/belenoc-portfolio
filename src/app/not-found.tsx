import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100 dark:bg-pdark text-midnight dark:text-noon">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-lg opacity-70">Page not found</p>
      <Link
        href="/"
        className="px-6 py-2 bg-sblue text-white rounded-full hover:bg-sblue/80 transition-colors"
      >
        Go home
      </Link>
    </div>
  );
};

export default NotFoundPage;
