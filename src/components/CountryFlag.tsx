export function CountryFlag({ code, flag }: { code: string; flag?: number }) {
  if (flag === undefined) return null;

  const isSwitzerland = code === "SUI";
  return (
    <div
      style={{
        backgroundImage: `url(/flags.png)`,
        backgroundPosition: `${isSwitzerland ? "-4px" : "0"} -${flag * 17}px`,
        marginLeft: isSwitzerland ? "4px" : "0",
        width: isSwitzerland ? "20px" : "28px",
        height: "17px",
      }}
    />
  );
}
