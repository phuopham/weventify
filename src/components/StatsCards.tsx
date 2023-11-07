import { GetFormStats } from "@/actions/form";
import { StatsCard } from "@/components/StatsCard";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

export const StatsCards = async ({ data }: {
    data: {
        visits: number;
        submissions: number;
        submissionRate: number;
        bounceRate: number;
    }
}) => {
    // const data = await GetFormStats();

    return (
        <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
                title="Total visits"
                icon={<LuView className="text-slate-600" />}
                helperText="All time form visits"
                value={data?.visits.toLocaleString() || ""}
                className="shadow-md shadow-slate-600"
            />

            <StatsCard
                title="Total submissions"
                icon={<FaWpforms className="text-slate-600" />}
                helperText="All time form submissions"
                value={data?.submissions.toLocaleString() || ""}
                className="shadow-md shadow-slate-600"
            />

            <StatsCard
                title="Submission rate"
                icon={<HiCursorClick className="text-slate-600" />}
                helperText="Visits that result in form submission"
                value={data?.submissionRate.toLocaleString() + "%" || ""}
                className="shadow-md shadow-slate-600"
            />

            <StatsCard
                title="Bounce rate"
                icon={<TbArrowBounce className="text-slate-600" />}
                helperText="Visits that leaves without interacting"
                value={data?.submissionRate.toLocaleString() + "%" || ""}
                className="shadow-md shadow-slate-600"
            />
        </div>
    );
}