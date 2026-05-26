"use client";

import { ISocialLink } from "@/shared/models/global.interfaces";

const SocialLink = ({ href, target, rel, title, icon, children }: ISocialLink) => {
  return (
    <a
      className="px-3 py-1.5 text-sm font-medium bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/35 active:scale-95 transition-all duration-200 flex items-center gap-1.5"
      href={href}
      target={target}
      rel={rel}
      title={title}
    >
      {icon}
      <span className="hidden sm:inline">{children}</span>
    </a>
  );
};

export default SocialLink;
