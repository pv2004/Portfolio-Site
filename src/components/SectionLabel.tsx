export function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[13px] font-medium uppercase tracking-[0.22em] ${
        light ? "text-[#8a8a8a]" : "text-[#9a9a94]"
      }`}
    >
      <span
        className={`mr-3 inline-block h-[7px] w-[7px] rounded-full ${
          light ? "bg-[#D62E69]" : "bg-[#D62E69]"
        }`}
      />
      {children}
    </p>
  );
}
