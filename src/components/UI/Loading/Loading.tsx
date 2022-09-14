import React from 'react';
import { Container, Spinner } from 'reactstrap';

export default function LoadingPage(): JSX.Element {
  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: 24,
          gap: 8
        }}
      >
        <Spinner type="grow" color="primary" />
        <p style={{ fontSize: 20 }}>Cargando...</p>
      </div>
    </Container>
  );
}
