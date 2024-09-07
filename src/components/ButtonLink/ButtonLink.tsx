interface ButtonLinkProps {
  href: string;
  displayText: string;
  style: "primary" | "secondary";
}

const ButtonLink = (props: ButtonLinkProps) => {
  const { href, displayText, style } = props;

  return (
    <a href={href} className={"button " + "color-" + (style as string)}>
      {displayText}
    </a>
  );
};

export default ButtonLink;
