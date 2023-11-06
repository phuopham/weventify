import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const StatsCard = ({
    title,
    value,
    icon,
    helperText,
    className,
}: {
    title: string;
    value: string;
    helperText: string;
    className: string;
    icon: ReactNode;
}) => {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {value}
                </div>
                <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
            </CardContent>
        </Card>
    );
}