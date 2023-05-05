import { useState } from "react";
import FormDate from "./components/FormDate";
import CurrentDate from "./components/CurrentDate";
import { AgeForm } from "./utils/types/ageForm";

function App() {
  const [age, setAge] = useState<AgeForm | null>(null);
  return (
    <main className="grid h-screen w-screen place-items-center bg-[#f0f0f0] p-4">
      <section className="w-full max-w-2xl rounded-2xl rounded-br-[6rem] bg-white px-4 py-8 md:rounded-br-[8rem] md:px-8">
        <FormDate setAge={setAge} />
        <CurrentDate age={age} />
      </section>
    </main>
  );
}

export default App;
