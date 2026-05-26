"use client";

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100 dark:bg-pdark text-midnight dark:text-noon">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-lg opacity-70">An unexpected error occurred</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-sblue text-white rounded-full hover:bg-sblue/80 transition-colors"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
