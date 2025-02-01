import BrowserUses from "@/components/browser-uses";
import { ConversionRate } from "@/components/conversion-rate";
import DailyVisitor from "@/components/daily-visitor";
import TotalVisitorsBarChart from "@/components/total-visitors-bar-chart";

export default function Analytic() {
  return (
    <>
      <TotalVisitorsBarChart />
      <div className="grid lg:grid-cols-3 gap-3 mt-6">
        <BrowserUses />
        <ConversionRate />
        <DailyVisitor />
      </div>
    </>
  );
}
