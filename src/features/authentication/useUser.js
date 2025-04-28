import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
    const { isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
        staleTime: 5 * 60 * 1000, // 5 minutes, trust the cache
    });
    return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
