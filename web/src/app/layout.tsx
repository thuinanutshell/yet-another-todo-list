'use client';

import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from '../../relay/environment';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
          {children}
        </RelayEnvironmentProvider>
      </body>
    </html>
  );
}