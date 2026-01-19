export default function getMatchingDestinationsArr(arr, keyword) {
    return arr.filter((trip) => {
        return trip.description.toLowerCase().includes(keyword.toLowerCase())
    })
}