import { AgeForm } from "src/utils/types/ageForm";
import DatePlaceHolder from "./DatePlaceHolder";

const CurrentDate = ({ age }: { age: AgeForm | null }) => {
  if (!age) {
    return (
      <div className=" text-5xl font-extrabold italic md:text-7xl">
        <p className="flex gap-2 md:gap-4">
          <DatePlaceHolder /> years
        </p>
        <p className="flex gap-2">
          <DatePlaceHolder /> months
        </p>
        <p className="flex gap-2">
          <DatePlaceHolder /> days
        </p>
      </div>
    );
  }
  return (
    <div className=" text-5xl font-extrabold italic md:text-7xl">
      <p className="flex gap-2 md:gap-4">
        <span className="text-purple-600">{age.year}</span>
        {age.year === "1" || age.year === "0" ? "year" : "years"}
      </p>
      <p className="flex gap-2">
        <span className="text-purple-600">{age.month}</span>
        {age.month === "1" || age.month === "0" ? "month" : "months"}
      </p>
      <p className="flex gap-2">
        <span className="text-purple-600">{age.day}</span>
        {age.day === "1" || age.day === "0" ? "day" : "days"}
      </p>
    </div>
  );
};

export default CurrentDate;
