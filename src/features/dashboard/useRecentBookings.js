import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

export function useRecentBookings() {
    const [searchParams, setSearchParams] = useSearchParams();

    const numDays = !searchParams.get("last")
        ? 7
        : Number(searchParams.get("last"));

    const queryDate = subDays(new Date(), numDays).toISOString();

    const { isLoading, data: bookings } = useQuery({
        queryFn: () => getBookingsAfterDate(queryDate),
        queryKey: ["bookings", `last-${numDays}`],
    });

    // console.log(bookings)

    return { isLoading, bookings };
}
