import femIcon from "../../public/assets/images/logo-frontend-mentor.svg";
import githubIcon from "../../public/assets/images/logo-github.svg";
import linkedinIcon from "../../public/assets/images/logo-linkedin.svg";
import xIcon from "../../public/assets/images/logo-x.svg";
import femIconDark from "../../public/assets/images/logo-frontend-mentor-dark.svg";
import githubIconDark from "../../public/assets/images/logo-github-dark.svg";
import linkedinIconDark from "../../public/assets/images/logo-linkedin-dark.svg";
import xIconDark from "../../public/assets/images/logo-x-dark.svg";
import { useTheme } from "~/context/themeContext";

type SocialMediaIcon = {
  id: string;
  image: {
    dark: string;
    light: string;
  };
  siteUrl: string;
};

const socialMediaIcons: SocialMediaIcon[] = [
  {
    id: crypto.randomUUID(),
    image: {
      light: femIcon,
      dark: femIconDark,
    },
    siteUrl: "#",
  },
  {
    id: crypto.randomUUID(),
    image: {
      light: githubIcon,
      dark: githubIconDark,
    },
    siteUrl: "#",
  },
  {
    id: crypto.randomUUID(),
    image: {
      light: linkedinIcon,
      dark: linkedinIconDark,
    },
    siteUrl: "#",
  },
  {
    id: crypto.randomUUID(),
    image: {
      light: xIcon,
      dark: xIconDark,
    },
    siteUrl: "#",
  },
];
type SocialMediaIconsProps = {
  iconBackground: boolean;
};

const SocialMediaIcons = ({ iconBackground }: SocialMediaIconsProps) => {
  3;
  const { theme } = useTheme();
  console.log(theme === "light");
  return (
    <div className="flex gap-3">
      {socialMediaIcons.map((icon) => (
        <a
          className={`${iconBackground && "rounded-xl p-3"} ${iconBackground && (theme === "light" ? "bg-neutral-0 border-1 border-neutral-200" : "border-1 border-neutral-700 bg-neutral-800")}`}
          key={icon.id}
          href={icon.siteUrl}
        >
          <img src={theme == "light" ? icon.image.light : icon.image.dark} />
        </a>
      ))}
    </div>
  );
};
export default SocialMediaIcons;
