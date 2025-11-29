const dateFormater = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
})

export const formatMediumDate = (date : string | Date) => {
    return dateFormater.format(Date.parse(date.toString()))
}

export function getCookie(key:string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}