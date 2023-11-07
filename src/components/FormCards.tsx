import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { timeDistance } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaEdit, FaWpforms } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { LuView } from "react-icons/lu";

type FormCardProps = Array<{
    id: string,
    userId: string,
    createdAt: Date,
    published: boolean,
    name: string,
    description: string,
    content: string,
    visits: number,
    submissions: number,
    shareURL: string
}>

export const FormCards = async ({ forms }: { forms: FormCardProps }) => {
    return (
        <>
            {forms.map((form) => (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 justify-between">
                            <span className="truncate font-bold">{form.name}</span>
                            {form.published ? <Badge>Published</Badge> : <Badge variant={"destructive"}>Draft</Badge>}
                        </CardTitle>
                        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
                            {timeDistance(form.createdAt)}
                            {form.published && (
                                <span className="flex items-center gap-2">
                                    <LuView className="text-muted-foreground" />
                                    <span>{form.visits.toLocaleString()}</span>
                                    <FaWpforms className="text-muted-foreground" />
                                    <span>{form.submissions.toLocaleString()}</span>
                                </span>
                            )}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
                        {form.description || "No description"}
                    </CardContent>
                    <CardFooter>
                        {form.published && (
                            <Button asChild className="w-full mt-2 text-md gap-4">
                                <Link href={`/forms/${form.id}`}>
                                    View submissions <BiRightArrowAlt />
                                </Link>
                            </Button>
                        )}
                        {!form.published && (
                            <Button asChild variant={"secondary"} className="w-full mt-2 text-md gap-4">
                                <Link href={`/builder/${form.id}`}>
                                    Edit form <FaEdit />
                                </Link>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}