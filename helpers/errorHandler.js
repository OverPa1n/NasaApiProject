export default function errorHandler(response) {
    if (response.status >= 400) throw new Error('Something went wrong')
    return response;
}