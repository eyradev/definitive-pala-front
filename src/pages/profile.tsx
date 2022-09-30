import { AddressSelector } from "components/checkout/LocationForm/AddressSelector";
import { Section } from "components/home";
import { StandardLayout } from "components/layout";
import Profile from "components/UI/Profile/Profile";

export default function profile(): JSX.Element {
  return (
    <>
      <Profile />
      <Section title="Direcciones">
        <AddressSelector canDelete={true} />
      </Section>
    </>
  );
}

profile.Layout = StandardLayout;
