import { useState } from "react";
import CabinTable from "./CabinTable-v1";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div>
            <CabinTable />
            <Button onClick={() => setIsOpenModal((show) => !show)}>
                Add new cabin
            </Button>
            {isOpenModal && (
                <Modal onClose={()=> setIsOpenModal(false)}>
                    <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
                </Modal>
            )}
        </div>
    );
}

export default AddCabin;
