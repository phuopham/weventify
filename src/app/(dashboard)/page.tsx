
import { Separator } from "@/components/ui/separator";
import { StatsCards } from "@/components/StatsCards"
import { FormCards } from "@/components/FormCards";
import CreateFormBtn from "@/components/CreateFormBtn";
import { GetFormStats, GetForms } from "@/actions/form";

const Home = async () => {
  const forms = await GetForms();
  const stats = await GetFormStats();
  return (
    <div className="container pt-4">
      <StatsCards data={stats} />
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormBtn />
        <FormCards forms={forms} />
      </div>
    </div>
  );
}

export default Home


