import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";
export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer";

interface ModelStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

interface ModalData {
  server?: Server;
  channel?: Channel;
  channelType?: ChannelType;
}

export const useModal = create<ModelStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type: ModalType, data?: ModalData) =>
    set({ isOpen: true, type, data }),
  onClose: () =>
    set({
      isOpen: false,
      type: null,
    }),
}));
