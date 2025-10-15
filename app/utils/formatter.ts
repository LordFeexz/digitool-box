const IDRFORMATTER = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

export const formatToIDR = (value: number) => IDRFORMATTER.format(value);
