import { useForm } from "react-hook-form";
import DateEntries from "./Inputs/DateEntries";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AgeForm } from "src/utils/types/ageForm";
import ageCalculator from "src/utils/ageCalculator";

const FormDate = ({
  setAge,
}: {
  setAge: React.Dispatch<React.SetStateAction<AgeForm | null>>;
}) => {
  const { control, watch, handleSubmit } = useForm<AgeForm>({
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  const onSubmit = (data: AgeForm) => {
    const [year, month, day] = [
      Number(data.year),
      Number(data.month),
      Number(data.day),
    ];
    setAge(ageCalculator(year, month, day));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateEntries control={control} watch={watch} />
      <div className="relative mt-6">
        <div className="absolute inset-x-0 bottom-1/2 z-10 h-0.5 -translate-y-1/2 bg-slate-300"></div>
        <button className="relative z-20 mx-auto block aspect-square rounded-full bg-purple-600 p-4 md:mr-0">
          <AiOutlineArrowDown color="white" size="2rem" />
        </button>
      </div>
    </form>
  );
};

export default FormDate;
