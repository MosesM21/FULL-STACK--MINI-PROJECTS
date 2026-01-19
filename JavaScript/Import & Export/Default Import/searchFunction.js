
export default function getMatchingTripsArr(arr, keyword) {
    return arr.filter((trip) =>
        trip.description.toLowerCase().includes(keyword.toLowerCase())
    );
}