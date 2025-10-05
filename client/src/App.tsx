import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import WhatsAppButton from "@/components/whatsapp-button";
import React, { Suspense } from 'react'; // Add React and Suspense

// Lazy-load IT: Only imports when route hits /it
const LazyIT = React.lazy(() => import("@/pages/IT").catch((error) => {
  console.error('Failed to import IT:', error);
  return { default: () => <div>Failed to load IT—check console!</div> };
}));

function Router() {
  console.log('Core imports (Home only):', { Home, NotFound }); // No IT here to avoid crash
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route
        path="/it"
        component={() => (
          <Suspense fallback={<div>Loading IT...</div>}>
            <LazyIT />
          </Suspense>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
      <WhatsAppButton />
    </TooltipProvider>
  );
}

export default App;