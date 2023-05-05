import { Control, RegisterOptions, UseFormWatch } from "react-hook-form";
import Input from "../Inputs/Input";
import { AgeForm } from "src/utils/types/ageForm";
import { getMontDays } from "src/utils/ageCalculator";

const DateEntries = ({
  control,
  watch,
}: {
  control: Control<AgeForm, unknown>;
  watch: UseFormWatch<AgeForm>;
}) => {
  const day_rules = {
    max: {
      value: getMontDays(
        Number(watch("month")),
        Number(watch("year")) % 4 === 0
      ),
      message: "Enter a valid day",
    },
    min: { value: 1, message: "Must be a valid day" },
  } as RegisterOptions<AgeForm>;
  const month_rules = {
    max: { value: 12, message: "Must be a valid month" },
    min: { value: 1, message: "Must be a valid month" },
  } as RegisterOptions<AgeForm>;
  const year_rules = {
    max: { value: new Date().getFullYear(), message: "Must be in the past" },
    min: { value: 1800, message: "You can't be this old!" },
  } as RegisterOptions<AgeForm>;

  return (
    <div className="grid max-w-md grid-cols-3 gap-4 md:gap-8">
      <Input
        htmlFor="day"
        label="day"
        type="number"
        name="day"
        control={control}
        placeholder="DD"
        rules={day_rules}
      />
      <Input
        htmlFor="month"
        label="month"
        type="number"
        name="month"
        control={control}
        placeholder="MM"
        rules={month_rules}
      />
      <Input
        htmlFor="year"
        label="year"
        type="number"
        name="year"
        control={control}
        placeholder="YYYY"
        rules={year_rules}
      />
    </div>
  );
};

export default DateEntries;
