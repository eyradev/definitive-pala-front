import UserAddressCreator from "components/address/UserAddressCreator/UserAddressCreator";
import UserAddressesSection from "components/address/UserAddressesSection/UserAddressesSection";
import { Section } from "components/home";
import { StandardLayout } from "components/layout";
import Profile from "components/UI/Profile/Profile";

export default function profile(): JSX.Element {
  return (
    <>
      <Profile />
      <Section title="Administrar Direcciones">
        <UserAddressesSection />
        <UserAddressCreator>Crear Dirección</UserAddressCreator>
      </Section>
    </>
  );
}

profile.Layout = StandardLayout;
