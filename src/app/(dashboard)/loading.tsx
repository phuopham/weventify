import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <div className="container pt-4">
            <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((_, key) => <Skeleton key={key} className="border-2 border-primary-/20 h-32 w-full" />)}
            </div>

            <Separator className="my-6" />
            <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
            <Separator className="my-6" />
            <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4].map((el) => (
                    < Skeleton className="border-2 border-primary-/20 h-[190px] w-full" key={el} />
                ))}
            </div>
        </div>
    );
}

export default Loading
