import axios, {
  AxiosError,
  AxiosResponse,
  CancelToken,
} from 'axios';

const deckApiUrl = 'https://deckofcardsapi.com/api/deck/';

const axiosInstance = axios.create({
  baseURL: deckApiUrl,
});

export const getNewDeck = () =>
  axiosInstance.get(
    'new/shuffle/',
  )
  .then((response: AxiosResponse) => response.data)
  .catch((error: AxiosError) => error)

export const drawCard = (deckId: string) =>
  axiosInstance.get(
    `${deckId}/draw/`,
  )
  .then((response: AxiosResponse) => response.data)
  .catch((error: AxiosError) => error)
