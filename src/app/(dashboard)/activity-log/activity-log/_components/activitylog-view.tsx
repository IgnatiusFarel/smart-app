"use client";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { dummyActivityLog, ActivityLog } from "@/constants/data";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import ActivityLogTable from "./_activitylog-tables/index";

export default function ActivityLogViewPage() {
  const totalActivityLog = dummyActivityLog.length;
  const activityLog: ActivityLog[] = dummyActivityLog;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title="Activity Log"
            description="deskripsi activity log"
          />
          <CalendarDateRangePicker />
        </div>
        <Separator />

        <ActivityLogTable data={activityLog} totalData={totalActivityLog} />
      </div>
    </PageContainer>
  );
}
