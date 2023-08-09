/* eslint-disable react/no-unused-prop-types */
import { SOCIAL_LINKS } from '@/utils/constants';

import { Icon } from './Icon';

type SocialLinksProps = {
  id: string;
  link: string;
};

export function SocialLinks() {
  return (
    <div className="mx-auto flex gap-2">
      {SOCIAL_LINKS.map(({ id, link }: SocialLinksProps) => (
        <a
          key={id}
          target="_blank"
          href={link}
          className="p-2"
          rel="noreferrer noopener"
        >
          <Icon network={id} width="w-6" />
        </a>
      ))}
    </div>
  );
}
