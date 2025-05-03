'use client'; // only needed if you use state/hooks—safe to leave here

import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Link href="/dashboard">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
          Go to Dashboard
        </button>
      </Link>
    </main>
  );
}