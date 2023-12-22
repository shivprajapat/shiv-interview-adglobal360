export const scrollToElement = (item: string) => {
  const element = document.getElementById(item.toLowerCase());
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
