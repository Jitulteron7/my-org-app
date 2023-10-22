import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";
export type ModalType = "createServer" | "invite";

interface ModelStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

interface ModalData {
  server?: Server;
  channel?: Channel;
  channelType?: ChannelType;
}

export const useModal = create<ModelStore>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type: ModalType, data?: ModalData) => set({ isOpen: true, type }),
  onClose: () =>
    set({
      isOpen: false,
      type: null,
    }),
}));
