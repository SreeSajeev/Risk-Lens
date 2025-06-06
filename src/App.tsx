
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import CurrencyInsights from "./pages/CurrencyInsights";
import RiskCalculator from "./pages/RiskCalculator";
import FinancialPlanning from "./pages/FinancialPlanning";
import Documentation from "./pages/Documentation";
import Login from "./pages/Login";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/currency-insights" element={<CurrencyInsights />} />
            <Route path="/risk-calculator" element={<RiskCalculator />} />
            <Route path="/financial-planning" element={<FinancialPlanning />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
          <Toaster />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
