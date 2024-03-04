import { ISocialLink } from '@/shared/models/global.interfaces'

const SocialLink: React.FC<ISocialLink> = ({ href, target, rel, title, icon, children }) => {
  return (
    <a
      className="flex items-center font-medium  bg-plight px-4 py-2 rounded-lg text-pdark gap-2 active:scale-[1.1] transition-transform duration-300 hover:scale-110 hover:bg-sblue hover:text-plight dark:hover:bg-sgreen dark:hover:text-pdark"
      href={href}
      target={target}
      rel={rel}
      title={title}
    >
      {icon}
      <span className="hidden lg:flex">{children}</span>
    </a>
  )
}

export default SocialLink