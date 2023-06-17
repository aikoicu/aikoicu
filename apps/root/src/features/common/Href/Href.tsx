import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';
import React from 'react';

import ArrowTRSquare from '@/assets/ArrowTRSquare';

export interface IHrefProps {
  active?: boolean;
  showIcon?: boolean;
  iconProps?: React.SVGProps<SVGSVGElement>;
  className?: string;
  href: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const getHrefClassName = (active: boolean) =>
  `transition-colors duration-300 ${active ? 'text-accent' : 'text-base-200 hover:text-primary'}`;

export default function Href({
  active = false,
  showIcon = true,
  iconProps = {},
  className = '',
  href = '#',
  children = null,
  ...props
}: IHrefProps) {
  const externalReference = useMemo(() => href.startsWith('http'), [href]);
  const cn = useMemo(
    () => clsx('hover:text-accent inline-flex', getHrefClassName(active), className),
    [active],
  );
  const cnIcon = clsx('ml-1', iconProps.className);
  const Tag = useMemo(() => (externalReference ? 'a' : Link), [externalReference]);

  return (
    <Tag
      className={cn}
      href={href}
      {...(externalReference ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
      {externalReference && showIcon && (
        <ArrowTRSquare height={16} width={16} {...iconProps} className={cnIcon} />
      )}
    </Tag>
  );
}