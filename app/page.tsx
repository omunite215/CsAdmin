import CardSet from "@/components/CardSet";
import { InviteForm } from "@/components/InviteForm";
import TableComponent from "@/components/Tables/TableComponent";

export default function Page() {
  return (
    <section className="py-6 container space-y-6">
      <CardSet />
      <div className="flex justify-center items-start gap-6 md:flex-row flex-col-reverse">
        <TableComponent />
        <InviteForm />
      </div>
    </section>
  );
}
