export async function handleCopy(
  setStatus: (message: string) => void,
  email = "chibuikemaduabuchi2023@gmail.com",
) {
  try {
    await navigator.clipboard.writeText(email);
    setStatus("Copied!");
  } catch {
    setStatus("Failed to copy");
  }
}
