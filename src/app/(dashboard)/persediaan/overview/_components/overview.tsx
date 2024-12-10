import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { PieGraph } from "./pie-graph";
import { BarGraph } from "./bar-graph";
import TabelMutasiTable from "./_overview-tables";
import { dummyTabelMutasi, TabelMutasi } from "@/constants/data";

export default async function OverViewPage() {
  const totalTabelMutasi = dummyTabelMutasi.length;
  const tabelMutasi: TabelMutasi[] = dummyTabelMutasi;
  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Heading
          title="Dashboard"
          // title={`Employee (${totalUsers})`}
          description="deskripsi dashboard"
        />

        <BarGraph />
        <PieGraph />

        <TabelMutasiTable data={tabelMutasi} totalData={totalTabelMutasi} />
      </div>
    </PageContainer>
  );
}
