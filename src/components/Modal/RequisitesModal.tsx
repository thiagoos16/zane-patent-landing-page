import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from "@chakra-ui/react";

import { Search } from "../Modal/Contents/Search";
import { OrderElaboration } from "../Modal/Contents/OrderElaboration";
import { ElectronicDeposit } from "../Modal/Contents/ElectronicDeposit";
import { ProcessMonitoring } from "../Modal/Contents/ProcessMonitoring";

interface NewRequisitesModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    isFrom: string;
}

export function RequisitesModal({ isOpen, onRequestClose, isFrom }: NewRequisitesModalProps) {
    let modalBody;
    let sizeModal = "3xl";
    
    switch (isFrom) {
        case "Busca":
            modalBody = <Search/>;
            sizeModal = "3xl";
            break;
        case "Elaboração do pedido":
            modalBody = <OrderElaboration/>;
            sizeModal = "6xl";
            break;
        case "Depósito eletrônico":
            modalBody = <ElectronicDeposit/>;
            sizeModal = "6xl";
            break;
        case "Acompanhamento de processo":
            modalBody = <ProcessMonitoring/>;
            sizeModal = "5xl";
            break;
        default:
            break;
    }
    
    return (
        <Modal isOpen={isOpen} size={sizeModal} onClose={onRequestClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{isFrom}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    { modalBody }
                </ModalBody>

                <ModalFooter>
                    <Button mr={3} onClick={onRequestClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}