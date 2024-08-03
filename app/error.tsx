"use client";

import { useEffect } from "react";

export default function Error ({ error }: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // TODO: error logging service
    console.error(error);
  }, [error]);

  return (
      <div className="flex flex-col space-y-6 pt-4">
        <h2 className="text-red-500">Error: {error.message}</h2>
        <button onClick={() => window?.location?.reload()} className="w-1/3">
          Try again
        </button>
      </div>
  );
}
