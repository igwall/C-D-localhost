const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

export const dateFormatter = (d) => {
  const date = new Date(d)
  let minutes = date.getMinutes()
  let hours = date.getHours()
  let day = date.getDate()
  if (minutes < 10) minutes = '0' + minutes
  if (hours < 10) hours = '0' + hours
  if (day < 10) day = '0' + day
  return `${day} ${months[date.getMonth() + 1]} ${date.getFullYear()} à ${hours}:${minutes}`
}
