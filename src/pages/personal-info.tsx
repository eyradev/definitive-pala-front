import { StandardLayout } from "components/layout";
import PersonalInfo from "components/UI/Signup/PersonalInfo";

export default function personalInfo(): JSX.Element {
  return (
    <>
      <PersonalInfo />
    </>
  );
}

personalInfo.Layout = StandardLayout;
