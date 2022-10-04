import StepLayout from "../layouts/Step";
import ProfilePicture from "../../assets/profile-picture.png";
import { Edit, CurvedEmail, Location } from "../icons";
import { InputLayout } from "../layouts";
import CountrySelector from "../CountrySelector";

type TFillProfilesProps = {
  handleNextStep: () => void;
};

function FillProfileStep({ handleNextStep }: TFillProfilesProps) {
  const handleSubmit = () => {
    // do special thing related to this step
    handleNextStep();
  };

  return (
    <StepLayout
      title="Fill Your Profile"
      nextStepHandler={handleSubmit}
      canSkip
      skipHandler={handleNextStep}
    >
      <div className="flex w-full justify-center">
        <div className="relative h-36 w-36">
          <div className="h-full w-full overflow-hidden rounded-full">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={ProfilePicture} alt="user profile picture" />
          </div>
          <div className="absolute bottom-2 right-2">
            <Edit color="fill-primary-500" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-5 px-6">
        <InputLayout>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value="Andrew Ainsley"
            className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
        </InputLayout>
        <InputLayout>
          <input
            type="text"
            name="firstName"
            placeholder="Last name"
            value="Andrew"
            className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
        </InputLayout>
        <InputLayout>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value="andrew_ainsley@yourdomain.com"
            className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
          <CurvedEmail />
        </InputLayout>
        <InputLayout>
          <CountrySelector />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value="+1 111 467 378 399"
            className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
        </InputLayout>
        <InputLayout>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value="267 New Avenue Park, New York"
            className="flex-1 border-0 bg-transparent text-sm font-regular leading-normal tracking-wider outline-none"
          />
          <Location />
        </InputLayout>
      </div>
    </StepLayout>
  );
}

export default FillProfileStep;
