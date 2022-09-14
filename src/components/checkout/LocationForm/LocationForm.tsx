import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Spinner,
  TabContent,
  TabPane
} from 'reactstrap';
import useAddress from '../../../hooks/useAddress';
import { AddressSelector } from './AddressSelector';
import { AddressCreationForm } from './CreateAddressForm';

export default function LocationForm(): JSX.Element {
  const { addresses } = useAddress();
  const [activeTab, setActiveTab] = useState<string>('1');

  const toggleTab = (tab: string) => {
    if (activeTab === tab) return;
    setActiveTab(tab);
  };

  const handleAddressCreated = () => {
    setActiveTab('1');
  };

  useEffect(() => {
    if (!addresses || addresses.length === 0) {
      setActiveTab('2');
      return;
    }
  }, [addresses]);

  return (
    <Card>
      <CardBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : undefined}
              onClick={() => {
                toggleTab('1');
              }}
              disabled={!addresses || addresses.length === 0}
            >
              Seleccionar Dirección
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '2' ? 'active' : undefined}
              onClick={() => {
                toggleTab('2');
              }}
            >
              Crear Dirección
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {addresses && addresses.length > 0 ? (
              <AddressSelector canSelect />
            ) : (
              <Spinner color="primary" />
            )}
          </TabPane>
          <TabPane tabId="2">
            <AddressCreationForm onAddressCreated={handleAddressCreated} />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
}
