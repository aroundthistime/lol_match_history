import { SearchHistory } from "../types/SearchHistory/SearchHistory";
import { getLastItemsFromLast } from "./ArrayHandlers";

const LS_SEARCH_HISTORY = "search-history" //localstorage에 검색기록들을 저장하는 키값

const getSearchHistories = async (): Promise<SearchHistory[]> => {
    const searchHistoriesString = localStorage.getItem(LS_SEARCH_HISTORY);
    if (!searchHistoriesString) {
        return []
    } else {
        return JSON.parse(searchHistoriesString);
    }
}

export const addSearchHistory = async (username: string): Promise<void> => {
    const searchHistories = await getSearchHistories();
    const index = searchHistories.findIndex(searchHistory => searchHistory.username === username)
    let searchHistory: SearchHistory;
    if (index > -1) {
        searchHistory = {
            username,
            count: searchHistories[index].count + 1
        }
        searchHistories.splice(index, 1);
    } else {
        searchHistory = {
            username,
            count: 1
        }
    }
    searchHistories.push(searchHistory);
    localStorage.setItem(LS_SEARCH_HISTORY, JSON.stringify(searchHistories))
}


const getSortedSearchHistoriesByCount = (histories: SearchHistory[]): SearchHistory[] => {
    const sortFunction = (a: SearchHistory, b: SearchHistory): number => {
        return a.count - b.count
    }
    return histories.sort(sortFunction)
}

const extractUsernamesFromSearchHistories = (histories: SearchHistory[]): string[] => {
    return histories.map(history => history.username)
}

export const getLastUsernamesFromSearchHistories = (histories: SearchHistory[], count: number): string[] => {
    const lastSearchedHistories = getLastItemsFromLast(histories, count);
    return extractUsernamesFromSearchHistories(lastSearchedHistories);
}

export const getMostSearchedUsernames = (histories: SearchHistory[], count: number): string[] => {
    const sortedSearchHistories = getSortedSearchHistoriesByCount(histories);
    return getLastUsernamesFromSearchHistories(sortedSearchHistories, count)
}