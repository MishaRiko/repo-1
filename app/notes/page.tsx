

import { Metadata } from "next";
import { getNotes } from "@/src/lib/api";

// app/notes/page.tsx
export const metadata: Metadata = {
  title: "Notes-page",
};


// const Notes = () => {
//   return <div>Notes</div>;
// };
import NoteList from "@/components/NoteList/NoteList";

const Notes = async () => {
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}

export default Notes;

