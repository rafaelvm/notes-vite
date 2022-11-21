export function capitalizeFirstLetter(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function autoCapitalize<T>(value: T): string | T {
  const data =
    typeof value === "string"
      ? value
          .toLowerCase()
          .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))
      : value;

  return data;
}
