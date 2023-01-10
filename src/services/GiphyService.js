
const GIPHY_API = ''
class GiphyService {
	static async listGifs(onSuccess, onError, onFinal) {
		try {
			const response = await fetch('https://api.giphy.com/v1/gifs/trending?' + new URLSearchParams({
				api_key:GIPHY_API,
			}).toString())
			const gifList = await response.json()
			return gifList.data
		} catch (error) {
			onError?.(error);
			return error;
		} finally {
			onFinal?.();
		}
	}
	static async searchGifs(params, onSuccess, onError, onFinal) {
		try {
			const response = await fetch('https://api.giphy.com/v1/gifs/search?' + new URLSearchParams({
				api_key:GIPHY_API,
				...params
			}).toString())
			const gifList = await response.json()
			return gifList.data
		} catch (error) {
			onError?.(error);
			return error;
		} finally {
			onFinal?.();
		}
	}
}

export default GiphyService;
