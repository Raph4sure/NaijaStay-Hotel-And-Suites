import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
        // mutationFn: (id) => deleteCabin(id),
        // this also work the same way as above
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            toast.success("Cabin successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { isDeleting, deleteCabin }
}
