import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageLoader } from "../components/PageLoader";
import { SocialDock } from "../components/SocialDock";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-6 py-3 text-sm font-semibold text-primary-foreground">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1E3A8A" },
      { title: "Sree Vidya High School — Nurturing Minds, Shaping Futures" },
      { name: "description", content: "Sree Vidya High School offers premium K-10 education with a holistic curriculum, modern facilities, and a passionate faculty. Admissions for 2026–27 are open." },
      { name: "keywords", content: "Sree Vidya High School, best school in chittoor, best school in penumur, admissions 2026, K-10 education, holistic learning" },
      { name: "author", content: "Sree Vidya High School" },
      { property: "og:title", content: "Sree Vidya High School — Nurturing Minds, Shaping Futures" },
      { property: "og:description", content: "Sree Vidya High School offers premium K-10 education with a holistic curriculum, modern facilities, and a passionate faculty. Admissions for 2026–27 are open." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sree Vidya High School" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sree Vidya High School — Nurturing Minds, Shaping Futures" },
      { name: "twitter:description", content: "Sree Vidya High School offers premium K-10 education with a holistic curriculum, modern facilities, and a passionate faculty. Admissions for 2026–27 are open." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5310019-76f1-4076-9a18-b698c138125e/id-preview-84ea35bd--73ee91ef-90c0-4be5-9819-dde11d45d2a7.lovable.app-1781512216022.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5310019-76f1-4076-9a18-b698c138125e/id-preview-84ea35bd--73ee91ef-90c0-4be5-9819-dde11d45d2a7.lovable.app-1781512216022.png" },
    
      { name: "google-site-verification", content:"XnIPD4-dVbKrFITvXXbqURHoJ1B8k6B6dB0iqdNiV-Q" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" },
    ],
   scripts: [
  {
    src: "https://www.googletagmanager.com/gtag/js?id=G-6C3H4P69PY",
    async: true,
  },
  {
    children: `
     window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6C3H4P69PY');
    `,
  },
],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <PageLoader />
      <Navbar />
      <SocialDock />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
