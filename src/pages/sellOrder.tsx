import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card, CardBody, CardTitle } from 'reactstrap';
import LoadingPage from 'components/UI/Loading/Loading';
import breakpoints from 'constants/breakpoints';
import { useMediaQuery } from 'hooks/useMediaQuery';
import usePaymentReference from 'hooks/usePaymentReference';
import { SellOrderSummary } from 'components/sellOrder';

export default function SellOrderPage(): JSX.Element {
  const router = useRouter();
  const { ref_payco: epaycoRef } = router.query;
  const { data: transaction, error } = usePaymentReference(
    epaycoRef as string | undefined
  );
  const isXS = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  if (!transaction) {
    if (error)
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px'
          }}
          className="main"
        >
          <Card
            style={{ maxWidth: '600px', textAlign: 'center', padding: '15px' }}
          >
            <CardBody>
              <CardTitle tag="h4">{error.message}</CardTitle>
              <br />
              <Link href="/">
                <a
                  className="btn-primary btn-lg text-light"
                  style={{ borderRadius: '2rem', textDecoration: 'none' }}
                >
                  Regresar al Marketplace
                </a>
              </Link>
            </CardBody>
          </Card>
        </div>
      );
    return <LoadingPage />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
      }}
      className="main"
    >
      <SellOrderSummary
        transaction={transaction}
        style={{
          maxWidth: '600px',
          margin: isXS ? '10px' : '20px',
          boxShadow: isXS ? 'none' : undefined
        }}
      />
      <Link href="/">
        <a
          className="btn-primary btn-lg text-light"
          style={{ borderRadius: '2rem', textDecoration: 'none' }}
        >
          Regresar al Marketplace
        </a>
      </Link>
    </div>
  );
}
