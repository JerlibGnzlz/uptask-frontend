export const formatDate = (isoString: string): string => {
    const date = new Date(isoString)
    const formato = new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    return formato.format(date)
}