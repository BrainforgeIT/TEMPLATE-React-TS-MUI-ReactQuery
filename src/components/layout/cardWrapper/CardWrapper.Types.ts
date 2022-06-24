import { ReactNode } from 'react';

export type CardWrapperProps = {
  children: ReactNode;
  imageUrl: string;
  imageAltName: string;
  headerTitle: string;
  headerSubtitle: string;
};
