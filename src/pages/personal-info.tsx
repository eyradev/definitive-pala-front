import { AddressSelector } from 'components/checkout/LocationForm/AddressSelector';
import { StandardLayout } from 'components/layout';
import PersonalInfo from 'components/UI/Signup/PersonalInfo';

export default function personalInfo(): JSX.Element {
  return (
    <>
      <PersonalInfo />
      <AddressSelector canDelete={true} />
    </>
  );
}

personalInfo.Layout = StandardLayout;
