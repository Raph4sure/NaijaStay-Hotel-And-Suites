import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

export function useRecentStays() {
    const [searchParams, setSearchParams] = useSearchParams();

    const numDays = !searchParams.get("last")
        ? 7
        : Number(searchParams.get("last"));

    const queryDate = subDays(new Date(), numDays).toISOString();

    const { isLoading, data: stays } = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ["stays", `last-${numDays}`],
    });

    const confirmStays = stays?.filter(
        (stay) => stay.status === "checked-in" || stay.status === "checked-out"
    );

    return { isLoading, stays, confirmStays, numDays };
}
