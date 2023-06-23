import '~/styles/globals.css';

import React from 'react';

import SSRLayout from '~/features/layout/SSRLayout';

export const metadata = {
  title: 'License Creative Commons',
  description:
    'License for aiko.icu products — Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International',
  alternates: {
    canonical: 'https://aiko.icu/license/cc',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SSRLayout>{children}</SSRLayout>;
}
