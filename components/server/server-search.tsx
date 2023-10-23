"use client";

interface ServerSearchProps {
  data: {
    label: string;
    type: "channel" | "member";
    data:
      | {
          name: string;
          id: string;
          icon: React.ReactNode;
        }[]
      | undefined;
  }[];
}

export const ServerSearch = ({ data }: ServerSearchProps) => {
  return <div></div>;
};

export default ServerSearch;
