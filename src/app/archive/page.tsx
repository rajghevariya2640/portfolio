import type { Metadata } from "next";
import { ArchiveList } from "@/components/archive-list";

export const metadata: Metadata = {
  title: "Archive — Raj Ghevariya",
  description: "Every project and role in one list.",
};

export default function ArchivePage() {
  return (
    <main className="px-5 pb-12 pt-32 sm:px-10 sm:pt-40">
      <ArchiveList />
    </main>
  );
}
