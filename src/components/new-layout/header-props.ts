import React from 'react';

export interface HeaderLink {
  title: string;
  url: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export interface HeaderProps {
  title: string;
  content: React.ReactNode;
  links: HeaderLink[];
}
