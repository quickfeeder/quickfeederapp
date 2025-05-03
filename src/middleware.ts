// middleware.ts

import { clerkMiddleware } from "@clerk/nextjs/server";

// Integrate Clerk into Next.js middleware
export default clerkMiddleware();

// Optionally, lock down only certain routes:
export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],  
};
